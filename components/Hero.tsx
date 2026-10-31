"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { useFit } from "./FitText";
import { prefersReducedMotion } from "./SmoothScroll";
import type { Dictionary } from "@/lib/dictionaries";

// Three.js loads after the text, so the name and intro show up straight away
const DiscoBall = dynamic(() => import("./DiscoBall"), { ssr: false });

const split = (word: string) =>
  [...word].map((char, i) => (
    <span key={i} className="char">
      {char}
    </span>
  ));

export default function Hero({ dict }: { dict: Dictionary["hero"] }) {
  const nameRef = useRef<HTMLHeadingElement>(null);
  useFit(nameRef, "lines");

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap
        .timeline({ delay: 0.15 })
        .from(".hero-name .char", { yPercent: 110, duration: 1, ease: "expo.out", stagger: 0.04 }, 0)
        .from(".hero-bottom > *", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out", stagger: 0.1 }, 0.6);
      gsap.to(".hero-name", {
        yPercent: -16,
        ease: "none",
        scrollTrigger: { trigger: "#top", start: "top top", end: "bottom top", scrub: true },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="top">
      <DiscoBall heroId="top" />
      <h1 ref={nameRef} className="hero-name display gut" aria-label="Léa Medrano">
        <span className="line-mask" aria-hidden="true">
          <span className="fit-line">{split("Léa")}</span>
        </span>
        <span className="line-mask outline" aria-hidden="true">
          <span className="fit-line">{split("Medrano")}</span>
        </span>
      </h1>
      <div className="hero-bottom gut">
        <p className="hero-intro">
          <strong>{dict.lead}</strong> {dict.rest}
        </p>
        <p className="status">{dict.status}</p>
      </div>
    </section>
  );
}
