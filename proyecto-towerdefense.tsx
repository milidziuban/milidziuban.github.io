"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { NavigationHeader } from "./components/navigation-header";
import { ScrollReveal } from "./components/animated-components";
import Image from "next/image";
import { OtherProjects } from "./components/otherproject";
import { Button } from "./components/ui/button";

export default function ProyectoTowerDefense() {
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
                className="text-5xl font-regular text-gray-900 mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Proyecto{" "}
                <span className=" text-5xl font-bold text-gray-900 mb-6">
                  Tower Defense
                </span>
              </motion.h1>
              <motion.p
                className="text-gray-600 leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                Caso de estudio desarrollado en el curso de UX Game Design
                (Docta). Se analizó un juego de Tower Defense para PC, en estado
                de prototipo, desarrollado como ejercicio práctico para otras
                carreras.
              </motion.p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div>
                <Image
                  src="/imagen/gdheader.png"
                  alt="Portadatowerdefense"
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
            <ScrollReveal direction="right" delay={0.2}>
              <div className="space-y-12">
                {/* Problema */}
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Problema
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Al tratarse de un prototipo desarrollado con fines
                    educativos, el juego presenta dificultades en la claridad de
                    las mecánicas, la curva de aprendizaje y la comunicación de
                    objetivos al jugador, lo que impacta en la experiencia de
                    juego y en la comprensión de las decisiones estratégicas.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="space-y-12">
                {/* Objetivo */}
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Objetivo
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Analizar un prototipo de juego de Tower Defense aplicando
                    los principios de UX Game Design, evaluando la experiencia
                    del jugador, las mecánicas de juego, la curva de aprendizaje
                    y la usabilidad, con el fin de identificar oportunidades de
                    mejora y proponer soluciones de diseño.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/*Wireframes*/}
      <section className="px-6 pt-24 md:pt-32 pb-16 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 font-space-grotesk">
            Wireframes
          </h3>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="w-full h-90 relative">
                  <Image
                    src="/wireframeTD.png"
                    alt="Jalife Project"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <motion.p
                  className="text-gray-600 leading-relaxed mb-8 font-manrope text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  Los wireframes permitieron visualizar la estructura de uno de
                  los niveles del juego desde las primeras etapas del diseño.
                  Trabajé en varias iteraciones de baja fidelidad para definir
                  la disposición de los elementos del HUD, jerarquizar la
                  información y asegurar la usabilidad desde el inicio.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/*Flow*/}
      <section className="px-6 pt-24 md:pt-32 pb-16 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 font-space-grotesk">
            Flow
          </h3>
          <div className="max-w-6xl mx-auto">
            <div className="items-center">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <motion.p
                  className="text-gray-600 leading-relaxed mb-8 font-manrope text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  El flow se diseñó para mapear el recorrido del jugador dentro
                  del nivel, desde el inicio de la partida hasta la
                  finalización, identificando decisiones clave, acciones
                  principales y puntos de fricción. Este proceso permitió
                  analizar la claridad de los objetivos, la progresión del juego
                  y la coherencia entre las mecánicas, la interfaz y la
                  experiencia general del jugador.
                </motion.p>
              </motion.div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="w-full h-47 relative">
                  <Image
                    src="/flow.png"
                    alt="Jalife Project"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/*Screen Lo-Fi*/}
      <section className="px-6 pt-24 md:pt-32 pb-16 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 font-space-grotesk">
            Screen Lo-Fi
          </h3>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="w-full h-90 relative">
                  <Image
                    src="/wireframe1.png"
                    alt="Jalife Project"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <motion.p
                  className="text-gray-600 leading-relaxed mb-8 font-manrope text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  Las pantallas de baja fidelidad se utilizaron para explorar y
                  validar la disposición de los elementos de la interfaz, las
                  interacciones principales y la jerarquía visual.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/*Gameworld*/}
      <section className="px-6 pt-24 md:pt-32 pb-16 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 font-space-grotesk">
            Game World
          </h3>
          <div className="max-w-6xl mx-auto">
            <div className="items-center">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <motion.p
                  className="text-gray-600 leading-relaxed mb-8 font-manrope text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  El flow se diseñó para mapear el recorrido del jugador dentro
                  del nivel, desde el inicio de la partida hasta la
                  finalización, identificando decisiones clave, acciones
                  principales y puntos de fricción. Este proceso permitió
                  analizar la claridad de los objetivos, la progresión del juego
                  y la coherencia entre las mecánicas, la interfaz y la
                  experiencia general del jugador.
                </motion.p>
              </motion.div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="w-full h-107 relative">
                  <Image
                    src="/gameworld.png"
                    alt="Jalife Project"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Sistema de progreso*/}
      <section className="px-6 pt-24 md:pt-32 pb-16 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 font-space-grotesk">
            Sistema de progreso
          </h3>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="w-full h-100 relative">
                  <Image
                    src="/sistemadeprogreso.png"
                    alt="Jalife Project"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <motion.p
                  className="text-gray-600 leading-relaxed mb-8 font-manrope text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  Se puede incorporar un sistema de progreso adicional basado en
                  objetivos dentro de cada partida o recompensas al
                  finalizarlas, esto motivará al jugador.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="px-6 py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <OtherProjects currentProjectId="jalife" />
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-gray-900 mb-8 font-space-grotesk">
              ¿Te gustó este proyecto?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto font-manrope">
              Explora más de mi trabajo o contáctame para colaboraciones y
              proyectos.
            </p>
            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-full font-manrope"
                >
                  Volver al inicio
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="mailto:milagrosdizuban@gmail.com">
                  <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-manrope">
                    Contactame
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
