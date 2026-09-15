import type { Metadata } from "next";
import ProyectoHousePlants from "../../proyecto-houseplants";

export const metadata: Metadata = {
  title: "HousePlants, app de cuidado de plantas",
  description:
    "Aplicación móvil que acompaña el cuidado de plantas de interior con recordatorios y fichas por especie.",
  alternates: { canonical: "/proyecto-houseplant" },
  openGraph: {
    type: "article",
    title: "HousePlants, app de cuidado de plantas",
    description:
      "Aplicación móvil que acompaña el cuidado de plantas de interior con recordatorios y fichas por especie.",
    url: "/proyecto-houseplant",
    images: [{ url: "/imagen/HousePlant.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HousePlants, app de cuidado de plantas",
    description:
      "Aplicación móvil que acompaña el cuidado de plantas de interior con recordatorios y fichas por especie.",
    images: ["/imagen/HousePlant.png"],
  },
};

export default function Page() {
  return <ProyectoHousePlants />;
}
