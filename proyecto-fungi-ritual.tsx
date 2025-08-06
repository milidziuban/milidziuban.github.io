"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { NavigationHeader } from "./components/navigation-header";
import { ScrollReveal } from "./components/animated-components";
import Image from "next/image";
import TikTokEmbed from "@/components/TikTokEmbed";

export default function ProyectoFungiRitual() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationHeader />

      {/* Project Header */}
      <section className="px-6 py-32 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.h1
                className="text-5xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Proyecto <span className="font-normal">Fungi Ritual</span>
              </motion.h1>
              <motion.p
                className="text-gray-600 leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                Landing page que tiene como propósito principal presentar la
                esencia de la marca, transmitir confianza y facilitar el acceso
                a información clara sobre los productos disponibles. Fungi
                Ritual busca acercar estos poderosos aliados naturales a más
                personas, desde un enfoque consciente, accesible y transparente.
              </motion.p>
              <motion.div
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                whileHover={{
                  scale: 1.2,
                  backgroundColor: "#9b51e0",
                  rotateZ: 360,
                }}
              >
                <a
                  href="https://www.behance.net/gallery/230705755/Landing-Page-Fungi-Ritual" // Reemplazá por tu URL
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#9b51e0",
                      rotateZ: 360,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-white text-sm font-bold">Be</span>
                  </motion.div>
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div>
                <Image
                  src="/imagen/Fungi.png"
                  alt="PortadaFungi"
                  width={320}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Software Interface + Problem & Objective */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Software Interface - Izquierda */}
            <ScrollReveal>
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="overflow-hidden bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl">
                  <CardContent className="px-12 py-4">
                    <div className="grid md:grid-cols-1 gap-8 items-center">
                      <div className="text-white relative">
                        <div className="grid md: grid-cols-[2fr_1fr]">
                          <h2 className="text-5xl font-bold mb-6 font-space-grotesk">
                            Descubrí
                            <br />
                            Fungi Ritual
                          </h2>

                          <div className="relative w-full h-26 flex items-center justify-center mb-2">
                            <motion.div
                              className="absolute text-8xl z-10"
                              animate={{ y: [0, -10, 0] }}
                              transition={{
                                duration: 3,
                                repeat: Number.POSITIVE_INFINITY,
                              }}
                            >
                              🍄
                            </motion.div>
                          </div>
                        </div>
                        {/* Enhanced Mushroom Elements */}
                        {/* <div className="relative w-full h-64 flex items-center justify-center mb-8">
                        <motion.div
                          className="absolute text-8xl z-10"
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                        >
                          🍄
                        </motion.div>
                        <motion.div
                          className="absolute -top-4 -right-4 text-4xl z-20"
                          animate={{ rotateZ: [0, 15, 0] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          🍄
                        </motion.div>
                        <motion.div
                          className="absolute -bottom-2 -left-2 text-3xl z-20"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                        >
                          🍄
                        </motion.div>
                        <motion.div
                          className="absolute top-1/4 left-1/4 text-5xl z-0 opacity-50"
                          animate={{ rotateZ: [0, -10, 0] }}
                          transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                        >
                          🍄
                        </motion.div>
                        <motion.div
                          className="absolute bottom-1/4 right-1/4 text-6xl z-0 opacity-50"
                          animate={{ y: [0, 5, 0] }}
                          transition={{ duration: 2.8, repeat: Number.POSITIVE_INFINITY, delay: 0.8 }}
                        >
                          🍄
                        </motion.div>
                      </div> */}
                      </div>

                      <div className="relative">
                        <motion.div
                          className="bg-white rounded-2xl p-6 shadow-2xl"
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 4,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                        >
                          <div className="text-center">
                            <div className="text-purple-600 font-bold text-lg mb-4 font-space-grotesk">
                              Fungi Ritual
                            </div>
                            <div className="w-full h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg mb-4 flex items-center justify-center">
                              <span className="text-4xl">🍄</span>
                            </div>
                            <div className="space-y-2">
                              <div className="h-2 bg-gray-200 rounded"></div>
                              <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                              <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>

            {/* Problem & Objective - Derecha */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="space-y-12">
                {/* Problema */}
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Problema
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    En el marco de ampliar mi portfolio, identifiqué una
                    oportunidad para explorar el diseño de una landing page
                    vinculada al mundo de los hongos medicinales, un rubro en
                    expansión pero aún con poca representación digital clara y
                    atractiva.
                  </p>
                </div>

                {/* Objetivo */}
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Objetivo
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Diseñar una landing page ficticia para Fungi Ritual, una
                    marca conceptual de hongos medicinales, con el objetivo de
                    practicar y demostrar mi enfoque en diseño.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    El proyecto busca crear una experiencia clara, accesible y
                    estéticamente cuidada, que permita presentar la propuesta de
                    la marca, generar confianza visual e incentivar la descarga
                    de un catálogo en PDF con precios y stock actualizado.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Design Process Sections */}
      <ScrollReveal>
        <section className="px-6 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-1 gap-8 mb-16">
              {/* Wireframes */}
              {/* <motion.div
                className="relative h-full w-full flex items-center justify-center grid md:grid-cols-1"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-4xl font-bold text-gray-600 mb-6">
                  WireFrame
                </h2>
                <div className="relative w-full h-[2200px] bg-white rounded-2xl overflow-hidden">
                  <Image
                    src="/Lo-Fi.png"
                    alt="userinterview"
                    fill
                    // className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div> */}

              {/* Products */}
              <motion.div
                className="relative h-full w-full flex items-center justify-center grid md:grid-cols-1"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* <h2 className="text-4xl font-bold text-gray-600 mb-6">
                  LandingPage
                </h2> */}
                <div className="relative w-full h-1100 bg-white rounded-2xl overflow-hidden">
                  <Image
                    src="/Hi-Fi.png"
                    alt="userinterview"
                    fill
                    // className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </ScrollReveal>

 <ScrollReveal>
        <section className="px-6 py-8 bg-white">
  <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                Conocé el proceso
                </h2>
      <TikTokEmbed />
            </section>
      </ScrollReveal>

      {/* Footer CTA */}
      <section className="px-6 py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-gray-600 mb-6">Conocé más sobre este proyecto</p>
            <motion.div
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center mx-auto"
              whileHover={{
                scale: 1.2,
                backgroundColor: "#9b51e0",
                rotateZ: 360,
              }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-white text-sm font-bold">🍄</span>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
