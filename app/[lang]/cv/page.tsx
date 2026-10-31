import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PrintButton from "@/components/PrintButton";
import { alternates, hasLocale, t, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { education, experience, hobbies, languages, skills } from "@/data/cv";

export async function generateMetadata({ params }: PageProps<"/[lang]/cv">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { cv } = getDictionary(lang);
  return { title: cv.title, description: cv.description, alternates: alternates(lang, "/cv") };
}

export default async function CVPage({ params }: PageProps<"/[lang]/cv">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const locale: Locale = lang;
  const dict = getDictionary(locale).cv;

  return (
    <main className="cv gut">
      <header className="cv-head">
        <div>
          <h1 className="display">Léa Medrano</h1>
          <p>{dict.role}</p>
          <div className="cv-contact">
            <span>{dict.location}</span>
            <a href="mailto:leamedrano@gmail.com">leamedrano@gmail.com</a>
            <a href="https://www.linkedin.com/in/leamedrano/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/lmdrn" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
        <PrintButton label={dict.print} />
      </header>

      <section className="cv-section">
        <h2 className="display">{dict.experience}</h2>
        {experience.map((job) => (
          <article key={`${job.company}-${t(job.period, "en")}`} className="cv-row">
            <div className="cv-when">
              <b>{t(job.period, locale)}</b>
              <span>{t(job.type, locale)}</span>
              <span>{t(job.location, locale)}</span>
            </div>
            <div>
              <h3>
                {t(job.role, locale)} <span>· {job.company}</span>
              </h3>
              <ul>
                {job.bullets.map((bullet, i) => (
                  <li key={i}>{t(bullet, locale)}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="cv-section">
        <h2 className="display">{dict.education}</h2>
        {education.map((edu) => (
          <article key={edu.school} className="cv-row">
            <div className="cv-when">
              <b>{edu.period}</b>
              <span>{t(edu.type, locale)}</span>
            </div>
            <div>
              <h3>
                {t(edu.degree, locale)} <span>· {edu.school}</span>
              </h3>
              <p className="m-0 text-muted">{t(edu.location, locale)}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="cv-section">
        <h2 className="display">{dict.skills}</h2>
        {skills.map((group) => (
          <div key={t(group.label, "en")} className="cv-row">
            <div className="cv-when">
              <b>{t(group.label, locale)}</b>
            </div>
            <p className="m-0">{group.items}</p>
          </div>
        ))}
      </section>

      <section className="cv-section">
        <h2 className="display">{dict.languages}</h2>
        <div className="cv-tags">
          {languages.map((l) => (
            <p key={t(l.lang, "en")} className="m-0">
              {t(l.lang, locale)} <span>{t(l.level, locale)}</span>
            </p>
          ))}
        </div>
      </section>

      <section className="cv-section">
        <h2 className="display">{dict.hobbies}</h2>
        <p className="cv-tags m-0">{hobbies.map((h) => t(h, locale)).join(", ")}</p>
      </section>
    </main>
  );
}
