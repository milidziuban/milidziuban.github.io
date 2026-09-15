import type { Lang } from "@/lib/i18n";

type Localized = Record<Lang, string>;
type LocalizedList = Record<Lang, string[]>;

export interface Project {
  id: string;
  title: string;
  /** Imagen de portada usada en la grilla y en "otros proyectos" */
  image: string;
  href: string;
  /** Una linea. Se muestra bajo el titulo en las tarjetas chicas. */
  subtitle: Localized;
  /** Parrafo corto de la grilla principal. */
  description: Localized;
  tags: LocalizedList;
  /** Los destacados son los que aparecen en la portada. */
  featured?: boolean;
  /** El primero de la lista se muestra a ancho completo. */
  lead?: boolean;
}

export const projects: Project[] = [
  {
    id: "wappoints",
    title: "Wappoints",
    image: "/Wappoints.png",
    href: "/proyecto-wappoints",
    featured: true,
    lead: true,
    subtitle: {
      es: "Plataforma de fidelización para comercios chicos",
      en: "Loyalty platform for small businesses",
    },
    description: {
      es: "Plataforma de fidelización para comercios chicos, diseñada y construida desde cero.",
      en: "Loyalty platform for small businesses, designed and built from scratch.",
    },
    tags: {
      es: ["UX/UI", "Web App"],
      en: ["UX/UI", "Web App"],
    },
  },
  {
    id: "dz-estudio",
    title: "DZ Estudio",
    image: "/imagen/dz/dz-home.png",
    href: "/proyecto-dz-estudio",
    featured: true,
    subtitle: {
      es: "Marca propia y e-commerce con panel de administración",
      en: "Own brand and e-commerce with an admin panel",
    },
    description: {
      es: "Mi marca de objetos textiles y su e-commerce completo: identidad, tienda con checkout real y panel de administración, diseñados y programados por mí.",
      en: "My own textile goods brand and its full e-commerce: identity, store with a real checkout and admin panel, designed and coded by me.",
    },
    tags: {
      es: ["UX/UI", "E-commerce", "Identidad"],
      en: ["UX/UI", "E-commerce", "Branding"],
    },
  },
  {
    id: "activa",
    title: "Proyecto Activa",
    image: "/Activa.png",
    href: "/proyecto-activa",
    featured: true,
    subtitle: {
      es: "Software de gestión para equipos internos",
      en: "Management software for internal teams",
    },
    description: {
      es: "Plataforma de gestión para optimizar procesos internos y centralizar información operativa.",
      en: "Management platform to optimize internal processes and centralize operational information.",
    },
    tags: {
      es: ["UX/UI", "App de escritorio", "Investigación"],
      en: ["UX/UI", "Desktop App", "Research"],
    },
  },
  {
    id: "jalife",
    title: "Proyecto Jalife",
    image: "/Jalife.png",
    href: "/proyecto-jalife",
    featured: true,
    subtitle: {
      es: "Rediseño de sitio institucional",
      en: "Redesign of a corporate site",
    },
    description: {
      es: "Rediseño y modernización de una landing con foco en navegación y contenidos.",
      en: "Redesign and modernization of a landing page focused on navigation and content.",
    },
    tags: {
      es: ["UX/UI", "Sitio web"],
      en: ["UX/UI", "Website"],
    },
  },
  {
    id: "gestion-stock",
    title: "Gestión de Stock",
    image: "/Gestióndestock.png",
    href: "/proyecto-gestion-stock",
    featured: true,
    subtitle: {
      es: "Control de inventario para depósito",
      en: "Inventory control for a warehouse",
    },
    description: {
      es: "Diseño desde cero de una plataforma de gestión y organización de stock.",
      en: "End-to-end design of a stock management and organization platform.",
    },
    tags: {
      es: ["UX/UI", "App de escritorio"],
      en: ["UX/UI", "Desktop App"],
    },
  },
  {
    id: "towerdefense",
    title: "Game Design",
    image: "/GameDesign.png",
    href: "/proyecto-towerdefense",
    featured: true,
    subtitle: {
      es: "Análisis de un tower defense para PC",
      en: "Analysis of a tower defense game for PC",
    },
    description: {
      es: "Diseño básico de un juego de tower defense realizado con fines educativos.",
      en: "Basic tower defense game design created for educational purposes.",
    },
    tags: {
      es: ["UX/UI", "Videojuego"],
      en: ["UX/UI", "Game"],
    },
  },
  {
    id: "houseplants",
    title: "HousePlants",
    image: "/imagen/HousePlant.png",
    href: "/proyecto-houseplant",
    subtitle: {
      es: "App móvil de cuidado de plantas",
      en: "Mobile app for plant care",
    },
    description: {
      es: "Aplicación móvil que acompaña el cuidado de plantas de interior con recordatorios y fichas por especie.",
      en: "Mobile app that supports indoor plant care with reminders and per species guides.",
    },
    tags: {
      es: ["UX/UI", "App móvil"],
      en: ["UX/UI", "Mobile App"],
    },
  },
  {
    id: "fungi-ritual",
    title: "Fungi Ritual",
    image: "/imagen/Fungi.png",
    href: "/proyecto-fungi-ritual",
    subtitle: {
      es: "Plataforma digital de hongos medicinales",
      en: "Digital platform for medicinal mushrooms",
    },
    description: {
      es: "Identidad y plataforma digital para una marca de hongos medicinales.",
      en: "Identity and digital platform for a medicinal mushroom brand.",
    },
    tags: {
      es: ["UX/UI", "Identidad"],
      en: ["UX/UI", "Branding"],
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(id: string) {
  return projects.find((p) => p.id === id);
}
