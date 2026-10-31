import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import FitText from "@/components/FitText";
import TransitionLink from "@/components/TransitionLink";
import { alternates, hasLocale, t, type Locale } from "@/lib/i18n";
import { getDictionary, type Dictionary } from "@/lib/dictionaries";
import { getProject, projects } from "@/data/projects";

export const dynamicParams = false;
export const generateStaticParams = () => projects.map(({ slug }) => ({ slug }));

export async function generateMetadata({ params }: PageProps<"/[lang]/work/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const project = getProject(slug);
  if (!hasLocale(lang) || !project) return {};
  const description = t(project.description, lang);
  return {
    title: project.title,
    description,
    alternates: alternates(lang, `/work/${slug}`),
    openGraph: { title: `${project.title} | Léa Medrano`, description, url: `/${lang}/work/${slug}`, images: [project.image] },
  };
}

// Light swatches read as background, dark ones as text
function swatchLabel(hex: string, labels: Dictionary["project"]["swatch"]) {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance > 0.85 ? labels.background : luminance < 0.18 ? labels.text : labels.colour;
}

export default async function ProjectPage({ params }: PageProps<"/[lang]/work/[slug]">) {
  const { lang, slug } = await params;
  const project = getProject(slug);
  if (!hasLocale(lang) || !project) notFound();
  const locale: Locale = lang;
  const dict = getDictionary(locale).project;
  const next = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <main className="project gut">
      <TransitionLink href={`/${locale}#work`} className="back">
        <span aria-hidden="true">←</span> {dict.back}
      </TransitionLink>
      <FitText as="h1" mode="lines" maxVw={12} className="project-title display">
        <span className="fit-line">{project.title}</span>
      </FitText>
      <p className="project-lead">{t(project.description, locale)}</p>

      <div className="project-grid">
        <div>
          <dl className="facts">
            <div>
              <dt>{dict.client}</dt>
              <dd>{project.client ? t(project.client, locale) : dict.personal}</dd>
            </div>
            <div>
              <dt>{dict.year}</dt>
              <dd>{t(project.year, locale)}</dd>
            </div>
            <div>
              <dt>{dict.role}</dt>
              <dd>{t(project.role, locale)}</dd>
            </div>
            <div>
              <dt>{dict.stack}</dt>
              <dd>{t(project.stack, locale)}</dd>
            </div>
          </dl>
          {project.link && (
            <a className="pill" href={project.link.href} target="_blank" rel="noopener noreferrer">
              {dict.links[project.link.kind]} <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
        <Image
          className="project-shot"
          src={project.image}
          alt={project.title}
          width={1600}
          height={1000}
          sizes="(max-width: 820px) 100vw, 66vw"
          priority
        />
      </div>

      <section className="palette">
        <h2 className="display">{dict.palette}</h2>
        <ul className="swatches">
          {project.palette.map((hex) => (
            <li key={hex} className="swatch">
              <i style={{ background: hex }} />
              <b>{hex}</b>
              <span>{swatchLabel(hex, dict.swatch)}</span>
            </li>
          ))}
        </ul>
      </section>

      {project.gallery && (
        <section className="gallery">
          <h2 className="display">{dict.gallery}</h2>
          <div className="gallery-grid">
            {project.gallery.map((item) => (
              <figure key={item.src}>
                <Image
                  src={item.src}
                  alt={t(item.title, locale)}
                  width={item.width}
                  height={item.height}
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <figcaption>
                  {t(item.title, locale)} <span>{item.year}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <TransitionLink href={`/${locale}/work/${next.slug}`} className="next">
        <span>{dict.next}</span>
        <FitText as="strong" className="display">
          {next.title}
        </FitText>
      </TransitionLink>
    </main>
  );
}
