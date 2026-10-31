import type { Localized } from "@/lib/i18n";

export interface GalleryItem {
  src: string;
  title: Localized;
  year: string;
  width: number;
  height: number;
}

export interface Project {
  slug: string;
  title: string;
  client: Localized | null; // null = personal project
  year: Localized;
  image: string;
  link?: { href: string; kind: "site" | "github" | "steam" };
  description: Localized;
  role: Localized;
  stack: Localized;
  // Five colours, extracted from the project image (most present first)
  palette: string[];
  gallery?: GalleryItem[];
}

export const projects: Project[] = [
  {
    slug: "silicon-city",
    title: "Silicon City",
    client: "Polycorne Games",
    year: "2020 – 2021",
    image: "/projects/silicon-city.webp",
    link: { href: "https://store.steampowered.com/app/1121200/Silicon_City/", kind: "steam" },
    description: {
      en: "City builder where every citizen has an opinion. Play as an urban planner, a rural evangelist or a ruthless capitalist, and get elected best mayor.",
      fr: "City builder où chaque citoyen a son avis. Urbaniste, évangéliste rural ou capitaliste sans scrupules, construisez votre ville jusqu'à être élu meilleur maire.",
    },
    role: {
      en: "Game UI artist: UI prototyping, graphic assets and atlases, UI animation integrated in Unity, 3D character animation",
      fr: "UI artist : prototypage de l'interface, assets graphiques et atlas, animations d'UI intégrées dans Unity, animation de personnages 3D",
    },
    stack: "Photoshop, Illustrator, Blender, Unity",
    palette: ["#458FCC", "#A6A79A", "#84867A", "#39453C", "#5A665A"],
  },
  {
    slug: "playground",
    title: "Playground",
    client: "Playground Productions",
    year: "2023",
    image: "/projects/playground.webp",
    link: { href: "https://playground-prod.com", kind: "site" },
    description: {
      en: "Custom WordPress theme for a creative production company, with creative coding and an animated editorial layout.",
      fr: "Thème WordPress sur mesure pour une société de production créative, avec du creative coding et une mise en page éditoriale animée.",
    },
    role: { en: "Front-end and back-end development", fr: "Développement front-end et back-end" },
    stack: { en: "WordPress, PHP, JavaScript, creative coding", fr: "WordPress, PHP, JavaScript, creative coding" },
    palette: ["#000000", "#363636", "#575757", "#767676", "#B3B3B3"],
  },
  {
    slug: "excelson",
    title: "Excelson",
    client: "Excelson",
    year: "2023",
    image: "/projects/excelson.webp",
    link: { href: "https://www.excelson.com/en/", kind: "site" },
    description: {
      en: "Website for a premium acoustic solutions brand, with ACF fields and a product discovery flow.",
      fr: "Site pour une marque de solutions acoustiques haut de gamme, avec champs ACF et parcours de découverte des produits.",
    },
    role: { en: "WordPress theme development", fr: "Développement du thème WordPress" },
    stack: "WordPress, ACF, PHP",
    palette: ["#010101", "#DBD8D4", "#262726", "#E59856", "#B9682B"],
  },
  {
    slug: "agglo-fribourg",
    title: "Agglo Fribourg",
    client: "Agglomération de Fribourg",
    year: "2024",
    image: "/projects/agglo.webp",
    link: { href: "https://projets.agglo-fr.ch/", kind: "site" },
    description: {
      en: "Official bilingual site for the Fribourg agglomeration, with ACF content and smooth animations.",
      fr: "Site officiel bilingue de l'Agglomération de Fribourg, contenus ACF et animations fluides.",
    },
    role: { en: "WordPress theme development and animations", fr: "Développement du thème WordPress et animations" },
    stack: "WordPress, ACF, GSAP",
    palette: ["#FDFDFE", "#F6DDD9", "#C7CDD3", "#A7A9AA", "#E8A4C4"],
  },
  {
    slug: "radio-bascule",
    title: "Radio Bascule",
    client: "Radio Bascule",
    year: "2020",
    image: "/projects/radio-bascule.webp",
    link: { href: "https://radiobascule.ch/ecouter", kind: "site" },
    description: {
      en: "Podcast listening and browsing for a Swiss community radio.",
      fr: "Écoute et navigation des podcasts d'une radio associative suisse.",
    },
    role: { en: "Front-end development", fr: "Développement front-end" },
    stack: "Vue.js, WordPress",
    palette: ["#DED2E6", "#FCFBFC", "#632D85", "#9E7CB3", "#E2B7BA"],
  },
  {
    slug: "transcendence",
    title: "Transcendence",
    client: "42 Lausanne",
    year: "2024",
    image: "/projects/transcendence.webp",
    link: { href: "https://github.com/Madness807/ft_transcendence", kind: "github" },
    description: {
      en: "Multiplayer Pong over WebSockets, with OAuth2, 2FA, JWT sessions and tournament brackets.",
      fr: "Pong multijoueur en WebSocket, avec OAuth2, 2FA, sessions JWT et tableaux de tournoi.",
    },
    role: { en: "Full-stack development, team project", fr: "Développement full-stack, projet d'équipe" },
    stack: "TypeScript, WebSocket, OAuth2, JWT",
    palette: ["#1F1F1F", "#740276", "#471647", "#960498", "#C805CB"],
  },
  {
    slug: "ink",
    title: "Ink",
    client: null,
    year: { en: "2020 to now", fr: "depuis 2020" },
    image: "/illustrations/chrysanthemum.webp",
    description: {
      en: "Botanical ink drawings, each done in one session with no underdrawing.",
      fr: "Dessins botaniques à l'encre, chacun réalisé en une séance, sans croquis préalable.",
    },
    role: { en: "Drawing", fr: "Dessin" },
    stack: { en: "Ink, nib pen, paper", fr: "Encre, plume, papier" },
    palette: ["#FAFAFA", "#777777", "#585858", "#979797", "#B7B7B7"],
    gallery: [
      { src: "/illustrations/chrysanthemum.webp", title: "Chrysanthème", year: "2020", width: 1290, height: 1287 },
      { src: "/illustrations/elderflower.webp", title: { en: "Elderflower", fr: "Sureau" }, year: "2021", width: 1290, height: 1611 },
      { src: "/illustrations/arnica.webp", title: "Arnica", year: "2021", width: 1290, height: 1589 },
      { src: "/illustrations/ravinala.webp", title: "Ravinala", year: "2022", width: 1290, height: 1589 },
      { src: "/illustrations/waves.webp", title: { en: "Waves & Flora", fr: "Vagues et flore" }, year: "2023", width: 1290, height: 1600 },
    ],
  },
  {
    slug: "digital",
    title: "Digital",
    client: null,
    year: { en: "2022 to now", fr: "depuis 2022" },
    image: "/illustrations/digital/fire.webp",
    description: {
      en: "Character design in Procreate with bold colours and playful compositions.",
      fr: "Personnages dessinés sur Procreate, couleurs franches et compositions ludiques.",
    },
    role: { en: "Illustration", fr: "Illustration" },
    stack: "Procreate, iPad",
    palette: ["#5A28BD", "#CB8CFF", "#F79874", "#FDACF7", "#140548"],
    gallery: [
      { src: "/illustrations/digital/space.webp", title: { en: "Shooting Star", fr: "Étoile filante" }, year: "2023", width: 2048, height: 2048 },
      { src: "/illustrations/digital/fire.webp", title: { en: "On Fire", fr: "En feu" }, year: "2023", width: 2048, height: 2048 },
      { src: "/illustrations/digital/daisy.webp", title: "Daisy", year: "2023", width: 2048, height: 2048 },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
