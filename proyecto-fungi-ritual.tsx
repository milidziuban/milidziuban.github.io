"use client";

import { motion } from "framer-motion";
import { NavigationHeader } from "./components/navigation-header";
import { ScrollReveal } from "./components/animated-components";
import Image from "next/image";
import TikTokEmbed from "@/components/TikTokEmbed";
import { OtherProjects } from "./components/otherproject";
import { SiteFooter } from "./components/site-footer";

export default function ProyectoFungiRitual() {
  return (
    <div className="min-h-screen bg-paper">
      <NavigationHeader />

      {/* HERO */}
      <section className="relative px-6 py-32 bg-paper-2 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {["UX/UI", "Landing Page", "2025"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border border-hairline text-ink-2 font-manrope"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-5xl md:text-6xl font-medium tracking-tighter text-ink leading-[1.05] font-space-grotesk mb-6">
                Fungi{" "}
                <span className="font-instrument-serif italic font-normal text-brand">
                  Ritual
                </span>
              </h1>

              <p className="text-lg text-ink-2 max-w-xl leading-relaxed mb-10 font-manrope">
                Landing page que tiene como propósito principal presentar la
                esencia de la marca, transmitir confianza y facilitar el
                acceso a información clara sobre los productos. Fungi Ritual
                busca acercar estos poderosos aliados naturales a más
                personas, desde un enfoque consciente, accesible y
                transparente.
              </p>

              <div className="grid grid-cols-3 gap-6 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-widest text-ink-3 font-manrope mb-2">
                    Rol
                  </p>
                  <p className="text-ink font-medium font-space-grotesk">
                    UX/UI Designer
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-ink-3 font-manrope mb-2">
                    Tipo
                  </p>
                  <p className="text-ink font-medium font-space-grotesk">
                    Landing
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-ink-3 font-manrope mb-2">
                    Herramientas
                  </p>
                  <p className="text-ink font-medium font-space-grotesk">
                    Figma
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              className="relative flex justify-center"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/imagen/Fungi.png"
                  alt="Fungi Ritual preview"
                  width={500}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROBLEMA + OBJETIVO */}
      <section className="px-6 py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <ScrollReveal direction="left">
              <div>
                <span className="font-instrument-serif italic text-2xl text-brand-lite mb-3 block">
                  01
                </span>
                <h2 className="text-4xl md:text-5xl font-medium text-ink leading-[1.05] tracking-tighter font-space-grotesk mb-6">
                  Problema
                </h2>
                <p className="text-ink-2 leading-relaxed font-manrope">
                  En el marco de ampliar mi portfolio, identifiqué una
                  oportunidad para explorar el diseño de una landing page
                  vinculada al mundo de los hongos medicinales, un rubro en
                  expansión pero aún con poca representación digital clara y
                  atractiva.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div>
                <span className="font-instrument-serif italic text-2xl text-brand-lite mb-3 block">
                  02
                </span>
                <h2 className="text-4xl md:text-5xl font-medium text-ink leading-[1.05] tracking-tighter font-space-grotesk mb-6">
                  Objetivo
                </h2>
                <p className="text-ink-2 leading-relaxed mb-4 font-manrope">
                  Diseñar una landing page ficticia para Fungi Ritual, una
                  marca conceptual de hongos medicinales, con el objetivo de
                  practicar y demostrar mi enfoque en diseño.
                </p>
                <p className="text-ink-2 leading-relaxed font-manrope">
                  El proyecto busca crear una experiencia clara, accesible y
                  estéticamente cuidada, que permita presentar la propuesta
                  de la marca, generar confianza visual e incentivar la
                  descarga de un catálogo en PDF con precios y stock
                  actualizado.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* RESULTADO FINAL - Landing completa */}
      <section className="px-6 py-32 bg-paper">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-16 max-w-2xl">
              <span className="uppercase tracking-widest text-sm text-brand font-bold">
                RESULTADO
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-ink leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                Landing{" "}
                <span className="font-instrument-serif italic font-normal text-brand">
                  page
                </span>
              </h2>
              <p className="text-ink-2 mt-4 font-manrope text-lg">
                Diseño final de alta fidelidad con una estética cuidada y
                clara.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden border border-hairline/60 bg-white">
              <Image
                src="/Hi-Fi.png"
                alt="Landing Page Fungi Ritual"
                width={1400}
                height={1800}
                className="w-full h-auto object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PROCESO EN VIDEO */}
      <section className="px-6 py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-12 max-w-2xl">
              <span className="uppercase tracking-widest text-sm text-brand font-bold">
                PROCESO
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-ink leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                Conocé el{" "}
                <span className="font-instrument-serif italic font-normal text-brand">
                  proceso
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <TikTokEmbed />
          </ScrollReveal>
        </div>
      </section>

      <OtherProjects currentProjectId="fungi-ritual" />

      {/* CTA */}
      <section className="px-6 py-32 bg-paper-2">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-ink-2 mb-6 font-manrope">
              ¿Querés ver el caso completo?
            </p>
            <h2 className="text-4xl md:text-6xl font-medium text-ink leading-[1.05] tracking-tighter font-space-grotesk mb-10">
              Mirá el proyecto en{" "}
              <span className="font-instrument-serif italic font-normal text-brand">
                Behance
              </span>
            </h2>
            <a
              href="https://www.behance.net/gallery/230705755/Landing-Page-Fungi-Ritual"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-ink hover:bg-brand text-white px-6 py-4 rounded-full shadow-lg font-manrope transition"
            >
              Ver caso completo
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </ScrollReveal>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
