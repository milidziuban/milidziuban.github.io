import type { Metadata } from "next";
import ProyectoGestiondeStock from "../../proyecto-gestion-stock";

export const metadata: Metadata = {
  title: "Gestión de Stock, control de inventario",
  description:
    "Diseño de una plataforma de control de inventario para equipos chicos que hoy manejan el stock entre planillas y registros manuales.",
  alternates: { canonical: "/proyecto-gestion-stock" },
  openGraph: {
    type: "article",
    title: "Gestión de Stock, control de inventario",
    description:
      "Diseño de una plataforma de control de inventario para equipos chicos que hoy manejan el stock entre planillas y registros manuales.",
    url: "/proyecto-gestion-stock",
    images: [{ url: "/Gestióndestock.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gestión de Stock, control de inventario",
    description:
      "Diseño de una plataforma de control de inventario para equipos chicos que hoy manejan el stock entre planillas y registros manuales.",
    images: ["/Gestióndestock.png"],
  },
};

export default function Page() {
  return <ProyectoGestiondeStock />;
}
