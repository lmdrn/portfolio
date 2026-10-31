"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// "lines": every .fit-line child gets the size that makes the widest one fill the width.
// "words": keeps the CSS size, but shrinks until no single word overflows (titles never break mid-word).
// maxVw caps "lines" so short titles (e.g. "Ink") don't grow huge.
export function fit(el: HTMLElement, mode: "lines" | "words", maxVw = Infinity) {
  if (!el.clientWidth) return;
  if (mode === "lines") {
    const lines = [...el.querySelectorAll<HTMLElement>(".fit-line")];
    if (!lines.length) return;
    const cs = getComputedStyle(el);
    const avail = el.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    el.style.fontSize = "100px";
    const widest = Math.max(...lines.map((l) => l.getBoundingClientRect().width));
    const size = Math.min(((100 * avail) / widest) * 0.99, (maxVw * window.innerWidth) / 100);
    el.style.fontSize = `${Math.floor(size)}px`;
    return;
  }
  el.style.fontSize = "";
  let size = parseFloat(getComputedStyle(el).fontSize);
  while (el.scrollWidth > el.clientWidth + 1 && size > 14) {
    size *= 0.95;
    el.style.fontSize = `${size}px`;
  }
}

// Fits once the title font has loaded, and again on every resize
export function useFit(ref: React.RefObject<HTMLElement | null>, mode: "lines" | "words", maxVw?: number) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const run = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        fit(el, mode, maxVw);
        ScrollTrigger.refresh();
      });
    };
    const family = getComputedStyle(el).fontFamily;
    document.fonts.load(`700 100px ${family}`).then(run, run);
    const observer = new ResizeObserver(run);
    observer.observe(el.parentElement ?? el);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [ref, mode, maxVw]);
}

export default function FitText({
  as: Tag = "h2",
  mode = "words",
  maxVw,
  className,
  children,
}: {
  as?: ElementType;
  mode?: "lines" | "words";
  maxVw?: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  useFit(ref, mode, maxVw);
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
