"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavigationHeader } from "./components/navigation-header";
import {
  AnimatedProjectCard,
  ScrollReveal,
} from "./components/animated-components";
import Image from "next/image";
import { PlaygroundMode } from "./components/playground-mode";
import { useState, useEffect } from "react";

// Sección Hero
function HeroSection() {
  const [isPlaygroundMode, setIsPlaygroundMode] = useState(false);

  // Escuchar el estado del playground mode
  useEffect(() => {
    const checkPlaygroundMode = () => {
      const context = document.getElementById("playground-context");
      if (context) {
        setIsPlaygroundMode(context.getAttribute("data-active") === "true");
      }
    };

    const interval = setInterval(checkPlaygroundMode, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      className="px-6 pt-24 md:pt-32 pb-8 bg-gray-100 min-h-screen flex flex-col"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-0 items-center flex-1">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            className="text-6xl font-medium text-gray-900 mb-4 font-space-grotesk"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Hola! Soy Milagros
          </motion.h1>
          <motion.h2
            className="text-5xl text-gray-800 mb-4 font-space-grotesk"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Diseñadora{" "}
            <span
              className=" text-6xl font-bold text-secondary px-2 py-1 rounded text-bordered"
              style={{
                textShadow:
                  "1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black",
              }}
            >
              UX/UI
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-700 mb-10 leading-relaxed text-lg font-manrope py-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            Soy Diseñadora UX/UI y Diseñadora Industrial. Me encanta combinar lo
            tangible con lo digital, y aplicar el diseño como herramienta para
            mejorar la vida de las personas.
          </motion.p>

          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            {[
              {
                label: "Be",
                url: "https://www.behance.net/milagrosdziuban1",
              },
              {
                label: "In",
                url: "https://www.linkedin.com/in/milagros-dziuban-dise%C3%B1adora/",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center ${
                  isPlaygroundMode
                    ? "cursor-grab active:cursor-grabbing"
                    : "cursor-pointer"
                }`}
                drag={isPlaygroundMode}
                dragMomentum={false}
                dragElastic={0.1}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#9b51e0",
                  rotateY: isPlaygroundMode ? 0 : 180,
                  transition: { duration: 0.4 },
                }}
                whileTap={{ scale: 0.9 }}
                whileDrag={isPlaygroundMode ? { scale: 1.1, zIndex: 50 } : {}}
                onClick={
                  !isPlaygroundMode
                    ? () => window.open(item.url, "_blank")
                    : undefined
                }
                style={{ pointerEvents: isPlaygroundMode ? "auto" : "auto" }}
              >
                <span className="text-white font-bold font-space-grotesk">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-full max-w-lg">
            {/* Imagen principal - Monitor/Desktop */}
            <motion.div
              className="absolute -bottom-8 right-60 z-20"
              // Solo animar si NO está en modo playground
              {...(!isPlaygroundMode
                ? {
                    animate: { y: [0, -10, 0] },
                    transition: {
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                    },
                  }
                : {})}
              // Solo drag en modo playground
              {...(isPlaygroundMode
                ? {
                    drag: true,
                    dragMomentum: false,
                    dragElastic: 0.1,
                    whileDrag: { scale: 1.1, zIndex: 1000, rotate: 5 },
                    whileHover: { scale: 1.05 },
                    style: { cursor: "grab" },
                  }
                : {})}
            >
              <Image
                src="/imagen/property1.svg"
                alt="Desktop Design Interface"
                width={200}
                height={100}
                className="rounded-lg"
                style={{ pointerEvents: "none" }} // Importante: evita que la imagen capture eventos
              />
            </motion.div>

            {/* Imagen secundaria - Mobile/Tablet */}
            <motion.div
              className={`absolute bottom-10 -right-10 z-20 ${
                isPlaygroundMode ? "cursor-grab active:cursor-grabbing" : ""
              }`}
              animate={{
                y: isPlaygroundMode ? 0 : [0, -8, 0],
                rotateZ: isPlaygroundMode ? 0 : [0, 2, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: isPlaygroundMode ? 0 : Number.POSITIVE_INFINITY,
                delay: 0.5,
              }}
              drag={isPlaygroundMode}
              dragMomentum={false}
              dragElastic={0.1}
              whileHover={
                isPlaygroundMode
                  ? {
                      scale: 1.05,
                      rotate: [0, -3, 3, 0],
                      transition: { duration: 0.3 },
                    }
                  : {}
              }
              whileDrag={
                isPlaygroundMode ? { scale: 1.02, zIndex: 50, rotate: -5 } : {}
              }
            >
              <Image
                src="/imagen/property2.png"
                alt="Mobile Design Interface"
                width={200}
                height={250}
                className="rounded-lg"
                style={{ pointerEvents: "none" }} // Importante: evita que la imagen capture eventos
              />
              {/* Tooltip para modo playground */}
            </motion.div>

            {/* Imagen terciaria - Elementos de diseño */}
            <motion.div
              className={`absolute top-20 left-40 z-15 ${
                isPlaygroundMode ? "cursor-grab active:cursor-grabbing" : ""
              }`}
              animate={{
                rotateZ: isPlaygroundMode ? 0 : [0, -3, 0],
                scale: isPlaygroundMode ? 1 : [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: isPlaygroundMode ? 0 : Number.POSITIVE_INFINITY,
                delay: 1,
              }}
              drag={isPlaygroundMode}
              dragMomentum={false}
              dragElastic={0.1}
              whileHover={
                isPlaygroundMode
                  ? {
                      scale: 1.05,
                      rotate: [0, 5, -5, 0],
                      transition: { duration: 0.3 },
                    }
                  : {}
              }
              whileDrag={
                isPlaygroundMode ? { scale: 1.02, zIndex: 50, rotate: 8 } : {}
              }
            >
              <Image
                src="/imagen/property3.png"
                alt="Design Elements"
                width={200}
                height={180}
                className="rounded-lg"
                style={{ pointerEvents: "none" }} // Importante: evita que la imagen capture eventos
              />
              {/* Tooltip para modo playground */}
            </motion.div>
            {/* Frase - 1 */}
            <motion.div
              className="absolute bottom-45 right-50 z-20"
              // Solo animar si NO está en modo playground
              {...(!isPlaygroundMode
                ? {
                    animate: { y: [0, -10, 0] },
                    transition: {
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                    },
                  }
                : {})}
              // Solo drag en modo playground
              {...(isPlaygroundMode
                ? {
                    drag: true,
                    dragMomentum: false,
                    dragElastic: 0.1,
                    whileDrag: { scale: 1.1, zIndex: 1000, rotate: 5 },
                    whileHover: { scale: 1.05 },
                    style: { cursor: "grab" },
                  }
                : {})}
            >
              <Image
                src="/frase1.png"
                alt="Desktop Design Interface"
                width={200}
                height={100}
                className="rounded-lg"
                style={{ pointerEvents: "none" }} // Importante: evita que la imagen capture eventos
              />
              {/* Tooltip para modo playground */}
              {isPlaygroundMode && (
                <motion.div
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 pointer-events-none"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  ¡Arrástrame!
                </motion.div>
              )}
            </motion.div>
            {/* Frase - 2 */}
            <motion.div
              className="absolute -bottom-45 -right-30 z-20"
              // Solo animar si NO está en modo playground
              {...(!isPlaygroundMode
                ? {
                    animate: { y: [0, -10, 0] },
                    transition: {
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                    },
                  }
                : {})}
              // Solo drag en modo playground
              {...(isPlaygroundMode
                ? {
                    drag: true,
                    dragMomentum: false,
                    dragElastic: 0.1,
                    whileDrag: { scale: 1.1, zIndex: 1000, rotate: 5 },
                    whileHover: { scale: 1.05 },
                    style: { cursor: "grab" },
                  }
                : {})}
            >
              <Image
                src="/frase2.png"
                alt="Desktop Design Interface"
                width={200}
                height={100}
                className="rounded-lg"
                style={{ pointerEvents: "none" }} // Importante: evita que la imagen capture eventos
              />
              {/* Tooltip para modo playground */}
              {isPlaygroundMode && (
                <motion.div
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 pointer-events-none"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  ¡Arrástrame!
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Botón Ver más centrado al final */}
      <motion.div
        className="text-center mt-8 pb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <motion.div
          whileHover={{
            scale: 1.1,
            y: -5,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={() => {
              const element = document.getElementById("sobre-mi");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-gray-800 hover:bg-purple-600 text-white px-8 py-3 rounded-full font-manrope cursor-pointer"
          >
            Ver más
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Sección Design Think Create Inspire
function DesignSection() {
  return (
    <section id="sobre-mi" className="px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <ScrollReveal direction="left">
            <motion.h2
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-1 leading-tight font-space-grotesk"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span
                className=" text-6xl font-bold text-white -px-2 py-1 rounded text-bordered"
                style={{
                  textShadow:
                    "1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black",
                }}
              >
                Design
              </span>{" "}
              Think
            </motion.h2>
            <h3 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12 leading-tight font-space-grotesk">
              Create{" "}
              <span
                className=" text-6xl font-bold text-white -px-2 py-1 rounded text-bordered"
                style={{
                  textShadow:
                    "1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black",
                }}
              >
                Inspire
              </span>
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg max-w-lg font-manrope">
              Creo experiencias digitales que combinan diseño estratégico,
              pensamiento centrado en el usuario y una estética visual cuidada.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-12 max-w-lg font-manrope">
              Trabajo desde la investigación hasta el diseño final, aplicando
              metodologías UX/UI para resolver problemas reales y generar
              impacto.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="/CV_MilagrosDziuban_2025.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gray-800 hover:bg-purple-600 text-white px-6 py-2 font-medium rounded-[32px] font-manrope cursor-pointer">
                  Descargar CV
                </Button>
              </a>
            </motion.div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.2} className="relative">
            <div className="grid grid-cols-2 gap-4 mt-2">
              {[
                {
                  bg: "bg-purple-200",
                  icon: "🕒",
                  title: "Años de experiencia",
                  subtitle:
                    "Creando experiencias intuitivas desde la investigación hasta el prototipo final.",
                },
                {
                  bg: "bg-green-200",
                  icon: "💻",
                  title: "Interfaces limpias",
                  subtitle:
                    "Diseño centrado en la accesibilidad, usabilidad y escalabilidad.",
                },
                {
                  bg: "bg-pink-200",
                  icon: "🎨",
                  title: "Experiencia en diseño",
                  subtitle:
                    "Testing, handoff y validación constante con desarrolladores",
                },
                {
                  bg: "bg-blue-200",
                  icon: "💙",
                  title: "Diseño de librerías",
                  subtitle: "Componentes modulares, documentados y escalables.",
                },
                {
                  bg: "bg-yellow-200",
                  icon: "✍️",
                  title: "Prototipos claros",
                  subtitle: "Entregables que mejoran la comunicación con Devs",
                },
                {
                  bg: "bg-teal-200",
                  icon: "🎯",
                  title: " Tendencias con criterio",
                  subtitle: "Actualizada con tendencias UX/UI.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    rotateZ: 1,
                    transition: { duration: 0.2 },
                  }}
                  viewport={{ once: true }}
                >
                  <Card
                    className={`${item.bg} border-none cursor-default h-full text-white`}
                  >
                    <CardContent className="py-1 px-6">
                      <motion.div
                        className="w-10 h-10 bg-white/30 rounded-lg mb-4 flex items-center justify-center"
                        whileHover={{ rotateZ: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <span className="text-white text-lg">{item.icon}</span>
                      </motion.div>
                      <h4 className="font-semibold text-black mb-4 text-lg leading-tight font-manrope">
                        {item.title}
                      </h4>
                      <p className="text-black/80 text-xs leading-tight font-manrope">
                        {item.subtitle}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Nueva sección de Formación y Experiencia */}
        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <ScrollReveal direction="left" delay={0.4}>
            <div className="bg-white rounded-3xl p-8 shadow-lg h-110">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                FORMACIÓN ACADÉMICA
              </h3>
              <div className="space-y-4 text-gray-700 font-manrope">
                <p className="font-semibold">Universidad:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-bold">
                      Licenciatura en Diseño Industrial
                    </span>{" "}
                    (2017 - 2024)
                    <br />
                    Universidad Nacional del Litoral.
                  </li>
                </ul>
                <p className="font-semibold mt-6">Cursos:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-bold">Diseño UX/UI Avanzado</span>{" "}
                    (2022 Ago - Nov) CoderHouse
                  </li>
                  <li>
                    <span className="font-bold">Diseño UX/UI</span> (2022 Mar -
                    Jun) CoderHouse
                  </li>
                  <li>
                    <span className="font-bold">Full Stack Developer</span>{" "}
                    (2022 Sep - 2023 Ene) SoyHenry
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.6}>
            <div className="bg-white rounded-3xl p-8 shadow-lg h-110">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                EXPERIENCIAS LABORALES
              </h3>
              <div className="space-y-4 text-gray-700 font-manrope">
                <div>
                  <p className="font-bold">Diseño UX en Avature</p>
                  <p className="text-sm text-gray-600">
                    (Abril 2024 - Actualidad)
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>
                      Diseño de producto y análisis para mejorar en la
                      experiencia de usuario.
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold">Diseño UX/UI en Crombie</p>
                  <p className="text-sm text-gray-600">
                    (Mayo 2023 - Abril 2024)
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Diseño para clientes en el exterior.</li>
                    <li>Diseño y coordinación de proyecto.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold">Diseño UX/UI en Santa Fe Sistemas</p>
                  <p className="text-sm text-gray-600">
                    (Enero 2023 - Mayo 2023)
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Diseñadora UX/UI freelance para empresa local.</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const [isPlaygroundMode, setIsPlaygroundMode] = useState(false);

  // Escuchar el estado del playground mode
  useEffect(() => {
    const checkPlaygroundMode = () => {
      const context = document.getElementById("playground-context");
      if (context) {
        setIsPlaygroundMode(context.getAttribute("data-active") === "true");
      }
    };

    const interval = setInterval(checkPlaygroundMode, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="proyectos" className="px-6 pt-20 md:pt-20 pb-20 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 font-space-grotesk">
              Proyectos
            </h2>
            <a
              href="https://www.behance.net/milagrosdziuban1"
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
                <span className="text-white text-sm font-bold font-space-grotesk">
                  Be
                </span>
              </motion.div>
            </a>
          </div>
        </ScrollReveal>
        <div className="space-y-6 grid md:grid-cols-1">
          {/* Proyecto 1 - Software de Gestión */}
          <AnimatedProjectCard delay={0} className="overflow-hidden">
            <div className="bg-white/50 rounded-3xl p-8 cursor-default">
              <div className="grid md:grid-cols-[1fr_2fr] items-center gap-16">
                <motion.div
                  className={`relative`}
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                  onClick={
                    !isPlaygroundMode
                      ? () => (window.location.href = "/proyecto-activa")
                      : undefined
                  }
                >
                  <Image
                    src="/imagen/Activa.png"
                    alt="Proyecto Activa"
                    width={100}
                    height={120}
                    className="w-110 object-cover"
                  />
                </motion.div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 font-space-grotesk">
                    Proyecto Activa
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-manrope">
                    Actualmente, la empresa Activa enfrenta dificultades para
                    gestionar sus procesos internos debido a la falta de control
                    y seguimiento de los mismos. Las tareas administrativas,
                    operativas y de seguimiento se realizan en diferentes y
                    múltiples plataformas o de manera manual, lo que genera
                    ineficiencias, pérdida de tiempo, errores y dificultad para
                    acceder a la información de manera rápida y efectiva.
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-full font-manrope cursor-pointer"
                      onClick={() =>
                        (window.location.href = "/proyecto-activa")
                      }
                    >
                      Ver más
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </AnimatedProjectCard>

          {/* Proyecto 2 - House Plant */}
          <AnimatedProjectCard delay={0.2} className="overflow-hidden">
            <div className="bg-white/50 rounded-3xl p-8 cursor-default">
              <div className="grid md:grid-cols-[1fr_2fr] items-center gap-16">
                <motion.div
                  className={`relative ${
                    isPlaygroundMode ? "cursor-grab active:cursor-grabbing" : ""
                  }`}
                  whileHover={{ scale: 1.02, rotateY: -5 }}
                  transition={{ duration: 0.3 }}
                  drag={isPlaygroundMode}
                  dragMomentum={false}
                  dragElastic={0.1}
                  whileDrag={
                    isPlaygroundMode
                      ? { scale: 1.05, zIndex: 50, rotate: -3 }
                      : {}
                  }
                  onClick={
                    !isPlaygroundMode
                      ? () => (window.location.href = "/proyecto-houseplant")
                      : undefined
                  }
                  style={{ pointerEvents: "auto" }}
                >
                  <Image
                    src="/imagen/HousePlant.png"
                    alt="Proyecto HousePlants"
                    width={100}
                    height={200}
                    className="w-120 object-cover"
                  />
                </motion.div>
                <div className="space-y-7">
                  <h3 className="text-2xl font-bold text-gray-900 font-space-grotesk">
                    Proyecto HousePlants
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-manrope">
                    Aplicación móvil que revoluciona el cuidado de plantas de
                    interior mediante diagnóstico inteligente, recordatorios
                    personalizados y una comunidad activa de jardineros.
                    Diseñada para hacer la jardinería doméstica accesible a
                    todos.
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-full font-manrope cursor-pointer"
                      onClick={() =>
                        (window.location.href = "/proyecto-houseplant")
                      }
                    >
                      Ver más
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </AnimatedProjectCard>

          {/* Proyecto 3 - Fungi Ritual */}
          <AnimatedProjectCard delay={0.4} className="overflow-hidden">
            <div className="bg-white/50 rounded-3xl p-8 cursor-default">
              <div className="grid md:grid-cols-[1fr_2fr] items-center gap-16">
                <motion.div
                  className={`relative ${
                    isPlaygroundMode ? "cursor-grab active:cursor-grabbing" : ""
                  }`}
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                  drag={isPlaygroundMode}
                  dragMomentum={false}
                  dragElastic={0.1}
                  whileDrag={
                    isPlaygroundMode
                      ? { scale: 1.05, zIndex: 50, rotate: 5 }
                      : {}
                  }
                  onClick={
                    !isPlaygroundMode
                      ? () => (window.location.href = "/proyecto-fungi-ritual")
                      : undefined
                  }
                  style={{ pointerEvents: "auto" }}
                >
                  <Image
                    src="/imagen/Fungi.png"
                    alt="Proyecto Fungi Ritual"
                    width={320}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 font-space-grotesk">
                    Proyecto Fungi Ritual
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-manrope">
                    Plataforma digital inmersiva que conecta tradición y
                    modernidad en el mundo de los hongos medicinales. Combina
                    educación ancestral, comercio responsable y experiencias
                    rituales guiadas en un ecosistema digital único.
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-full font-manrope cursor-pointer"
                      onClick={() =>
                        (window.location.href = "/proyecto-fungi-ritual")
                      }
                    >
                      Ver más
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </AnimatedProjectCard>
        </div>
      </div>
    </section>
  );
}

// Sección de contacto
function ContactSection() {
  const [isPlaygroundMode, setIsPlaygroundMode] = useState(false);

  // Escuchar el estado del playground mode
  useEffect(() => {
    const checkPlaygroundMode = () => {
      const context = document.getElementById("playground-context");
      if (context) {
        setIsPlaygroundMode(context.getAttribute("data-active") === "true");
      }
    };

    const interval = setInterval(checkPlaygroundMode, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contacto" className="px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <h2 className="text-6xl font-bold text-gray-900 mb-12 font-space-grotesk">
              Contactame
            </h2>
            <div className="space-y-6">
              {[
                {
                  icon: "📧",
                  text: "milagrosdziuban@gmail.com",
                  url: "mailto:milagrosdziuban@gmail.com",
                },
                {
                  icon: "In",
                  text: "Milagros Dziuban",
                  url: "https://www.linkedin.com/in/milagros-dziuban-dise%C3%B1adora/",
                },
                {
                  icon: "Be",
                  text: "MilagrosDziuban",
                  url: "https://www.behance.net/milagrosdziuban1",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  viewport={{ once: true }}
                >
                  <Card className="border border-gray-200 cursor-pointer">
                    <CardContent className="py-1 px-6">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3"
                      >
                        <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
                          <span className="text-lg font-space-grotesk">
                            {item.icon}
                          </span>
                        </div>
                        <span className="text-gray-700 font-manrope">
                          {item.text}
                        </span>
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="mt-12"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/CV_MilagrosDziuban_2025.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gray-800 hover:bg-purple-600 text-white px-6 py-2 font-medium rounded-[32px] font-manrope cursor-pointer">
                  Descargar CV
                </Button>
              </a>
            </motion.div>
          </ScrollReveal>
          <ScrollReveal
            direction="right"
            delay={0.2}
            className="relative flex justify-end"
          >
            <motion.div
              className={`relative z-10`}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
              }}
            >
              <div className="w-120 h-130 rounded-4xl overflow-hidden relative">
                <Image
                  src="/imagen/pngcv.png"
                  alt="Milagros - UX/UI Designer"
                  width={320}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden relative">
      <NavigationHeader />
      <PlaygroundMode />
      <HeroSection />
      <DesignSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
