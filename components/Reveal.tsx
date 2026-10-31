"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { prefersReducedMotion } from "./SmoothScroll";

// Slides its direct children in, one after the other, the first time they scroll into view
export default function Reveal({ className, children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const tween = gsap.from(el.children, {
      x: -30,
      opacity: 0,
      duration: 0.8,
      ease: "expo.out",
      stagger: 0.08,
      scrollTrigger: { trigger: el, start: "top 85%", once: true },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.revert();
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
