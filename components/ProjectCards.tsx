"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import FitText from "./FitText";
import TransitionLink from "./TransitionLink";
import { prefersReducedMotion } from "./SmoothScroll";

export interface CardData {
  href: string;
  title: string;
  description: string;
  meta: string;
  image: string;
}

// Sticky cards that pile up: each one shrinks a little as the next slides over it
export default function ProjectCards({ cards, openLabel }: { cards: CardData[]; openLabel: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !ref.current) return;
    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray<HTMLElement>(".card");
      els.slice(0, -1).forEach((card, i) => {
        gsap.to(card, {
          scale: 0.94,
          ease: "none",
          scrollTrigger: { trigger: els[i + 1], start: "top bottom", end: "top 20%", scrub: true },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref}>
      {cards.map((card, i) => (
        <TransitionLink
          key={card.href}
          href={card.href}
          className={`card${i % 2 ? " light" : ""}`}
          style={{ "--i": i } as React.CSSProperties}
        >
          <div className="card-info">
            <FitText as="h3" className="display">
              {card.title}
            </FitText>
            <div className="grid gap-[22px]">
              <p>{card.description}</p>
              <div className="card-meta">
                <span>{card.meta}</span>
                <span className="open">
                  {openLabel} <span aria-hidden="true">→</span>
                </span>
              </div>
            </div>
          </div>
          <div className="card-pic">
            <Image src={card.image} alt="" fill sizes="(max-width: 760px) 100vw, 55vw" />
          </div>
        </TransitionLink>
      ))}
    </div>
  );
}
