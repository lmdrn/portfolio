import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// Content-Security-Policy — n'autorise que les ressources servies par le site lui-même
// 'unsafe-inline' est nécessaire : Next.js injecte des scripts inline (pages statiques, pas de nonce)
// et framer-motion anime via des styles inline. En dev, 'unsafe-eval' + websocket pour le hot reload.
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  `connect-src 'self'${isDev ? " ws: wss:" : ""}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  // Limite les sources de scripts, styles, images… — principale protection contre le XSS
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy,
  },
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
];

const nextConfig: NextConfig = {
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
