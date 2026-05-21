import type { MetadataRoute } from "next";

// Génère automatiquement /robots.txt
// Dis à Google : indexe tout le site et voici le sitemap
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://leamedrano.com/sitemap.xml",
  };
}
