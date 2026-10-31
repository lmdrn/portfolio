import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Archivo, Syncopate } from "next/font/google";
import "../globals.css";
import Nav from "@/components/Nav";
import SmoothScroll from "@/components/SmoothScroll";
import Analytics from "@/components/Analytics";
import PageTransition from "@/components/PageTransition";
import { SITE_URL, alternates, hasLocale, locales } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-archivo" });
const syncopate = Syncopate({ subsets: ["latin"], weight: "700", variable: "--font-syncopate" });

export const dynamicParams = false;
export const generateStaticParams = () => locales.map((lang) => ({ lang }));

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { meta } = getDictionary(lang);
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: meta.title, template: "%s | Léa Medrano" },
    description: meta.description,
    alternates: alternates(lang),
    openGraph: {
      type: "website",
      siteName: "Léa Medrano",
      title: meta.title,
      description: meta.description,
      locale: meta.ogLocale,
      url: `/${lang}`,
    },
    twitter: { card: "summary_large_image", title: meta.title, description: meta.description },
    robots: { index: true, follow: true },
  };
}

// Tells Google who the site is about (name, job, city, profiles)
const personJsonLd = (description: string) =>
  JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Léa Medrano",
    url: SITE_URL,
    jobTitle: "Creative developer",
    description,
    email: "mailto:leamedrano@gmail.com",
    address: { "@type": "PostalAddress", addressLocality: "Lausanne", addressCountry: "CH" },
    worksFor: { "@type": "Organization", name: "42 Lausanne" },
    sameAs: ["https://www.linkedin.com/in/leamedrano/", "https://github.com/lmdrn"],
    knowsAbout: ["Web development", "WordPress", "React", "Next.js", "Three.js", "UI design", "Illustration"],
  }).replace(/</g, "\\u003c");

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <html lang={lang} className={`${archivo.variable} ${syncopate.variable}`}>
      {/* Extensions like ColorZilla add attributes to <body> before React loads */}
      <body className="antialiased" suppressHydrationWarning>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: personJsonLd(dict.meta.description) }} />
        <SmoothScroll />
        <Nav lang={lang} dict={dict.nav} />
        {children}
        <PageTransition />
        <Analytics dict={dict.consent} />
      </body>
    </html>
  );
}
