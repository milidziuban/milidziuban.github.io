"use client";

import { motion } from "framer-motion";
import { NavigationHeader } from "./components/navigation-header";
import { ScrollReveal } from "./components/animated-components";
import Image from "next/image";
import { OtherProjects } from "./components/otherproject";

export default function ProyectoGestiondeStock() {
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
                Proyecto <span className="font-normal">Gestión de Stock</span>
              </motion.h1>
              <motion.p
                className="text-gray-600 leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                Proyecto web para una nueva plataforma de gestión de stock
                enfocada en mejorar la organización y el control de inventario,
                integrando un dashboard intuitivo y herramientas que optimizan
                los procesos internos.
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
                  src="/imagen/GestiondeStock.png"
                  alt="PortadaGS"
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
                  🧩 Problemática
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
             La empresa necesitaba una solución que le permitiera centralizar y organizar la gestión de stock en un solo lugar. Los procesos actuales se realizaban de forma fragmentada, lo que generaba desorden en la información, dificultad para visualizar el estado del inventario y pérdida de tiempo en tareas operativas.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="space-y-12">
                {/* Objetivo */}
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  🎯 Objetivo
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                   Diseñar y desarrollar una plataforma web con un dashboard centralizado y herramientas intuitivas que faciliten la administración, el control y el seguimiento del stock, optimizando los procesos internos y mejorando la toma de decisiones.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>


      {/*Flow*/}
      <section className="px-6 pt-24 md:pt-32 pb-16 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 font-space-grotesk">
            Diagrama de Flujo
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
                 Se diseñó un flujo para entender el recorrido del usuario dentro de las distintas secciones de la plataforma, identificando las necesidades, acciones y puntos de friccion.
                </motion.p>
              </motion.div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="w-full h-110 relative">
                  <Image
                    src="/flowgs.png"
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

                  {/*Sist de diseño*/}
            <section className="px-6 pt-24 md:pt-32 pb-16 bg-gray-100">
              <div className="max-w-6xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 font-space-grotesk">
                Sistema de diseño
                </h3>
                <div className="max-w-6xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      <div className="w-full h-90 relative ">
                        <Image
                          src="sdgestion.jpg"
                          alt="Jalife Project"
                          fill
                          className="object-cover rounded-3xl"
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


      <section className="px-6 pt-24 md:pt-32 pb-16 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 font-space-grotesk">
            Prototipo
          </h3>
        <iframe className="border: 1px solid rgba(0, 0, 0, 0.1);" width="1200" height="750" src="https://embed.figma.com/proto/7yRWEJboMUOycpVqznRP1J/Prototipo-gesti%C3%B3n-de-stock?node-id=1-31&p=f&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A31&embed-host=share"></iframe>
        </div>
      </section>

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
