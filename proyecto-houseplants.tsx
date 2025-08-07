"use client";

import { motion } from "framer-motion";
import { NavigationHeader } from "./components/navigation-header";
import { ScrollReveal } from "./components/animated-components";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { OtherProjects } from "./components/otherproject";

export default function ProyectoHousePlants() {
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
                Proyecto <span className="font-normal">HousePlants</span>
              </motion.h1>
              <motion.p
                className="text-gray-600 leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                Aplicación móvil diseñada para ayudar a los usuarios a
                diagnosticar y cuidar sus plantas de interior de manera sencilla
                y efectiva. Esta app permite identificar problemas comunes como
                plagas, enfermedades o errores de riego, y brinda
                recomendaciones personalizadas para el cuidado diario de cada
                planta.
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
                  href="https://www.behance.net/gallery/230158335/HousePlants" // Reemplazá por tu URL
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
                  src="/imagen/HousePlant.png"
                  alt="PortadaActiva"
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
            <ScrollReveal direction="left">
              <section>
                <div className="max-w-6xl mx-auto">
                  <div className="bg-gradient-to-r from-green-100 via-emerald-50 to-teal-50 rounded-3xl p-10 relative overflow-hidden">
                    <div className="text-center mb-4">
                      <h2 className="text-6xl font-bold text-gray-400 mb-4">
                        HOUSE
                      </h2>
                      <h2 className="text-6xl font-bold text-green-600 -mt-4">
                        PLANT
                      </h2>
                    </div>

                    <div className="flex justify-center items-center relative">
                      {/* Mobile mockups */}
                      <motion.div
                        className="relative right-10 z-10 "
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-64 h-96 bg-white rounded-3xl shadow-2xl border-8 border-gray-200 relative overflow-hidden">
                          <div className="p-4">
                            <div className="h-6 bg-green-200 rounded mb-4"></div>
                            <div className="h-32 bg-green-100 rounded mb-4 flex items-center justify-center">
                              <span className="text-4xl">🌿</span>
                            </div>
                            <div className="space-y-2">
                              <div className="h-3 bg-gray-200 rounded"></div>
                              <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                            </div>
                            <div className="mt-4 h-8 bg-green-500 rounded"></div>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        className="absolute right-1 top-8 z-20"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-56 h-80 bg-white rounded-3xl shadow-xl border-6 border-gray-200 relative overflow-hidden">
                          <div className="p-3">
                            <div className="h-4 bg-green-200 rounded mb-3"></div>
                            <div className="h-24 bg-green-100 rounded mb-3 flex items-center justify-center">
                              <span className="text-2xl">🌿</span>
                            </div>
                            <div className="space-y-1">
                              <div className="h-2 bg-gray-200 rounded"></div>
                              <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Decorative plants */}
                      <motion.div
                        className="absolute -left-12 top-0 text-6xl"
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      >
                        🌿
                      </motion.div>
                      <motion.div
                        className="absolute -right-16 bottom-0 text-5xl"
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                          duration: 2.5,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: 0.5,
                        }}
                      >
                        🌱
                      </motion.div>
                      <motion.div
                        className="absolute left-8 -bottom-4 text-4xl"
                        animate={{ rotateZ: [0, 5, 0] }}
                        transition={{
                          duration: 4,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      >
                        🍃
                      </motion.div>
                    </div>
                  </div>
                </div>
              </section>
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
                    Muchas personas que tienen plantas de interior,
                    especialmente quienes están dando sus primeros pasos en el
                    cuidado de plantas, enfrentan dificultades para reconocer
                    problemas como plagas, enfermedades, falta o exceso de
                    riego, o condiciones inadecuadas de luz.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    La información disponible suele ser confusa, poco confiable
                    o no está adaptada a sus necesidades, lo que genera
                    frustración y, muchas veces, la pérdida de la planta.
                  </p>
                </div>

                {/* Objetivo */}
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Objetivo
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Desarrollar una aplicación móvil intuitiva y accesible que
                    ayude a los usuarios a diagnosticar rápidamente los
                    problemas de sus plantas de interior y brindarles
                    recomendaciones claras y personalizadas para su cuidado.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    La app busca fomentar una experiencia de cuidado más
                    consciente, educativa y satisfactoria, independientemente
                    del nivel de conocimiento del usuario.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Herramientas utilizadas */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Herramientas utilizadas
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {/* Herramienta 1 */}
            <div>
              <div className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold">Entrevistas</h3>
              <p className="text-gray-600 text-sm mt-2">
                Hablamos con usuarios para conocer sus necesidades,
                comportamientos, motivaciones y frustraciones. Esto nos permite
                obtener insights reales desde su perspectiva.
              </p>
            </div>

            {/* Herramienta 2 */}
            <div>
              <div className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold">Mapa de empatía</h3>
              <p className="text-gray-600 text-sm mt-2">
                Ayuda a comprender mejor el contexto emocional y cognitivo del
                usuario, para diseñar soluciones alineadas con sus verdaderas
                necesidades.
              </p>
            </div>

            {/* Herramienta 3 */}
            <div>
              <div className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold">Puntos de dolor</h3>
              <p className="text-gray-600 text-sm mt-2">
                Son los problemas o frustraciones que experimentan los usuarios
                en su recorrido. Identificarlos permite resolver lo que
                realmente genera malestar o fricción.
              </p>
            </div>

            {/* Herramienta 4 */}
            <div>
              <div className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold">User Persona</h3>
              <p className="text-gray-600 text-sm mt-2">
                Arquetipo del usuario ideal, construido a partir de datos
                reales. Resume características, objetivos, necesidades y
                comportamientos.
              </p>
            </div>

            {/* Herramienta 5 */}
            <div>
              <div className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                5
              </div>
              <h3 className="text-lg font-semibold">Mapa de experiencia</h3>
              <p className="text-gray-600 text-sm mt-2">
                Visualiza el recorrido del usuario a través de una experiencia o
                producto, incluyendo acciones, emociones, pensamientos y puntos
                de contacto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Interviews */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Imagen */}
            <ScrollReveal direction="left">
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="hallazgos.png"
                  alt="arquitectura"
                  width={320}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </ScrollReveal>

            {/* Texto */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="space-y-12">
                {/* Problema */}
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Hallazgos
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Durante la investigación surgieron frases clave que revelan
                    las emociones e inseguridades de los usuarios al enfrentarse
                    a un problema con sus plantas. Muchos expresaron miedo a
                    “hacer algo mal” o “no saber qué está pasando”. Este insight
                    fue clave para diseñar una experiencia clara, comprensiva y
                    no juzgadora.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* User Persona */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Texto */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="space-y-12">
                {/* Problema */}
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    User Persona
                  </h2>
                  <p className="text-gray-900 leading-relaxed mb-6 font-bold">
                    Paula
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    📍 32 años - Vive en un departamento en la ciudad
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    💼 Trabaja de forma híbrida y pasa mucho tiempo en casa
                  </p>{" "}
                  <p className="text-gray-600 leading-relaxed mb-4">
                    🌱 Tiene varias plantas pero poca experiencia en jardinería
                  </p>
                  <p className="italic text-sm text-gray-600 leading-relaxed mb-3 font-light">
                    “Si una planta se pone fea, tardo mucho en darme cuenta de
                    lo que tiene.”
                  </p>
                  <p className="italic text-sm text-gray-600 leading-relaxed mb-3 font-light">
                    “A veces intento soluciones que encuentro en Google, pero no
                    sé si están bien.”
                  </p>
                  <p className="italic text-sm text-gray-600 leading-relaxed mb-3">
                    “Necesito que alguien me diga qué hacer con una planta sin
                    tener que investigar horas.”
                  </p>
                  <p className="text-gray-900 leading-relaxed mb-6 font-bold">
                    Su perfil fue clave para diseñar una solución empática y
                    clara, enfocada en la accesibilidad del lenguaje y la
                    facilidad de uso.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Imagen */}
            <ScrollReveal direction="left">
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="userpersona.png"
                  alt="arquitectura"
                  width={320}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Screens */}
      <ScrollReveal>
        <section className="px-6 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            {/* <h2 className="text-4xl font-bold text-gray-600 mb-12">Screens</h2> */}

            {/* Imagen de la pantalla */}

            <motion.div
              className="relative h-full w-full flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-[800px] bg-white overflow-hidden">
                <Image
                  src="/Screens.png"
                  alt="screens"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>

      {/* Mobile Screens Showcase */}
      {/* <ScrollReveal>
        <section className="px-6 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { title: "Home", bg: "bg-green-100", icon: "🏠" },
                { title: "Diagnostic", bg: "bg-blue-100", icon: "🔍" },
                { title: "My plants", bg: "bg-purple-100", icon: "🌿" },
                { title: "Reminders", bg: "bg-yellow-100", icon: "⏰" },
              ].map((screen, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  viewport={{ once: true }}
                >
                  <div className="w-full h-96 bg-white rounded-2xl shadow-lg border-4 border-gray-200 relative overflow-hidden">
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-semibold">
                          {screen.title}
                        </span>
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        </div>
                      </div>
                      <div
                        className={`h-24 ${screen.bg} rounded-lg mb-4 flex items-center justify-center`}
                      >
                        <span className="text-3xl">{screen.icon}</span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-gray-200 rounded"></div>
                        <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                      </div>
                      <div className="mt-4">
                        <div className="h-6 bg-green-500 rounded"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal> */}

      {/* Other Projects Section */}
      <OtherProjects currentProjectId="houseplants" />

      {/* Footer CTA */}
      <section className="px-6 py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-gray-600 mb-6">Conocé más sobre este proyecto</p>
            <a
              href="https://www.behance.net/gallery/230158335/HousePlants" // Reemplazá por tu URL
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center mx-auto"
                whileHover={{
                  scale: 1.2,
                  backgroundColor: "#22c55e",
                  rotateZ: 360,
                }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-white text-sm font-bold">🌱</span>
              </motion.div>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
