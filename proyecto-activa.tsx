"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavigationHeader } from "./components/navigation-header";
import { ScrollReveal } from "./components/animated-components";
import Image from "next/image";
import { OtherProjects } from "./components/otherproject";
import { useLanguage } from "./contexts/language-context";

// Carrusel de pantallas finales
function ScreensCarousel({
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
      {/* Slide principal: imagen + contenido */}
      <div className="grid md:grid-cols-[1.4fr_1fr] gap-8 md:gap-12 items-center">
        {/* Imagen */}
        <div className="relative rounded-2xl overflow-hidden bg-white border border-gray-200/60 aspect-[16/10]">
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

        {/* Contenido */}
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {/* Counter editorial */}
              <div className="flex items-center gap-3 mb-4">
                <span className="font-instrument-serif italic text-3xl text-purple-400">
                  {String(current + 1).padStart(2, "0")}
                </span>
                <span className="text-gray-300">/</span>
                <span className="text-gray-400 font-manrope text-sm">
                  {String(total).padStart(2, "0")}
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-medium font-space-grotesk text-gray-900 leading-tight mb-3">
                {screen.title}
              </h3>
              <p className="text-gray-600 font-manrope leading-relaxed mb-6">
                {screen.description}
              </p>

              <ul className="space-y-2">
                {screen.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-gray-700 font-manrope"
                  >
                    <span className="text-purple-500 mt-1">✦</span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controles + thumbnails */}
      <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Thumbnails clicables */}
        <div className="flex gap-3 order-2 md:order-1">
          {screens.map((s, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 transition ${
                i === current
                  ? "border-purple-500"
                  : "border-transparent opacity-50 hover:opacity-100"
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

        {/* Botones prev/next */}
        <div className="flex items-center gap-3 order-1 md:order-2">
          <motion.button
            onClick={prev}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-full border border-gray-300 bg-white text-gray-700 hover:border-purple-400 hover:text-purple-600 flex items-center justify-center transition"
            aria-label="Anterior"
          >
            ←
          </motion.button>
          <motion.button
            onClick={next}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-full bg-gray-900 hover:bg-purple-600 text-white flex items-center justify-center transition"
            aria-label="Siguiente"
          >
            →
          </motion.button>
        </div>
      </div>
    </div>
  );
}

// Helper para las fases del proceso de diseño
function ProcessStep({
  number,
  title,
  subtitle,
  image,
  imageLeft,
  paragraphs,
  extra,
}: {
  number: string;
  title: string;
  subtitle: string;
  image: string;
  imageLeft?: boolean;
  paragraphs: string[];
  extra?: React.ReactNode;
}) {
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
          <p className="text-gray-400 font-manrope mb-6">{subtitle}</p>
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-gray-600 leading-relaxed mb-4 font-manrope"
            >
              {p}
            </p>
          ))}
          {extra}
        </div>
      </ScrollReveal>
    </div>
  );
}

export default function ProyectoActiva() {
  const { lang } = useLanguage();
  const es = lang === "es";

  const designThinking = [
    { icon: "/imagen/empatizar.png", title: es ? "Empatizar" : "Empathize", text: es ? "Entrevistas con usuarios" : "User interviews" },
    { icon: "/imagen/definir.png", title: es ? "Definir" : "Define", text: es ? "Identificación de necesidades" : "Needs identification" },
    { icon: "/imagen/idear.png", title: es ? "Idear" : "Ideate", text: "Brainstorming + Benchmark" },
    { icon: "/imagen/prototipar.png", title: es ? "Prototipar" : "Prototype", text: es ? "Wireframes de baja fidelidad" : "Low-fidelity wireframes" },
    { icon: "/imagen/testear.png", title: es ? "Testear" : "Test", text: es ? "Validación con usuarios" : "User validation" },
  ];

  const screens = es ? [
    { title: "Login", description: "Pantalla de acceso con autenticación segura y flujo guiado en 3 pasos.", image: "/Login.png", features: ["Validación en tiempo real", "Recuperación de contraseña", "Mensajes de error claros"] },
    { title: "Dashboard", description: "Panel de control centralizado con métricas en tiempo real y accesos rápidos.", image: "/Dashboard.png", features: ["Métricas en tiempo real", "Accesos rápidos personalizables", "Notificaciones importantes"] },
    { title: "Gestión", description: "Administración completa de procesos operativos con filtros y vistas configurables.", image: "/Gestion.png", features: ["Filtros avanzados", "Vista de tabla y tarjetas", "Exportación a múltiples formatos"] },
    { title: "Clientes", description: "Vista detallada con información, historial y acciones rápidas por cliente.", image: "/Clientes.png", features: ["Ficha completa de cliente", "Historial de actividades", "Acciones contextuales"] },
  ] : [
    { title: "Login", description: "Secure access screen with a guided 3-step authentication flow.", image: "/Login.png", features: ["Real-time validation", "Password recovery", "Clear error messages"] },
    { title: "Dashboard", description: "Centralized control panel with real-time metrics and quick access.", image: "/Dashboard.png", features: ["Real-time metrics", "Customizable quick access", "Important notifications"] },
    { title: "Management", description: "Full administration of operational processes with configurable filters and views.", image: "/Gestion.png", features: ["Advanced filters", "Table and card views", "Export to multiple formats"] },
    { title: "Clients", description: "Detailed view with information, history and quick actions per client.", image: "/Clientes.png", features: ["Complete client profile", "Activity history", "Contextual actions"] },
  ];

  const palette = [
    { hex: "#1E293B", name: "Slate 900" },
    { hex: "#2563EB", name: "Blue 600" },
    { hex: "#60A5FA", name: "Blue 400" },
    { hex: "#FACC15", name: "Yellow 400" },
  ];

  const audienceTraits = es ? [
    { label: "Rol", value: "Equipo operativo y administrativo" },
    { label: "Contexto", value: "Trabajan varias horas en la herramienta cada día" },
    { label: "Necesidad", value: "Acceso rápido y trazabilidad de procesos" },
  ] : [
    { label: "Role", value: "Operations and administrative team" },
    { label: "Context", value: "They use the tool for several hours every day" },
    { label: "Need", value: "Quick access and process traceability" },
  ];

  const researchMethods = es ? [
    { title: "Entrevistas con usuarios internos", text: "Conversaciones con miembros del equipo para entender cómo gestionan los procesos hoy y dónde están las fricciones." },
    { title: "Mapeo de tareas", text: "Relevamiento de las actividades más frecuentes y críticas, junto al tiempo que demandan en el flujo actual." },
    { title: "Revisión con stakeholders", text: "Alineamiento con el equipo de negocio sobre objetivos, prioridades y métricas de éxito de la plataforma." },
  ] : [
    { title: "Internal user interviews", text: "Conversations with team members to understand how they currently manage processes and where the friction points are." },
    { title: "Task mapping", text: "Survey of the most frequent and critical activities, along with the time they take in the current flow." },
    { title: "Stakeholder review", text: "Alignment with the business team on platform objectives, priorities and success metrics." },
  ];

  const findings = es ? [
    { title: "La información estaba dispersa", text: "Los datos se manejaban entre planillas, mails y registros manuales. Nadie tenía la foto completa en un solo lugar." },
    { title: "Los errores manuales se repetían", text: "Las tareas operativas dependían de copiar y pegar entre sistemas, generando inconsistencias frecuentes." },
    { title: "Faltaba visibilidad en tiempo real", text: "El estado de los procesos solo se conocía consultando uno por uno, sin un dashboard centralizado." },
    { title: "Las decisiones se demoraban", text: "Sin métricas accesibles, las decisiones operativas dependían de consultas largas y reportes manuales." },
  ] : [
    { title: "Information was scattered", text: "Data was managed across spreadsheets, emails and manual records. Nobody had the full picture in one place." },
    { title: "Manual errors kept recurring", text: "Operational tasks depended on copy-pasting between systems, generating frequent inconsistencies." },
    { title: "No real-time visibility", text: "Process status was only known by checking each one individually, with no centralized dashboard." },
    { title: "Decisions were delayed", text: "Without accessible metrics, operational decisions relied on lengthy queries and manual reports." },
  ];

  const beforeAfter = es ? [
    { aspect: "Gestión de procesos", before: "Procesos manuales repartidos entre planillas, mails y registros en papel. Difícil de rastrear y propenso a errores.", after: "Plataforma centralizada con todos los procesos visibles, con estados, asignaciones y trazabilidad en tiempo real." },
    { aspect: "Acceso a la información", before: "Consultar el estado requería abrir varios archivos o preguntar al responsable. La información se perdía entre canales.", after: "Dashboard único con métricas clave, búsquedas rápidas y vistas filtradas para encontrar lo necesario en segundos." },
    { aspect: "Errores operativos", before: "Las inconsistencias eran frecuentes por copiar y pegar entre sistemas. Detectarlas tardaba días.", after: "Validaciones en formularios, estados claros y alertas visuales reducen los errores antes de que sucedan." },
  ] : [
    { aspect: "Process management", before: "Manual processes spread across spreadsheets, emails and paper records. Hard to track and error-prone.", after: "Centralized platform with all processes visible, with statuses, assignments and real-time traceability." },
    { aspect: "Information access", before: "Checking status required opening multiple files or asking the person in charge. Information got lost across channels.", after: "Single dashboard with key metrics, quick search and filtered views to find what's needed in seconds." },
    { aspect: "Operational errors", before: "Inconsistencies were frequent from copy-pasting between systems. Detecting them took days.", after: "Form validations, clear statuses and visual alerts reduce errors before they happen." },
  ];

  const decisions = es ? [
    { number: "01", title: "Sidebar fija como navegación principal", rationale: "Los usuarios trabajan en sesiones largas y necesitan acceso constante a todas las secciones sin perder contexto. Una sidebar fija prioriza la velocidad de navegación sobre el espacio visual." },
    { number: "02", title: "Dashboard con métricas accionables", rationale: "En vez de mostrar todos los datos posibles, se priorizaron las métricas que disparan decisiones concretas (alertas, pendientes, próximos vencimientos)." },
    { number: "03", title: "Tablas con filtros densos pero escaneables", rationale: "El equipo necesita manejar volumen sin perderse. Se diseñaron tablas con buena densidad de información pero con jerarquía visual clara (separadores, hover states, acciones contextuales)." },
    { number: "04", title: "Estados visuales por color y forma", rationale: "Para que el estado de cada proceso se pueda interpretar de un vistazo, se diseñó un sistema de estados con color + ícono + texto. Funciona incluso para usuarios con daltonismo." },
  ] : [
    { number: "01", title: "Fixed sidebar as main navigation", rationale: "Users work in long sessions and need constant access to all sections without losing context. A fixed sidebar prioritizes navigation speed over screen space." },
    { number: "02", title: "Dashboard with actionable metrics", rationale: "Instead of showing all possible data, we prioritized metrics that trigger concrete decisions (alerts, pending items, upcoming deadlines)." },
    { number: "03", title: "Dense but scannable tables", rationale: "The team needs to handle volume without getting lost. Tables were designed with good information density but clear visual hierarchy (separators, hover states, contextual actions)." },
    { number: "04", title: "Visual status with color and shape", rationale: "So each process status can be interpreted at a glance, a status system with color + icon + text was designed. Works even for colorblind users." },
  ];

  const takeaways = es ? [
    { number: "01", title: "Validar temprano", text: "Las entrevistas iniciales fueron clave para detectar puntos de fricción que no eran evidentes en la propuesta original." },
    { number: "02", title: "Pensar en sistema", text: "Construir un Design System desde el inicio del proyecto facilitó la escalabilidad y aseguró consistencia entre pantallas." },
    { number: "03", title: "Iterar sin miedo", text: "Cada wireframe pasó por varias versiones. Iterar rápido en baja fidelidad ahorró tiempo en etapas posteriores." },
  ] : [
    { number: "01", title: "Validate early", text: "Initial interviews were key to detecting friction points that weren't obvious in the original proposal." },
    { number: "02", title: "Think in systems", text: "Building a Design System from the start of the project enabled scalability and ensured consistency across screens." },
    { number: "03", title: "Iterate boldly", text: "Every wireframe went through multiple versions. Iterating fast at low fidelity saved time in later stages." },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationHeader />

      {/* HERO */}
      <section className="relative px-6 py-32 bg-[#f5f7fb] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Lado izquierdo: contenido */}
            <div>
              {/* Tags */}
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
                Proyecto{" "}
                <span className="font-instrument-serif italic font-normal text-purple-600">
                  Activa
                </span>
              </h1>

              <p className="text-lg text-gray-600 max-w-xl leading-relaxed mb-10 font-manrope">
                {es ? "Plataforma diseñada para optimizar y centralizar procesos internos, mejorando la eficiencia operativa y facilitando el acceso a la información en tiempo real." : "Platform designed to optimize and centralize internal processes, improving operational efficiency and enabling real-time access to information."}
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
                  <p className="text-gray-900 font-medium font-space-grotesk">Figma, FigJam, VS Code</p>
                </div>
              </div>
            </div>

            {/* Lado derecho: imagen */}
            <motion.div
              className="relative flex justify-center"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/imagen/Activa.png"
                  alt="Activa preview"
                  width={500}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROBLEMA Y OBJETIVO */}
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
                  {es ? "La empresa Activa enfrenta dificultades para gestionar sus procesos internos debido a la falta de organización y control." : "Activa faces difficulties managing its internal processes due to a lack of organization and control."}
                </p>
                <p className="text-gray-600 leading-relaxed font-manrope">
                  {es ? "Las tareas administrativas y operativas se realizan de forma manual, generando ineficiencias, errores y dificultades para acceder a la información de manera rápida y clara." : "Administrative and operational tasks are performed manually, generating inefficiencies, errors and difficulties accessing information quickly and clearly."}
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
                  {es ? "Diseñar una plataforma centralizada que optimice la gestión de procesos internos, mejore la experiencia de los usuarios y reduzca errores operativos." : "Design a centralized platform that optimizes internal process management, improves the user experience and reduces operational errors."}
                </p>
                <p className="text-gray-600 leading-relaxed font-manrope">
                  {es ? "La solución busca facilitar el seguimiento de tareas, optimizar tiempos y adaptarse a las necesidades futuras de la empresa." : "The solution aims to streamline task tracking, optimize timelines and adapt to the company's future needs."}
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
                {es ? "AUDIENCIA" : "AUDIENCE"}
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-gray-900 leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                {es ? <>Para{" "}<span className="font-instrument-serif italic font-normal text-purple-600">quién</span>{" "}diseñé</> : <>Who I{" "}<span className="font-instrument-serif italic font-normal text-purple-600">designed</span>{" "}for</>}
              </h2>
              <p className="text-gray-600 mt-4 font-manrope text-lg">
                {es ? "Activa es una herramienta interna. Sus usuarios pasan horas en ella todos los días gestionando procesos del negocio." : "Activa is an internal tool. Its users spend hours in it every day managing business processes."}
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

      {/* DESIGN THINKING — Timeline */}
      <section className="px-6 py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-20 max-w-2xl">
              <span className="uppercase tracking-widest text-sm text-purple-500 font-bold">
                {es ? "METODOLOGÍA" : "METHODOLOGY"}
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-gray-900 leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                Design{" "}
                <span className="font-instrument-serif italic font-normal text-purple-600">
                  Thinking
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Línea conectora (desktop) */}
            <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-purple-200 via-purple-300 to-purple-200" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
              {designThinking.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 mb-4 bg-white rounded-full border-4 border-white shadow-sm flex items-center justify-center relative z-10">
                    <img
                      src={step.icon}
                      alt={step.title}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <span className="font-instrument-serif italic text-sm text-purple-400 mb-1">
                    0{i + 1}
                  </span>
                  <h3 className="text-lg font-medium font-space-grotesk text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2 font-manrope">
                    {step.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HALLAZGOS */}
      <section className="px-6 py-32 bg-gradient-to-b from-white via-gray-50 to-white">
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
                {es ? "Insights principales que surgieron de la investigación y guiaron las decisiones de diseño." : "Key insights that emerged from the research and guided the design decisions."}
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
            <div className="grid sm:grid-cols-2 gap-4">
              {findings.map((finding, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-purple-300 transition"
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

      {/* ANTES vs CON ACTIVA */}
      <section className="px-6 py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-16 max-w-2xl">
              <span className="uppercase tracking-widest text-sm text-purple-500 font-bold">
                {es ? "IMPACTO" : "IMPACT"}
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-gray-900 leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                {es ? <>Antes vs con{" "}<span className="font-instrument-serif italic font-normal text-purple-600">Activa</span></> : <>Before vs with{" "}<span className="font-instrument-serif italic font-normal text-purple-600">Activa</span></>}
              </h2>
              <p className="text-gray-600 mt-4 font-manrope text-lg">
                {es ? "Tres ejes clave donde la herramienta aporta valor concreto al equipo." : "Three key areas where the tool delivers concrete value to the team."}
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
                className="grid md:grid-cols-[180px_1fr_1fr] gap-6 bg-gray-50 border border-gray-200 rounded-2xl p-8"
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
                    {es ? "Con Activa" : "With Activa"}
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

      {/* PROCESO DE DISEÑO */}
      <section className="px-6 py-32 bg-gradient-to-b from-white via-gray-50 to-white">
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
            title={es ? "Arquitectura" : "Architecture"}
            subtitle={es ? "Estructurando la información y flujos" : "Structuring information and flows"}
            image="/arqActiva.png"
            imageLeft
            paragraphs={es ? [
              "Como primer paso en el diseño se elaboró una arquitectura de información clara, tomando como base los flujos más frecuentes y relevantes para el negocio.",
              "Este mapa ayudó a organizar las secciones principales de la aplicación, definir jerarquías, y sentar las bases para una navegación fluida y coherente. La arquitectura fue validada con el equipo interno para asegurar que cubría todos los casos de uso necesarios.",
            ] : [
              "As a first step, a clear information architecture was built based on the most frequent and relevant business flows.",
              "This map helped organize the main sections of the application, define hierarchies, and lay the foundation for smooth and coherent navigation. The architecture was validated with the internal team to ensure it covered all necessary use cases.",
            ]}
          />

          <ProcessStep
            number="02"
            title="Wireframes"
            subtitle={es ? "Diseñando patrones y estructura de la plataforma" : "Designing patterns and platform structure"}
            image="/wireframeActiva.png"
            paragraphs={es ? [
              "Los wireframes permitieron visualizar la estructura de la plataforma desde las primeras etapas del diseño. Trabajé en varias iteraciones de baja fidelidad para definir la disposición de los elementos, jerarquizar la información y asegurar la usabilidad desde el comienzo.",
              "Estas primeras versiones fueron clave para alinear expectativas con el equipo y realizar ajustes rápidos antes de pasar a diseño visual.",
            ] : [
              "Wireframes allowed visualizing the platform structure from the earliest design stages. I worked through several low-fidelity iterations to define the layout of elements, prioritize information hierarchy, and ensure usability from the start.",
              "These early versions were key for aligning expectations with the team and making quick adjustments before moving to visual design.",
            ]}
          />

          <ProcessStep
            number="03"
            title="Design System"
            subtitle={es ? "Creando los primeros componentes" : "Building the first components"}
            image="/designSystemActiva.png"
            imageLeft
            paragraphs={es ? [
              "Para lograr coherencia visual y una implementación eficiente, diseñé un sistema de diseño adaptado a la identidad institucional de Activa.",
              "Incluye componentes reutilizables, estados interactivos y patrones consistentes que facilitan el desarrollo y aseguran una experiencia homogénea en toda la aplicación.",
              "El Design System también permite escalar la plataforma fácilmente a nuevas funcionalidades o futuras versiones, sin perder consistencia visual.",
            ] : [
              "To achieve visual coherence and efficient implementation, I designed a design system tailored to Activa's institutional identity.",
              "It includes reusable components, interactive states, and consistent patterns that streamline development and ensure a uniform experience throughout the application.",
              "The Design System also makes it easy to scale the platform to new features or future versions without losing visual consistency.",
            ]}
          />

          <ProcessStep
            number="04"
            title={es ? "Pantallas" : "Screens"}
            subtitle={es ? "Dando vida a las ideas" : "Bringing ideas to life"}
            image="/screensActiva.png"
            paragraphs={es ? [
              "Se diseñaron las pantallas alineadas al diseño de la marca. Cada pantalla fue diseñada pensando en minimizar la fricción del usuario, priorizando la claridad y la eficiencia en la interacción.",
            ] : [
              "Screens were designed aligned with the brand design. Each screen was built with the goal of minimizing user friction, prioritizing clarity and efficiency in interaction.",
            ]}
            extra={
              <div className="mt-6 space-y-3">
                {(es ? [
                  { label: "Formulario de Login", count: "1 pantalla / 3 pasos" },
                  { label: "Funcionalidades principales", count: "8 pantallas" },
                  { label: "Chat web", count: "2 pantallas" },
                ] : [
                  { label: "Login form", count: "1 screen / 3 steps" },
                  { label: "Main features", count: "8 screens" },
                  { label: "Web chat", count: "2 screens" },
                ]).map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-3 border-b border-gray-200 last:border-0"
                  >
                    <span className="text-gray-700 font-manrope">{item.label}</span>
                    <span className="text-sm text-purple-500 font-manrope">{item.count}</span>
                  </div>
                ))}
              </div>
            }
          />
        </div>
      </section>

      {/* DECISIONES DE DISEÑO */}
      <section className="px-6 py-32 bg-white">
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
        </div>
      </section>

      {/* GUÍA VISUAL */}
      <section className="px-6 py-32 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-16 max-w-2xl">
              <span className="uppercase tracking-widest text-sm text-purple-500 font-bold">
                {es ? "GUÍA VISUAL" : "VISUAL GUIDE"}
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-gray-900 leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                {es ? <>Sistema{" "}<span className="font-instrument-serif italic font-normal text-purple-600">visual</span></> : <>Visual{" "}<span className="font-instrument-serif italic font-normal text-purple-600">system</span></>}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Tipografía */}
            <ScrollReveal direction="left">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 h-full">
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
                  {es ? "Paleta de colores" : "Color palette"}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {palette.map((color, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="space-y-2"
                    >
                      <div
                        className="w-full aspect-square rounded-xl"
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

      {/* PANTALLAS FINALES — Carrusel */}
      <section className="px-6 py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-16 max-w-2xl">
              <span className="uppercase tracking-widest text-sm text-purple-500 font-bold">
                {es ? "RESULTADO" : "RESULT"}
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-gray-900 leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                {es ? <>Pantallas{" "}<span className="font-instrument-serif italic font-normal text-purple-600">finales</span></> : <>Final{" "}<span className="font-instrument-serif italic font-normal text-purple-600">screens</span></>}
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <ScreensCarousel screens={screens} />
          </ScrollReveal>
        </div>
      </section>

      {/* APRENDIZAJES */}
      <section className="px-6 py-32 bg-gradient-to-br from-[#f7f7fb] via-[#f1f1f6] to-[#f5edff]">
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

      <OtherProjects currentProjectId="activa" />

      {/* CTA BEHANCE */}
      <section className="px-6 py-32 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-gray-600 mb-6 font-manrope">
              {es ? "¿Querés ver el caso completo?" : "Want to see the full case study?"}
            </p>
            <h2 className="text-4xl md:text-6xl font-medium text-gray-900 leading-[1.05] tracking-tighter font-space-grotesk mb-10">
              {es ? <>Mirá el proyecto en{" "}<span className="font-instrument-serif italic font-normal text-purple-600">Behance</span></> : <>See the project on{" "}<span className="font-instrument-serif italic font-normal text-purple-600">Behance</span></>}
            </h2>
            <a
              href="https://www.behance.net/gallery/225209813/Gestion-de-empresas"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-gray-900 hover:bg-purple-600 text-white px-6 py-4 rounded-full shadow-lg font-manrope transition"
            >
              {es ? "Ver caso completo" : "View full case study"}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
