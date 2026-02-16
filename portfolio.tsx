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
import NeonGridBackground from "./components/NeonGridBackground";

// Sección Hero

function HeroSection() {
  const [isPlaygroundMode, setIsPlaygroundMode] = useState(false);

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
    className="
   px-6 pt-28 md:pt-36 pb-12 min-h-screen flex flex-col relative z-10
    "
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-18 items-center flex-1">
        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Badge */}

          {/* <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/70 backdrop-blur border border-gray-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-gray-700 font-manrope">
              Disponible para proyectos
            </span>
          </div> */}

          <div className="inline-flex items-center gap-2 mb-6">
  
           <span className="uppercase tracking-widest text-sm text-purple-500 font-bold">
             PORTFOLIO
            </span>
          </div>

          <h1 className="text-6xl md:text-5xl font-medium tracking-tight text-gray-900 mb-6 font-space-grotesk">
            Diseño{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              experiencias
            </span>
            <br />
            digitales que conectan
          </h1>

          <p className="mb-10 text-gray-600 leading-relaxed text-lg font-manrope max-w-xl">
            Soy Milagros, diseñadora UX/UI enfocada en crear productos claros,
            funcionales y visualmente atractivos, centrados en las personas.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-6">
            <Button
              onClick={() => {
                const element = document.getElementById("proyectos");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="
                bg-gray-900 hover:bg-purple-600 text-white
                px-4 py-4 rounded-full font-manrope shadow-lg
                cursor-pointer
              "
            >
              Ver proyectos
            </Button>

            <button
              onClick={
                !isPlaygroundMode
                  ? () =>
                      window.open(
                        "https://www.linkedin.com/in/milagros-dziuban-dise%C3%B1adora/",
                        "_blank",
                      )
                  : undefined
              }
              className="
                text-gray-700 font-manrope font-medium
                hover:text-purple-600 transition
                cursor-pointer
              "
            >
              LinkedIn
            </button>
          </div>
        </motion.div>

        {/* VISUAL */}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.04 }}
        >
          {/* Glow */}
          <div
            className="
            absolute -inset-16 
            bg-gradient-to-tr from-purple-300/50 via-pink-200/40 to-indigo-200/40
            rounded-[45%] blur-3xl animate-pulse
          "
          />

          {/* Marco glass */}
          <div
            className="
            relative p-3 rounded-2xl
          "
          >
            <Image
              src="/yodibujo.png"
              alt="Retrato ilustrado de Milagros"
              width={1200}
              height={800}
              className="rounded-xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Flecha scroll */}
      <motion.div
        className="text-center mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          whileHover={{ y: 6 }}
          className="text-gray-500 text-sm font-manrope"
        >
          ↓ Desplazá para explorar
        </motion.div>
      </motion.div>
    </section>
  );
}

function DesignSection() {
  return (
    <section
      id="sobre-mi"
      className="
        px-6 py-32
       bg-gradient-to-b from-white via-gray-50 to-white
      "
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="grid md:grid-cols-2 gap-20 items-start mb-12">

          <ScrollReveal direction="left">
            <motion.h2
              className="
                text-5xl md:text-5xl font-medium
                text-gray-900 leading-tight
                font-space-grotesk
              "
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
               Sobre Mí
            </motion.h2>
          </ScrollReveal>

          {/* FEATURE CARDS */}
          {/* <ScrollReveal direction="right" delay={0.2}>
            <div className="grid grid-cols-2 gap-6">

              {[
                {
                  icon: "🧠",
                  title: "Pensamiento estratégico",
                  text: "Decisiones basadas en investigación y objetivos.",
                },
                {
                  icon: "💻",
                  title: "Interfaces claras",
                  text: "Usabilidad, accesibilidad y escalabilidad.",
                },
                {
                  icon: "🎨",
                  title: "Diseño visual",
                  text: "Estética cuidada y consistente.",
                },
                {
                  icon: "🧩",
                  title: "Sistemas de diseño",
                  text: "Componentes documentados.",
                },
                {
                  icon: "⚡",
                  title: "Prototipado",
                  text: "Flujos claros y testeables.",
                },
                {
                  icon: "🚀",
                  title: "Evolución constante",
                  text: "Actualizada en tendencias.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  className="
                    bg-white/60 backdrop-blur
                    border border-white/40
                    rounded-2xl p-6 shadow-sm
                  "
                >
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h4 className="font-manrope font-semibold mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {item.text}
                  </p>
                </motion.div>
              ))}

            </div>
          </ScrollReveal> */}
        </div>

        {/* EXPERIENCE */}
        <div className="grid md:grid-cols-2 gap-12">

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

  const projects = [
    {
      title: "Proyecto Activa",
      description:
        "Plataforma de gestión para optimizar procesos internos y centralizar información operativa.",
      image: "/Activa.png",
      url: "/proyecto-activa",
      tags: ["UX/UI", "Web App", "Research"],
    },
    {
      title: "Proyecto HousePlant",
      description:
        "App móvil para el cuidado de plantas mediante diagnóstico inteligente y recordatorios personalizados.",
      image: "/HousePlant.png",
      url: "/proyecto-houseplant",
      tags: ["UX/UI", "Mobile App"],
    },
    {
      title: "Proyecto Fungi Ritual",
      description:
        "Landing page informativa con catálogo de productos y enfoque en conversión.",
      image: "/FungiRitual.png",
      url: "/proyecto-fungi-ritual",
      tags: ["UX/UI", "Landing Page"],
    },
    {
      title: "Proyecto Jalife",
      description:
        "Rediseño y modernización de e-commerce con foco en navegación y contenidos.",
      image: "/Jalife.png",
      url: "/proyecto-jalife",
      tags: ["UX/UI", "E-commerce"],
    },
  ];

  return (
    <section
      id="proyectos"
      className="
        px-6 pt-28 pb-32
        bg-gradient-to-br from-[#f7f7fb] via-[#f1f1f6] to-[#f5edff]
      "
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <ScrollReveal>
          <div className="mb-16 max-w-2xl">
            <span className="uppercase tracking-widest text-sm text-purple-500 font-manrope">
              TRABAJOS SELECCIONADOS
            </span>

            <h2 className="text-5xl md:text-6xl font-medium text-gray-900 font-space-grotesk mt-2">
              Proyectos
            </h2>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4 }}
              onClick={
                !isPlaygroundMode
                  ? () => (window.location.href = project.url)
                  : undefined
              }
            >
              {/* Imagen */}
              <div className="relative h-[360px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div
                className="
                  absolute inset-0 
                  bg-gradient-to-t from-black/90 via-black/60 to-transparent
                  opacity-0 group-hover:opacity-100
                  transition duration-500
                  flex flex-col justify-end p-8
                "
              >
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-white/20 backdrop-blur text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-space-grotesk text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-white/80 text-sm mb-4 max-w-md">
                  {project.description}
                </p>

                <span className="text-white underline underline-offset-4">
                  Ver caso →
                </span>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

// Sección de contacto
function ContactSection() {
  const [isPlaygroundMode, setIsPlaygroundMode] = useState(false);

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
      className="
        px-6 py-32
        bg-gradient-to-br from-[#f7f7fb] via-[#f1f1f6] to-[#f5edff]
      "
    >
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* TEXTO */}
          <ScrollReveal direction="left">
            <span className="uppercase tracking-widest text-sm text-purple-500 font-manrope">
              Contacto
            </span>

            <h2 className="text-5xl md:text-6xl font-medium text-gray-900 font-space-grotesk mt-3">
              ¿Hablamos?
            </h2>

            <p className="text-gray-600 mt-6 max-w-md font-manrope text-lg">
              Si tenés un proyecto en mente o querés charlar sobre diseño,
              escribime por cualquiera de estos medios.
            </p>

            {/* CONTACTOS */}
            <div className="mt-12 space-y-4">

              {[
                {
                  icon: "✉️",
                  text: "milagrosdziuban1@gmail.com",
                  url: "mailto:milagrosdziuban1@gmail.com",
                },
                {
                  icon: "in",
                  text: "LinkedIn",
                  url: "https://www.linkedin.com/in/milagros-dziuban-dise%C3%B1adora/",
                },
                {
                  icon: "be",
                  text: "Behance",
                  url: "https://www.behance.net/milagrosdziuban1",
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group flex items-center gap-4
                    bg-white/60 backdrop-blur
                    border border-white/40
                    rounded-2xl px-6 py-4
                    shadow-sm
                    hover:bg-white/80
                    transition
                  "
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div
                    className="
                      w-12 h-12 rounded-xl
                      bg-gray-900 text-white
                      flex items-center justify-center
                      font-manrope
                    "
                  >
                    {item.icon}
                  </div>

                  <span className="font-manrope text-gray-800">
                    {item.text}
                  </span>
                </motion.a>
              ))}

            </div>

            {/* CTA */}
            <motion.div
              className="mt-12"
              whileHover={{ y: -4 }}
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
                    bg-gray-900 hover:bg-purple-600
                    text-white px-8 py-4
                    rounded-full shadow-lg
                    font-manrope
                  "
                >
                  Descargar CV
                </Button>
              </a>
            </motion.div>

          </ScrollReveal>

          {/* IMAGEN */}
          <ScrollReveal direction="right" delay={0.2}>
            <motion.div
              className="relative flex justify-center"
              whileHover={{ scale: 1.03 }}
            >
              {/* Glow */}
              <div
                className="
                  absolute -inset-12
                  bg-gradient-to-tr from-purple-300/40 to-pink-300/30
                  rounded-[40%] blur-3xl
                "
              />

              {/* Marco glass */}
              <div
                className="
                  relative p-3
                  rounded-3xl
                "
              >
                <Image
                  src="/imagen/pngcv.png"
                  alt="Milagros UX/UI Designer"
                  width={420}
                  height={480}
                  className="rounded-2xl object-cover"
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
      <NeonGridBackground />
      <HeroSection />
      <DesignSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
