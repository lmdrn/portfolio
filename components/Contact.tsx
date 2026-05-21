"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/leamedrano/" },
  { label: "GitHub", href: "https://github.com/lmdrn" },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="contact"
      className="relative bg-black py-32 md:py-48 px-8 md:px-16 border-t border-white/[0.06] overflow-hidden"
    >
      {/* Ghost background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden
      >
        <span
          className="text-[18vw] font-bold whitespace-nowrap text-transparent"
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.025)" }}
        >
          LET&apos;S TALK
        </span>
      </div>

      <div className="relative">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[10px] tracking-[0.45em] uppercase text-white/55 font-mono"
        >
          003 / Contact
        </motion.span>

        <div className="mt-12 md:mt-20">
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "100%" }}
              animate={inView ? { y: "0%" } : {}}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              className="text-white/55 text-[11px] tracking-[0.3em] uppercase"
            >
              Have a project in mind?
            </motion.p>
          </div>

          <div className="overflow-hidden mt-4">
            <motion.h2
              initial={{ y: "100%" }}
              animate={inView ? { y: "0%" } : {}}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none"
            >
              Let&apos;s Build
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.22)" }}
              >
                Something
              </span>
            </motion.h2>
          </div>

          <motion.a
            href="mailto:leamedrano@gmail.com"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group mt-12 md:mt-16 inline-flex items-center gap-4 text-white/55 hover:text-white transition-colors duration-300"
          >
            <span className="text-lg md:text-2xl font-light tracking-tight">
              leamedrano@gmail.com
            </span>
            <span className="text-xl group-hover:translate-x-2 transition-transform duration-300">
              →
            </span>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 flex items-center gap-8 border-t border-white/[0.06] pt-8"
          >
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-[0.28em] uppercase text-white/55 hover:text-white/80 transition-colors duration-300"
              >
                {social.label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
