export interface Project {
  id: string
  title: string
  subtitle: string
  image: string
  href: string
}

export const projects: Project[] = [
  {
    id: "activa",
    title: "Proyecto Activa",
    subtitle: "Software de Gestión",
    image: "/imagen/Activa.png",
    href: "/proyecto-activa",
  },
  {
    id: "houseplants",
    title: "Proyecto HousePlants",
    subtitle: "Aplicación móvil de cuidado de plantas",
    image: "/imagen/HousePlant.png",
    href: "/proyecto-houseplant",
  },
  {
    id: "fungi-ritual",
    title: "Proyecto Fungi Ritual",
    subtitle: "Plataforma digital de hongos medicinales",
    image: "/imagen/Fungi.png",
    href: "/proyecto-fungi-ritual",
  },
    {
    id: "jalife",
    title: "Proyecto Jalife",
    subtitle: "App",
    image: "/imagen/Jalife.png",
    href: "/proyecto-jalife",
  },
]
