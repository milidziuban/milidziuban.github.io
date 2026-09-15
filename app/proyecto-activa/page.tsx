import type { Metadata } from "next";
import ProyectoActiva from "../../proyecto-activa";

export const metadata: Metadata = {
  title: "Proyecto Activa, software de gestión interna",
  description:
    "Plataforma de gestión para optimizar procesos internos y centralizar información operativa de un equipo administrativo.",
  alternates: { canonical: "/proyecto-activa" },
  openGraph: {
    type: "article",
    title: "Proyecto Activa, software de gestión interna",
    description:
      "Plataforma de gestión para optimizar procesos internos y centralizar información operativa de un equipo administrativo.",
    url: "/proyecto-activa",
    images: [{ url: "/Activa.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proyecto Activa, software de gestión interna",
    description:
      "Plataforma de gestión para optimizar procesos internos y centralizar información operativa de un equipo administrativo.",
    images: ["/Activa.png"],
  },
};

export default function Page() {
  return <ProyectoActiva />;
}
