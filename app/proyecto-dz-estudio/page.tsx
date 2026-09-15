import type { Metadata } from "next";
import ProyectoDzEstudio from "../../proyecto-dz-estudio";

export const metadata: Metadata = {
  title: "DZ Estudio, marca propia y e-commerce",
  description:
    "Mi marca de objetos textiles y su e-commerce completo: identidad, sistema de diseño, tienda con checkout real y panel de administración. Diseñado y programado por mí.",
  alternates: { canonical: "/proyecto-dz-estudio" },
  openGraph: {
    type: "article",
    title: "DZ Estudio, marca propia y e-commerce",
    description:
      "Mi marca de objetos textiles y su e-commerce completo: identidad, sistema de diseño, tienda con checkout real y panel de administración. Diseñado y programado por mí.",
    url: "/proyecto-dz-estudio",
    images: [{ url: "/imagen/dz/dz-home.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DZ Estudio, marca propia y e-commerce",
    description:
      "Mi marca de objetos textiles y su e-commerce completo: identidad, sistema de diseño, tienda con checkout real y panel de administración. Diseñado y programado por mí.",
    images: ["/imagen/dz/dz-home.png"],
  },
};

export default function Page() {
  return <ProyectoDzEstudio />;
}
