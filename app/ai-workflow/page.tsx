import type { Metadata } from "next";
import AIWorkflow from "../../ai-workflow";

export const metadata: Metadata = {
  title: "Así trabajo con IA",
  description:
    "Cómo uso la inteligencia artificial en cuatro momentos concretos de mi proceso de diseño: research, assets, prototipado y copy. Este mismo sitio es parte de la evidencia.",
  alternates: { canonical: "/ai-workflow" },
  openGraph: {
    type: "article",
    title: "Así trabajo con IA",
    description:
      "Cómo uso la inteligencia artificial en cuatro momentos concretos de mi proceso de diseño: research, assets, prototipado y copy. Este mismo sitio es parte de la evidencia.",
    url: "/ai-workflow",
    images: [{ url: "/hero-milagros.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Así trabajo con IA",
    description:
      "Cómo uso la inteligencia artificial en cuatro momentos concretos de mi proceso de diseño: research, assets, prototipado y copy. Este mismo sitio es parte de la evidencia.",
    images: ["/hero-milagros.jpg"],
  },
};

export default function Page() {
  return <AIWorkflow />;
}
