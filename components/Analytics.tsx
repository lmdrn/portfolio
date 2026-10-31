"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import type { Dictionary } from "@/lib/dictionaries";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const STORAGE_KEY = "analytics-consent";

type Consent = "granted" | "denied" | null;

// Google Analytics only loads after the visitor accepts (Swiss nFADP / GDPR)
export default function Analytics({ dict }: { dict: Dictionary["consent"] }) {
  const [consent, setConsent] = useState<Consent>("denied");

  useEffect(() => {
    let stored: Consent = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY) as Consent;
    } catch {}
    // eslint-disable-next-line react-hooks/set-state-in-effect -- localStorage is only readable after hydration
    setConsent(stored === "granted" || stored === "denied" ? stored : null);
  }, []);

  if (!GA_ID) return null;

  const choose = (value: "granted" | "denied") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {}
    setConsent(value);
  };

  return (
    <>
      {consent === "granted" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
          </Script>
        </>
      )}
      {consent === null && (
        <div className="consent" role="dialog" aria-live="polite" aria-label="Cookies">
          <p>{dict.text}</p>
          <div>
            <button type="button" className="primary" onClick={() => choose("granted")}>
              {dict.accept}
            </button>
            <button type="button" onClick={() => choose("denied")}>
              {dict.decline}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
