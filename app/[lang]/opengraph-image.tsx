import { ImageResponse } from "next/og";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale, locales } from "@/lib/i18n";

// Preview image shown when the site is shared (LinkedIn, Slack, iMessage…)
export const alt = "Léa Medrano";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const generateStaticParams = () => locales.map((lang) => ({ lang }));

export default async function OpengraphImage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const lead = getDictionary(hasLocale(lang) ? lang : "en").hero.lead;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#121015",
          color: "#EEEBF2",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 0.9 }}>
          <span style={{ fontSize: 170, fontWeight: 900, letterSpacing: -6 }}>LÉA</span>
          <span
            style={{ fontSize: 170, fontWeight: 900, letterSpacing: -6, color: "transparent", WebkitTextStroke: "3px #EEEBF2" }}
          >
            MEDRANO
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 38 }}>
          <div style={{ width: 22, height: 22, borderRadius: 11, background: "#B9A6E8" }} />
          {lead}
        </div>
      </div>
    ),
    size,
  );
}
