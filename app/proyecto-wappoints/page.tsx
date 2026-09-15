import type { Metadata } from "next";
import ProyectoWappoints from "../../proyecto-wappoints";

export const metadata: Metadata = {
  title: "Wappoints, plataforma de fidelización",
  description:
    "Plataforma multi-negocio de programas de fidelización donde el cliente final se inscribe por WhatsApp sin descargar nada. Diseñada en Figma y construida desde cero con IA como copiloto.",
  alternates: { canonical: "/proyecto-wappoints" },
  openGraph: {
    type: "article",
    title: "Wappoints, plataforma de fidelización",
    description:
      "Plataforma multi-negocio de programas de fidelización donde el cliente final se inscribe por WhatsApp sin descargar nada. Diseñada en Figma y construida desde cero con IA como copiloto.",
    url: "/proyecto-wappoints",
    images: [{ url: "/Wappoints.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wappoints, plataforma de fidelización",
    description:
      "Plataforma multi-negocio de programas de fidelización donde el cliente final se inscribe por WhatsApp sin descargar nada. Diseñada en Figma y construida desde cero con IA como copiloto.",
    images: ["/Wappoints.png"],
  },
};

export default function Page() {
  return <ProyectoWappoints />;
}
