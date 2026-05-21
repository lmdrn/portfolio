"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const FIRST = "LÉA";
const LAST = "MEDRANO";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.055, delayChildren: 0.25 },
  },
};

const letter = {
  hidden: { y: "115%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,black_100%)]" />

      <motion.div suppressHydrationWarning style={{ y, opacity }} className="relative px-8 md:px-16">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[10px] tracking-[0.45em] uppercase text-white/55 mb-5 font-mono"
        >
          Creative Developer
        </motion.p>

        {/* First name */}
        <div className="overflow-hidden">
          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="flex text-[16vw] font-bold leading-none tracking-tight text-white"
            aria-label={FIRST}
          >
            {FIRST.split("").map((char, i) => (
              <motion.span key={i} variants={letter} className="inline-block">
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Last name — ghost outline */}
        <div className="overflow-hidden -mt-2 md:-mt-4">
          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="flex text-[16vw] font-bold leading-none tracking-tight text-transparent"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.45)" }}
            aria-label={LAST}
          >
            {LAST.split("").map((char, i) => (
              <motion.span key={i} variants={letter} className="inline-block">
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 1.05 }}
          className="mt-10 md:mt-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          <p className="text-white/55 max-w-xs text-sm leading-relaxed">
            Based in Lausanne — building digital experiences where code
            becomes a creative medium.
          </p>
          <button
            onClick={() =>
              document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
            }
            className="self-start sm:self-auto text-[10px] tracking-[0.3em] uppercase text-white border border-white/35 px-8 py-4 hover:bg-white hover:text-black transition-all duration-300"
          >
            View Work ↓
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-10 left-8 md:left-16 flex flex-col items-center gap-3"
      >
        <motion.div
          animate={{ scaleY: [1, 0.35, 1] }}
          transition={{ repeat: Infinity, duration: 1.9, ease: "easeInOut" }}
          className="w-px h-14 bg-white/15 origin-top"
        />
        <span className="text-[9px] tracking-[0.45em] uppercase text-white/55 font-mono">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
