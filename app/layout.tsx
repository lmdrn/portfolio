import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DiscoBall from "@/components/DiscoBall";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://leamedrano.com";

export const metadata: Metadata = {
  // Titre affiché dans l'onglet et les résultats Google
  title: {
    default: "Léa Medrano — Creative Developer",
    template: "%s | Léa Medrano", // Les sous-pages héritent ce format
  },
  description:
    "Portfolio of Léa Medrano, Creative Developer based in Lausanne, Switzerland. WordPress, React, Next.js, creative coding, UI/UX design.",
  // Mots-clés (signal secondaire pour Google)
  keywords: [
    "creative developer",
    "web developer",
    "Lausanne",
    "Switzerland",
    "WordPress",
    "React",
    "Next.js",
    "UI design",
    "portfolio",
    "Léa Medrano",
  ],
  // URL canonique — évite le duplicate content si le site est accessible via plusieurs URLs
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/" },
  // Open Graph — preview sur LinkedIn, Facebook, iMessage, Slack…
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Léa Medrano",
    title: "Léa Medrano — Creative Developer",
    description:
      "Creative Developer based in Lausanne. Building digital experiences where code becomes a creative medium.",
    locale: "en_US",
  },
  // Twitter / X card — preview quand le lien est partagé sur Twitter
  twitter: {
    card: "summary_large_image",
    title: "Léa Medrano — Creative Developer",
    description:
      "Creative Developer based in Lausanne. Building digital experiences where code becomes a creative medium.",
  },
  // Indique aux robots de Google d'indexer le site et de suivre les liens
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="text-white antialiased overflow-x-hidden" suppressHydrationWarning>
        <DiscoBall />
        <div className="relative" style={{ zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
