"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Job {
  period: string;
  role: string;
  company: string;
  location: string;
  type?: string;
  description: string;
  tags: string[];
}

interface Edu {
  period: string;
  degree: string;
  school: string;
  description: string;
}

const jobs: Job[] = [
  {
    period: "2025 — Present",
    role: "Responsable Pedago/Tech",
    company: "42 Lausanne",
    location: "Lausanne, Switzerland",
    type: "Full-time",
    description:
      "Managing the technical environment of the school and supporting the pedagogy team and campus community at 42 Lausanne.",
    tags: ["Pedagogy", "Tech", "Management"],
  },
  {
    period: "2024 — 2025",
    role: "Community Manager",
    company: "42 Lausanne",
    location: "Lausanne, Switzerland",
    type: "Full-time",
    description:
      "Community management for the 42 Lausanne campus — events, communications, and student engagement.",
    tags: ["Community", "Events", "Communication"],
  },
  {
    period: "2022 — 2023",
    role: "Web Developer",
    company: "Up to you",
    location: "Villars-sur-Glâne, Switzerland",
    type: "Permanent",
    description:
      "Full-stack development — implementing themes and plugins, maintaining production websites, ensuring security, and integrating creative coding into client projects.",
    tags: ["Front-end", "Back-end", "WordPress", "Creative Coding"],
  },
  {
    period: "2020 — 2022",
    role: "Web Developer",
    company: "Freelance",
    location: "Geneva, Switzerland",
    description:
      "WordPress theme integrations for websites and e-shops. Front-end development on Nuxt.js. UI design and prototyping on Adobe XD and Figma.",
    tags: ["WordPress", "Nuxt.js", "UI Design", "Figma"],
  },
  {
    period: "2020 — 2021",
    role: "UI Designer",
    company: "Polycorne",
    location: "Annecy, France",
    type: "Freelance",
    description:
      "Designed and implemented the full UI for Silicon City on Unity 3D — a city-builder game available on Steam.",
    tags: ["UI Design", "Unity 3D", "Game Design"],
  },
  {
    period: "2020",
    role: "Web Developer",
    company: "Radio Vostok",
    location: "Geneva, Switzerland",
    type: "Internship",
    description:
      "Built an interactive broadcast management form with Vue.js. Developed pages for Radio Vostok, including La VostokE — Switzerland's first 100% feminine radio.",
    tags: ["Vue.js", "WordPress", "Front-end"],
  },
];

const education: Edu[] = [
  {
    period: "2022 — 2025",
    degree: "Software Engineering",
    school: "42 Lausanne",
    description:
      "Project-based engineering school. Peer-to-peer learning model covering C, C++, algorithms, systems, and web development.",
  },
  {
    period: "2020",
    degree: "Full-Stack Developer Bootcamp",
    school: "Le Wagon — Batch #344",
    description:
      "9-week intensive bootcamp: HTML, CSS, JavaScript, Ruby on Rails, SQL, Git. Shipped a clone of Airbnb and a Rails prototype to production.",
  },
  {
    period: "2015 — 2016",
    degree: "Master's — Music Business Management",
    school: "University of Westminster",
    description: "London, United Kingdom.",
  },
];

function JobRow({ job, index }: { job: Job; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      className="group grid md:grid-cols-[160px_1fr_auto] gap-x-8 gap-y-2 py-7 border-t border-white/[0.06] hover:border-white/20 transition-colors duration-300"
    >
      {/* Period */}
      <div className="flex md:flex-col gap-3 md:gap-1">
        <span className="text-[10px] font-mono text-white/55 whitespace-nowrap">
          {job.period}
        </span>
        {job.type && (
          <span className="text-[9px] tracking-[0.2em] uppercase text-white/55 hidden md:block">
            {job.type}
          </span>
        )}
      </div>

      {/* Role + description */}
      <div>
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <span className="text-sm text-white font-medium">{job.role}</span>
          <span className="text-white/55 text-sm">— {job.company}</span>
          <span className="text-[10px] text-white/55 font-mono">{job.location}</span>
        </div>
        <p className="mt-2 text-xs text-white/55 leading-relaxed max-w-xl">
          {job.description}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap md:flex-col gap-1.5 md:items-end">
        {job.tags.map((tag) => (
          <span
            key={tag}
            className="text-[9px] tracking-[0.15em] uppercase text-white/55 border border-white/20 px-2 py-1 whitespace-nowrap group-hover:text-white/80 group-hover:border-white/40 transition-all duration-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function EduRow({ edu, index }: { edu: Edu; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      className="grid md:grid-cols-[160px_1fr] gap-x-8 gap-y-1 py-6 border-t border-white/[0.06]"
    >
      <span className="text-[10px] font-mono text-white/55">{edu.period}</span>
      <div>
        <span className="text-sm text-white/70 font-medium">{edu.degree}</span>
        <span className="text-white/55 text-sm"> — {edu.school}</span>
        <p className="mt-1.5 text-xs text-white/55 leading-relaxed max-w-xl">
          {edu.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="experience"
      className="bg-black py-32 md:py-48 px-8 md:px-16 border-t border-white/[0.06]"
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="text-[10px] tracking-[0.45em] uppercase text-white/55 font-mono"
      >
        002 / Experience
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
          Work History
        </motion.h2>
      </div>

      {/* Jobs */}
      <div className="mt-16 md:mt-24">
        {jobs.map((job, i) => (
          <JobRow key={i} job={job} index={i} />
        ))}
        <div className="border-t border-white/[0.06]" />
      </div>

      {/* Education */}
      <div className="mt-20 md:mt-28">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[9px] tracking-[0.4em] uppercase text-white/55 font-mono"
        >
          Education
        </motion.span>

        <div className="mt-6">
          {education.map((edu, i) => (
            <EduRow key={i} edu={edu} index={i} />
          ))}
          <div className="border-t border-white/[0.06]" />
        </div>
      </div>
    </section>
  );
}
