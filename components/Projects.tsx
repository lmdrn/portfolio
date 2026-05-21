"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  span: string;
  height: string;
  bgStyle?: React.CSSProperties;
  image?: string;
  href?: string;
}

const projects: Project[] = [
  {
    id: "01",
    title: "Playground",
    client: "Playground Productions",
    category: "WordPress / Creative Dev",
    year: "2023",
    description:
      "Custom WordPress theme for a creative production company. Full front-end and back-end development with creative coding integrations and animated editorial layout.",
    tags: ["WordPress", "Custom Theme", "Creative Coding"],
    span: "col-span-12 md:col-span-7",
    height: "h-72 md:h-96",
    image: "/projects/playground.png",
    href: "https://playground-prod.com",
  },
  {
    id: "02",
    title: "Excelson",
    client: "Excelson",
    category: "WordPress / Web Design",
    year: "2023",
    description:
      "WordPress website for a premium acoustic solutions brand. Custom theme with ACF fields and a product discovery flow.",
    tags: ["WordPress", "ACF", "Web Design"],
    span: "col-span-12 md:col-span-5",
    height: "h-72 md:h-96",
    image: "/projects/excelson.png",
    href: "https://www.excelson.com/en/",
  },
  {
    id: "03",
    title: "Agglo Fribourg",
    client: "Agglomération de Fribourg",
    category: "WordPress / Web Design",
    year: "2024",
    description:
      "Custom WordPress theme for the official Agglomération de Fribourg website. ACF-powered content, smooth animations, and a bilingual public-sector interface.",
    tags: ["WordPress", "ACF", "Animations"],
    span: "col-span-12 md:col-span-5",
    height: "h-64 md:h-80",
    image: "/projects/agglo.png",
    href: "https://projets.agglo-fr.ch/",
  },
  {
    id: "04",
    title: "Radio Bascule",
    client: "Radio Bascule",
    category: "Front-end Dev",
    year: "2020",
    description:
      "Front-end development on a Vue.js radio platform. Podcast listening and browsing experience for a Swiss community radio.",
    tags: ["Vue.js", "Front-end", "WordPress"],
    span: "col-span-12 md:col-span-7",
    height: "h-64 md:h-80",
    image: "/projects/radio-bascule.png",
    href: "https://radiobascule.ch/ecouter",
  },
  {
    id: "05",
    title: "Transcendence",
    client: "42 Lausanne",
    category: "Full-stack / Real-time",
    year: "2024",
    description:
      "Multiplayer Pong platform built as a 42 school project. Real-time gameplay over WebSockets, OAuth2 login, 2FA, JWT session management, and a tournament bracket system.",
    tags: ["TypeScript", "WebSocket", "2FA / JWT"],
    span: "col-span-12 md:col-span-4",
    height: "h-64 md:h-72",
    href: "https://github.com/Madness807/ft_transcendence",
    image: "/projects/transcendence.png",
  },
  {
    id: "06",
    title: "Ink Illustrations",
    client: "Personal",
    category: "Ink / Botanical",
    year: "2020 —",
    description:
      "Botanical ink drawings — each done in a single session, no underdrawing. Elderflower, Arnica, Chrysanthème, Ravinala, and more.",
    tags: ["Ink", "Botanical", "Drawing"],
    span: "col-span-12 md:col-span-4",
    height: "h-64 md:h-72",
    image: "/illustrations/chrysanthemum.jpg",
    href: "/illustrations",
  },
  {
    id: "07",
    title: "Digital Illustrations",
    client: "Personal",
    category: "Procreate / Character Design",
    year: "2022 —",
    description:
      "Digital illustrations made with Procreate — expressive character design with bold colors and playful compositions.",
    tags: ["Procreate", "Character Design", "Digital Art"],
    span: "col-span-12 md:col-span-4",
    height: "h-64 md:h-72",
    image: "/illustrations/digital/fire.png",
    href: "/illustrations/digital",
  },
];

function CardInner({ project }: { project: Project }) {
  return (
    <>
      {/* Visual area */}
      <div
        className={`relative ${project.height} overflow-hidden bg-[#0a0a0a]`}
        style={project.bgStyle}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <span
              className="text-[9rem] md:text-[11rem] font-bold text-transparent"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.05)" }}
            >
              {project.id}
            </span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/88 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-end p-6 md:p-8">
          <p className="text-white/55 text-sm leading-relaxed mb-5">
            {project.description}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] tracking-[0.2em] uppercase text-white/55 border border-white/20 px-2.5 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="text-[11px] tracking-[0.15em] uppercase text-white group-hover:translate-x-1 transition-transform duration-300 ml-4 whitespace-nowrap">
              View Project →
            </span>
          </div>
        </div>
      </div>

      {/* Info row */}
      <div className="mt-4 flex items-start justify-between">
        <div>
          <h3 className="text-white text-sm font-medium">{project.title}</h3>
          <p className="text-white/55 text-xs mt-0.5 tracking-wide">
            {project.client} — {project.category}
          </p>
        </div>
        <span className="text-white/55 text-xs font-mono shrink-0 ml-4">
          {project.year}
        </span>
      </div>

      {/* Animated bottom line */}
      <div className="mt-3.5 h-px bg-white/[0.06]">
        <div className="h-full bg-white/25 w-0 group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />
      </div>
    </>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const isInternal = project.href?.startsWith("/");

  const motionProps = {
    ref,
    initial: { opacity: 0, y: 36 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: {
      duration: 0.75,
      delay: index * 0.07,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  };

  if (!project.href) {
    return (
      <motion.div {...motionProps} className={`${project.span} group relative`}>
        <CardInner project={project} />
      </motion.div>
    );
  }

  if (isInternal) {
    return (
      <Link href={project.href} className={`${project.span} block`}>
        <motion.div {...motionProps} className="group relative">
          <CardInner project={project} />
        </motion.div>
      </Link>
    );
  }

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${project.span} block`}
    >
      <motion.div {...motionProps} className="group relative">
        <CardInner project={project} />
      </motion.div>
    </a>
  );
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="work"
      className="bg-black py-32 md:py-48 px-8 md:px-16 border-t border-white/[0.06]"
    >
      <div className="flex items-end justify-between mb-16 md:mb-24">
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[10px] tracking-[0.45em] uppercase text-white/55 font-mono"
          >
            002 / Work
          </motion.span>

          <div className="overflow-hidden mt-4">
            <motion.h2
              initial={{ y: "105%" }}
              animate={inView ? { y: "0%" } : {}}
              transition={{
                duration: 0.85,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              className="text-4xl md:text-6xl font-bold text-white"
            >
              Selected Work
            </motion.h2>
          </div>
        </div>

        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden md:block text-white/55 text-xs font-mono"
        >
          {projects.length} Projects
        </motion.span>
      </div>

      <div className="grid grid-cols-12 gap-5 md:gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
