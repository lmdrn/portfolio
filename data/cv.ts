import type { Localized } from "@/lib/i18n";

export const experience: {
  period: Localized;
  role: Localized;
  company: string;
  location: Localized;
  type: Localized;
  bullets: Localized[];
}[] = [
  {
    period: { en: "Feb. 2024 to now", fr: "Depuis févr. 2024" },
    role: { en: "Pedagogy & Tech Assistant", fr: "Assistante pédagogie et tech" },
    company: "42 Lausanne",
    location: { en: "Renens, Switzerland", fr: "Renens, Suisse" },
    type: { en: "Full-time", fr: "Temps plein" },
    bullets: [
      {
        en: "Academic management of applicants and students, oversight of the \"pools\" and the selection process.",
        fr: "Suivi académique des candidats et des étudiants, encadrement des « piscines » et du processus de sélection.",
      },
      { en: "Management of student data through the 42 API.", fr: "Gestion des données étudiantes via l'API de 42." },
      {
        en: "Python scripting to automate processes for recurring events.",
        fr: "Scripts Python pour automatiser les processus des événements récurrents.",
      },
      {
        en: "Management of social media, the website and advertising campaigns.",
        fr: "Gestion des réseaux sociaux, du site web et des campagnes publicitaires.",
      },
      {
        en: "Graphic design for print and digital, and video editing.",
        fr: "Graphisme print et digital, et montage vidéo.",
      },
      {
        en: "Organisation of inclusive events and community management for the school.",
        fr: "Organisation d'événements inclusifs et animation de la communauté de l'école.",
      },
    ],
  },
  {
    period: { en: "Apr. 2022 to Nov. 2023", fr: "Avr. 2022 à nov. 2023" },
    role: { en: "WordPress Developer", fr: "Développeuse WordPress" },
    company: "Agence UpToYou",
    location: { en: "Fribourg, Switzerland", fr: "Fribourg, Suisse" },
    type: { en: "Permanent", fr: "CDI" },
    bullets: [
      {
        en: "Scope the technical challenges and product needs of clients, meeting deadlines and improving the user journey.",
        fr: "Cerner les enjeux techniques et les besoins produit des clients, en respectant les délais et en améliorant le parcours utilisateur.",
      },
      {
        en: "Build WordPress themes with content editable through ACF fields.",
        fr: "Créer des thèmes WordPress aux contenus modifiables via des champs ACF.",
      },
      { en: "Deploy, maintain and optimise websites.", fr: "Déployer, maintenir et optimiser les sites." },
      {
        en: "Set up SEO and GDPR tools while keeping sites secure.",
        fr: "Mettre en place les outils SEO et RGPD tout en assurant la sécurité des sites.",
      },
      {
        en: "Write templates and documentation for legacy code.",
        fr: "Rédiger des templates et la documentation du code existant.",
      },
      {
        en: "Deliver creative coding projects and uphold the agency's quality standards.",
        fr: "Réaliser des projets de creative coding et garantir les standards de qualité de l'agence.",
      },
    ],
  },
  {
    period: { en: "May 2020 to Apr. 2022", fr: "Mai 2020 à avr. 2022" },
    role: { en: "Front-end Developer, UX/UI Designer", fr: "Développeuse front-end, designer UX/UI" },
    company: "Freelance",
    location: { en: "Remote", fr: "À distance" },
    type: "Freelance",
    bullets: [
      { en: "Wireframes and mockups in Figma.", fr: "Wireframes et maquettes sur Figma." },
      { en: "Development and integration of WordPress themes.", fr: "Développement et intégration de thèmes WordPress." },
      { en: "Feature integration on Bolt.", fr: "Intégration de fonctionnalités sur Bolt." },
      {
        en: "Responsive design and feature development in Vue.js.",
        fr: "Design responsive et développement de fonctionnalités en Vue.js.",
      },
    ],
  },
  {
    period: { en: "Aug. 2020 to Nov. 2021", fr: "Août 2020 à nov. 2021" },
    role: "Game UI Artist",
    company: "Polycorne Games",
    location: { en: "Hybrid, remote and Annecy, France", fr: "Hybride, à distance et Annecy, France" },
    type: "Freelance",
    bullets: [
      {
        en: "UI prototyping for Silicon City, a management game available on Steam.",
        fr: "Prototypage de l'interface de Silicon City, jeu de gestion disponible sur Steam.",
      },
      {
        en: "Graphic assets and atlases in Photoshop and Illustrator.",
        fr: "Assets graphiques et atlas sur Photoshop et Illustrator.",
      },
      { en: "3D character animation in Blender.", fr: "Animation de personnages 3D sur Blender." },
      {
        en: "UI design and animation, integrated in Unity.",
        fr: "Design et animation de l'interface, intégrés dans Unity.",
      },
    ],
  },
  {
    period: { en: "Occasional", fr: "Ponctuel" },
    role: { en: "Front-end and UX/UI Teacher", fr: "Enseignante front-end et UX/UI" },
    company: "Le Wagon & SAE Institute Genève",
    location: { en: "Geneva, Switzerland", fr: "Genève, Suisse" },
    type: "Freelance",
    bullets: [
      { en: "Teaching Figma mockups and HTML, CSS, JS.", fr: "Enseignement des maquettes Figma et du HTML, CSS, JS." },
      {
        en: "Teaching how to build and set up WordPress themes.",
        fr: "Enseignement de la création et de la mise en place de thèmes WordPress.",
      },
    ],
  },
];

export const education: { period: string; type: Localized; degree: Localized; school: string; location: Localized }[] = [
  {
    period: "2022 – 2025",
    type: "Certification",
    degree: { en: "Software Developer", fr: "Développeuse logiciel" },
    school: "42 Lausanne",
    location: { en: "Renens, Switzerland", fr: "Renens, Suisse" },
  },
  {
    period: "2020",
    type: "Bootcamp",
    degree: { en: "Full-stack Developer, Ruby on Rails", fr: "Développeuse full-stack, Ruby on Rails" },
    school: "Le Wagon Lausanne",
    location: { en: "Lausanne, Switzerland", fr: "Lausanne, Suisse" },
  },
  {
    period: "2015 – 2016",
    type: { en: "Master's degree", fr: "Master" },
    degree: "Music Business Management",
    school: "University of Westminster",
    location: { en: "London, United Kingdom", fr: "Londres, Royaume-Uni" },
  },
  {
    period: "2010 – 2013",
    type: { en: "Bachelor's degree", fr: "Licence" },
    degree: { en: "Languages & International Trade", fr: "Langues et commerce international" },
    school: "Cardiff University & Université de Savoie",
    location: { en: "Cardiff (UK) & Chambéry (FR)", fr: "Cardiff (UK) et Chambéry (FR)" },
  },
];

export const skills: { label: Localized; items: string }[] = [
  { label: { en: "Programming", fr: "Langages" }, items: "C, C++, C#, Python, JavaScript, PHP, HTML5, CSS3" },
  {
    label: { en: "Frameworks, libraries & CMS", fr: "Frameworks, librairies et CMS" },
    items: "Django, Ruby on Rails, GSAP, WordPress, React, Next.js, TypeScript, Node.js, Electron",
  },
  { label: { en: "Dev tools", fr: "Outils de dev" }, items: "Docker, Git, Shell (Bash), Unix" },
  { label: { en: "Database", fr: "Base de données" }, items: "PostgreSQL" },
  { label: { en: "Graphic design", fr: "Graphisme" }, items: "Photoshop, Illustrator, InDesign, Figma, Adobe XD" },
  { label: { en: "Animation & video", fr: "Animation et vidéo" }, items: "After Effects, Animate, CapCut, Unity" },
  { label: "3D", items: "Three.js, Blender" },
];

export const languages: { lang: Localized; level: Localized }[] = [
  { lang: { en: "French", fr: "Français" }, level: { en: "Native", fr: "Langue maternelle" } },
  { lang: { en: "English", fr: "Anglais" }, level: "C1" },
  { lang: { en: "Spanish", fr: "Espagnol" }, level: "B2" },
  { lang: { en: "German", fr: "Allemand" }, level: "A2" },
];

export const hobbies: Localized[] = [
  "Longboard",
  { en: "Running", fr: "Course à pied" },
  { en: "Singing", fr: "Chant" },
  { en: "Doodling", fr: "Gribouillage" },
];
