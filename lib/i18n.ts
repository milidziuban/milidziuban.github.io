export type Lang = "es" | "en";

export type T = {
  nav: { inicio: string; sobreMi: string; proyectos: string; contacto: string; cv: string };
  a11y: { skip: string; menu: string; close: string; language: string; home: string };
  hero: {
    /** Etiqueta chica sobre el titular */
    eyebrow: string;
    h1a: string;
    h1em: string;
    h1b: string;
    desc: string;
    cta: string;
    linkedin: string;
  };
  /** Cinta de capacidades bajo el hero */
  capabilities: string[];
  about: {
    t1: string;
    t2: string;
    desc: string;
    portraitAlt: string;
    tools: string;
    experience: string;
    formation: string;
    jobs: { date: string; role: string; prep: string; company: string; desc: string }[];
    studies: { title: string; place: string; date: string; featured?: boolean }[];
  };
  projects: { t1: string; t2: string; lead: string; open: string; caseStudy: string };
  process: { t1: string; t2: string; desc: string; cta: string };
  contact: {
    t1: string;
    t2: string;
    desc: string;
    cv: string;
    email: string;
    linkedin: string;
    availability: string;
  };
  footer: { role: string; credit: string; top: string };
  other: { title: string };
};

export const translations: Record<Lang, T> = {
  es: {
    nav: { inicio: "Inicio", sobreMi: "Sobre mí", proyectos: "Proyectos", contacto: "Contacto", cv: "Descargar CV" },
    a11y: { skip: "Saltar al contenido", menu: "Abrir menú", close: "Cerrar menú", language: "Cambiar idioma", home: "Milagros Dziuban, ir al inicio" },
    hero: {
      eyebrow: "Diseñadora UX/UI · Portfolio",
      h1a: "Diseño",
      h1em: "experiencias",
      h1b: "digitales que conectan",
      desc: "Soy Milagros, diseñadora UX/UI enfocada en crear productos claros, funcionales y visualmente atractivos, centrados en las personas.",
      cta: "Ver proyectos",
      linkedin: "LinkedIn",
    },
    capabilities: [
      "Diseño UX",
      "Diseño UI",
      "Sistemas de diseño",
      "Prototipado",
      "Investigación con usuarios",
      "Pruebas de usabilidad",
      "Diseño de interacción",
      "Diseño asistido por IA",
    ],
    about: {
      t1: "Sobre",
      t2: "mí",
      desc: "Vengo del Diseño Industrial y desde 2023 me dedico al producto digital. Me interesa entender el contexto antes de proponer, y diseñar interfaces que la gente realmente quiera usar: claras, accesibles y consistentes.",
      portraitAlt: "Retrato de Milagros Dziuban",
      tools: "Herramientas",
      experience: "Experiencia",
      formation: "Formación",
      jobs: [
        { date: "Abr 2024 - Actualidad", role: "Diseño UX", prep: "en", company: "Avature", desc: "Diseño de producto, análisis de oportunidades de mejora en la experiencia y diseño de nuevas funcionalidades." },
        { date: "May 2023 - Abr 2024", role: "Diseño UX/UI", prep: "en", company: "Crombie", desc: "Diseño para clientes en el exterior. Coordinación de proyecto." },
        { date: "Ene 2023 - May 2023", role: "Diseño UX/UI", prep: "en", company: "Santa Fe Sistemas", desc: "Diseñadora UX/UI y análisis de la experiencia para detectar e implementar mejoras." },
      ],
      studies: [
        { title: "Licenciatura en Diseño Industrial", place: "Universidad Nacional del Litoral", date: "2017 - 2024", featured: true },
        { title: "Diplomatura en Game UX Design", place: "Docta Visual Arts Academy", date: "Ago 2025 - Ene 2026" },
        { title: "Diseño UX/UI Avanzado", place: "CoderHouse", date: "Ago - Nov 2022" },
        { title: "Diseño UX/UI", place: "CoderHouse", date: "Mar - Jun 2022" },
        { title: "Full Stack Developer", place: "SoyHenry", date: "Sep 2022 - Ene 2023" },
      ],
    },
    projects: {
      t1: "Algunos",
      t2: "proyectos",
      lead: "Trabajo más reciente",
      open: "Abrir proyecto",
      caseStudy: "Ver el caso completo",
    },
    process: {
      t1: "Así trabajo",
      t2: "con IA",
      desc: "Cómo uso la inteligencia artificial dentro de mi proceso de diseño, del research al prototipo funcional.",
      cta: "Ver mi workflow",
    },
    contact: {
      t1: "¿",
      t2: "Hablamos?",
      desc: "Si tenés un proyecto en mente o querés charlar sobre diseño, escribime por cualquiera de estos medios.",
      cv: "Descargar CV",
      email: "Escribime un mail",
      linkedin: "Ver mi perfil",
      availability: "Abierta a propuestas y colaboraciones",
    },
    footer: {
      role: "Diseñadora UX/UI",
      credit: "Diseñado y programado por Milagros Dziuban",
      top: "Volver arriba",
    },
    other: { title: "Otros proyectos" },
  },
  en: {
    nav: { inicio: "Home", sobreMi: "About", proyectos: "Projects", contacto: "Contact", cv: "Download CV" },
    a11y: { skip: "Skip to content", menu: "Open menu", close: "Close menu", language: "Switch language", home: "Milagros Dziuban, go to home" },
    hero: {
      eyebrow: "UX/UI Designer · Portfolio",
      h1a: "I design",
      h1em: "experiences",
      h1b: "that connect people",
      desc: "I'm Milagros, a UX/UI designer focused on building clear, functional and visually appealing products, always centered on people.",
      cta: "View projects",
      linkedin: "LinkedIn",
    },
    capabilities: [
      "UX Design",
      "UI Design",
      "Design Systems",
      "Prototyping",
      "User Research",
      "Usability Testing",
      "Interaction Design",
      "AI-assisted Design",
    ],
    about: {
      t1: "About",
      t2: "me",
      desc: "I come from Industrial Design and since 2023 I've been focused on digital products. I'm interested in understanding context before proposing solutions, and designing interfaces people actually want to use: clear, accessible and consistent.",
      portraitAlt: "Portrait of Milagros Dziuban",
      tools: "Tools",
      experience: "Experience",
      formation: "Education",
      jobs: [
        { date: "Apr 2024 - Present", role: "UX Design", prep: "at", company: "Avature", desc: "Product design, analysis of improvement opportunities in the experience, and design of new features." },
        { date: "May 2023 - Apr 2024", role: "UX/UI Design", prep: "at", company: "Crombie", desc: "Design for international clients. Project coordination." },
        { date: "Jan 2023 - May 2023", role: "UX/UI Design", prep: "at", company: "Santa Fe Sistemas", desc: "UX/UI designer and experience analysis to identify and implement improvements." },
      ],
      studies: [
        { title: "Bachelor's Degree in Industrial Design", place: "Universidad Nacional del Litoral", date: "2017 - 2024", featured: true },
        { title: "Diploma in Game UX Design", place: "Docta Visual Arts Academy", date: "Aug 2025 - Jan 2026" },
        { title: "Advanced UX/UI Design", place: "CoderHouse", date: "Aug - Nov 2022" },
        { title: "UX/UI Design", place: "CoderHouse", date: "Mar - Jun 2022" },
        { title: "Full Stack Developer", place: "SoyHenry", date: "Sep 2022 - Jan 2023" },
      ],
    },
    projects: {
      t1: "Selected",
      t2: "projects",
      lead: "Most recent work",
      open: "Open project",
      caseStudy: "Read the full case study",
    },
    process: {
      t1: "How I work",
      t2: "with AI",
      desc: "How I use artificial intelligence inside my design process, from research to a working prototype.",
      cta: "See my workflow",
    },
    contact: {
      t1: "Let's ",
      t2: "talk",
      desc: "If you have a project in mind or just want to chat about design, reach out through any of these channels.",
      cv: "Download CV",
      email: "Send me an email",
      linkedin: "See my profile",
      availability: "Open to new projects and collaborations",
    },
    footer: {
      role: "UX/UI Designer",
      credit: "Designed and coded by Milagros Dziuban",
      top: "Back to top",
    },
    other: { title: "Other projects" },
  },
};
