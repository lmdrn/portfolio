export const SITE_URL = "https://leamedrano.com";

export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const otherLocale = (locale: Locale): Locale => (locale === "en" ? "fr" : "en");

// A value that changes with the language, or stays the same in both
export type Localized = string | Record<Locale, string>;
export const t = (value: Localized, locale: Locale) =>
  typeof value === "string" ? value : value[locale];

// hreflang alternates for a path that exists in every locale, e.g. "/work/ink"
export const alternates = (locale: Locale, path = "") => ({
  canonical: `/${locale}${path}`,
  languages: {
    en: `/en${path}`,
    fr: `/fr${path}`,
    "x-default": `/en${path}`,
  },
});
