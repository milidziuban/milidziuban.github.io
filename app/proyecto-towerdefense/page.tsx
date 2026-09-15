import type { Metadata } from "next";
import ProyectoTowerDefense from "../../proyecto-towerdefense";

export const metadata: Metadata = {
  title: "Game Design, análisis de un tower defense",
  description:
    "Análisis de un prototipo de tower defense para PC aplicando principios de UX Game Design: mecánicas, curva de aprendizaje y usabilidad del HUD.",
  alternates: { canonical: "/proyecto-towerdefense" },
  openGraph: {
    type: "article",
    title: "Game Design, análisis de un tower defense",
    description:
      "Análisis de un prototipo de tower defense para PC aplicando principios de UX Game Design: mecánicas, curva de aprendizaje y usabilidad del HUD.",
    url: "/proyecto-towerdefense",
    images: [{ url: "/GameDesign.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Game Design, análisis de un tower defense",
    description:
      "Análisis de un prototipo de tower defense para PC aplicando principios de UX Game Design: mecánicas, curva de aprendizaje y usabilidad del HUD.",
    images: ["/GameDesign.png"],
  },
};

export default function Page() {
  return <ProyectoTowerDefense />;
}
