"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const illustrations = [
  {
    src: "/illustrations/digital/space.png",
    title: "Shooting Star",
    year: "2023",
  },
  {
    src: "/illustrations/digital/fire.png",
    title: "On Fire",
    year: "2023",
  },
  {
    src: "/illustrations/digital/daisy.png",
    title: "Daisy",
    year: "2023",
  },
];

function IllustrationCard({
  item,
  index,
  onOpen,
}: {
  item: (typeof illustrations)[0];
  index: number;
  onOpen: (i: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      className="group cursor-pointer"
      onClick={() => onOpen(index)}
    >
      <div className="relative aspect-square overflow-hidden bg-[#0d0d0d]">
        <Image
          src={item.src}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-500 flex items-end p-5">
          <div className="translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
            <p className="text-white text-sm font-medium">{item.title}</p>
            <p className="text-white/45 text-[10px] tracking-widest uppercase mt-0.5">
              Procreate — {item.year}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <p className="text-white/40 text-xs font-medium">{item.title}</p>
        <p className="text-white/20 text-[10px] tracking-widest uppercase mt-0.5">
          Procreate — {item.year}
        </p>
      </div>
    </motion.div>
  );
}

export default function DigitalIllustrationsPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () =>
    setLightbox((i) =>
      i === null ? null : (i - 1 + illustrations.length) % illustrations.length
    );
  const next = () =>
    setLightbox((i) =>
      i === null ? null : (i + 1) % illustrations.length
    );

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Nav */}
      <div className="fixed top-0 left-0 right-0 z-50 px-8 md:px-16 py-6 flex items-center justify-between border-b border-white/[0.04] bg-black/80 backdrop-blur-md">
        <Link
          href="/"
          className="text-[10px] tracking-[0.3em] uppercase text-white/30 hover:text-white/70 transition-colors duration-300 flex items-center gap-2"
        >
          ← Portfolio
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/illustrations"
            className="text-[10px] tracking-[0.3em] uppercase text-white/20 hover:text-white/50 transition-colors duration-300"
          >
            Ink
          </Link>
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/50 font-mono">
            Digital
          </span>
        </div>
      </div>

      {/* Header */}
      <div
        ref={headerRef}
        className="pt-40 pb-20 px-8 md:px-16 border-b border-white/[0.06]"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[10px] tracking-[0.45em] uppercase text-white/20 font-mono"
        >
          Personal / Procreate
        </motion.span>

        <div className="overflow-hidden mt-4">
          <motion.h1
            initial={{ y: "105%" }}
            animate={headerInView ? { y: "0%" } : {}}
            transition={{
              duration: 0.85,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="text-5xl md:text-7xl font-bold text-white"
          >
            Digital
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-white/30 text-sm leading-relaxed max-w-sm"
        >
          Digital illustrations made with Procreate — character design,
          bold colors, and expressive compositions.
        </motion.p>
      </div>

      {/* Gallery — 3 columns */}
      <div className="px-8 md:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {illustrations.map((item, i) => (
            <IllustrationCard
              key={item.src}
              item={item}
              index={i}
              onOpen={setLightbox}
            />
          ))}
        </div>
      </div>

      {/* Footer note */}
      <div className="px-8 md:px-16 pb-24 border-t border-white/[0.06] pt-8">
        <p className="text-white/15 text-xs font-mono">
          {illustrations.length} works — Procreate
        </p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[99999] bg-black/95 flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-8 text-white/40 hover:text-white text-[10px] tracking-[0.3em] uppercase transition-colors"
              onClick={() => setLightbox(null)}
            >
              Close ✕
            </button>
            <button
              className="absolute left-6 md:left-10 text-white/30 hover:text-white text-2xl transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              ←
            </button>
            <button
              className="absolute right-6 md:right-10 text-white/30 hover:text-white text-2xl transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              →
            </button>

            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              className="flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-[80vmin] h-[80vmin]">
                <Image
                  src={illustrations[lightbox].src}
                  alt={illustrations[lightbox].title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-white text-sm font-medium">
                  {illustrations[lightbox].title}
                </p>
                <p className="text-white/35 text-[10px] tracking-widest uppercase mt-1">
                  Procreate — {illustrations[lightbox].year}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
