import type { Locale } from "./i18n";

// Rich text: plain strings, plus [string] for the emphasised parts
export type Rich = (string | [string])[];

const en = {
  meta: {
    title: "Léa Medrano, creative developer in Lausanne",
    description:
      "Portfolio of Léa Medrano, creative developer in Lausanne, Switzerland. Websites and web apps with WordPress, React, Next.js and Three.js, game UI, and pedagogy & tech at 42 Lausanne.",
    ogLocale: "en_US",
  },
  nav: { about: "About", work: "Work", contact: "Contact", cv: "CV", language: "Language" },
  hero: {
    lead: "Creative developer in Lausanne.",
    rest: "I build websites and web apps, and support the next generation of developers at 42 Lausanne.",
    status: "Open to collaborations",
  },
  about: {
    statement: [
      "I started in events and communication, moved into ",
      ["design and UX/UI"],
      ", then learned to ",
      ["code at 42 Lausanne"],
      ".",
    ] as Rich,
    bio: [
      ["Today I work in the ", ["pedagogy and tech team at 42 Lausanne"], "."],
      [
        "Alongside that, I build web projects that mix development, design and creative technology, and I keep drawing.",
      ],
    ] as Rich[],
    cv: "See my CV",
    skills: [
      { label: "Code", items: "JavaScript, TypeScript, React / Next.js, PHP, Python, C / C++, Ruby on Rails, Docker" },
      { label: "Web & design", items: "WordPress, ACF, Vue.js, GSAP, Figma, Photoshop, Illustrator, UI / UX" },
      { label: "3D & drawing", items: "Three.js, Blender, Unity, After Effects, Procreate, ink" },
    ],
  },
  work: {
    title: ["Selected", "work"],
    sub: "Eight projects, from a Steam game and WordPress themes to real-time apps and drawings.",
    open: "Open project",
  },
  contact: {
    title: ["Let's make", "something"],
    direct: "Prefer email? Write to me directly.",
    form: {
      name: "Name",
      email: "Email",
      message: "Your project in a few lines",
      send: "Send message",
      sending: "Sending…",
      sent: "Thanks, your message is on its way. I'll reply within a few days.",
      missing: "Please fill in your name, a valid email and a message.",
      failed: "The message couldn't be sent. Please try again, or write to me by email.",
    },
  },
  project: {
    back: "All work",
    client: "Client",
    year: "Year",
    role: "My role",
    stack: "Tools",
    palette: "Colour scheme",
    gallery: "Gallery",
    next: "Next project",
    personal: "Personal",
    links: { site: "Visit the site", github: "See it on GitHub", steam: "See it on Steam" },
    swatch: { background: "Background", text: "Text", colour: "Colour" },
  },
  cv: {
    title: "CV",
    description: "Curriculum vitae of Léa Medrano, creative developer in Lausanne.",
    back: "Portfolio",
    print: "Print or save as PDF",
    role: "Creative developer",
    location: "Lausanne, Switzerland",
    experience: "Experience",
    education: "Education",
    skills: "Skills",
    languages: "Languages",
    hobbies: "Hobbies",
  },
  consent: {
    text: "I use Google Analytics to see how many people visit this site. Is that OK with you?",
    accept: "Accept",
    decline: "Decline",
  },
};

export type Dictionary = typeof en;

const fr: Dictionary = {
  meta: {
    title: "Léa Medrano, creative developer à Lausanne",
    description:
      "Portfolio de Léa Medrano, creative developer à Lausanne, en Suisse. Sites et applications web avec WordPress, React, Next.js et Three.js, UI de jeu vidéo, et pédagogie et tech à 42 Lausanne.",
    ogLocale: "fr_CH",
  },
  nav: { about: "À propos", work: "Projets", contact: "Contact", cv: "CV", language: "Langue" },
  hero: {
    lead: "Creative developer à Lausanne.",
    rest: "Je crée des sites et des applications web, et j'accompagne la prochaine génération de développeurs à 42 Lausanne.",
    status: "Ouverte aux collaborations",
  },
  about: {
    statement: [
      "J'ai commencé dans l'événementiel et la communication, je suis passée au ",
      ["design et à l'UX/UI"],
      ", puis j'ai appris à ",
      ["coder à 42 Lausanne"],
      ".",
    ],
    bio: [
      ["Aujourd'hui, je travaille dans ", ["l'équipe pédagogie et tech de 42 Lausanne"], "."],
      [
        "En parallèle, je réalise des projets web qui mélangent développement, design et technologie créative, et je continue de dessiner.",
      ],
    ],
    cv: "Voir mon CV",
    skills: [
      { label: "Code", items: "JavaScript, TypeScript, React / Next.js, PHP, Python, C / C++, Ruby on Rails, Docker" },
      { label: "Web et design", items: "WordPress, ACF, Vue.js, GSAP, Figma, Photoshop, Illustrator, UI / UX" },
      { label: "3D et dessin", items: "Three.js, Blender, Unity, After Effects, Procreate, encre" },
    ],
  },
  work: {
    title: ["Quelques", "projets"],
    sub: "Huit projets, d'un jeu sur Steam aux thèmes WordPress, en passant par les applis temps réel et le dessin.",
    open: "Voir le projet",
  },
  contact: {
    title: ["On crée", "ensemble ?"],
    direct: "Vous préférez l'e-mail ? Écrivez-moi directement.",
    form: {
      name: "Nom",
      email: "E-mail",
      message: "Votre projet en quelques lignes",
      send: "Envoyer",
      sending: "Envoi…",
      sent: "Merci, votre message est bien parti. Je vous réponds dans les prochains jours.",
      missing: "Indiquez votre nom, un e-mail valide et un message.",
      failed: "Le message n'a pas pu être envoyé. Réessayez, ou écrivez-moi par e-mail.",
    },
  },
  project: {
    back: "Tous les projets",
    client: "Client",
    year: "Année",
    role: "Mon rôle",
    stack: "Outils",
    palette: "Palette",
    gallery: "Galerie",
    next: "Projet suivant",
    personal: "Personnel",
    links: { site: "Voir le site", github: "Voir sur GitHub", steam: "Voir sur Steam" },
    swatch: { background: "Fond", text: "Texte", colour: "Couleur" },
  },
  cv: {
    title: "CV",
    description: "Curriculum vitae de Léa Medrano, creative developer à Lausanne.",
    back: "Portfolio",
    print: "Imprimer ou enregistrer en PDF",
    role: "Creative developer",
    location: "Lausanne, Suisse",
    experience: "Expérience",
    education: "Formation",
    skills: "Compétences",
    languages: "Langues",
    hobbies: "Loisirs",
  },
  consent: {
    text: "J'utilise Google Analytics pour savoir combien de personnes visitent ce site. Ça vous va ?",
    accept: "Accepter",
    decline: "Refuser",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, fr };

export const getDictionary = (locale: Locale) => dictionaries[locale];
