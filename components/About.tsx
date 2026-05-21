"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const stats = [
  { value: "6+", label: "Years Dev" },
  { value: "10+", label: "Projects" },
  { value: "∞", label: "Lines of Code" },
];

const skills = [
  "JavaScript",
  "TypeScript",
  "React / Next.js",
  "C / C++",
  "Python",
  "Ruby on Rails",
  "Three.js",
  "Blender",
  "GSAP",
  "Figma",
  "UI / UX",
  "Creative Coding",
  "WordPress",
  "Docker",
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="about"
      className="bg-black py-32 md:py-48 px-8 md:px-16 border-t border-white/[0.06]"
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="text-[10px] tracking-[0.45em] uppercase text-white/55 font-mono"
      >
        001 / About
      </motion.span>

      <div className="mt-14 grid md:grid-cols-2 gap-16 md:gap-28">
        {/* Left — Bio */}
        <div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "105%" }}
              animate={inView ? { y: "0%" } : {}}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Code as a
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.55)" }}
              >
                creative medium
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-white/55 text-sm leading-[1.9] max-w-sm"
          >
            I build web applications and digital projects where technology meets
            creativity. With a background in the creative industries, I began my
            career in events and communication before moving into design and UX/UI.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 text-white/55 text-sm leading-[1.9] max-w-sm"
          >
            I studied software development at 42 Lausanne and now work there within
            the pedagogy and tech team. Alongside that, I continue developing web
            projects and exploring ways to combine development, design, and creative
            technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex items-center gap-6"
          >
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-[10px] tracking-[0.25em] uppercase text-white/55">
                Open to collaborations
              </span>
            </div>
            <Link
              href="/cv"
              className="text-[10px] tracking-[0.25em] uppercase text-white/55 border border-white/30 px-4 py-2 hover:border-white/55 hover:text-white/80 transition-all duration-300"
            >
              View CV →
            </Link>
          </motion.div>
        </div>

        {/* Right — Stats + Skills */}
        <div className="flex flex-col justify-between gap-12">
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-[9px] tracking-[0.25em] uppercase text-white/55">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border-t border-white/[0.06] pt-8"
          >
            <div className="text-[9px] tracking-[0.35em] uppercase text-white/55 mb-5 font-mono">
              Stack & Tools
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-[10px] tracking-[0.15em] uppercase text-white/55 border border-white/20 px-3 py-1.5 hover:border-white/40 hover:text-white/80 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
