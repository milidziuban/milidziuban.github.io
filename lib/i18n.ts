export type Lang = "es" | "en";

export type T = {
  nav: { inicio: string; sobreMi: string; proyectos: string; contacto: string; cv: string };
  hero: { badge: string; h1a: string; h1b: string; h1c: string; desc: string; cta: string };
  about: {
    badge: string; t1: string; t2: string; desc: string; tools: string; experience: string; formation: string;
    jobs: { date: string; role: string; prep: string; company: string; desc: string }[];
    studies: { title: string; place: string; date: string; featured?: boolean }[];
  };
  projects: { badge: string; t1: string; t2: string; items: { desc: string }[] };
  contact: { badge: string; t1: string; t2: string; t3: string; desc: string; cv: string };
};

export const translations: Record<Lang, T> = {
  es: {
    nav: { inicio: "Inicio", sobreMi: "Sobre Mi", proyectos: "Proyectos", contacto: "Contacto", cv: "Descargar CV" },
    hero: {
      badge: "PORTFOLIO",
      h1a: "Diseño", h1b: "experiencias", h1c: "digitales que conectan",
      desc: "Soy Milagros, diseñadora UX/UI enfocada en crear productos claros, funcionales y visualmente atractivos, centrados en las personas.",
      cta: "Ver proyectos",
    },
    about: {
      badge: "SOBRE MÍ", t1: "Sobre", t2: "mí",
      desc: "Vengo del Diseño Industrial y desde 2023 me dedico al producto digital. Me interesa entender el contexto antes de proponer y diseñar interfaces que la gente realmente quiera usar — claras, accesibles y consistentes.",
      tools: "Herramientas", experience: "Experiencia", formation: "Formación",
      jobs: [
        { date: "Abr 2024 — Actualidad", role: "Diseño UX", prep: "en", company: "Avature", desc: "Diseño de producto y análisis para mejorar la experiencia de usuario." },
        { date: "May 2023 — Abr 2024", role: "Diseño UX/UI", prep: "en", company: "Crombie", desc: "Diseño para clientes en el exterior. Coordinación de proyecto." },
        { date: "Ene 2023 — May 2023", role: "Diseño UX/UI", prep: "en", company: "Santa Fe Sistemas", desc: "Diseñadora UX/UI freelance para empresa local." },
      ],
      studies: [
        { title: "Licenciatura en Diseño Industrial", place: "Universidad Nacional del Litoral", date: "2017 — 2024", featured: true },
        { title: "Diplomatura en Game UX Design", place: "Docta Visual Arts Academy", date: "Ago 2025 — Ene 2026" },
        { title: "Diseño UX/UI Avanzado", place: "CoderHouse", date: "Ago — Nov 2022" },
        { title: "Diseño UX/UI", place: "CoderHouse", date: "Mar — Jun 2022" },
        { title: "Full Stack Developer", place: "SoyHenry", date: "Sep 2022 — Ene 2023" },
      ],
    },
    projects: {
      badge: "TRABAJOS SELECCIONADOS", t1: "Algunos", t2: "proyectos",
      items: [
        { desc: "Plataforma de fidelización para comercios chicos, diseñada y construida desde cero con ayuda de AI." },
        { desc: "Plataforma de gestión para optimizar procesos internos y centralizar información operativa." },
        { desc: "Rediseño y modernización de landing con foco en navegación y contenidos." },
        { desc: "Diseño desde cero de plataforma de gestión y organización de stock." },
        { desc: "Diseño básico de juego de tower defense realizado con fines educativos." },
      ],
    },
    contact: {
      badge: "CONTACTO", t1: "¿", t2: "Hablamos", t3: "?",
      desc: "Si tenés un proyecto en mente o querés charlar sobre diseño, escribime por cualquiera de estos medios.",
      cv: "Descargar CV",
    },
  },
  en: {
    nav: { inicio: "Home", sobreMi: "About Me", proyectos: "Projects", contacto: "Contact", cv: "Download CV" },
    hero: {
      badge: "PORTFOLIO",
      h1a: "I design", h1b: "experiences", h1c: "that connect people",
      desc: "I'm Milagros, a UX/UI designer focused on building clear, functional and visually appealing products — always centered on people.",
      cta: "View projects",
    },
    about: {
      badge: "ABOUT ME", t1: "About", t2: "me",
      desc: "I come from Industrial Design and since 2023 I've been focused on digital products. I'm interested in understanding context before proposing solutions and designing interfaces people actually want to use — clear, accessible and consistent.",
      tools: "Tools", experience: "Experience", formation: "Education",
      jobs: [
        { date: "Apr 2024 — Present", role: "UX Design", prep: "at", company: "Avature", desc: "Product design and research to improve the user experience." },
        { date: "May 2023 — Apr 2024", role: "UX/UI Design", prep: "at", company: "Crombie", desc: "Design for international clients. Project coordination." },
        { date: "Jan 2023 — May 2023", role: "UX/UI Design", prep: "at", company: "Santa Fe Sistemas", desc: "Freelance UX/UI designer for a local company." },
      ],
      studies: [
        { title: "Bachelor's Degree in Industrial Design", place: "Universidad Nacional del Litoral", date: "2017 — 2024", featured: true },
        { title: "Diploma in Game UX Design", place: "Docta Visual Arts Academy", date: "Aug 2025 — Jan 2026" },
        { title: "Advanced UX/UI Design", place: "CoderHouse", date: "Aug — Nov 2022" },
        { title: "UX/UI Design", place: "CoderHouse", date: "Mar — Jun 2022" },
        { title: "Full Stack Developer", place: "SoyHenry", date: "Sep 2022 — Jan 2023" },
      ],
    },
    projects: {
      badge: "SELECTED WORKS", t1: "Some", t2: "projects",
      items: [
        { desc: "Loyalty platform for small businesses, designed and built from scratch with AI assistance." },
        { desc: "Management platform to optimize internal processes and centralize operational information." },
        { desc: "Redesign and modernization of a landing page focused on navigation and content." },
        { desc: "End-to-end design of a stock management and organization platform." },
        { desc: "Basic tower defense game design created for educational purposes." },
      ],
    },
    contact: {
      badge: "CONTACT", t1: "", t2: "Let's talk", t3: "!",
      desc: "If you have a project in mind or just want to chat about design, reach out through any of these channels.",
      cv: "Download CV",
    },
  },
};
