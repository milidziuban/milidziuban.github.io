"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { NavigationHeader } from "./components/navigation-header";
import { ScrollReveal } from "./components/animated-components";
import { OtherProjects } from "./components/otherproject";

export default function ProyectoJalife() {
  // Datos del case study
  const audienceTraits = [
    {
      label: "Edad",
      value: "25 – 45 años",
    },
    {
      label: "Comportamiento",
      value: "Investigan online antes de contactar",
    },
    {
      label: "Expectativa",
      value: "Claridad, credibilidad y rapidez",
    },
  ];

  const researchMethods = [
    {
      title: "Auditoría heurística",
      text: "Revisión del sitio actual contra principios de usabilidad (Nielsen) para detectar fricciones concretas.",
    },
    {
      title: "Análisis competitivo",
      text: "Benchmark de sitios similares para identificar patrones que funcionan y oportunidades de diferenciación.",
    },
    {
      title: "Revisión con el cliente",
      text: "Conversaciones con la marca para entender objetivos de negocio, valores y prioridades comerciales.",
    },
  ];

  const insights = [
    { title: "Mala organización de la información", icon: "📑" },
    { title: "Los servicios no llamaban la atención", icon: "👩🏽‍💻" },
    { title: "La página de contacto no representaba la marca", icon: "📞" },
    { title: "Las imágenes eran poco representativas", icon: "🖼️" },
  ];

  const beforeAfter = [
    {
      aspect: "Navegación",
      before:
        "Menú con muchos ítems sin jerarquía clara, difícil de escanear en el primer vistazo.",
      after:
        "Navbar reducida a las secciones esenciales, con jerarquía visual y comportamiento contextual al scroll.",
    },
    {
      aspect: "Presentación de servicios",
      before:
        "Servicios listados como bloques de texto, sin diferenciación visual entre los principales.",
      after:
        "Grid visual que prioriza los servicios estrella, con jerarquía clara y CTAs por categoría.",
    },
    {
      aspect: "Identidad visual",
      before:
        "Inconsistencia entre páginas, imágenes genéricas y tipografía sin sistema.",
      after:
        "Sistema visual unificado: tipografía, paleta y componentes consistentes en todo el sitio.",
    },
  ];

  const sitemap = [
    { title: "Home", children: ["Hero", "Servicios destacados", "Body content"] },
    { title: "Quiénes somos", children: ["Historia", "Equipo", "Valores"] },
    { title: "Servicios", children: ["Categorías", "Detalle de servicio"] },
    { title: "Contacto", children: ["Formulario", "Redes"] },
  ];

  const decisions = [
    {
      number: "01",
      title: "Grid de 12 columnas",
      rationale:
        "Permite variantes de layout por sección sin romper la jerarquía global. Da consistencia y flexibilidad para escalar el sitio.",
    },
    {
      number: "02",
      title: "Navbar contextual",
      rationale:
        "Se oculta al hacer scroll down y reaparece al subir. Mejora la legibilidad sin perder accesibilidad a las secciones clave.",
    },
    {
      number: "03",
      title: "Hero con visual fuerte",
      rationale:
        "Primera impresión que transmite la propuesta de la marca antes que cualquier texto, alineado a la identidad y al tono.",
    },
    {
      number: "04",
      title: "Contenido dinámico con video",
      rationale:
        "Incorporación de testimonios en video para reforzar la confianza del usuario y romper la monotonía del scroll.",
    },
  ];

  const visualPalette = [
    { hex: "#E11D2E", name: "Rojo Jalife" },
    { hex: "#1A1A1A", name: "Negro principal" },
    { hex: "#F5F5F5", name: "Gris claro" },
    { hex: "#FFFFFF", name: "Blanco base" },
  ];

  const takeaways = [
    {
      number: "01",
      title: "La navegación va primero",
      text: "Antes que el visual, había que resolver cómo se entendía el sitio. Una jerarquía clara hizo más por la experiencia que cualquier decisión estética.",
    },
    {
      number: "02",
      title: "Validar con el cliente, no asumir",
      text: "Lo que parecía obvio desde diseño no siempre lo era desde negocio. Las conversaciones con la marca evitaron varios callejones sin salida.",
    },
    {
      number: "03",
      title: "Pensar en sistema, no en pantallas",
      text: "Definir reglas de tipografía, color y grilla desde el inicio aceleró todas las decisiones siguientes y dejó una base escalable.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationHeader />

      {/* HERO */}
      <section className="relative px-6 py-32 bg-[#f5f7fb] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {["UX/UI", "Website", "2025"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border border-gray-300 text-gray-600 font-manrope"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-5xl md:text-6xl font-medium tracking-tighter text-gray-900 leading-[1.05] font-space-grotesk mb-6">
                Proyecto{" "}
                <span className="font-instrument-serif italic font-normal text-red-500">
                  Jalife
                </span>
              </h1>

              <p className="text-lg text-gray-600 max-w-xl leading-relaxed mb-10 font-manrope">
                Proyecto enfocado en rediseñar la página web de la marca,
                optimizando la experiencia de navegación y la presentación de
                sus servicios. Se trabajó en una interfaz más limpia, actual y
                funcional, con una estructura visual coherente y mejoras en
                usabilidad.
              </p>

              <div className="grid grid-cols-3 gap-6 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-manrope mb-2">
                    Rol
                  </p>
                  <p className="text-gray-900 font-medium font-space-grotesk">
                    UX/UI Designer
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-manrope mb-2">
                    Duración
                  </p>
                  <p className="text-gray-900 font-medium font-space-grotesk">
                    4 semanas
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-manrope mb-2">
                    Herramientas
                  </p>
                  <p className="text-gray-900 font-medium font-space-grotesk">
                    Figma
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
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/imagen/jalife1.png"
                  alt="Jalife preview"
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
      <section className="px-6 py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <ScrollReveal direction="left">
              <div>
                <span className="font-instrument-serif italic text-2xl text-purple-400 mb-3 block">
                  01
                </span>
                <h2 className="text-4xl md:text-5xl font-medium text-gray-900 leading-[1.05] tracking-tighter font-space-grotesk mb-6">
                  Problema
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 font-manrope">
                  El sitio web presentaba una estructura visual poco clara y
                  dificultades de navegación que afectaban la comprensión de
                  sus servicios y productos.
                </p>
                <p className="text-gray-600 leading-relaxed font-manrope">
                  Esto generaba una percepción poco profesional de la marca y
                  complicaba el proceso de encontrar información relevante.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div>
                <span className="font-instrument-serif italic text-2xl text-purple-400 mb-3 block">
                  02
                </span>
                <h2 className="text-4xl md:text-5xl font-medium text-gray-900 leading-[1.05] tracking-tighter font-space-grotesk mb-6">
                  Objetivo
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 font-manrope">
                  Rediseñar el sitio web para mejorar la experiencia del
                  usuario mediante una interfaz moderna, clara y funcional.
                </p>
                <p className="text-gray-600 leading-relaxed font-manrope">
                  Lograr una navegación intuitiva, una presentación visual
                  atractiva y alineada con la identidad de la marca, y una
                  estructura que facilite el acceso rápido a la información
                  clave.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* PARA QUIÉN */}
      <section className="px-6 py-32 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-12 max-w-2xl">
              <span className="uppercase tracking-widest text-sm text-purple-500 font-bold">
                AUDIENCIA
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-gray-900 leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                Para{" "}
                <span className="font-instrument-serif italic font-normal text-purple-600">
                  quién
                </span>{" "}
                diseñé
              </h2>
              <p className="text-gray-600 mt-4 font-manrope text-lg">
                Personas que llegan al sitio buscando información clara y
                rápida sobre los servicios de la marca, en general antes de
                tomar contacto comercial.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-4">
            {audienceTraits.map((trait, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-6"
              >
                <p className="text-xs uppercase tracking-widest text-purple-500 font-manrope mb-2">
                  {trait.label}
                </p>
                <p className="text-lg font-medium font-space-grotesk text-gray-900">
                  {trait.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HALLAZGOS + MÉTODOS */}
      <section className="px-6 py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-16 max-w-2xl">
              <span className="uppercase tracking-widest text-sm text-purple-500 font-bold">
                INVESTIGACIÓN
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-gray-900 leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                Puntos de{" "}
                <span className="font-instrument-serif italic font-normal text-purple-600">
                  dolor
                </span>
              </h2>
              <p className="text-gray-600 mt-4 font-manrope text-lg">
                Conceptos clave que guiaron el rediseño.
              </p>
            </div>
          </ScrollReveal>

          {/* Métodos */}
          <ScrollReveal delay={0.1}>
            <div className="mb-12">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-manrope mb-4">
                Cómo llegué a estos hallazgos
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {researchMethods.map((method, i) => (
                  <div
                    key={i}
                    className="border-l-2 border-purple-200 pl-4"
                  >
                    <p className="font-medium font-space-grotesk text-gray-900 mb-2">
                      {method.title}
                    </p>
                    <p className="text-sm text-gray-600 font-manrope leading-relaxed">
                      {method.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Insights */}
          <ScrollReveal delay={0.2}>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {insights.map((insight, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-purple-300 transition"
                >
                  <div className="text-3xl mb-4">{insight.icon}</div>
                  <span className="font-instrument-serif italic text-sm text-purple-400 block mb-2">
                    0{i + 1}
                  </span>
                  <h3 className="text-base font-medium font-space-grotesk text-gray-900 leading-snug">
                    {insight.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ANTES vs DESPUÉS conceptual */}
      <section className="px-6 py-32 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-16 max-w-2xl">
              <span className="uppercase tracking-widest text-sm text-purple-500 font-bold">
                IMPACTO
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-gray-900 leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                Antes vs{" "}
                <span className="font-instrument-serif italic font-normal text-purple-600">
                  después
                </span>
              </h2>
              <p className="text-gray-600 mt-4 font-manrope text-lg">
                Tres ejes clave donde el rediseño aportó valor concreto.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {beforeAfter.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid md:grid-cols-[180px_1fr_1fr] gap-6 bg-white border border-gray-200 rounded-2xl p-8"
              >
                {/* Aspect */}
                <div>
                  <span className="font-instrument-serif italic text-2xl text-purple-400 block mb-1">
                    0{i + 1}
                  </span>
                  <h3 className="font-medium font-space-grotesk text-gray-900">
                    {row.aspect}
                  </h3>
                </div>

                {/* Antes */}
                <div className="border-l-2 border-gray-200 pl-6">
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-manrope mb-2">
                    Antes
                  </p>
                  <p className="text-sm text-gray-600 font-manrope leading-relaxed">
                    {row.before}
                  </p>
                </div>

                {/* Después */}
                <div className="border-l-2 border-purple-300 pl-6">
                  <p className="text-xs uppercase tracking-widest text-purple-500 font-manrope mb-2">
                    Después
                  </p>
                  <p className="text-sm text-gray-700 font-manrope leading-relaxed">
                    {row.after}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ARQUITECTURA DE INFORMACIÓN */}
      <section className="px-6 py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-16 max-w-2xl">
              <span className="uppercase tracking-widest text-sm text-purple-500 font-bold">
                ESTRUCTURA
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-gray-900 leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                Arquitectura de{" "}
                <span className="font-instrument-serif italic font-normal text-purple-600">
                  información
                </span>
              </h2>
              <p className="text-gray-600 mt-4 font-manrope text-lg">
                Reorganización del sitemap para priorizar lo que el usuario
                viene a buscar.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {sitemap.map((section, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-6"
                >
                  <span className="font-instrument-serif italic text-sm text-purple-400 block mb-2">
                    0{i + 1}
                  </span>
                  <h3 className="font-medium font-space-grotesk text-gray-900 text-lg mb-4">
                    {section.title}
                  </h3>
                  <div className="space-y-2">
                    {section.children.map((child, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-2 text-sm text-gray-600 font-manrope"
                      >
                        <span className="text-purple-400">└</span>
                        {child}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WIREFRAMES */}
      <section className="px-6 py-32 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="font-instrument-serif italic text-5xl text-purple-400 block mb-4 leading-none">
                  01
                </span>
                <h3 className="text-3xl md:text-4xl font-medium text-gray-900 font-space-grotesk leading-tight mb-2">
                  Wireframes
                </h3>
                <p className="text-gray-400 font-manrope mb-6">
                  Estructurando el sitio desde la base
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 font-manrope">
                  Se desarrollaron wireframes que permitieron definir la
                  estructura del sitio y organizar la información de manera
                  clara y jerárquica.
                </p>
                <p className="text-gray-600 leading-relaxed font-manrope">
                  A partir de esta base, se trabajó en una interfaz más
                  limpia, actual y funcional, optimizando la navegación y
                  mejorando la presentación de los productos.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative">
                <Image
                  src="/imagen/jalife2.png"
                  alt="Wireframes Jalife"
                  width={640}
                  height={480}
                  className="w-full h-auto object-contain"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* DECISIONES DE DISEÑO */}
      <section className="px-6 py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-16 max-w-2xl">
              <span className="uppercase tracking-widest text-sm text-purple-500 font-bold">
                RACIONAL
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-gray-900 leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                Decisiones de{" "}
                <span className="font-instrument-serif italic font-normal text-purple-600">
                  diseño
                </span>
              </h2>
              <p className="text-gray-600 mt-4 font-manrope text-lg">
                Qué decidí y por qué, en las definiciones clave del proyecto.
              </p>
            </div>
          </ScrollReveal>

          {/* Grid de decisiones */}
          <ScrollReveal delay={0.2}>
            <div className="grid md:grid-cols-2 gap-4 mb-16">
              {decisions.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-purple-300 transition"
                >
                  <span className="font-instrument-serif italic text-3xl text-purple-400 block mb-3 leading-none">
                    {d.number}
                  </span>
                  <h3 className="text-xl font-medium font-space-grotesk text-gray-900 mb-3">
                    {d.title}
                  </h3>
                  <p className="text-gray-600 font-manrope leading-relaxed text-sm">
                    {d.rationale}
                  </p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Aplicación visual */}
          <ScrollReveal delay={0.3}>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-manrope mb-4">
                Aplicación visual
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden border border-gray-200/60">
                  <Image
                    src="/1.gif"
                    alt="Hero section Jalife"
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-gray-200/60">
                  <Image
                    src="/bodysection.png"
                    alt="Body section Jalife"
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SISTEMA VISUAL */}
      <section className="px-6 py-32 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-16 max-w-2xl">
              <span className="uppercase tracking-widest text-sm text-purple-500 font-bold">
                GUÍA VISUAL
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-gray-900 leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                Sistema{" "}
                <span className="font-instrument-serif italic font-normal text-purple-600">
                  visual
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Tipografía */}
            <ScrollReveal direction="left">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 h-full">
                <p className="text-xs uppercase tracking-widest text-gray-500 font-manrope mb-6">
                  Tipografía
                </p>
                <p className="text-7xl md:text-8xl font-bold text-gray-900 mb-2 leading-none">
                  Aa
                </p>
                <p className="text-2xl font-space-grotesk text-gray-900 mb-6">
                  Inter
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Light", "Regular", "Medium", "SemiBold", "Bold"].map(
                    (w) => (
                      <span
                        key={w}
                        className="px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-700 font-manrope"
                      >
                        {w}
                      </span>
                    ),
                  )}
                </div>
                <div className="space-y-2 text-gray-700 font-manrope">
                  <p className="text-lg">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                  <p className="text-lg">abcdefghijklmnopqrstuvwxyz</p>
                  <p className="text-lg">1234567890</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Paleta */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="bg-white border border-gray-200 rounded-2xl p-8 h-full">
                <p className="text-xs uppercase tracking-widest text-gray-500 font-manrope mb-6">
                  Paleta de colores
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {visualPalette.map((color, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="space-y-2"
                    >
                      <div
                        className="w-full aspect-square rounded-xl border border-gray-200"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900 font-space-grotesk">
                          {color.name}
                        </span>
                        <span className="text-xs text-gray-500 font-mono">
                          {color.hex}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* PROTOTIPO */}
      <section className="px-6 py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-12 max-w-2xl">
              <span className="uppercase tracking-widest text-sm text-purple-500 font-bold">
                INTERACTIVO
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-gray-900 leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                Prototipo{" "}
                <span className="font-instrument-serif italic font-normal text-purple-600">
                  navegable
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white flex items-center justify-center">
              <iframe
                width="800"
                height="450"
                src="https://embed.figma.com/proto/TUIAkraAUQ5sCvrZbctgaK/Jalife-Proyect?node-id=211-2703&scaling=scale-down-width&content-scaling=fixed&page-id=152%3A470&starting-point-node-id=211%3A2703&embed-host=share"
                className="max-w-full"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* APRENDIZAJES */}
      <section className="px-6 py-32 bg-gradient-to-br from-[#f7f7fb] via-[#f1f1f6] to-[#f5edff]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-16 max-w-2xl">
              <span className="uppercase tracking-widest text-sm text-purple-500 font-bold">
                REFLEXIÓN
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-gray-900 leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                Aprendizajes{" "}
                <span className="font-instrument-serif italic font-normal text-purple-600">
                  clave
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {takeaways.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-8"
              >
                <span className="font-instrument-serif italic text-3xl text-purple-400 block mb-4">
                  {item.number}
                </span>
                <h3 className="text-xl font-medium font-space-grotesk text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-manrope text-sm">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <OtherProjects currentProjectId="jalife" />

      {/* CTA */}
      <section className="px-6 py-32 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-gray-600 mb-6 font-manrope">
              ¿Te gustó este proyecto?
            </p>
            <h2 className="text-4xl md:text-6xl font-medium text-gray-900 leading-[1.05] tracking-tighter font-space-grotesk mb-10">
              Explorá más de mi{" "}
              <span className="font-instrument-serif italic font-normal text-purple-600">
                trabajo
              </span>
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                onClick={() => {
                  window.location.href = "/#proyectos";
                }}
                className="group bg-gray-900 hover:bg-purple-600 text-white px-6 py-4 rounded-full shadow-lg font-manrope inline-flex items-center gap-2"
              >
                <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>
                Volver al inicio
              </Button>
              <a href="mailto:milagrosdziuban1@gmail.com">
                <Button className="group bg-white hover:bg-purple-50 text-gray-900 border border-gray-300 hover:border-purple-300 px-6 py-4 rounded-full font-manrope inline-flex items-center gap-2">
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
