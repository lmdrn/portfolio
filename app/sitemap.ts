import type { MetadataRoute } from "next";
import { SITE_URL, locales } from "@/lib/i18n";
import { projects } from "@/data/projects";

// Génère automatiquement /sitemap.xml
// Chaque page existe en anglais et en français : Google reçoit les deux versions liées entre elles
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1 },
    { path: "/cv", priority: 0.8 },
    ...projects.map((p) => ({ path: `/work/${p.slug}`, priority: 0.7 })),
  ];

  return pages.flatMap(({ path, priority }) =>
    locales.map((lang) => ({
      url: `${SITE_URL}/${lang}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}${path}`])),
      },
    })),
  );
}
