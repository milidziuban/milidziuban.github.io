"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "./components/animated-components";
import Image from "next/image";
import { Button } from "./components/ui/button";
import { NavigationHeaderDark } from "./components/navigation-header-dark";

// Helper para fases del proceso (dark)
function ProcessStepDark({
  number,
  title,
  subtitle,
  image,
  imageLeft,
  children,
}: {
  number: string;
  title: string;
  subtitle?: string;
  image: string;
  imageLeft?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center mb-32 last:mb-0">
      <ScrollReveal direction={imageLeft ? "left" : "right"}>
        <div className={imageLeft ? "md:order-1" : "md:order-2"}>
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#121826]">
            <Image
              src={image}
              alt={title}
              width={640}
              height={480}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal direction={imageLeft ? "right" : "left"} delay={0.2}>
        <div className={imageLeft ? "md:order-2" : "md:order-1"}>
          <span className="font-instrument-serif italic text-5xl text-purple-400 block mb-4 leading-none">
            {number}
          </span>
          <h3 className="text-3xl md:text-4xl font-medium text-white font-space-grotesk leading-tight mb-2">
            {title}
          </h3>
          {subtitle && (
            <p className="text-purple-300/60 font-manrope mb-6">{subtitle}</p>
          )}
          <div className="text-gray-300 font-manrope leading-relaxed space-y-4">
            {children}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}

// Carrusel dark
function ScreensCarouselDark({
  screens,
}: {
  screens: {
    title: string;
    description: string;
    image: string;
    features: string[];
  }[];
}) {
  const [current, setCurrent] = useState(0);
  const total = screens.length;
  const next = () => setCurrent((c) => (c + 1) % total);
  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const screen = screens[current];

  return (
    <div className="relative">
      <div className="grid md:grid-cols-[1.4fr_1fr] gap-8 md:gap-12 items-center">
        <div className="relative rounded-2xl overflow-hidden bg-[#121826] border border-white/10 aspect-[16/10]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={screen.image}
                alt={screen.title}
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-instrument-serif italic text-3xl text-purple-400">
                  {String(current + 1).padStart(2, "0")}
                </span>
                <span className="text-white/30">/</span>
                <span className="text-white/40 font-manrope text-sm">
                  {String(total).padStart(2, "0")}
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-medium font-space-grotesk text-white leading-tight mb-3">
                {screen.title}
              </h3>
              <p className="text-gray-300 font-manrope leading-relaxed mb-6">
                {screen.description}
              </p>

              <ul className="space-y-2">
                {screen.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-gray-300 font-manrope"
                  >
                    <span className="text-purple-400 mt-1">✦</span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex gap-3 order-2 md:order-1">
          {screens.map((s, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 transition ${
                i === current
                  ? "border-purple-400"
                  : "border-transparent opacity-40 hover:opacity-80"
              }`}
            >
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 order-1 md:order-2">
          <motion.button
            onClick={prev}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-full border border-white/20 bg-white/5 text-gray-200 hover:border-purple-400 hover:text-purple-300 flex items-center justify-center transition"
          >
            ←
          </motion.button>
          <motion.button
            onClick={next}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center transition"
          >
            →
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default function ProyectoTowerDefense() {
  const screens = [
    {
      title: "Onboarding",
      description:
        "Introducción al juego con explicación de mecánicas y controles principales.",
      image: "/Onboarding.png",
      features: [
        "Tutorial guiado",
        "Mecánicas básicas explicadas",
        "Controles principales",
      ],
    },
    {
      title: "Nivel 1",
      description:
        "Primer nivel introductorio con dificultad accesible para nuevos jugadores.",
      image: "/Level1.png",
      features: [
        "Curva de aprendizaje suave",
        "Feedback visual claro",
        "Recompensas tempranas",
      ],
    },
    {
      title: "Pre-nivel",
      description:
        "Pantalla previa al nivel con selección de torres y estrategia.",
      image: "/Pre-nivel.png",
      features: [
        "Selección de loadout",
        "Información del nivel",
        "Recursos disponibles",
      ],
    },
    {
      title: "Nivel 2",
      description:
        "Segundo nivel con mecánicas avanzadas y mayor desafío estratégico.",
      image: "/Level2.png",
      features: [
        "Nuevas torres disponibles",
        "Enemigos con habilidades",
        "Múltiples rutas",
      ],
    },
    {
      title: "Nivel 2.1",
      description: "Variación del nivel 2 con configuración alternativa.",
      image: "/Level2.1.png",
      features: [
        "Layout alterno",
        "Recursos limitados",
        "Mayor dificultad",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B001A]">
      <NavigationHeaderDark />

      {/* HERO */}
      <section className="relative px-6 py-32 bg-[#0B001A] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {["UX/UI Game Design", "Desktop Game", "2025"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border border-white/20 text-gray-300 font-manrope"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-5xl md:text-6xl font-medium tracking-tighter text-white leading-[1.05] font-space-grotesk mb-6">
                Tower{" "}
                <span className="font-instrument-serif italic font-normal text-purple-400">
                  Defense
                </span>
              </h1>

              <p className="text-lg text-gray-300 max-w-xl leading-relaxed mb-10 font-manrope">
                Caso de estudio desarrollado en el curso de UX Game Design
                (Docta). Se analizó un juego de Tower Defense para PC, en
                estado de prototipo, desarrollado como ejercicio práctico
                para otras carreras.
              </p>

              <div className="grid grid-cols-3 gap-6 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-widest text-purple-300/60 font-manrope mb-2">
                    Rol
                  </p>
                  <p className="text-white font-medium font-space-grotesk">
                    UX/UI Designer
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-purple-300/60 font-manrope mb-2">
                    Duración
                  </p>
                  <p className="text-white font-medium font-space-grotesk">
                    3 meses
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-purple-300/60 font-manrope mb-2">
                    Herramientas
                  </p>
                  <p className="text-white font-medium font-space-grotesk">
                    Figma, Miro
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
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/imagen/gdheader.png"
                  alt="Tower Defense preview"
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
      <section className="px-6 py-32 bg-[#0B001A]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <ScrollReveal direction="left">
              <div>
                <span className="font-instrument-serif italic text-2xl text-purple-400 mb-3 block">
                  01
                </span>
                <h2 className="text-4xl md:text-5xl font-medium text-white leading-[1.05] tracking-tighter font-space-grotesk mb-6">
                  Problema
                </h2>
                <p className="text-gray-300 leading-relaxed font-manrope">
                  Al tratarse de un prototipo desarrollado con fines
                  educativos, el juego presenta dificultades en la claridad
                  de las mecánicas, la curva de aprendizaje y la
                  comunicación de objetivos al jugador, lo que impacta en la
                  experiencia de juego y en la comprensión de las decisiones
                  estratégicas.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div>
                <span className="font-instrument-serif italic text-2xl text-purple-400 mb-3 block">
                  02
                </span>
                <h2 className="text-4xl md:text-5xl font-medium text-white leading-[1.05] tracking-tighter font-space-grotesk mb-6">
                  Objetivo
                </h2>
                <p className="text-gray-300 leading-relaxed font-manrope">
                  Analizar un prototipo de juego de Tower Defense aplicando
                  los principios de UX Game Design, evaluando la experiencia
                  del jugador, las mecánicas, la curva de aprendizaje y la
                  usabilidad, para identificar oportunidades de mejora y
                  proponer soluciones de diseño.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* GAME CONCEPT */}
      <section className="px-6 py-24 bg-[#0B001A]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="bg-[#121826] border border-white/10 rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="uppercase tracking-widest text-sm text-purple-400 font-bold">
                  GAME CONCEPT
                </span>
                <h2 className="text-3xl md:text-4xl font-medium text-white mt-4 mb-6 leading-tight font-space-grotesk">
                  ¿Qué es un juego de{" "}
                  <span className="font-instrument-serif italic font-normal text-purple-400">
                    Tower Defense
                  </span>
                  ?
                </h2>
                <p className="text-gray-300 leading-relaxed font-manrope">
                  Un Tower Defense es un juego de estrategia en el que el
                  jugador debe defender una base colocando y mejorando
                  torres a lo largo de un recorrido, con el objetivo de
                  frenar oleadas de enemigos antes de que lleguen al final.
                  Combina planificación, gestión de recursos y toma de
                  decisiones tácticas.
                </p>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/queestowerdefense.png"
                  alt="Mapa Tower Defense"
                  width={640}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PROCESO */}
      <section className="px-6 py-32 bg-[#0B001A]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-20 max-w-2xl">
              <span className="uppercase tracking-widest text-sm text-purple-400 font-bold">
                PROCESO
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-white leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                Cómo lo{" "}
                <span className="font-instrument-serif italic font-normal text-purple-400">
                  analicé
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <ProcessStepDark
            number="01"
            title="Wireframes"
            subtitle="Estructurando el HUD desde la base"
            image="/wireframeTD.png"
            imageLeft
          >
            <p>
              Los wireframes permitieron visualizar la estructura de uno de
              los niveles del juego desde las primeras etapas del diseño.
              Trabajé en varias iteraciones de baja fidelidad para definir
              la disposición de los elementos del HUD, jerarquizar la
              información y asegurar la usabilidad desde el inicio.
            </p>
          </ProcessStepDark>

          <ProcessStepDark
            number="02"
            title="Flow"
            subtitle="Mapeando el recorrido del jugador"
            image="/flow.png"
          >
            <p>
              El flow se diseñó para mapear el recorrido del jugador dentro
              del nivel, desde el inicio de la partida hasta la
              finalización, identificando decisiones clave, acciones
              principales y puntos de fricción.
            </p>
            <p>
              Este proceso permitió analizar la claridad de los objetivos,
              la progresión del juego y la coherencia entre las mecánicas,
              la interfaz y la experiencia general del jugador.
            </p>
          </ProcessStepDark>

          <ProcessStepDark
            number="03"
            title="Screen en baja fidelidad"
            subtitle="Validando la disposición visual"
            image="/wireframe11.png"
            imageLeft
          >
            <p>
              Las pantallas de baja fidelidad se utilizaron para explorar y
              validar la disposición de los elementos de la interfaz, las
              interacciones principales y la jerarquía visual.
            </p>
          </ProcessStepDark>

          <ProcessStepDark
            number="04"
            title="Game World"
            subtitle="Definiendo el universo del juego"
            image="/gameworld.png"
          >
            <p>
              Análisis del recorrido del jugador dentro del nivel, desde el
              inicio hasta la finalización, identificando decisiones clave,
              acciones principales y puntos de fricción que afectan la
              experiencia.
            </p>
          </ProcessStepDark>

          <ProcessStepDark
            number="05"
            title="Sistema de progreso"
            subtitle="Motivando al jugador"
            image="/sistemadeprogreso.png"
            imageLeft
          >
            <p>
              Se puede incorporar un sistema de progreso adicional basado
              en objetivos dentro de cada partida o recompensas al
              finalizarlas, para motivar al jugador a seguir jugando.
            </p>
          </ProcessStepDark>
        </div>
      </section>

      {/* PANTALLAS — Carrusel */}
      <section className="px-6 py-32 bg-[#0B001A]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-16 max-w-2xl">
              <span className="uppercase tracking-widest text-sm text-purple-400 font-bold">
                RESULTADO
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-white leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                Pantallas{" "}
                <span className="font-instrument-serif italic font-normal text-purple-400">
                  del juego
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <ScreensCarouselDark screens={screens} />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-32 bg-[#0B001A] border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-gray-300 mb-6 font-manrope">
              ¿Te gustó este proyecto?
            </p>
            <h2 className="text-4xl md:text-6xl font-medium text-white leading-[1.05] tracking-tighter font-space-grotesk mb-10">
              Explorá más de mi{" "}
              <span className="font-instrument-serif italic font-normal text-purple-400">
                trabajo
              </span>
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                onClick={() => {
                  window.location.href = "/#proyectos";
                }}
                className="group bg-purple-600 hover:bg-purple-500 text-white px-6 py-4 rounded-full shadow-lg font-manrope inline-flex items-center gap-2"
              >
                <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>
                Volver a proyectos
              </Button>
              <a href="mailto:milagrosdziuban1@gmail.com">
                <Button className="group bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-purple-400 px-6 py-4 rounded-full font-manrope inline-flex items-center gap-2">
                  Contactame
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
