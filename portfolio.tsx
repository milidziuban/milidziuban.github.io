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
      className="px-6 pt-24 md:pt-32 pb-8 bg-gradient-to-br from-gray-50 via-gray-100 to-purple-50
 min-h-screen flex flex-col"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-24 items-center flex-1">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="uppercase tracking-widest text-sm text-purple-500 font-medium">
            Portfolio
          </span>
          <motion.h1 className="text-5xl md:text-6xl font-medium tracking-tight text-gray-900 mb-6 font-space-grotesk">
            Hola! Soy Milagros
          </motion.h1>

          <motion.p className="mb-6 text-gray-600 leading-relaxed text-lg font-manrope max-w-xl">
            Licenciada en Diseño Industrial, especializada en{" "}
            <span className="text-gray-900 font-semibold">UX/UI</span> y{" "}
            <span className="text-gray-900 font-semibold">UX Game Design</span>.
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
                className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer`}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#9b51e0",
                  rotateY: 180,
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
          whileHover={{
            scale: 1.03,
            rotate: -0.5,
            transition: { duration: 0.4 },
          }}
        >
          <div
            className="absolute -inset-10 bg-gradient-to-tr from-purple-200/60 to-pink-200/40 
            rounded-[40%] blur-3xl animate-pulse"
          />
          <div className="relative w-full max-w-[640px] mx-auto">
            <Image
              src="/yodibujo.png"
              alt="yo"
              width={1200}
              height={800}
              className="rounded-xl"
            />
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
            className="
  bg-gray-900 
  hover:bg-purple-600 
  text-white 
  px-10 py-4 
  rounded-full 
  font-manrope 
  shadow-lg
"
          >
            Ver más sobre mí →
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Sección Design Think Create Inspire
function DesignSection() {
  return (
    <section id="sobre-mi" className="px-6 py-30 bg-white">
      <div className="max-w-6xl mx-auto ">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <ScrollReveal direction="left">
            <motion.h2
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-1 leading-tight font-space-grotesk"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Design Think
            </motion.h2>
            <h3 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12 leading-tight font-space-grotesk">
              Create Inspire
            </h3>
            <div className="relative">
              <span className="absolute left-0 top-1 w-[2px] h-full" />
              <p className="text-gray-600 mb-10 text-md max-w-md">
                Creo experiencias digitales que combinan diseño estratégico,
                pensamiento centrado en el usuario y una estética visual
                cuidada.
              </p>
            </div>
            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
              <a
                href="/CV_MilagrosDziuban_2025.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className=" bg-gray-900 hover:bg-purple-600  text-white  px-8 py-3 rounded-full  shadow-lg font-manrope">
                  Descargar CV
                </Button>
              </a>
            </motion.div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.2} className="relative">
            <div className="grid grid-cols-2 gap-6 mt-2">
              {[
                {
                  bg: "bg-purple-200",
                  icon: "🕒",
                  title: "Años de experiencia",
                  subtitle:
                    "Creando experiencias desde la investigación hasta el prototipo.",
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
                  subtitle: "Actualizada con las nuevas tendencias UX/UI.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{
                    y: -6,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                  }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/70 backdrop-blur border border-gray-200 shadow-sm rounded-2xl">
                    <CardContent className="py-1 px-6">
                      <motion.div
                        className="w-10 h-10 bg-white/30 rounded-lg mb-4 flex items-center justify-center"
                        transition={{ duration: 0.5 }}
                      >
                        <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center">
                          <span className="text-lg">{item.icon}</span>
                        </div>
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
        <div className="mt-8 grid md:grid-cols-2 gap-12">
          <ScrollReveal direction="left" delay={0.4}>
            <div className="bg-white/70 p-8 h-full backdrop-blur border border-gray-200 shadow-sm rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-space-grotesk text-lg">
                FORMACIÓN ACADÉMICA
              </h3>
              <div className="space-y-4 text-gray-700 font-manrope">
                <p className="font-semibold text-sm">Universidad:</p>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    <span className="font-bold text-sm">
                      Licenciatura en Diseño Industrial
                    </span>{" "}
                    (2017 - 2024)
                    <br />
                    Universidad Nacional del Litoral.
                  </li>
                </ul>
                <p className="font-semibold mt-6 text-sm">Cursos:</p>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    <span className="font-bold text-sm">
                      Diseño UX/UI Avanzado
                    </span>{" "}
                    (2022 Ago - Nov) CoderHouse
                  </li>
                  <li>
                    <span className="font-bold text-sm">Diseño UX/UI</span>{" "}
                    (2022 Mar - Jun) CoderHouse
                  </li>
                  <li>
                    <span className="font-bold text-sm">
                      Full Stack Developer
                    </span>{" "}
                    (2022 Sep - 2023 Ene) SoyHenry
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.6}>
            <div className="bg-white/70 p-8 h-full backdrop-blur border border-gray-200 shadow-sm rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-space-grotesk text-lg">
                EXPERIENCIA LABORAL
              </h3>
              <div className="space-y-4 text-gray-700 font-manrope">
                <div>
                  <p className="font-bold text-sm">Diseño UX en Avature</p>
                  <p className="text-sm text-gray-600">
                    (Abril 2024 - Actualidad)
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mt-2 text-sm">
                    <li>
                      Diseño de producto y análisis para mejorar en la
                      experiencia de usuario.
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-sm">Diseño UX/UI en Crombie</p>
                  <p className="text-sm text-gray-600 text-sm">
                    (Mayo 2023 - Abril 2024)
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mt-2 text-sm">
                    <li>Diseño para clientes en el exterior.</li>
                    <li>Diseño y coordinación de proyecto.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-sm">
                    Diseño UX/UI en Santa Fe Sistemas
                  </p>
                  <p className="text-sm text-gray-600 text-sm">
                    (Enero 2023 - Mayo 2023)
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mt-2 text-sm">
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
    <section
      id="proyectos"
      className="px-6 pt-20 md:pt-30 pb-30 bg-gradient-to-br from-gray-50 via-gray-100 to-purple-50"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 font-space-grotesk">
              Proyectos
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Proyecto 1 - Software de Gestión */}
          <AnimatedProjectCard delay={0}>
            <motion.div
              className="h-full bg-white/70 backdrop-blur border border-gray-200 
    rounded-3xl overflow-hidden shadow-sm"
              whileHover={{
                y: -6,
                boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
              }}
            >
              {/* Imagen */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/imagen/Activa.png"
                  alt="Proyecto Activa"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Contenido */}
              <div className="flex flex-col justify-between p-6 flex-1">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900 font-space-grotesk">
                    Proyecto Activa
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                    Plataforma de gestión para optimizar procesos internos y
                    centralizar información operativa.
                  </p>
                </div>

                <Button
                  className="mt-6 w-fit bg-gray-900 hover:bg-purple-600 text-white 
        px-6 py-2 rounded-full font-manrope"
                  onClick={() => (window.location.href = "/proyecto-activa")}
                >
                  Ver caso →
                </Button>
              </div>
            </motion.div>
          </AnimatedProjectCard>

          {/* Proyecto 2 - House Plant */}
          <AnimatedProjectCard delay={0}>
            <motion.div
              className="h-full bg-white/70 backdrop-blur border border-gray-200 
    rounded-3xl overflow-hidden shadow-sm"
              whileHover={{
                y: -6,
                boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
              }}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/imagen/houseplant.png"
                  alt="Proyecto House Plant"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Contenido */}
              <div className="flex flex-col justify-between p-6 flex-1">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900 font-space-grotesk">
                    Proyecto HousePlant
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                    Aplicación móvil para el cuidado de plantas de interior
                    mediante diagnóstico inteligente, recordatorios
                    personalizados y una comunidad activa.
                  </p>
                </div>

                <Button
                  className="mt-6 w-fit bg-gray-900 hover:bg-purple-600 text-white 
        px-6 py-2 rounded-full font-manrope"
                  onClick={() =>
                    (window.location.href = "/proyecto-houseplant")
                  }
                >
                  Ver caso →
                </Button>
              </div>
            </motion.div>
          </AnimatedProjectCard>

          {/* Proyecto 3 - Fungi Ritual */}
          <AnimatedProjectCard delay={0}>
            <motion.div
              className="h-full bg-white/70 backdrop-blur border border-gray-200 
    rounded-3xl overflow-hidden shadow-sm"
              whileHover={{
                y: -6,
                boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
              }}
            >
              {/* Imagen */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/imagen/Fungi.png"
                  alt="Proyecto Fungi"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Contenido */}
              <div className="flex flex-col justify-between p-6 flex-1">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900 font-space-grotesk">
                    Proyecto Fungi Ritual
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                    Landingpage centrada en brindar información sobre estos
                    nuevos adaptogenos y muestra de productos que se tienen a la
                    venta.
                  </p>
                </div>

                <Button
                  className="mt-6 w-fit bg-gray-900 hover:bg-purple-600 text-white 
        px-6 py-2 rounded-full font-manrope"
                  onClick={() =>
                    (window.location.href = "/proyecto-fungi-ritual")
                  }
                >
                  Ver caso →
                </Button>
              </div>
            </motion.div>
          </AnimatedProjectCard>

          {/* Proyecto 4 - Jalife */}
          <AnimatedProjectCard delay={0}>
            <motion.div
              className="h-full bg-white/70 backdrop-blur border border-gray-200 
    rounded-3xl overflow-hidden shadow-sm"
              whileHover={{
                y: -6,
                boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
              }}
            >
              {/* Imagen */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/imagen/Jalife.png"
                  alt="Proyecto Jalife"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Contenido */}
              <div className="flex flex-col justify-between p-6 flex-1">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900 font-space-grotesk">
                    Proyecto HousePlant
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                    Proyecto enfocado en rediseñar y modernizar la pagina de la
                    marca, optimizando la navegación, la presentación de
                    productos y contenidos.
                  </p>
                </div>

                <Button
                  className="mt-6 w-fit bg-gray-900 hover:bg-purple-600 text-white 
        px-6 py-2 rounded-full font-manrope"
                  onClick={() => (window.location.href = "/proyecto-jalife")}
                >
                  Ver caso →
                </Button>
              </div>
            </motion.div>
          </AnimatedProjectCard>
        </div>
        <div className="h-full mt-12 grid grid-cols-1">
         
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
    <section
      id="contacto"
      className="px-30 py-30 bg-gradient-to-b from-white via-gray-50 to-white
"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <h2 className="text-5xl md:text-6xl font-semibold text-gray-900 font-space-grotesk">
              ¿Hablamos?
            </h2>
            <p className="text-gray-500 mt-4 max-w-md font-manrope  mb-12">
              Si te interesa trabajar conmigo o charlar sobre diseño, podés
              escribirme por cualquiera de estos medios.
            </p>
            <div className="space-y-6">
              {[
                {
                  icon: "📧",
                  text: "milagrosdziuban1@gmail.com",
                  url: "mailto:milagrosdziuban1@gmail.com",
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
                  <Card
                    className="
  bg-white/70 backdrop-blur 
  border border-gray-200 
  rounded-2xl 
  shadow-sm
"
                  >
                    <CardContent className="px-6">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                          <span className="text-purple-700 font-medium">
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
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/CV_MilagrosDziuban_2025.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="
  bg-gray-900 
  hover:bg-purple-600 
  text-white 
  px-8 py-3 
  rounded-full 
  shadow-lg 
  font-manrope
"
                >
                  Descargar CV →
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
      {/* <PlaygroundMode /> */}
      <HeroSection />
      <DesignSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
