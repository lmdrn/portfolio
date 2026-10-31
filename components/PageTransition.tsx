"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getLenis, scrollToId } from "./SmoothScroll";

// The lilac wipe. TransitionLink lowers it before navigating; on every new pathname
// (including project → project, which keeps the same layout) this resets the scroll and lifts it.
export default function PageTransition() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) requestAnimationFrame(() => scrollToId(hash, true));
    else getLenis()?.scrollTo(0, { immediate: true, force: true });

    const wipe = document.getElementById("wipe");
    if (wipe?.dataset.covering) {
      delete wipe.dataset.covering;
      gsap.to(wipe, {
        yPercent: -100,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.05,
        onComplete: () => {
          gsap.set(wipe, { yPercent: 100 });
        },
      });
    }
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, [pathname]);

  return <div id="wipe" className="wipe" aria-hidden="true" />;
}
