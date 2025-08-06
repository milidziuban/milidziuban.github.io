"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { NavigationHeader } from "./components/navigation-header";
import { ScrollReveal } from "./components/animated-components";
import Image from "next/image";

// Componente del carrusel
function DesignCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const screens = [
    {
      title: "Dashboard Principal",
      description:
        "Vista general con métricas clave y accesos rápidos a las funcionalidades principales del sistema",
      image: "/Login.png", // Cambia por el nombre real de tu imagen
      features: [
        "Panel de control centralizado",
        "Métricas en tiempo real",
        "Accesos rápidos personalizables",
        "Notificaciones importantes",
      ],
    },
    {
      title: "Gestión de Usuarios",
      description:
        "Administración completa de perfiles, permisos y roles dentro del sistema",
      image: "/dashboard.png", // Cambia por el nombre real de tu imagen
      features: [
        "Creación y edición de usuarios",
        "Asignación de roles y permisos",
        "Historial de actividades",
        "Configuración de accesos",
      ],
    },
    {
      title: "Reportes y Analytics",
      description:
        "Análisis detallado con gráficos interactivos y exportación de datos",
      image: "/gestion.png", // Cambia por el nombre real de tu imagen
      features: [
        "Gráficos interactivos",
        "Filtros avanzados",
        "Exportación a múltiples formatos",
        "Programación de reportes",
      ],
    },
    {
      title: "Configuración del Sistema",
      description:
        "Personalización completa del sistema según las necesidades de la empresa",
      image: "/clientes.png", // Cambia por el nombre real de tu imagen
      features: [
        "Configuración de módulos",
        "Personalización de interfaz",
        "Gestión de integraciones",
        "Backup y seguridad",
      ],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screens.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screens.length) % screens.length);
  };

  return (
    <div className="relative">
      {/* Carrusel principal */}
      <div className="relative overflow-hidden rounded-3xl bg-gray-100 p-6">
        <div className="relative w-full h-[740px]">
          {screens.map((screen, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0, x: index === 0 ? 0 : 100 }}
              animate={{
                opacity: index === currentSlide ? 1 : 0,
                x:
                  index === currentSlide
                    ? 0
                    : index < currentSlide
                    ? -100
                    : 100,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="grid md:grid-cols-1 items-center w-full h-full">
                {/* Imagen de la pantalla */}
                <motion.div
                  className="relative h-full w-full flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden">
                    <Image
                      src={screen.image || "/placeholder.svg"}
                      alt={screen.title}
                      fill
                      className="object-cover"
                      // sizes="(max-width: 768px) 100vw, 50vw"
                    />
                   
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Controles de navegación */}
      <div className="flex items-center justify-between mt-8">
        {/* Botón anterior */}
        <motion.button
          onClick={prevSlide}
          className="flex items-center justify-center w-12 h-12 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </motion.button>

        {/* Indicadores */}
        <div className="flex space-x-2">
          {screens.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-blue-500" : "bg-gray-300"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </div>

        {/* Botón siguiente */}
        <motion.button
          onClick={nextSlide}
          className="flex items-center justify-center w-12 h-12 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.button>
      </div>
    </div>
  );
}

export default function ProyectoActiva() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Misma navbar que en el inicio */}
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
                Proyecto <span className="font-normal">Activa</span>
              </motion.h1>
              <motion.p
                className="text-gray-600 leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                Plataforma integral que permite optimizar y centralizar los
                procesos de la empresa, reduciendo la carga manual, mejorando la
                eficiencia y facilitando el acceso a la información de forma
                clara y ordenada.
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
                  href="https://www.behance.net/gallery/225209813/Gestion-de-empresas" // Reemplazá por tu URL
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
                  src="/imagen/Activa.png"
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
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="overflow-hidden rounded-xl border py-1 shadow-sm">
                  <CardContent className="p-4">
                    <h2 className="text-3xl font-bold text-gray-500 mb-6">
                      Software de Gestión
                    </h2>
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex space-x-4">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="text-sm text-gray-500">Dashboard</div>
                      </div>

                      <div className="grid grid-cols-4 gap-4 mb-6">
                        <div className="col-span-1 space-y-3">
                          <motion.div
                            className="h-4 bg-gray-200 rounded"
                            animate={{ width: ["0%", "100%"] }}
                            transition={{ duration: 2, delay: 1 }}
                          />
                          <motion.div
                            className="h-4 bg-gray-200 rounded w-3/4"
                            animate={{ width: ["0%", "75%"] }}
                            transition={{ duration: 2, delay: 1.2 }}
                          />
                          <motion.div
                            className="h-4 bg-gray-200 rounded w-1/2"
                            animate={{ width: ["0%", "50%"] }}
                            transition={{ duration: 2, delay: 1.4 }}
                          />
                        </div>
                        <div className="col-span-3">
                          <div className="grid grid-cols-3 gap-4 mb-4">
                            {[
                              { bg: "bg-blue-100" },
                              { bg: "bg-green-100" },
                              { bg: "bg-yellow-100" },
                            ].map((item, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                  duration: 0.6,
                                  delay: 1.5 + index * 0.1,
                                }}
                              >
                                <Card>
                                  <CardContent className="p-3">
                                    <div
                                      className={`h-8 ${item.bg} rounded mb-2`}
                                    ></div>
                                    <div className="h-3 bg-gray-200 rounded"></div>
                                  </CardContent>
                                </Card>
                              </motion.div>
                            ))}
                          </div>
                          <motion.div
                            className="h-32 bg-gray-100 rounded flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 2 }}
                          >
                            <div className="text-gray-400">
                              Gráfico de datos
                            </div>
                          </motion.div>
                        </div>
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
                    La empresa Activa enfrenta dificultades para gestionar sus
                    procesos internos debido a la falta de control y
                    organización adecuada.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Las tareas administrativas, operativas y de seguimiento se
                    realizan de manera manual, lo que genera ineficiencias,
                    pérdida de tiempo, errores y dificultad para acceder a la
                    información de manera rápida y precisa.
                  </p>
                </div>

                {/* Objetivo */}
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Objetivo
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Diseñar una plataforma personalizada que permita gestionar
                    los procesos internos de manera centralizada, eficiente e
                    intuitiva. Se busca centralizar la información en una única
                    herramienta, mejorar la experiencia de los usuarios
                    internos, facilitar el seguimiento de tareas, optimizar los
                    tiempos de trabajo y minimizar errores operativos. La
                    solución deberá ser flexible para adaptarse a las
                    necesidades actuales y futuras de la empresa.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Typography */}
      <ScrollReveal>
        <section className="px-6 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-regular text-gray-300 mb-2">
              Tipografía y color
            </h2>
            <motion.h3
              className="text-8xl font-bold text-blue-600 mb-12"
              animate={{ color: ["#2563eb", "#9b51e0", "#2563eb"] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              Inter
              <br />
              typeface
            </motion.h3>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4">FontStyle</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Light", "Regular", "Medium", "SemiBold", "Bold"].map(
                      (weight, index) => (
                        <motion.span
                          key={weight}
                          className={`px-3 py-1 rounded text-sm bg-gray-200`}
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "#9b51e0",
                            color: "white",
                          }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.1 }}
                        >
                          {weight}
                        </motion.span>
                      )
                    )}
                  </div>
                </div>

                <motion.div
                  className="text-6xl font-bold text-gray-900 mb-4"
                  animate={{ rotateY: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                >
                  Aa
                </motion.div>
                <p className="text-sm text-gray-600">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                  <br />
                  abcdefghijklmnopqrstuvwxyz
                  <br />
                  1234567890
                </p>
              </div>

              <div>
                <div className="grid grid-cols-3 grid-rows-2 gap-4">
                  {[
                    "bg-gray-900",
                    "bg-blue-600",
                    "bg-yellow-600",
                    "bg-blue-400",
                    "bg-yellow-400",
                  ].map((color, index) => (
                    <motion.div
                      key={index}
                      className={`w-38 h-28 ${color} rounded cursor-pointer`}
                      whileHover={{ scale: 1.1, rotateZ: 10 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="px-6 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-left">
              Screens
            </h2>

            <DesignCarousel />
          </div>
        </section>
      </ScrollReveal>

      {/* Call to Action */}
      <ScrollReveal>
        <section className="px-6 py-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Card className="overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600">
                <CardContent className="p-12 text-center">
                  <h2 className="text-3xl font-regular text-white mb-4">
                    Transformar la rutina en
                    <br />
                    eficiencia:{" "}
                    <span className="font-bold">digitalizar para crecer.</span>
                  </h2>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>

      {/* Footer CTA */}
      <section className="px-6 py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-gray-600 mb-6">
              Conocé más sobre este proyecto:
            </p>
            <a
              href="https://www.behance.net/gallery/225209813/Gestion-de-empresas" // Reemplazá por tu URL
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center mx-auto"
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
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
