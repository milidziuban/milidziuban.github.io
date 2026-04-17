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
                  Desktop App
                </span>
                <span className="px-3 py-1 bg-white rounded-full border">
                  2025
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Proyecto{" "}
                <span className="text-blue-500 font-bold">
                  Gestión de Stock
                </span>
              </h1>

              <p className="text-lg text-gray-600 max-w-xl leading-relaxed mb-10">
                Diseñé una solución enfocada en pequeñas y medianas empresas que
                necesitan controlar su stock de forma eficiente, reduciendo
                errores operativos y mejorando la toma de decisiones mediante un
                dashboard intuitivo.
              </p>

              <div className="grid grid-cols-3 gap-6 text-sm">
                <div>
                  <p className="text-gray-400 mb-1">Rol</p>
                  <p className="text-gray-900 font-medium">UX/UI Designer</p>
                </div>

                <div>
                  <p className="text-gray-400 mb-1">Duración</p>
                  <p className="text-gray-900 font-medium">3 meses</p>
                </div>

                <div>
                  <p className="text-gray-400 mb-1">Herramientas</p>
                  <p className="text-gray-900 font-medium">Figma, Miro</p>
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
                  src="/imagen/GestiondeStock.png"
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

      {/* Software Interface + Problem & Objective */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="right" delay={0.2}>
              <div className="space-y-12">
                {/* Problema */}
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Problemática
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Muchas empresas gestionan su inventario utilizando
                    herramientas dispersas como hojas de cálculo o registros
                    manuales, lo que genera inconsistencias en los datos, falta
                    de visibilidad en tiempo real y errores en la actualización
                    del stock.
                  </p>

                  <p className="text-gray-600 leading-relaxed pt-1">
                    Esta fragmentación dificulta el control del inventario,
                    aumenta el riesgo de pérdidas y demanda más tiempo en tareas
                    operativas que podrían ser automatizadas.
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
                    Diseñar una plataforma que permita centralizar la gestión de
                    stock en un solo lugar, facilitando:
                    <ul className="list-disc pt-4 pl-5 space-y-2 text-gray-600">
                      <li>
                        Actualización y control de productos en tiempo real
                      </li>
                      <li>Reducción de errores manuales</li>
                      <li>Visualización clara del estado del inventario</li>
                      <li>Optimización de procesos internos</li>
                    </ul>
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="px-6 pt-24 md:pt-32 pb-16 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 font-space-grotesk">
            Investigación{" "}
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
                    src="bench.png"
                    alt="Jalife Project"
                    width={520}
                    height={500}
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
                  <div className="text-gray-600 text-lg space-y-6">
                    <p>Para entender el problema, se realizó:</p>

                    <ul className="list-disc pl-5 space-y-2">
                      <li>Benchmark de herramientas de gestión de stock</li>
                      <li>Análisis de flujos en plataformas similares</li>
                      <li>
                        Identificación de pain points en la gestión de productos
                      </li>
                    </ul>

                    <div>
                      <p className="font-semibold text-gray-800 mb-2">
                        Insights clave:
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Necesidad de acceso rápido a acciones clave</li>
                        <li>Falta de visibilidad en tiempo real</li>
                        <li>Procesos largos que afectan la adopción</li>
                      </ul>
                    </div>
                  </div>
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pt-24 md:pt-32 pb-16 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 font-space-grotesk">
            Definiciones clave
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
                  <p className="text-gray-600 leading-relaxed text-lg">
                    A partir de la investigación, se definieron principios clave
                    de diseño:
                  </p>

                  <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-600">
                    <li>Simplificar los flujos principales</li>
                    <li>Priorizar la visibilidad del stock en tiempo real</li>
                    <li>Reducir pasos en tareas frecuentes</li>
                    <li>Diseñar una interfaz clara y escaneable</li>
                  </ul>
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
                    src="/flwgs.png"
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
                  Se diseñó un flujo para mapear el recorrido del usuario dentro
                  de la plataforma y detectar oportunidades de mejora.
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
            Sistema visual
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
                  Se definió un sistema visual basado en componentes
                  reutilizables, jerarquía clara y uso de color orientado a la
                  lectura de datos.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pt-24 md:pt-32 pb-16 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 font-space-grotesk">
            Wireframes y exploración
          </h3>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="w-full h-130 relative">
                  <Image
                    src="wireframes.png"
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
                  <p className="pt-4">
                    💡 Aprendizaje: Esta etapa permitió validar rápidamente la
                    disposición de elementos antes de pasar al diseño visual,
                    evitando retrabajo.
                  </p>
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pt-24 md:pt-32 pb-16 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 font-space-grotesk">
            Diseño final
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
                  <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
                    <li>Dashboard con métricas clave</li>
                    <li>Gestión de productos</li>
                    <li>Edición de stock</li>
                    <li>Visualización de datos</li>
                  </ul>

                  <p className="font-semibold text-gray-800 mb-2">
                    Decisiones:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Uso de tablas para gestión eficiente</li>
                    <li>Indicadores visuales para alertas</li>
                    <li>Layout simple para reducir carga cognitiva</li>
                  </ul>
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
          <p className="text-gray-600 mb-6 max-w-2xl">
            Se desarrolló un prototipo interactivo para simular el uso real de
            la plataforma, validando la navegación y las principales tareas del
            usuario.
          </p>
          <iframe
            className="border: 1px solid rgba(0, 0, 0, 0.1);"
            width="1200"
            height="750"
            src="https://embed.figma.com/proto/7yRWEJboMUOycpVqznRP1J/Prototipo-gesti%C3%B3n-de-stock?node-id=1-31&p=f&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A31&embed-host=share"
          ></iframe>
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
