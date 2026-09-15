import type { Metadata } from "next";
import ProyectoFungiRitual from "../../proyecto-fungi-ritual";

export const metadata: Metadata = {
  title: "Fungi Ritual, identidad y landing",
  description:
    "Identidad y landing page para una marca conceptual de hongos medicinales. Proyecto de exploración visual.",
  alternates: { canonical: "/proyecto-fungi-ritual" },
  openGraph: {
    type: "article",
    title: "Fungi Ritual, identidad y landing",
    description:
      "Identidad y landing page para una marca conceptual de hongos medicinales. Proyecto de exploración visual.",
    url: "/proyecto-fungi-ritual",
    images: [{ url: "/imagen/Fungi.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fungi Ritual, identidad y landing",
    description:
      "Identidad y landing page para una marca conceptual de hongos medicinales. Proyecto de exploración visual.",
    images: ["/imagen/Fungi.png"],
  },
};

export default function Page() {
  return <ProyectoFungiRitual />;
}
