"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { NavigationHeader } from "./components/navigation-header";
import { ScrollReveal } from "./components/animated-components";
import Image from "next/image";
import { OtherProjects } from "./components/otherproject";

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
      image: "/Dashboard.png", // Cambia por el nombre real de tu imagen
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
      image: "/Gestion.png", // Cambia por el nombre real de tu imagen
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
      image: "/Clientes.png", // Cambia por el nombre real de tu imagen
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
                Proyecto <span className="text-blue-500 font-bold">Activa</span>
              </h1>

              <p className="text-lg text-gray-600 max-w-xl leading-relaxed mb-10">
                Plataforma diseñada para optimizar y centralizar procesos
                internos, mejorando la eficiencia operativa y facilitando el
                acceso a la información en tiempo real.
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
                  <p className="text-gray-900 font-medium">
                    Figma, FigJam, Visual Studio Code
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
              <motion.div
                className="rounded-2xl overflow-hidden"
                transition={{ type: "spring", stiffness: 120 }}
              >
                <Image
                  src="/imagen/Activa.png"
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
      <section className="relative px-6 py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.08),transparent_50%)]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Imagen */}
            <motion.div
              className="relative flex justify-center"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02, rotateY: 5 }}
            >
              <Image
                src="/problemayobjetivo1.png"
                alt="Activa preview"
                width={120}
                height={200}
                className="w-130 h-120 object-cover rounded-2xl"
              />
            </motion.div>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="space-y-12">
                {/* Problema */}
                <div>
                  <span className="text-2xl font-bold text-black-800 font-bold">
                    Problema
                  </span>

                  <p className="text-gray-600 leading-relaxed mb-2">
                    La empresa Activa enfrenta dificultades para gestionar sus
                    procesos internos debido a la falta de organización y
                    control.
                  </p>

                  <p className="text-gray-600 leading-relaxed">
                    Las tareas administrativas y operativas se realizan de forma
                    manual, generando ineficiencias, errores y dificultades para
                    acceder a la información de manera rápida y clara.
                  </p>
                </div>

                {/* Objetivo */}
                <div>
                  <span className="text-2xl font-bold text-black-800 font-bold">
                    Objetivo
                  </span>

                  <p className="text-gray-600 leading-relaxed">
                    Diseñar una plataforma centralizada que optimice la gestión
                    de procesos internos, mejore la experiencia de los usuarios
                    y reduzca errores operativos.
                  </p>

                  <p className="text-gray-600 leading-relaxed">
                    La solución busca facilitar el seguimiento de tareas,
                    optimizar tiempos y adaptarse a las necesidades futuras de
                    la empresa.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Design Thinking */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Design Thinking
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
            {/* Empatizar */}
            <div>
              <div className="w-20 h-20 mx-auto mb-4">
                <img src="/imagen/empatizar.png" alt="Empatizar" />
              </div>
              <h3 className="text-xl font-semibold">Empatizar</h3>
              <p className="text-gray-800 text-sm mt-2">
                Entrevistas con usuarios
              </p>
            </div>

            {/* Definir */}
            <div>
              <div className="w-20 h-20 mx-auto mb-4">
                <img src="/imagen/definir.png" alt="Definir" />
              </div>
              <h3 className="text-xl font-semibold">Definir</h3>
              <p className="text-gray-800 text-sm mt-2">
                Identificación de necesidades
              </p>
            </div>

            {/* Idear */}
            <div>
              <div className="w-20 h-20 mx-auto mb-4">
                <img src="/imagen/idear.png" alt="Idear" />
              </div>
              <h3 className="text-xl font-semibold">Idear</h3>
              <p className="text-gray-800 text-sm mt-2">
                Brainstorming + Benchmark
              </p>
            </div>

            {/* Prototipar */}
            <div>
              <div className="w-20 h-20 mx-auto mb-4">
                <img src="/imagen/prototipar.png" alt="Prototipar" />
              </div>
              <h3 className="text-xl font-semibold">Prototipar</h3>
              <p className="text-gray-800 text-sm mt-2">
                Wireframes de baja fidelidad
              </p>
            </div>

            {/* Testear */}
            <div>
              <div className="w-20 h-20 mx-auto mb-4">
                <img src="/imagen/testear.png" alt="Testear" />
              </div>
              <h3 className="text-xl font-semibold">Testear</h3>
              <p className="text-gray-800 text-sm mt-2">
                Validación con usuarios
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Arquitectura */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Imagen */}
            <ScrollReveal direction="left">
              <motion.div transition={{ duration: 0.3 }}>
                <Image
                  src="/arqActiva.png"
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
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Arquitectura
                    </h2>
                    <p className="text-gray-400">
                      Estructurando la información y flujos
                    </p>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Como primer paso en el diseño se elaboró una arquitectura de
                    información clara, tomando como base los flujos más
                    frecuentes y relevantes para el negocio.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Este mapa ayudó a organizar las secciones principales de la
                    aplicación, definir jerarquías, y sentar las bases para una
                    navegación fluida y coherente. La arquitectura fue validada
                    con el equipo interno para asegurar que cubría todos los
                    casos de uso necesarios.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Wireframes */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Texto */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="space-y-12">
                {/* Problema */}
                <div>
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Wireframes
                    </h2>
                    <p className="text-gray-400">
                      Diseñando patrones y estructura de la plataforma
                    </p>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Los wireframes permitieron visualizar la estructura de la
                    plataforma desde las primeras etapas del diseño. Trabajé en
                    varias iteraciones de baja fidelidad para definir la
                    disposición de los elementos, jerarquizar la información y
                    asegurar la usabilidad desde el comienzo.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Estas primeras versiones fueron clave para alinear
                    expectativas con el equipo y realizar ajustes rápidos antes
                    de pasar a diseño visual.
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
                  src="/wireframeActiva.png"
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

      {/* DS */}
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
                  src="designSystemActiva.png"
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
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Design System
                    </h2>
                    <p className="text-gray-400">
                      Creando primeros componentes{" "}
                    </p>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Para lograr coherencia visual y una implementación
                    eficiente, diseñé un sistema de diseño adaptado a la
                    identidad institucional de Activa.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Incluye componentes reutilizables, estados interactivos y
                    patrones consistentes que facilitan el desarrollo y aseguran
                    una experiencia homogénea en toda la aplicación.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    El Design System también permite escalar la plataforma
                    fácilmente a nuevas funcionalidades o futuras versiones, sin
                    perder consistencia visual.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Typography */}
      <ScrollReveal>
        <section className="px-6 py-8 bg-grey-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-m font-regular text-gray-300 mb-2">
              Guía Visual
            </h2>
            <motion.h3
              className="text-7xl font-bold text-blue-600 mb-12"
              animate={{ color: ["#2563eb", "#9b51e0", "#2563eb"] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              Inter typeface
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
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.1 }}
                        >
                          {weight}
                        </motion.span>
                      ),
                    )}
                  </div>
                </div>

                <motion.div
                  className="text-6xl font-bold text-gray-900 mb-4"
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

      {/* Screens */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Imagen */}
            <ScrollReveal direction="left">
              <motion.div transition={{ duration: 0.3 }}>
                <Image
                  src="screensActiva.png"
                  alt="arquitectura"
                  width={320}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </ScrollReveal>

            {/* Texto */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="space-y-8">
                {/* Problema */}
                <div>
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Pantallas
                    </h2>
                    <p className="text-gray-400">Dando vida a las ideas</p>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Se diseñaron las pantallas alineadas al diseño de la marca.
                    Cada pantalla fue diseñada pensando en minimizar la fricción
                    del usuario, priorizando la claridad y la eficiencia en la
                    interacción.
                  </p>
                  <p className="text-gray-600 leading-relaxed mt-6">
                    Algunas de las pantallas diseñadas fueron:
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Formulario de Login</span>
                    <span className="text-sm text-gray-900">1 pantalla / 3 pasos</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Funcionalidades principales</span>
                    <span className="text-sm text-gray-900">8 pantallas</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Chat web</span>
                    <span className="text-sm text-gray-900">2 pantallas</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ScrollReveal>
        <section className="px-6 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <DesignCarousel />
          </div>
        </section>
      </ScrollReveal>

      {/* Other Projects Section */}
      <OtherProjects currentProjectId="activa" />

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
