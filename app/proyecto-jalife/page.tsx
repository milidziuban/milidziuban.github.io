import type { Metadata } from "next";
import ProyectoJalife from "../../proyecto-jalife";

export const metadata: Metadata = {
  title: "Proyecto Jalife, rediseño de sitio institucional",
  description:
    "Rediseño y modernización de un sitio institucional, con foco en la navegación, la jerarquía de los servicios y la presentación de los contenidos.",
  alternates: { canonical: "/proyecto-jalife" },
  openGraph: {
    type: "article",
    title: "Proyecto Jalife, rediseño de sitio institucional",
    description:
      "Rediseño y modernización de un sitio institucional, con foco en la navegación, la jerarquía de los servicios y la presentación de los contenidos.",
    url: "/proyecto-jalife",
    images: [{ url: "/Jalife.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proyecto Jalife, rediseño de sitio institucional",
    description:
      "Rediseño y modernización de un sitio institucional, con foco en la navegación, la jerarquía de los servicios y la presentación de los contenidos.",
    images: ["/Jalife.png"],
  },
};

export default function Page() {
  return <ProyectoJalife />;
}
