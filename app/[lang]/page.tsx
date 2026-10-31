import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import ProjectCards from "@/components/ProjectCards";
import ContactForm from "@/components/ContactForm";
import FitText from "@/components/FitText";
import Reveal from "@/components/Reveal";
import RichText from "@/components/RichText";
import TransitionLink from "@/components/TransitionLink";
import { hasLocale, t } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { projects } from "@/data/projects";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  const cards = projects.map((p) => ({
    href: `/${lang}/work/${p.slug}`,
    title: p.title,
    description: t(p.description, lang),
    meta: `${p.client ? t(p.client, lang) : dict.project.personal}, ${t(p.year, lang)}`,
    image: p.image,
  }));

  return (
    <main>
      <Hero dict={dict.hero} />

      <section className="about gut" id="about">
        <p className="about-statement">
          <RichText parts={dict.about.statement} />
        </p>
        <div className="about-grid">
          <div className="about-bio">
            {dict.about.bio.map((parts, i) => (
              <p key={i}>
                <RichText parts={parts} as="strong" />
              </p>
            ))}
            <TransitionLink href={`/${lang}/cv`} className="pill-outline">
              {dict.about.cv} <span aria-hidden="true">→</span>
            </TransitionLink>
          </div>
          <Reveal className="skills">
            {dict.about.skills.map((group) => (
              <div key={group.label}>
                <h3>{group.label}</h3>
                <p>{group.items}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="work gut" id="work">
        <div className="work-head">
          <FitText className="display">
            {dict.work.title[0]}
            <br />
            {dict.work.title[1]}
          </FitText>
          <p>{dict.work.sub}</p>
        </div>
        <ProjectCards cards={cards} openLabel={dict.work.open} />
      </section>

      <section className="contact gut" id="contact">
        <FitText className="display">
          {dict.contact.title[0]}
          <br />
          <span className="accent">{dict.contact.title[1]}</span>
        </FitText>
        <div className="contact-grid">
          <ContactForm dict={dict.contact.form} />
          <div className="contact-direct">
            <p>{dict.contact.direct}</p>
            <a className="mail" href="mailto:leamedrano@gmail.com">
              leamedrano@gmail.com
            </a>
            <div className="links">
              <a href="https://www.linkedin.com/in/leamedrano/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/lmdrn" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
