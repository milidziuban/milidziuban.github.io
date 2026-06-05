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

  const skills = [
    "UX Design",
    "UI Design",
    "Design Systems",
    "Prototyping",
    "User Research",
    "Interaction Design",
  ];

  return (
    <section
      id="inicio"
      className="
   px-6 pt-28 md:pt-36 pb-12 min-h-screen flex flex-col
    "
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-18 items-center flex-1 w-full">
        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="uppercase tracking-widest text-sm text-purple-500 font-bold">
              PORTFOLIO
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-gray-900 mb-6 font-space-grotesk leading-[1.05]">
            Diseño{" "}
            <span className="font-instrument-serif italic font-normal text-purple-600">
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
                group bg-gray-900 hover:bg-purple-600 text-white
                px-6 py-4 rounded-full font-manrope shadow-lg
                cursor-pointer inline-flex items-center gap-2
              "
            >
              Ver proyectos
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
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
                relative text-gray-700 font-manrope font-medium
                hover:text-purple-600 transition
                cursor-pointer group
              "
            >
              LinkedIn
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-600 transition-all duration-300 group-hover:w-full" />
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
          {/* Shape sólido principal (squircle organico rotado) */}
          <div
            className="
              absolute w-[88%] h-[88%]
              bg-purple-200
              rounded-[42%_58%_55%_45%/45%_42%_58%_55%]
              -rotate-6
            "
          />

          {/* Shape acento (offset) */}
          <div
            className="
              absolute w-[78%] h-[78%]
              bg-pink-100
              rounded-[55%_45%_42%_58%/58%_55%_45%_42%]
              rotate-3 translate-x-6 translate-y-6
            "
          />

          {/* Retrato */}
          <div className="relative p-3 rounded-2xl">
            <Image
              src="/yodibujo.png"
              alt="Retrato ilustrado de Milagros"
              width={1200}
              height={800}
              className="rounded-xl relative"
            />
          </div>
        </motion.div>
      </div>

      {/* MARQUEE de skills */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="relative w-full overflow-hidden py-6 mt-10 border-y border-gray-200/60"
      >
        <div className="flex whitespace-nowrap animate-marquee w-max">
          {[...Array(2)].map((_, repeat) => (
            <div
              key={repeat}
              className="flex items-center shrink-0 font-instrument-serif italic text-3xl md:text-4xl text-gray-400"
            >
              {skills.map((skill, i) => (
                <span key={i} className="flex items-center">
                  <span className="px-8">{skill}</span>
                  <span className="text-purple-400">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator - línea vertical animada */}
      <motion.div
        className="flex flex-col items-center gap-3 mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-xs uppercase tracking-widest text-gray-500 font-manrope">
          Scroll
        </span>
        <div className="relative w-[2px] h-12 bg-gray-200 overflow-hidden rounded-full">
          <motion.div
            className="absolute top-0 left-0 w-full bg-purple-600 rounded-full"
            initial={{ height: "0%" }}
            animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

function DesignSection() {
  const tools = [
    "Figma",
    "FigJam",
    "Sketch",
    "Adobe XD",
    "Photoshop",
    "Illustrator",
    "Notion",
    "Miro",
  ];

  const experience = [
    {
      date: "Abr 2024 — Actualidad",
      role: "Diseño UX",
      company: "Avature",
      description:
        "Diseño de producto y análisis para mejorar la experiencia de usuario.",
    },
    {
      date: "May 2023 — Abr 2024",
      role: "Diseño UX/UI",
      company: "Crombie",
      description:
        "Diseño para clientes en el exterior. Coordinación de proyecto.",
    },
    {
      date: "Ene 2023 — May 2023",
      role: "Diseño UX/UI",
      company: "Santa Fe Sistemas",
      description: "Diseñadora UX/UI freelance para empresa local.",
    },
  ];

  const formation = [
    {
      title: "Licenciatura en Diseño Industrial",
      place: "Universidad Nacional del Litoral",
      date: "2017 — 2024",
      featured: true,
    },
    {
      title: "Diplomatura en Game UX Design",
      place: "Docta Visual Arts Academy",
      date: "Ago 2025 — Ene 2026",
    },
    {
      title: "Diseño UX/UI Avanzado",
      place: "CoderHouse",
      date: "Ago — Nov 2022",
    },
    {
      title: "Diseño UX/UI",
      place: "CoderHouse",
      date: "Mar — Jun 2022",
    },
    {
      title: "Full Stack Developer",
      place: "SoyHenry",
      date: "Sep 2022 — Ene 2023",
    },
  ];

  return (
    <section
      id="sobre-mi"
      className="
        px-6 py-32
       bg-gradient-to-b from-white via-gray-50 to-white
      "
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER + INTRO */}
        <div className="mb-20 max-w-3xl">
          <ScrollReveal>
            <span className="uppercase tracking-widest text-sm text-purple-500 font-bold">
              SOBRE MÍ
            </span>
            <h2 className="text-5xl md:text-7xl font-medium text-gray-900 leading-[1.05] tracking-tighter font-space-grotesk mt-3">
              Sobre{" "}
              <span className="font-instrument-serif italic font-normal text-purple-600">
                mí
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-gray-600 text-lg leading-relaxed font-manrope mt-8">
              Vengo del Diseño Industrial y desde 2023 me dedico al producto
              digital. Me interesa entender el contexto antes de proponer y
              diseñar interfaces que la gente realmente quiera usar — claras,
              accesibles y consistentes.
            </p>
          </ScrollReveal>
        </div>

        {/* TOOLS */}
        <ScrollReveal delay={0.3}>
          <div className="mb-24">
            <p className="text-xs uppercase tracking-widest text-gray-500 font-manrope mb-4">
              Herramientas
            </p>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="
                    px-4 py-2 rounded-full
                    bg-white border border-gray-200
                    text-sm font-manrope text-gray-700
                    hover:border-purple-300 hover:text-purple-600
                    transition cursor-default
                  "
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* EXPERIENCIA — Timeline */}
        <div className="grid md:grid-cols-[220px_1fr] gap-8 mb-24">
          <ScrollReveal direction="left">
            <h3 className="text-3xl font-medium text-gray-900 font-space-grotesk md:sticky md:top-32">
              Experiencia
            </h3>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative pl-8 border-l border-gray-200">
              {experience.map((job, i) => (
                <motion.div
                  key={i}
                  className="relative pb-12 last:pb-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {/* Punto en la línea */}
                  <div className="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-purple-500 ring-4 ring-white" />

                  <p className="text-sm text-purple-500 font-manrope mb-1">
                    {job.date}
                  </p>
                  <h4 className="text-xl font-medium text-gray-900 font-space-grotesk">
                    {job.role}{" "}
                    <span className="text-gray-500">en {job.company}</span>
                  </h4>
                  <p className="text-gray-600 mt-2 font-manrope">
                    {job.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* FORMACIÓN — Cards */}
        <div className="grid md:grid-cols-[220px_1fr] gap-8">
          <ScrollReveal direction="left">
            <h3 className="text-3xl font-medium text-gray-900 font-space-grotesk md:sticky md:top-32">
              Formación
            </h3>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="grid sm:grid-cols-2 gap-4">
              {formation.map((item, i) => (
                <motion.div
                  key={i}
                  className={`rounded-2xl p-6 border transition ${
                    item.featured
                      ? "bg-purple-50 border-purple-200 sm:col-span-2"
                      : "bg-white border-gray-200 hover:border-purple-200"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <p className="text-xs text-purple-500 font-manrope mb-2 uppercase tracking-widest">
                    {item.date}
                  </p>
                  <h4 className="font-medium text-gray-900 font-space-grotesk mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 font-manrope">
                    {item.place}
                  </p>
                </motion.div>
              ))}
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
      tags: ["UX/UI", "Desktop App", "Research"],
    },
    // {
    //   title: "Proyecto HousePlant",
    //   description:
    //     "App móvil para el cuidado de plantas mediante diagnóstico inteligente y recordatorios personalizados.",
    //   image: "/HousePlant.png",
    //   url: "/proyecto-houseplant",
    //   tags: ["UX/UI", "Mobile App"],
    // },
    {
      title: "Proyecto Jalife",
      description:
        "Rediseño y modernización de landing con foco en navegación y contenidos.",
      image: "/Jalife.png",
      url: "/proyecto-jalife",
      tags: ["UX/UI", "WebPage"],
    },
        {
      title: "Gestión de Stock",
      description:
        "Diseño desde cero de plataforma de gestión y organización de stock.",
      image: "/Gestióndestock.png",
      url: "/proyecto-gestion-stock",
      tags: ["UX/UI", "Desktop App"],
    },
    // {
    //   title: "Proyecto Fungi Ritual",
    //   description:
    //     "Landing page informativa con catálogo de productos y enfoque en conversión.",
    //   image: "/FungiRitual.png",
    //   url: "/proyecto-fungi-ritual",
    //   tags: ["UX/UI", "Landing Page"],
    // },
    {
      title: "Game Design",
      description:
        "Diseño básico de juego de tower defense realizado con fines educativos.",
      image: "/GameDesign.png",
      url: "/proyecto-towerdefense",
      tags: ["UX/UI", "VideoJuego"],
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
            <span className="uppercase tracking-widest text-sm text-purple-500 font-bold">
              TRABAJOS SELECCIONADOS
            </span>

            <h2 className="text-5xl md:text-7xl font-medium text-gray-900 leading-[1.05] tracking-tighter font-space-grotesk mt-3">
              Algunos{" "}
              <span className="font-instrument-serif italic font-normal text-purple-600">
                proyectos
              </span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
              onClick={
                !isPlaygroundMode
                  ? () => (window.location.href = project.url)
                  : undefined
              }
            >
              {/* Imagen con overlay limpio */}
              <div className="relative rounded-2xl overflow-hidden bg-white border border-gray-200/60 aspect-[16/10] mb-5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Flecha en la esquina */}
                <div
                  className="
                    absolute top-4 right-4
                    w-12 h-12 rounded-full
                    bg-white/90 backdrop-blur
                    flex items-center justify-center
                    shadow-sm
                    opacity-0 -translate-y-2
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-500
                  "
                >
                  <span className="text-gray-900 text-lg transition-transform duration-300 group-hover:-rotate-45">
                    →
                  </span>
                </div>
              </div>

              {/* META visible siempre */}
              <div className="flex items-start gap-4">
                {/* Índice */}
                <span className="font-instrument-serif italic text-2xl text-purple-400 mt-1 shrink-0 w-10">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h3 className="text-2xl font-medium text-gray-900 font-space-grotesk group-hover:text-purple-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 text-sm font-manrope mb-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full border border-gray-300 text-gray-600 font-manrope"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
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
            <span className="uppercase tracking-widest text-sm text-purple-500 font-bold">
              CONTACTO
            </span>

            <h2 className="text-5xl md:text-7xl font-medium text-gray-900 leading-[1.05] tracking-tighter font-space-grotesk mt-3">
              ¿
              <span className="font-instrument-serif italic font-normal text-purple-600">
                Hablamos
              </span>
              ?
            </h2>

            <p className="text-gray-600 mt-6 max-w-md font-manrope text-lg leading-relaxed">
              Si tenés un proyecto en mente o querés charlar sobre diseño,
              escribime por cualquiera de estos medios.
            </p>

            {/* CONTACTOS */}
            <div className="mt-12 space-y-3">
              {[
                {
                  icon: "✉",
                  text: "milagrosdziuban1@gmail.com",
                  url: "mailto:milagrosdziuban1@gmail.com",
                },
                {
                  icon: "in",
                  text: "LinkedIn",
                  url: "https://www.linkedin.com/in/milagros-dziuban-dise%C3%B1adora/",
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group flex items-center gap-4
                    bg-white border border-gray-200
                    rounded-2xl px-6 py-4
                    hover:border-purple-300
                    transition
                  "
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div
                    className="
                      w-11 h-11 rounded-xl
                      bg-gray-900 text-white
                      flex items-center justify-center
                      font-manrope text-sm
                      group-hover:bg-purple-600
                      transition
                    "
                  >
                    {item.icon}
                  </div>

                  <span className="font-manrope text-gray-800 flex-1">
                    {item.text}
                  </span>

                  <span className="text-gray-400 transition-all duration-300 group-hover:text-purple-600 group-hover:translate-x-1">
                    →
                  </span>
                </motion.a>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              className="mt-12"
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
                    group bg-gray-900 hover:bg-purple-600
                    text-white px-6 py-4
                    rounded-full shadow-lg
                    font-manrope inline-flex items-center gap-2
                  "
                >
                  Descargar CV
                  <span className="inline-block transition-transform duration-300 group-hover:translate-y-0.5">
                    ↓
                  </span>
                </Button>
              </a>
            </motion.div>
          </ScrollReveal>

          {/* IMAGEN */}
          <ScrollReveal direction="right" delay={0.2}>
            <motion.div
              className="relative flex justify-center items-center"
              whileHover={{ scale: 1.03 }}
            >
              {/* Shape sólido principal */}
              <div
                className="
                  absolute w-[88%] h-[88%]
                  bg-purple-200
                  rounded-[55%_45%_42%_58%/58%_55%_45%_42%]
                  rotate-6
                "
              />

              {/* Shape acento */}
              <div
                className="
                  absolute w-[78%] h-[78%]
                  bg-pink-100
                  rounded-[42%_58%_55%_45%/45%_42%_58%_55%]
                  -rotate-3 -translate-x-6 translate-y-6
                "
              />

              {/* Retrato */}
              <div className="relative p-3 rounded-3xl">
                <Image
                  src="/imagen/pngcv.png"
                  alt="Milagros UX/UI Designer"
                  width={420}
                  height={480}
                  className="rounded-2xl object-cover relative"
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
