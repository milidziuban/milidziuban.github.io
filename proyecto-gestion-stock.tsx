"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { NavigationHeader } from "./components/navigation-header";
import { ScrollReveal } from "./components/animated-components";
import Image from "next/image";
import { OtherProjects } from "./components/otherproject";

function ProcessStep({
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
  image?: string;
  imageLeft?: boolean;
  children: React.ReactNode;
}) {
  // Sin imagen: card a ancho completo, layout diferente
  if (!image) {
    return (
      <div className="mb-32 last:mb-0">
        <ScrollReveal>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-10">
            <div className="grid md:grid-cols-[120px_1fr] gap-8 items-start">
              <span className="font-instrument-serif italic text-6xl text-purple-400 leading-none">
                {number}
              </span>
              <div>
                <h3 className="text-3xl md:text-4xl font-medium text-gray-900 font-space-grotesk leading-tight mb-2">
                  {title}
                </h3>
                {subtitle && (
                  <p className="text-gray-400 font-manrope mb-6">{subtitle}</p>
                )}
                <div className="text-gray-600 font-manrope leading-relaxed space-y-4">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center mb-32 last:mb-0">
      <ScrollReveal direction={imageLeft ? "left" : "right"}>
        <div className={imageLeft ? "md:order-1" : "md:order-2"}>
          <div className="relative">
            <Image
              src={image}
              alt={title}
              width={640}
              height={480}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal direction={imageLeft ? "right" : "left"} delay={0.2}>
        <div className={imageLeft ? "md:order-2" : "md:order-1"}>
          <span className="font-instrument-serif italic text-5xl text-purple-400 block mb-4 leading-none">
            {number}
          </span>
          <h3 className="text-3xl md:text-4xl font-medium text-gray-900 font-space-grotesk leading-tight mb-2">
            {title}
          </h3>
          {subtitle && (
            <p className="text-gray-400 font-manrope mb-6">{subtitle}</p>
          )}
          <div className="text-gray-600 font-manrope leading-relaxed space-y-4">
            {children}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}

export default function ProyectoGestiondeStock() {
  const audienceTraits = [
    {
      label: "Rol",
      value: "Dueño o equipo administrativo de PyME",
    },
    {
      label: "Contexto",
      value: "Maneja stock entre planillas, registros manuales y memoria",
    },
    {
      label: "Necesidad",
      value: "Centralizar el control y reducir errores operativos",
    },
  ];

  const researchMethods = [
    {
      title: "Benchmark de herramientas",
      text: "Revisión de plataformas existentes para identificar patrones que funcionan y oportunidades de diferenciación.",
    },
    {
      title: "Análisis de flujos",
      text: "Mapeo de los flujos típicos en plataformas similares para detectar fricciones recurrentes.",
    },
    {
      title: "Identificación de pain points",
      text: "Detección de los puntos de fricción más comunes en la gestión de productos a partir de la observación de los flujos.",
    },
  ];

  const findings = [
    {
      title: "Necesidad de acceso rápido a acciones clave",
      text: "Los usuarios necesitan ejecutar las acciones más frecuentes (agregar stock, editar producto, ver alertas) sin navegar entre múltiples pantallas.",
    },
    {
      title: "Falta de visibilidad en tiempo real",
      text: "Es crítico tener una vista del estado del inventario al instante: niveles actuales, alertas y movimientos recientes.",
    },
    {
      title: "Procesos largos que afectan la adopción",
      text: "Si actualizar un producto requiere muchos clics, el equipo termina volviendo a la planilla. La velocidad es clave para que la herramienta se use.",
    },
  ];

  const beforeAfter = [
    {
      aspect: "Control del inventario",
      before:
        "Información dispersa entre planillas y registros manuales. Difícil de mantener actualizada y propensa a inconsistencias.",
      after:
        "Inventario centralizado en una sola plataforma, con histórico de movimientos y trazabilidad por producto.",
    },
    {
      aspect: "Visibilidad en tiempo real",
      before:
        "Para conocer el stock actual había que consultar varios archivos o preguntar al equipo.",
      after:
        "Dashboard con métricas clave, niveles actuales y alertas visibles desde la primera pantalla.",
    },
    {
      aspect: "Errores operativos",
      before:
        "Las inconsistencias eran frecuentes por edición manual sin validación. Detectarlas tardaba días.",
      after:
        "Validaciones en formularios, estados claros y alertas automáticas evitan errores antes de que sucedan.",
    },
  ];

  const decisions = [
    {
      number: "01",
      title: "Tabla densa pero escaneable",
      rationale:
        "Para manejar volumen sin perderse, se priorizó la información clave en la tabla principal con jerarquía visual: separadores, hover states y badges de estado.",
    },
    {
      number: "02",
      title: "Búsqueda y filtros en primer plano",
      rationale:
        "Los usuarios pasan más tiempo buscando productos que creándolos. La búsqueda y los filtros viven siempre visibles, no escondidos en menús.",
    },
    {
      number: "03",
      title: "Alertas visuales por estado",
      rationale:
        "Stock crítico, productos sin movimiento o ventas en alza se comunican con color + ícono + texto para que el equipo actúe sin interpretar números.",
    },
    {
      number: "04",
      title: "Acciones contextuales por fila",
      rationale:
        "Las acciones frecuentes (editar, agregar stock, ver historial) están a un clic desde la tabla, sin necesidad de entrar al detalle de cada producto.",
    },
  ];

  const visualPalette = [
    { hex: "#1E293B", name: "Slate 800" },
    { hex: "#2563EB", name: "Blue 600" },
    { hex: "#10B981", name: "Emerald 500" },
    { hex: "#F59E0B", name: "Amber 500" },
  ];

  const takeaways = [
    {
      number: "01",
      title: "El usuario no quiere features, quiere velocidad",
      text: "Lo que más impacta la adopción no es la cantidad de funcionalidad sino que las acciones frecuentes sean rápidas y predecibles.",
    },
    {
      number: "02",
      title: "La validación visual previene más que la documentación",
      text: "Estados claros con color y forma evitan más errores que cualquier mensaje de ayuda o tutorial.",
    },
    {
      number: "03",
      title: "El benchmark inicial ahorra wireframes",
      text: "Estudiar la competencia al principio permitió descartar patrones que no funcionan antes de invertir tiempo en baja fidelidad.",
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
                {["UX/UI", "Desktop App", "2025"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border border-gray-300 text-gray-600 font-manrope"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-5xl md:text-6xl font-medium tracking-tighter text-gray-900 leading-[1.05] font-space-grotesk mb-6">
                Gestión de{" "}
                <span className="font-instrument-serif italic font-normal text-purple-600">
                  stock
                </span>
              </h1>

              <p className="text-lg text-gray-600 max-w-xl leading-relaxed mb-10 font-manrope">
                Diseñé una solución enfocada en pequeñas y medianas empresas
                que necesitan controlar su stock de forma eficiente,
                reduciendo errores operativos y mejorando la toma de
                decisiones mediante un dashboard intuitivo.
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
                    3 meses
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-manrope mb-2">
                    Herramientas
                  </p>
                  <p className="text-gray-900 font-medium font-space-grotesk">
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
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/imagen/GestiondeStock.png"
                  alt="Gestión de Stock preview"
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
                  Muchas empresas gestionan su inventario utilizando
                  herramientas dispersas como hojas de cálculo o registros
                  manuales, lo que genera inconsistencias, falta de
                  visibilidad en tiempo real y errores en la actualización del
                  stock.
                </p>
                <p className="text-gray-600 leading-relaxed font-manrope">
                  Esta fragmentación dificulta el control del inventario,
                  aumenta el riesgo de pérdidas y demanda más tiempo en tareas
                  operativas que podrían ser automatizadas.
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
                  Diseñar una plataforma que permita centralizar la gestión
                  de stock en un solo lugar.
                </p>
                <ul className="space-y-2">
                  {[
                    "Actualización y control de productos en tiempo real",
                    "Reducción de errores manuales",
                    "Visualización clara del estado del inventario",
                    "Optimización de procesos internos",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-600 font-manrope"
                    >
                      <span className="text-purple-500 mt-1">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
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
                Equipos chicos que hoy gestionan el stock entre planillas y
                memoria, y necesitan una herramienta que se entienda sin
                manual.
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

      {/* HALLAZGOS */}
      <section className="px-6 py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-16 max-w-2xl">
              <span className="uppercase tracking-widest text-sm text-purple-500 font-bold">
                INVESTIGACIÓN
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-gray-900 leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                Lo que{" "}
                <span className="font-instrument-serif italic font-normal text-purple-600">
                  descubrí
                </span>
              </h2>
              <p className="text-gray-600 mt-4 font-manrope text-lg">
                Insights que surgieron de la investigación y guiaron las
                decisiones de diseño.
              </p>
            </div>
          </ScrollReveal>

          {/* Métodos */}
          <ScrollReveal delay={0.1}>
            <div className="mb-12">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-manrope mb-4">
                Cómo lo investigué
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

          {/* Findings */}
          <ScrollReveal delay={0.2}>
            <div className="grid md:grid-cols-3 gap-4">
              {findings.map((finding, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-purple-300 transition"
                >
                  <span className="font-instrument-serif italic text-3xl text-purple-400 block mb-3 leading-none">
                    0{i + 1}
                  </span>
                  <h3 className="text-lg font-medium font-space-grotesk text-gray-900 mb-3">
                    {finding.title}
                  </h3>
                  <p className="text-gray-600 font-manrope leading-relaxed text-sm">
                    {finding.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ANTES vs CON GESTIÓN DE STOCK */}
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
                  con la herramienta
                </span>
              </h2>
              <p className="text-gray-600 mt-4 font-manrope text-lg">
                Tres ejes clave donde la plataforma aporta valor concreto al
                equipo.
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
                <div>
                  <span className="font-instrument-serif italic text-2xl text-purple-400 block mb-1">
                    0{i + 1}
                  </span>
                  <h3 className="font-medium font-space-grotesk text-gray-900">
                    {row.aspect}
                  </h3>
                </div>

                <div className="border-l-2 border-gray-200 pl-6">
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-manrope mb-2">
                    Antes
                  </p>
                  <p className="text-sm text-gray-600 font-manrope leading-relaxed">
                    {row.before}
                  </p>
                </div>

                <div className="border-l-2 border-purple-300 pl-6">
                  <p className="text-xs uppercase tracking-widest text-purple-500 font-manrope mb-2">
                    Con la herramienta
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

      {/* PROCESO */}
      <section className="px-6 py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-20 max-w-2xl">
              <span className="uppercase tracking-widest text-sm text-purple-500 font-bold">
                PROCESO
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-gray-900 leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                Cómo lo{" "}
                <span className="font-instrument-serif italic font-normal text-purple-600">
                  diseñé
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <ProcessStep
            number="01"
            title="Definiciones clave"
            subtitle="Principios que guiaron el diseño"
          >
            <p>
              A partir de la investigación, se definieron principios clave de
              diseño:
            </p>
            <ul className="space-y-2 mt-4">
              {[
                "Simplificar los flujos principales",
                "Priorizar la visibilidad del stock en tiempo real",
                "Reducir pasos en tareas frecuentes",
                "Diseñar una interfaz clara y escaneable",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </ProcessStep>

          <ProcessStep
            number="02"
            title="Diagrama de flujo"
            subtitle="Mapeando el recorrido del usuario"
            image="/flowgs.png"
          >
            <p>
              Se diseñó un flujo para mapear el recorrido del usuario dentro
              de la plataforma y detectar oportunidades de mejora.
            </p>
          </ProcessStep>

          <ProcessStep
            number="03"
            title="Wireframes y exploración"
            subtitle="Validar antes del diseño visual"
            image="/wireframes.png"
            imageLeft
          >
            <p>
              Las pantallas de baja fidelidad se utilizaron para explorar y
              validar la disposición de los elementos de la interfaz, las
              interacciones principales y la jerarquía visual.
            </p>
            <p className="border-l-2 border-purple-200 pl-4 italic">
              💡 Esta etapa permitió validar rápidamente la disposición de
              elementos antes de pasar al diseño visual, evitando retrabajo.
            </p>
          </ProcessStep>

          <ProcessStep
            number="04"
            title="Diseño final"
            subtitle="Pantallas de alta fidelidad"
            image="/sdgestion.jpg"
          >
            <ul className="space-y-2 mb-4">
              {[
                "Dashboard con métricas clave",
                "Gestión de productos",
                "Edición de stock",
                "Visualización de datos",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </ProcessStep>
        </div>
      </section>

      {/* DECISIONES DE DISEÑO */}
      <section className="px-6 py-32 bg-gradient-to-b from-white via-gray-50 to-white">
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
                Qué decidí y por qué, en las definiciones clave de la
                plataforma.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid md:grid-cols-2 gap-4">
              {decisions.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-purple-300 transition"
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
        </div>
      </section>

      {/* GUÍA VISUAL */}
      <section className="px-6 py-32 bg-white">
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
              <p className="text-gray-600 mt-4 font-manrope text-lg">
                Una paleta orientada a la lectura de datos y una tipografía
                pensada para densidad sin perder legibilidad.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Tipografía */}
            <ScrollReveal direction="left">
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 h-full">
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
                        className="px-3 py-1 rounded-full text-xs bg-white border border-gray-200 text-gray-700 font-manrope"
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
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 h-full">
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
      <section className="px-6 py-32 bg-gradient-to-br from-[#f7f7fb] via-[#f1f1f6] to-[#f5edff]">
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
              <p className="text-gray-600 mt-4 font-manrope text-lg max-w-2xl">
                Se desarrolló un prototipo interactivo para simular el uso
                real de la plataforma, validando la navegación y las
                principales tareas del usuario.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white flex items-center justify-center">
              <iframe
                width="1200"
                height="750"
                src="https://embed.figma.com/proto/7yRWEJboMUOycpVqznRP1J/Prototipo-gesti%C3%B3n-de-stock?node-id=1-31&p=f&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A31&embed-host=share"
                className="max-w-full"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* APRENDIZAJES */}
      <section className="px-6 py-32 bg-white">
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
                className="bg-gray-50 border border-gray-200 rounded-2xl p-8"
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

      <OtherProjects currentProjectId="gestion-stock" />

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
