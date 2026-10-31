"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";
import TransitionLink from "./TransitionLink";
import { scrollToId } from "./SmoothScroll";
import { locales, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

const sections = ["about", "work", "contact"] as const;

export default function Nav({ lang, dict }: { lang: Locale; dict: Dictionary["nav"] }) {
  const pathname = usePathname();
  const onHome = pathname === `/${lang}`;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // Same page in the other language: /en/work/ink <-> /fr/work/ink
  const pathIn = (locale: Locale) => pathname.replace(/^\/(en|fr)(?=\/|$)/, `/${locale}`);

  // On the home page, glide to the section; elsewhere, go home and land on it
  const goTo = (id: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    if (!onHome) return;
    e.preventDefault();
    history.replaceState(null, "", `#${id}`);
    scrollToId(id);
  };

  return (
    <header className={`nav gut${scrolled ? " scrolled" : ""}`}>
      <TransitionLink href={`/${lang}`} className="nav-mark" onClick={goTo("top")} aria-label="Léa Medrano">
        Léa
      </TransitionLink>
      <nav className="nav-links">
        {sections.map((id) => (
          <TransitionLink
            key={id}
            href={`/${lang}#${id}`}
            onClick={goTo(id)}
            className={id === "contact" ? undefined : "hide-sm"}
          >
            {dict[id]}
          </TransitionLink>
        ))}
        <TransitionLink href={`/${lang}/cv`} aria-current={pathname === `/${lang}/cv` ? "true" : undefined}>
          {dict.cv}
        </TransitionLink>
        <span className="nav-lang" role="group" aria-label={dict.language}>
          {locales.map((locale) => (
            <Link
              key={locale}
              href={pathIn(locale)}
              hrefLang={locale}
              lang={locale}
              aria-current={locale === lang ? "true" : undefined}
            >
              {locale.toUpperCase()}
            </Link>
          ))}
        </span>
      </nav>
    </header>
  );
}
