import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, hasLocale, type Locale } from "@/lib/i18n";

// Old addresses that moved, so existing links and Google results keep working
const legacyPaths: Record<string, string> = {
  "/illustrations": "/work/ink",
  "/illustrations/digital": "/work/digital",
};

// First supported language in the browser's Accept-Language header
function preferredLocale(request: NextRequest): Locale {
  const header = request.headers.get("accept-language") ?? "";
  for (const part of header.split(",")) {
    const code = part.split(";")[0].trim().slice(0, 2).toLowerCase();
    if (hasLocale(code)) return code;
  }
  return defaultLocale;
}

// Every page lives under /en or /fr: send anything else to the visitor's language
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (hasLocale(pathname.split("/")[1])) return;

  const legacy = legacyPaths[pathname.replace(/\/$/, "")];
  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale(request)}${legacy ?? (pathname === "/" ? "" : pathname)}`;
  return NextResponse.redirect(url, legacy ? 308 : 307);
}

export const config = {
  // Skip Next internals, the contact API and files with an extension (images, sitemap.xml, robots.txt…)
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
