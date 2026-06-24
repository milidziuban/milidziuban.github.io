import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import { Manrope } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import { Providers } from "@/components/providers"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: "Milagros Dziuban - UX/UI Designer",
  description: "Portfolio de Milagros Dziuban - Diseñadora UX/UI",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <style>{`
html {

  font-family: ${manrope.style.fontFamily};

  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
    --font-manrope: ${manrope.variable};
  --font-space-grotesk: ${spaceGrotesk.variable};
  --font-instrument-serif: ${instrumentSerif.variable};
}
        `}</style>
      </head>
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} ${instrumentSerif.variable} font-manrope`}
      >
        <Providers>{children}</Providers>
         <SpeedInsights />
         <Analytics />
      </body>
    </html>
  );
}
