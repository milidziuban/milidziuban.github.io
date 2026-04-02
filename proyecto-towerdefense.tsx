"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "./components/animated-components";
import Image from "next/image";
import { OtherProjects } from "./components/otherproject";
import { Button } from "./components/ui/button";
import { useState } from "react";
import { NavigationHeaderDark } from "./components/navigation-header-dark";

// Componente del carrusel
function DesignCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const screens = [
    {
      title: "Dashboard Principal",
      description:
        "Vista general con métricas clave y accesos rápidos a las funcionalidades principales del sistema",
      image: "/Onboarding.png", // Cambia por el nombre real de tu imagen
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
      image: "/Level1.png", // Cambia por el nombre real de tu imagen
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
      image: "/Pre-nivel.png", // Cambia por el nombre real de tu imagen
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
      image: "/Level2.png", // Cambia por el nombre real de tu imagen
      features: [
        "Configuración de módulos",
        "Personalización de interfaz",
        "Gestión de integraciones",
        "Backup y seguridad",
      ],
    },
    {
      title: "Configuración del Sistema",
      description:
        "Personalización completa del sistema según las necesidades de la empresa",
      image: "/Level2.1.png", // Cambia por el nombre real de tu imagen
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
      <div className="relative overflow-hidden rounded-3xl bg-[#140030] p-6">
        <div className="relative w-full h-[600px]">
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
                index === currentSlide ? "bg-white" : "bg-gray-500"
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

export default function ProyectoTowerDefense() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationHeaderDark />

      {/* Project Header */}
       <section className="relative px-6 py-32 bg-[#0B001A] overflow-hidden 
       ">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                  {/* TEXTO */}
                  <div>
                    {/* tags */}
                    <div className="flex gap-3 mb-6 text-sm text-gray-50 ">
                      <span className="px-3 py-1 rounded-full border broder-gray-600">
                        Diseño UX/UI de VideoJuegos
                      </span>
                      <span className="px-3 py-1 rounded-full border broder-gray-600">
                        Desktop Game
                      </span>
                      <span className="px-3 py-1 rounded-full border broder-gray-600">
                        2025
                      </span>
                    </div>
      
                    {/* título */}
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-50 mb-6 leading-tight">
                      Proyecto <span className="text-gray-50 font-bold">Tower Defense</span>
                    </h1>
      
                    {/* descripción */}
                    <p className="text-lg text-gray-50 max-w-xl leading-relaxed mb-10">
                     Caso de estudio desarrollado en el curso de UX Game Design (Docta). Se analizó un juego de Tower Defense para PC, en estado de prototipo, desarrollado como ejercicio práctico para otras carreras.
                    </p>
      
                    {/* metadata */}
                    <div className="grid grid-cols-3 gap-6 text-sm">
                      <div>
                        <p className="text-gray-50 mb-1">Rol</p>
                        <p className="text-gray-400 font-medium">UX/UI Designer</p>
                      </div>
      
                      <div>
                        <p className="text-gray-50 mb-1">Duración</p>
                        <p className="text-gray-400 font-medium">3 meses</p>
                      </div>
      
                      <div>
                        <p className="text-gray-50 mb-1">Herramientas</p>
                        <p className="text-gray-400 font-medium">Figma, Miro</p>
                      </div>
                    </div>
                  </div>
      
                  {/* IMAGEN */}
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
                         src="/imagen/gdheader.png"
                  alt="Portadatowerdefense"
                        width={500}
                        height={600}
                        className="object-cover w-full h-full"
                      />
                    </motion.div>
      
                    {/* glow */}
                    <div className="absolute -bottom-6 w-[70%] h-10 bg-indigo-500/20 blur-2xl rounded-full" />
                  </motion.div>
                </div>
              </div>
            </section>



      {/* Software Interface + Problem & Objective */}
      <section className="px-6 py-16 bg-[#0B001A]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="right" delay={0.2}>
              <div className="space-y-12">
                {/* Problema */}
                <div>
                  <h2 className="text-4xl font-bold text-gray-50 mb-6">
                    Problema
                  </h2>
                  <p className="text-gray-50 leading-relaxed mb-6">
                   Al tratarse de un prototipo desarrollado con fines educativos, el juego presenta dificultades en la claridad de las mecánicas, la curva de aprendizaje y la comunicación de objetivos al jugador, lo que impacta en la experiencia de juego y en la comprensión de las decisiones estratégicas.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="space-y-12">
                {/* Objetivo */}
                <div>
                  <h2 className="text-4xl font-bold text-gray-50 mb-6">
                    Objetivo
                  </h2>
                  <p className="text-gray-50 leading-relaxed mb-6">
                    Analizar un prototipo de juego de Tower Defense aplicando los principios de UX Game Design, evaluando la experiencia del jugador, las mecánicas de juego, la curva de aprendizaje y la usabilidad, con el fin de identificar oportunidades de mejora y proponer soluciones de diseño.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
  
 {/*Wireframes*/}
      <section className="px-6 pt-24 md:pt-32 pb-16 bg-[#0B001A]">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-50 mb-8 font-space-grotesk">
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
                  className="text-gray-50 leading-relaxed mb-8 font-manrope text-lg"
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
      <section className="px-6 pt-24 md:pt-32 pb-16 bg-[#0B001A]">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-50 mb-8 font-space-grotesk">
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
                  className="text-gray-50 leading-relaxed mb-8 font-manrope text-lg"
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
      <section className="px-6 pt-24 md:pt-32 pb-16 bg-[#0B001A]">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-50 mb-8 font-space-grotesk">
            Screen en Baja Fidelidad
          </h3>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="w-full h-80 relative">
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
                  className="text-gray-50 leading-relaxed mb-8 font-manrope text-lg"
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
      <section className="px-6 pt-24 md:pt-32 pb-16 bg-[#0B001A]">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-50 mb-8 font-space-grotesk">
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
                  className="text-gray-50 leading-relaxed mb-8 font-manrope text-lg"
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
      <section className="px-6 pt-24 md:pt-32 pb-16  bg-[#0B001A]">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-50 mb-8 font-space-grotesk">
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
                  className="text-gray-50 leading-relaxed mb-8 font-manrope text-lg"
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

            <ScrollReveal>
              <section className="px-6 py-16 bg-[#0B001A]">
                <div className="max-w-6xl mx-auto">
                  <DesignCarousel />
                </div>
              </section>
            </ScrollReveal>

      {/* Footer CTA */}
      <section className="px-6 py-16 bg-[#0B001A]">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-gray-50 mb-8 font-space-grotesk">
              ¿Te gustó este proyecto?
            </h2>
            <p className="text-gray-50 text-lg mb-8 max-w-2xl mx-auto font-manrope">
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
                    window.location.href = '/#proyectos'
                  }}
                  className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-full font-manrope"
                >
                  Volver a mis proyectos
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="mailto:milagrosdizuban1@gmail.com">
                  <Button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full font-manrope">
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
