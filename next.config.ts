import type { NextConfig } from "next";

const securityHeaders = [
  // Force HTTPS — le navigateur ne tentera jamais une connexion HTTP
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Anti-clickjacking — interdit d'embarquer le site dans un <iframe> externe
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  // Anti-MIME sniffing — le navigateur respecte le type déclaré des fichiers
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Contrôle ce qui est envoyé comme "referrer" aux sites tiers
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Désactive caméra / micro / géolocalisation — pas besoin sur un portfolio
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // Active le filtre XSS intégré des vieux navigateurs
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
];

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.120.176"],
  async headers() {
    return [
      {
        // Applique les headers de sécurité à toutes les pages
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
