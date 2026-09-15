import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Space_Grotesk, Manrope } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Providers } from "@/components/providers";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});


// El repo se llama milidziuban.github.io por historia, pero GitHub Pages
// sirve ahi el README con Jekyll. El sitio real vive en Vercel: si esta
// constante apunta al dominio equivocado, el canonical y las OG images
// de todo el sitio resuelven a 404.
const siteUrl = "https://milidziuban.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Milagros Dziuban, diseñadora UX/UI",
    template: "%s | Milagros Dziuban",
  },
  description:
    "Portfolio de Milagros Dziuban: diseño de producto digital, investigación y sistemas de diseño. Casos de estudio de plataformas web, apps y e-commerce.",
  keywords: [
    "UX Designer",
    "UI Designer",
    "diseño de producto",
    "portfolio UX",
    "Milagros Dziuban",
    "design systems",
  ],
  authors: [{ name: "Milagros Dziuban" }],
  creator: "Milagros Dziuban",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "Milagros Dziuban",
    title: "Milagros Dziuban, diseñadora UX/UI",
    description:
      "Diseño de producto digital, investigación y sistemas de diseño. Casos de estudio de plataformas web, apps y e-commerce.",
    images: [
      {
        url: "/hero-milagros.jpg",
        width: 1200,
        height: 630,
        alt: "Milagros Dziuban, diseñadora UX/UI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Milagros Dziuban, diseñadora UX/UI",
    description:
      "Diseño de producto digital, investigación y sistemas de diseño.",
    images: ["/hero-milagros.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#fbfafa",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} ${GeistMono.variable} font-body bg-paper text-ink-2 antialiased`}
      >
        <Providers>{children}</Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
