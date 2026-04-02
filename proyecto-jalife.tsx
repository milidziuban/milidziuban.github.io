"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { NavigationHeader } from "./components/navigation-header";
import { ScrollReveal } from "./components/animated-components";
import { OtherProjects } from "./components/otherproject";

export default function ProyectoJalife() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationHeader />

      {/* Hero Section */}

      <section className="relative px-6 py-32 bg-[#f5f7fb] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              {/* tags */}
              <div className="flex gap-3 mb-6 text-sm text-gray-600">
                <span className="px-3 py-1 bg-white rounded-full border">
                  Diseño UX/UI
                </span>
                <span className="px-3 py-1 bg-white rounded-full border">
                  Website
                </span>
                <span className="px-3 py-1 bg-white rounded-full border">
                  2025
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Proyecto <span className="text-red-500 font-bold">Jalife</span>
              </h1>

              <p className="text-lg text-gray-600 max-w-xl leading-relaxed mb-10">
                Proyecto enfocado en rediseñar la pagina web de la marca,
                optimizando la experiencia de navegación y la presentación de
                sus productos. Se trabajó en una interfaz más limpia, actual y
                funcional, con una estructura visual coherente, mejoras en
                usabilidad y un diseño que refleja mejor la esencia de la
                empresa.
              </p>

              <div className="grid grid-cols-3 gap-6 text-sm">
                <div>
                  <p className="text-gray-400 mb-1">Rol</p>
                  <p className="text-gray-900 font-medium">UX/UI Designer</p>
                </div>

                <div>
                  <p className="text-gray-400 mb-1">Duración</p>
                  <p className="text-gray-900 font-medium">4 Semanas</p>
                </div>

                <div>
                  <p className="text-gray-400 mb-1">Herramientas</p>
                  <p className="text-gray-900 font-medium">Figma</p>
                </div>
              </div>
            </div>

            <motion.div
              className="relative flex justify-center"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="rounded-2xl overflow-hidden"
                transition={{ type: "spring", stiffness: 120 }}
              >
                <Image
                  src="/imagen/jalife1.png"
                  alt="Activa preview"
                  width={500}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </motion.div>

              <div className="absolute -bottom-6 w-[70%] h-10 bg-indigo-500/20 blur-2xl rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem & Objective */}
      <section className="bg-gray-100">
        <section className="px-6 pb-12 pt-12 bg-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-21 items-center">
              <ScrollReveal direction="right" delay={0.2}>
                <div className="space-y-12">
                  {/* Problema */}
                  <div>
                    <span className="text-2xl font-bold text-black-800 font-bold">
                      Problema
                    </span>

                    <p className="text-gray-600 leading-relaxed mb-2">
                      El sitio web presentaba una estructura visual poco clara y
                      dificultades de navegación que afectaban la comprensión de
                      sus servicios y productos.
                    </p>

                    <p className="text-gray-600 leading-relaxed">
                      Esto generaba una percepción poco profesional de la marca
                      y complicaba el proceso de encontrar información
                      relevante.
                    </p>
                  </div>

                  {/* Objetivo */}
                  <div>
                    <span className="text-2xl font-bold text-black-800 font-bold">
                      Objetivo
                    </span>

                    <p className="text-gray-600 leading-relaxed">
                      Rediseñar el sitio web para mejorar la experiencia del
                      usuario mediante una interfaz moderna, clara y funcional.
                    </p>

                    <p className="text-gray-600 leading-relaxed">
                      Lograr una navegación intuitiva, una presentación visual
                      atractiva y alineada con la identidad de la marca, y una
                      estructura que facilite el acceso rápido a la información
                      clave.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.2}>
                <div className="relative w-full max-w-[400px] h-auto mx-auto ">
                  <Image
                    src="/Negociacion.webp"
                    alt="Jalife Project"
                    width={400}
                    height={300}
                    className="object-contain w-full h-auto rounded-3xl"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </section>

      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto min-h-100 items-center ">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-gray-900 mb-2 font-space-grotesk">
              Insights, hallazgos, puntos de dolor
            </h2>
            <p className="text-gray-600 mb-12 font-manrope text-lg">
              Conceptos clave que guiaron el diseño
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Mala organización de la información",
                icon: "📑",
                color: "bg-yellow-200",
                rotation: "-3deg",
              },
              {
                title:
                  "Los servicios que se querían vender no llamaban la atención",
                icon: "👩🏽‍💻",
                color: "bg-pink-200",
                rotation: "2deg",
              },
              {
                title:
                  "La página de contactos no representaba lo que se quería",
                icon: "📞",
                color: "bg-blue-200",
                rotation: "-2deg",
              },
              {
                title: "Las imagenes son poco representativas",
                icon: "🖼️",
                color: "bg-green-200",
                rotation: "3deg",
              },
            ].map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08, rotateZ: 5 }}
                className="h-full"
              >
                <div
                  className={`${insight.color} p-10 rounded-lg shadow-lg h-full w-full flex flex-col items-center justify-center text-center relative overflow-hidden`}
                  style={{
                    transform: `perspective(1000px) rotateZ(${insight.rotation}) rotateX(2deg)`,
                    boxShadow:
                      "0 10px 25px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.5)",
                  }}
                >
                  {/* Post-it shadow effect */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div
                      className="absolute inset-0 rounded-lg"
                      style={{
                        boxShadow: "inset 0 2px 4px rgba(255,255,255,0.8)",
                      }}
                    ></div>
                  </div>

                  {/* Pin effect */}
                  <motion.div
                    className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full shadow-md"
                    animate={{ y: [0, 2, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <div className="absolute inset-1 bg-red-400 rounded-full"></div>
                  </motion.div>

                  <div className="relative z-10">
                    <motion.div
                      className="text-5xl mb-4"
                      animate={{ rotateZ: [0, 5, -5, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      {insight.icon}
                    </motion.div>
                    <h3 className="text-sm font-bold text-gray-800 mb-2 font-space-grotesk leading-tight">
                      {insight.title}
                    </h3>
                  </div>

                  {/* Crease effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-black opacity-5"></div>
                </div>
              </motion.div>
            ))}
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
                    src="/imagen/jalife2.png"
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
                  Como parte del proceso de rediseño, se desarrollaron
                  wireframes que permitieron definir la estructura del sitio y
                  organizar la información de manera clara y jerárquica.
                </motion.p>
                <motion.p
                  className="text-gray-600 leading-relaxed mb-8 font-manrope text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  A partir de esta base, se trabajó en una interfaz más limpia,
                  actual y funcional, optimizando la navegación y mejorando la
                  presentación de los productos, con una experiencia más
                  coherente y alineada a la identidad de la marca.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/*Section definitions*/}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 font-space-grotesk">
            Hero section
          </h3>
          <div className="grid md:grid-cols-2 gap-8 items-center relative">
            {/* Center image/GIF */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full max-w-[640px] mx-auto">
                <Image
                  src="/1.gif"
                  alt="Mockup Jalife Brothers"
                  width={1200}
                  height={800}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </motion.div>

            <div className="ml-12 grid gap-8 items-center relative">
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed font-manrope text-sm">
                  <span className="font-bold text-gray-900">
                    Rediseño UI/UX:
                  </span>{" "}
                  Presentación visual del proyecto mostrando la nueva interfaz
                  limpia, moderna y alineada con la identidad de la marca,
                  diseñada para facilitar la navegación y destacar los servicios
                  principales
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed font-manrope text-sm">
                  <span className="font-bold text-gray-900">Grid Layout:</span>{" "}
                  Distribución de contenido organizada mediante cuadrículas para
                  mejorar la lectura, jerarquía de información y flujo visual
                  intuitivo dentro de la página
                </p>
              </div>

              <div className="space-y-4 relative">
                <p className="text-gray-600 leading-relaxed font-manrope text-sm">
                  <span className="font-bold text-gray-900">Navbar:</span> Barra
                  de navegación pensada para desaparecer al hacer scroll down y
                  reaparecer al subir, mejorando la legibilidad sin perder
                  accesibilidad a las secciones clave
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 font-space-grotesk">
            Body section
          </h3>
          <div className="grid md:grid-cols-2 gap-8 items-center relative">
            <div className="mr-12 grid gap-8 items-center relative">
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed font-manrope text-sm">
                  <span className="font-bold text-gray-900">
                    Contenido dinámico:
                  </span>{" "}
                  Se incorporaron videos de influencers mostrando su experiencia
                  con Jalife, junto con información clara sobre la marca, sus
                  valores y propuesta, reforzando la confianza del usuario y
                  enriqueciendo la narrativa del sitio.
                </p>
              </div>
            </div>

            {/* Center image/GIF */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full max-w-[640px] mx-auto">
                <Image
                  src="/bodysection.png"
                  alt="Mockup Jalife Brothers"
                  width={1200}
                  height={800}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 font-space-grotesk">
            Contact section
          </h3>
          <div className="grid md:grid-cols-2 gap-8 items-center relative">
        
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full max-w-[640px] mx-auto">
                <Image
                  src="/1.gif"
                  alt="Mockup Jalife Brothers"
                  width={1200}
                  height={800}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </motion.div>

            <div className="ml-12 grid gap-8 items-center relative">
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed font-manrope text-sm">
                  <span className="font-bold text-gray-900">Grid Layout:</span>{" "}
                  Organización sistemática de contenido en una cuadrícula que
                  optimiza el espacio y mejora la navegación visual del usuario.
                </p>
              </div>

              <div className="space-y-4 relative">
                <p className="text-gray-600 leading-relaxed font-manrope text-sm">
                  <span className="font-bold text-gray-900">Navbar:</span> Lo
                  ideal sería que al hacer scroll down desaparezca la barra, y
                  al hacer scroll up, aparezca de nuevo. Esto mejoraría la
                  experiencia de lectura y enfoque en el contenido sin perder
                  accesibilidad a la navegación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Prototype Section */}
      <section className="px-6 py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-gray-900 mb-12 font-space-grotesk">
              Prototipo
            </h2>
          </ScrollReveal>
          <motion.div
            className="relative w-full h-120 flex items-center justify-center overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <iframe
                  className="border: 1px solid rgba(0, 0, 0, 0.1);"
                  width="800"
                  height="450"
                  src="https://embed.figma.com/proto/TUIAkraAUQ5sCvrZbctgaK/Jalife-Proyect?node-id=211-2703&scaling=scale-down-width&content-scaling=fixed&page-id=152%3A470&starting-point-node-id=211%3A2703&embed-host=share"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="px-6 py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <OtherProjects currentProjectId="fungi-ritual" />
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
                    window.location.href = "/#proyectos";
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
                <a href="mailto:milagrosdizuban1@gmail.com">
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
