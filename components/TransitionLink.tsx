"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import type { ComponentProps, MouseEvent } from "react";
import { prefersReducedMotion } from "./SmoothScroll";

// Internal link that covers the page with the lilac wipe before navigating;
// PageTransition uncovers the next page
export default function TransitionLink({
  href,
  onClick,
  onMouseEnter,
  onFocus,
  ...rest
}: ComponentProps<typeof Link> & { href: string }) {
  const router = useRouter();
  // Fetch the next page as soon as it's pointed at, so it's ready by the time the wipe covers the screen
  const prefetch = () => router.prefetch(href);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    const wipe = document.getElementById("wipe");
    // Same page (e.g. /en → /en#work): no new pathname would lift the wipe, so let Link handle it
    const samePage = new URL(href, window.location.href).pathname === window.location.pathname;
    if (!wipe || samePage || prefersReducedMotion()) return;
    e.preventDefault();
    prefetch();
    wipe.dataset.covering = "true";
    gsap.fromTo(
      wipe,
      { y: 0, yPercent: 100 },
      { yPercent: 0, duration: 0.45, ease: "power3.in", onComplete: () => router.push(href) },
    );
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      onMouseEnter={(e) => {
        onMouseEnter?.(e);
        prefetch();
      }}
      onFocus={(e) => {
        onFocus?.(e);
        prefetch();
      }}
      {...rest}
    />
  );
}
