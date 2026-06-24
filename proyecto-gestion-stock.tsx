"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { NavigationHeader } from "./components/navigation-header";
import { ScrollReveal } from "./components/animated-components";
import Image from "next/image";
import { OtherProjects } from "./components/otherproject";
import { useLanguage } from "./contexts/language-context";

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
  const { lang } = useLanguage();
  const es = lang === "es";

  const audienceTraits = es ? [
    { label: "Rol", value: "Dueño o equipo administrativo de PyME" },
    { label: "Contexto", value: "Maneja stock entre planillas, registros manuales y memoria" },
    { label: "Necesidad", value: "Centralizar el control y reducir errores operativos" },
  ] : [
    { label: "Role", value: "Owner or administrative team of an SME" },
    { label: "Context", value: "Manages stock across spreadsheets, manual records and memory" },
    { label: "Need", value: "Centralize control and reduce operational errors" },
  ];

  const researchMethods = es ? [
    { title: "Benchmark de herramientas", text: "Revisión de plataformas existentes para identificar patrones que funcionan y oportunidades de diferenciación." },
    { title: "Análisis de flujos", text: "Mapeo de los flujos típicos en plataformas similares para detectar fricciones recurrentes." },
    { title: "Identificación de pain points", text: "Detección de los puntos de fricción más comunes en la gestión de productos a partir de la observación de los flujos." },
  ] : [
    { title: "Tool benchmark", text: "Review of existing platforms to identify working patterns and differentiation opportunities." },
    { title: "Flow analysis", text: "Mapping of typical flows in similar platforms to detect recurring friction points." },
    { title: "Pain point identification", text: "Detection of the most common friction points in product management through flow observation." },
  ];

  const findings = es ? [
    { title: "Necesidad de acceso rápido a acciones clave", text: "Los usuarios necesitan ejecutar las acciones más frecuentes (agregar stock, editar producto, ver alertas) sin navegar entre múltiples pantallas." },
    { title: "Falta de visibilidad en tiempo real", text: "Es crítico tener una vista del estado del inventario al instante: niveles actuales, alertas y movimientos recientes." },
    { title: "Procesos largos que afectan la adopción", text: "Si actualizar un producto requiere muchos clics, el equipo termina volviendo a la planilla. La velocidad es clave para que la herramienta se use." },
  ] : [
    { title: "Need for quick access to key actions", text: "Users need to execute the most frequent actions (add stock, edit product, see alerts) without navigating between multiple screens." },
    { title: "Lack of real-time visibility", text: "It's critical to have an instant view of inventory status: current levels, alerts and recent movements." },
    { title: "Long processes that hurt adoption", text: "If updating a product requires many clicks, the team ends up going back to the spreadsheet. Speed is key to getting the tool actually used." },
  ];

  const beforeAfter = es ? [
    { aspect: "Control del inventario", before: "Información dispersa entre planillas y registros manuales. Difícil de mantener actualizada y propensa a inconsistencias.", after: "Inventario centralizado en una sola plataforma, con histórico de movimientos y trazabilidad por producto." },
    { aspect: "Visibilidad en tiempo real", before: "Para conocer el stock actual había que consultar varios archivos o preguntar al equipo.", after: "Dashboard con métricas clave, niveles actuales y alertas visibles desde la primera pantalla." },
    { aspect: "Errores operativos", before: "Las inconsistencias eran frecuentes por edición manual sin validación. Detectarlas tardaba días.", after: "Validaciones en formularios, estados claros y alertas automáticas evitan errores antes de que sucedan." },
  ] : [
    { aspect: "Inventory control", before: "Information scattered across spreadsheets and manual records. Hard to keep updated and prone to inconsistencies.", after: "Inventory centralized in a single platform, with movement history and traceability per product." },
    { aspect: "Real-time visibility", before: "To know the current stock you had to check multiple files or ask the team.", after: "Dashboard with key metrics, current levels and alerts visible from the first screen." },
    { aspect: "Operational errors", before: "Inconsistencies were frequent due to manual editing without validation. Detecting them took days.", after: "Form validations, clear statuses and automatic alerts prevent errors before they happen." },
  ];

  const decisions = es ? [
    { number: "01", title: "Tabla densa pero escaneable", rationale: "Para manejar volumen sin perderse, se priorizó la información clave en la tabla principal con jerarquía visual: separadores, hover states y badges de estado." },
    { number: "02", title: "Búsqueda y filtros en primer plano", rationale: "Los usuarios pasan más tiempo buscando productos que creándolos. La búsqueda y los filtros viven siempre visibles, no escondidos en menús." },
    { number: "03", title: "Alertas visuales por estado", rationale: "Stock crítico, productos sin movimiento o ventas en alza se comunican con color + ícono + texto para que el equipo actúe sin interpretar números." },
    { number: "04", title: "Acciones contextuales por fila", rationale: "Las acciones frecuentes (editar, agregar stock, ver historial) están a un clic desde la tabla, sin necesidad de entrar al detalle de cada producto." },
  ] : [
    { number: "01", title: "Dense but scannable table", rationale: "To handle volume without getting lost, key information was prioritized in the main table with visual hierarchy: separators, hover states and status badges." },
    { number: "02", title: "Search and filters in the foreground", rationale: "Users spend more time searching for products than creating them. Search and filters are always visible, not hidden in menus." },
    { number: "03", title: "Visual alerts by status", rationale: "Critical stock, products with no movement or rising sales are communicated with color + icon + text so the team can act without interpreting numbers." },
    { number: "04", title: "Contextual actions per row", rationale: "Frequent actions (edit, add stock, view history) are one click from the table, without needing to open the detail of each product." },
  ];

  const visualPalette = [
    { hex: "#1E293B", name: "Slate 800" },
    { hex: "#2563EB", name: "Blue 600" },
    { hex: "#10B981", name: "Emerald 500" },
    { hex: "#F59E0B", name: "Amber 500" },
  ];

  const takeaways = es ? [
    { number: "01", title: "El usuario no quiere features, quiere velocidad", text: "Lo que más impacta la adopción no es la cantidad de funcionalidad sino que las acciones frecuentes sean rápidas y predecibles." },
    { number: "02", title: "La validación visual previene más que la documentación", text: "Estados claros con color y forma evitan más errores que cualquier mensaje de ayuda o tutorial." },
    { number: "03", title: "El benchmark inicial ahorra wireframes", text: "Estudiar la competencia al principio permitió descartar patrones que no funcionan antes de invertir tiempo en baja fidelidad." },
  ] : [
    { number: "01", title: "The user doesn't want features, they want speed", text: "What most impacts adoption isn't the amount of functionality but that frequent actions are fast and predictable." },
    { number: "02", title: "Visual validation prevents more than documentation", text: "Clear statuses with color and shape prevent more errors than any help message or tutorial." },
    { number: "03", title: "The initial benchmark saves wireframe time", text: "Studying the competition early allowed discarding patterns that don't work before investing time in low-fidelity." },
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
                {es ? <>Gestión de{" "}<span className="font-instrument-serif italic font-normal text-purple-600">stock</span></> : <>Stock{" "}<span className="font-instrument-serif italic font-normal text-purple-600">management</span></>}
              </h1>

              <p className="text-lg text-gray-600 max-w-xl leading-relaxed mb-10 font-manrope">
                {es ? "Diseñé una solución enfocada en pequeñas y medianas empresas que necesitan controlar su stock de forma eficiente, reduciendo errores operativos y mejorando la toma de decisiones mediante un dashboard intuitivo." : "I designed a solution focused on small and medium-sized businesses that need to control their stock efficiently, reducing operational errors and improving decision-making through an intuitive dashboard."}
              </p>

              <div className="grid grid-cols-3 gap-6 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-manrope mb-2">{es ? "Rol" : "Role"}</p>
                  <p className="text-gray-900 font-medium font-space-grotesk">UX/UI Designer</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-manrope mb-2">{es ? "Duración" : "Duration"}</p>
                  <p className="text-gray-900 font-medium font-space-grotesk">{es ? "3 meses" : "3 months"}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-manrope mb-2">{es ? "Herramientas" : "Tools"}</p>
                  <p className="text-gray-900 font-medium font-space-grotesk">Figma, Miro</p>
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
                  {es ? "Problema" : "Problem"}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 font-manrope">
                  {es ? "Muchas empresas gestionan su inventario utilizando herramientas dispersas como hojas de cálculo o registros manuales, lo que genera inconsistencias, falta de visibilidad en tiempo real y errores en la actualización del stock." : "Many companies manage their inventory using scattered tools like spreadsheets or manual records, generating inconsistencies, lack of real-time visibility and errors when updating stock."}
                </p>
                <p className="text-gray-600 leading-relaxed font-manrope">
                  {es ? "Esta fragmentación dificulta el control del inventario, aumenta el riesgo de pérdidas y demanda más tiempo en tareas operativas que podrían ser automatizadas." : "This fragmentation makes inventory control harder, increases the risk of losses and demands more time on operational tasks that could be automated."}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div>
                <span className="font-instrument-serif italic text-2xl text-purple-400 mb-3 block">
                  02
                </span>
                <h2 className="text-4xl md:text-5xl font-medium text-gray-900 leading-[1.05] tracking-tighter font-space-grotesk mb-6">
                  {es ? "Objetivo" : "Goal"}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 font-manrope">
                  {es ? "Diseñar una plataforma que permita centralizar la gestión de stock en un solo lugar." : "Design a platform that allows centralizing stock management in one place."}
                </p>
                <ul className="space-y-2">
                  {(es ? [
                    "Actualización y control de productos en tiempo real",
                    "Reducción de errores manuales",
                    "Visualización clara del estado del inventario",
                    "Optimización de procesos internos",
                  ] : [
                    "Real-time product updates and control",
                    "Reduction of manual errors",
                    "Clear visualization of inventory status",
                    "Optimization of internal processes",
                  ]).map((item, i) => (
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
                {es ? "AUDIENCIA" : "AUDIENCE"}
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-gray-900 leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                {es ? <>Para{" "}<span className="font-instrument-serif italic font-normal text-purple-600">quién</span>{" "}diseñé</> : <>Who I{" "}<span className="font-instrument-serif italic font-normal text-purple-600">designed</span>{" "}for</>}
              </h2>
              <p className="text-gray-600 mt-4 font-manrope text-lg">
                {es ? "Equipos chicos que hoy gestionan el stock entre planillas y memoria, y necesitan una herramienta que se entienda sin manual." : "Small teams that currently manage stock across spreadsheets and memory, and need a tool that can be understood without a manual."}
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
                {es ? "INVESTIGACIÓN" : "RESEARCH"}
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-gray-900 leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                {es ? <>Lo que{" "}<span className="font-instrument-serif italic font-normal text-purple-600">descubrí</span></> : <>What I{" "}<span className="font-instrument-serif italic font-normal text-purple-600">found</span></>}
              </h2>
              <p className="text-gray-600 mt-4 font-manrope text-lg">
                {es ? "Insights que surgieron de la investigación y guiaron las decisiones de diseño." : "Insights that emerged from the research and guided the design decisions."}
              </p>
            </div>
          </ScrollReveal>

          {/* Métodos */}
          <ScrollReveal delay={0.1}>
            <div className="mb-12">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-manrope mb-4">
                {es ? "Cómo lo investigué" : "How I researched it"}
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
                {es ? "IMPACTO" : "IMPACT"}
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-gray-900 leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                {es ? <>Antes vs{" "}<span className="font-instrument-serif italic font-normal text-purple-600">con la herramienta</span></> : <>Before vs{" "}<span className="font-instrument-serif italic font-normal text-purple-600">with the tool</span></>}
              </h2>
              <p className="text-gray-600 mt-4 font-manrope text-lg">
                {es ? "Tres ejes clave donde la plataforma aporta valor concreto al equipo." : "Three key areas where the platform delivers concrete value to the team."}
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
                    {es ? "Antes" : "Before"}
                  </p>
                  <p className="text-sm text-gray-600 font-manrope leading-relaxed">
                    {row.before}
                  </p>
                </div>

                <div className="border-l-2 border-purple-300 pl-6">
                  <p className="text-xs uppercase tracking-widest text-purple-500 font-manrope mb-2">
                    {es ? "Con la herramienta" : "With the tool"}
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
                {es ? "PROCESO" : "PROCESS"}
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-gray-900 leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                {es ? <>Cómo lo{" "}<span className="font-instrument-serif italic font-normal text-purple-600">diseñé</span></> : <>How I{" "}<span className="font-instrument-serif italic font-normal text-purple-600">designed it</span></>}
              </h2>
            </div>
          </ScrollReveal>

          <ProcessStep
            number="01"
            title={es ? "Definiciones clave" : "Key definitions"}
            subtitle={es ? "Principios que guiaron el diseño" : "Principles that guided the design"}
          >
            <p>{es ? "A partir de la investigación, se definieron principios clave de diseño:" : "From the research, key design principles were defined:"}</p>
            <ul className="space-y-2 mt-4">
              {(es ? [
                "Simplificar los flujos principales",
                "Priorizar la visibilidad del stock en tiempo real",
                "Reducir pasos en tareas frecuentes",
                "Diseñar una interfaz clara y escaneable",
              ] : [
                "Simplify main flows",
                "Prioritize real-time stock visibility",
                "Reduce steps in frequent tasks",
                "Design a clear and scannable interface",
              ]).map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </ProcessStep>

          <ProcessStep
            number="02"
            title={es ? "Diagrama de flujo" : "Flow diagram"}
            subtitle={es ? "Mapeando el recorrido del usuario" : "Mapping the user journey"}
            image="/flowgs.png"
          >
            <p>{es ? "Se diseñó un flujo para mapear el recorrido del usuario dentro de la plataforma y detectar oportunidades de mejora." : "A flow was designed to map the user journey within the platform and detect opportunities for improvement."}</p>
          </ProcessStep>

          <ProcessStep
            number="03"
            title={es ? "Wireframes y exploración" : "Wireframes and exploration"}
            subtitle={es ? "Validar antes del diseño visual" : "Validate before visual design"}
            image="/wireframes.png"
            imageLeft
          >
            <p>{es ? "Las pantallas de baja fidelidad se utilizaron para explorar y validar la disposición de los elementos de la interfaz, las interacciones principales y la jerarquía visual." : "Low-fidelity screens were used to explore and validate the layout of interface elements, main interactions and visual hierarchy."}</p>
            <p className="border-l-2 border-purple-200 pl-4 italic">
              {es ? "💡 Esta etapa permitió validar rápidamente la disposición de elementos antes de pasar al diseño visual, evitando retrabajo." : "💡 This stage allowed quickly validating element layout before moving to visual design, avoiding rework."}
            </p>
          </ProcessStep>

          <ProcessStep
            number="04"
            title={es ? "Diseño final" : "Final design"}
            subtitle={es ? "Pantallas de alta fidelidad" : "High-fidelity screens"}
            image="/sdgestion.jpg"
          >
            <ul className="space-y-2 mb-4">
              {(es ? [
                "Dashboard con métricas clave",
                "Gestión de productos",
                "Edición de stock",
                "Visualización de datos",
              ] : [
                "Dashboard with key metrics",
                "Product management",
                "Stock editing",
                "Data visualization",
              ]).map((item, i) => (
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
                {es ? "RACIONAL" : "RATIONALE"}
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-gray-900 leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                {es ? <>Decisiones de{" "}<span className="font-instrument-serif italic font-normal text-purple-600">diseño</span></> : <>Design{" "}<span className="font-instrument-serif italic font-normal text-purple-600">decisions</span></>}
              </h2>
              <p className="text-gray-600 mt-4 font-manrope text-lg">
                {es ? "Qué decidí y por qué, en las definiciones clave de la plataforma." : "What I decided and why, across the key definitions of the platform."}
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
                {es ? "GUÍA VISUAL" : "VISUAL GUIDE"}
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-gray-900 leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                {es ? <>Sistema{" "}<span className="font-instrument-serif italic font-normal text-purple-600">visual</span></> : <>Visual{" "}<span className="font-instrument-serif italic font-normal text-purple-600">system</span></>}
              </h2>
              <p className="text-gray-600 mt-4 font-manrope text-lg">
                {es ? "Una paleta orientada a la lectura de datos y una tipografía pensada para densidad sin perder legibilidad." : "A palette oriented to data reading and typography designed for density without losing readability."}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Tipografía */}
            <ScrollReveal direction="left">
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 h-full">
                <p className="text-xs uppercase tracking-widest text-gray-500 font-manrope mb-6">
                  {es ? "Tipografía" : "Typography"}
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
                  {es ? "Paleta de colores" : "Color palette"}
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
                {es ? "INTERACTIVO" : "INTERACTIVE"}
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-gray-900 leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                {es ? <>Prototipo{" "}<span className="font-instrument-serif italic font-normal text-purple-600">navegable</span></> : <>Navigable{" "}<span className="font-instrument-serif italic font-normal text-purple-600">prototype</span></>}
              </h2>
              <p className="text-gray-600 mt-4 font-manrope text-lg max-w-2xl">
                {es ? "Se desarrolló un prototipo interactivo para simular el uso real de la plataforma, validando la navegación y las principales tareas del usuario." : "An interactive prototype was developed to simulate the real use of the platform, validating navigation and the main user tasks."}
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
                {es ? "REFLEXIÓN" : "REFLECTION"}
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-gray-900 leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                {es ? <>Aprendizajes{" "}<span className="font-instrument-serif italic font-normal text-purple-600">clave</span></> : <>Key{" "}<span className="font-instrument-serif italic font-normal text-purple-600">takeaways</span></>}
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
              {es ? "¿Te gustó este proyecto?" : "Did you like this project?"}
            </p>
            <h2 className="text-4xl md:text-6xl font-medium text-gray-900 leading-[1.05] tracking-tighter font-space-grotesk mb-10">
              {es ? <>Explorá más de mi{" "}<span className="font-instrument-serif italic font-normal text-purple-600">trabajo</span></> : <>Explore more of my{" "}<span className="font-instrument-serif italic font-normal text-purple-600">work</span></>}
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
                {es ? "Volver al inicio" : "Back to home"}
              </Button>
              <a href="mailto:milagrosdziuban1@gmail.com">
                <Button className="group bg-white hover:bg-purple-50 text-gray-900 border border-gray-300 hover:border-purple-300 px-6 py-4 rounded-full font-manrope inline-flex items-center gap-2">
                  {es ? "Contactame" : "Contact me"}
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
