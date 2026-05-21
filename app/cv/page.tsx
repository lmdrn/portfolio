import Link from "next/link";
import type { Metadata } from "next";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "CV — Léa Medrano",
  description: "Curriculum vitae of Léa Medrano — Creative Developer.",
};

const experience = [
  {
    period: "Feb. 2024 — Present",
    role: "Pedago/Tech Assistant",
    company: "42 Lausanne",
    location: "Renens, Switzerland",
    type: "Full-time",
    bullets: [
      "Academic management of applicants and students. Oversight of \"pools\" and the selection process.",
      "Management of student data via the 42 API.",
      "Python scripting to automate processes for recurrent events.",
      "Management of social media, the website, and advertising campaigns.",
      "Graphic design for print and digital, as well as video editing.",
      "Organisation of inclusive events and community management for the school.",
    ],
  },
  {
    period: "Apr. 2022 — Nov. 2023",
    role: "WordPress Developer",
    company: "Agence UpToYou",
    location: "Fribourg, Switzerland",
    type: "Permanent",
    bullets: [
      "Quantify the technical challenges and product needs of a client while respecting deadlines and enhancing the user journey.",
      "Create WordPress themes with customizable content via ACF fields.",
      "Deploy, maintain, and optimize websites.",
      "Implement SEO and GDPR tools while ensuring site security.",
      "Develop templates and documentation for legacy code.",
      "Implement creative coding projects and uphold the agency's quality standards.",
    ],
  },
  {
    period: "May 2020 — Apr. 2022",
    role: "Frontend Developer — UX/UI Designer",
    company: "Freelance",
    location: "Remote",
    type: "Freelance",
    bullets: [
      "Creation of wireframes and mockups on Figma.",
      "Development and integration of WordPress themes.",
      "Integration of features on Bolt.",
      "Responsive design and implementation of features in Vue.js.",
    ],
  },
  {
    period: "Aug. 2020 — Nov. 2021",
    role: "Game UI Artist",
    company: "Polycorne Games",
    location: "Hybrid — Remote + Annecy, France",
    type: "Freelance",
    bullets: [
      "UI prototyping for Silicon City, available on Steam (management game).",
      "Creation of graphic assets and atlases using Photoshop and Illustrator.",
      "3D character animations in Blender.",
      "Design and animation creation for the UI, integrated through Unity.",
    ],
  },
  {
    period: "Occasional",
    role: "Frontend — UX/UI Teacher",
    company: "Le Wagon & SAE Institute Genève",
    location: "Geneva, Switzerland",
    type: "Freelance",
    bullets: [
      "Teaching Figma mockup design and HTML, CSS, JS.",
      "Teaching how to create and implement WordPress themes.",
    ],
  },
];

const education = [
  {
    period: "2022 — 2025",
    type: "Certification",
    degree: "Software Developer",
    school: "42 Lausanne",
    location: "Renens, Switzerland",
  },
  {
    period: "2020",
    type: "Bootcamp",
    degree: "RoR Fullstack Developer",
    school: "Le Wagon Lausanne",
    location: "Lausanne, Switzerland",
  },
  {
    period: "2015 — 2016",
    type: "Master's Degree",
    degree: "Music Business Management",
    school: "University of Westminster",
    location: "London, United Kingdom",
  },
  {
    period: "2010 — 2013",
    type: "Bachelor's Degree",
    degree: "Languages & International Trade",
    school: "Cardiff University & Université de Savoie",
    location: "Cardiff (UK) & Chambéry (FR)",
  },
];

const skills: Record<string, string[]> = {
  "Programming": ["C", "C++", "C#", "Python", "JavaScript", "PHP", "HTML5", "CSS3"],
  "Frameworks, Lib. & CMS": ["Django", "Ruby on Rails", "GSAP", "WordPress", "React", "Next.js", "TypeScript", "Node.js", "Electron"],
  "Dev Tools": ["Docker", "Git", "Shell (Bash)", "Unix"],
  "Database": ["PostgreSQL"],
  "Graphic Design": ["Photoshop", "Illustrator", "InDesign", "Figma", "Adobe XD"],
  "Animation & Video": ["After Effects", "Animate", "CapCut", "Unity"],
  "3D": ["Three.JS", "Blender"],
};

const languages = [
  { lang: "French", level: "Native" },
  { lang: "English", level: "C1" },
  { lang: "Spanish", level: "B2" },
  { lang: "German", level: "A2" },
];

export default function CVPage() {
  return (
    <main className="bg-black min-h-screen text-white">
      {/* Nav */}
      <div className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/[0.06] px-8 md:px-16 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="text-[10px] tracking-[0.3em] uppercase text-white/55 hover:text-white transition-colors duration-300"
        >
          ← Portfolio
        </Link>
        <span className="text-[10px] tracking-[0.28em] uppercase text-white/55 font-mono">
          CV — Léa Medrano
        </span>
        <PrintButton />
      </div>

      <div className="max-w-4xl mx-auto px-8 md:px-16 py-20 md:py-28">

        {/* Header */}
        <div className="border-b border-white/[0.06] pb-12 mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            Léa Medrano
          </h1>
          <p className="mt-2 text-white/55 text-sm tracking-[0.2em] uppercase">
            Creative Developer
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <span className="text-[11px] text-white/55 font-mono">Lausanne, Switzerland</span>
            <a
              href="mailto:leamedrano@gmail.com"
              className="text-[11px] text-white/55 font-mono hover:text-white/80 transition-colors duration-200"
            >
              leamedrano@gmail.com
            </a>
            {/* LinkedIn — logo only */}
            <a
              href="https://www.linkedin.com/in/leamedrano/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/55 hover:text-white/80 transition-colors duration-200"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            {/* GitHub — logo only */}
            <a
              href="https://github.com/lmdrn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/55 hover:text-white/80 transition-colors duration-200"
              title="GitHub"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="text-[10px] tracking-[0.4em] uppercase text-white/55 font-mono mb-8">
            Experience
          </h2>
          <div>
            {experience.map((job, i) => (
              <div
                key={i}
                className="grid md:grid-cols-[200px_1fr] gap-x-8 gap-y-2 py-7 border-t border-white/[0.06]"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-white/55 block">{job.period}</span>
                  {job.type && (
                    <span className="text-[9px] tracking-[0.2em] uppercase text-white/55 block">
                      {job.type}
                    </span>
                  )}
                  <span className="text-[10px] text-white/55 block">{job.location}</span>
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 mb-3">
                    <span className="text-sm text-white font-medium">{job.role}</span>
                    <span className="text-white/55 text-sm">— {job.company}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="text-xs text-white/55 leading-relaxed flex gap-2">
                        <span className="text-white/55 shrink-0 mt-0.5">—</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            <div className="border-t border-white/[0.06]" />
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-[10px] tracking-[0.4em] uppercase text-white/55 font-mono mb-8">
            Education
          </h2>
          <div>
            {education.map((edu, i) => (
              <div
                key={i}
                className="grid md:grid-cols-[200px_1fr] gap-x-8 gap-y-1 py-6 border-t border-white/[0.06]"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-white/55 block">{edu.period}</span>
                  <span className="text-[9px] tracking-[0.2em] uppercase text-white/55 block">{edu.type}</span>
                </div>
                <div>
                  <span className="text-sm text-white/70 font-medium">{edu.degree}</span>
                  <span className="text-white/55 text-sm"> — {edu.school}</span>
                  <p className="mt-1 text-[10px] text-white/55 font-mono">{edu.location}</p>
                </div>
              </div>
            ))}
            <div className="border-t border-white/[0.06]" />
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-[10px] tracking-[0.4em] uppercase text-white/55 font-mono mb-8">
            Skills
          </h2>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-[9px] tracking-[0.3em] uppercase text-white/55 mb-3 font-mono">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] tracking-[0.1em] uppercase text-white/55 border border-white/20 px-2.5 py-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section className="mb-16">
          <h2 className="text-[10px] tracking-[0.4em] uppercase text-white/55 font-mono mb-8">
            Languages
          </h2>
          <div className="flex flex-wrap gap-4">
            {languages.map((l) => (
              <div key={l.lang} className="border border-white/20 px-5 py-3">
                <div className="text-sm text-white/55 font-medium">{l.lang}</div>
                <div className="text-[9px] tracking-[0.25em] uppercase text-white/55 mt-0.5">{l.level}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Hobbies */}
        <section>
          <h2 className="text-[10px] tracking-[0.4em] uppercase text-white/55 font-mono mb-8">
            Hobbies
          </h2>
          <div className="flex flex-wrap gap-4">
            {/* Longboard */}
            <div className="border border-white/20 px-8 py-6 flex flex-col items-center gap-3 hover:border-white/40 transition-colors duration-300 min-w-[120px]">
              <svg viewBox="0 0 24 24" className="w-9 h-9 text-white/55" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 13 Q12 8.5 21 13" />
                <circle cx="7" cy="16.5" r="2" />
                <circle cx="17" cy="16.5" r="2" />
              </svg>
              <span className="text-[9px] tracking-[0.25em] uppercase text-white/55">Longboard</span>
            </div>
            {/* Running */}
            <div className="border border-white/20 px-8 py-6 flex flex-col items-center gap-3 hover:border-white/40 transition-colors duration-300 min-w-[120px]">
              <svg viewBox="0 0 24 24" className="w-9 h-9 text-white/55" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
              <span className="text-[9px] tracking-[0.25em] uppercase text-white/55">Running</span>
            </div>
            {/* Singing */}
            <div className="border border-white/20 px-8 py-6 flex flex-col items-center gap-3 hover:border-white/40 transition-colors duration-300 min-w-[120px]">
              <svg viewBox="0 0 24 24" className="w-9 h-9 text-white/55" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
              <span className="text-[9px] tracking-[0.25em] uppercase text-white/55">Singing</span>
            </div>
            {/* Doodling */}
            <div className="border border-white/20 px-8 py-6 flex flex-col items-center gap-3 hover:border-white/40 transition-colors duration-300 min-w-[120px]">
              <svg viewBox="0 0 24 24" className="w-9 h-9 text-white/55" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
              </svg>
              <span className="text-[9px] tracking-[0.25em] uppercase text-white/55">Doodling</span>
            </div>
          </div>
        </section>

      </div>

      <style>{`
        @media print {
          body { background: white !important; color: black !important; }
          .sticky { position: static !important; }
        }
      `}</style>
    </main>
  );
}
