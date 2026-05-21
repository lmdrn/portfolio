import type { MetadataRoute } from "next";

// Génère automatiquement /sitemap.xml
// Google lit ce fichier pour découvrir et indexer toutes tes pages
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://leamedrano.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1, // Page la plus importante
    },
    {
      url: "https://leamedrano.com/cv",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://leamedrano.com/illustrations",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://leamedrano.com/illustrations/digital",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
