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
  imagePortrait,
  children,
}: {
  number: string;
  title: string;
  subtitle?: string;
  image?: string;
  imageLeft?: boolean;
  imagePortrait?: boolean;
  children: React.ReactNode;
}) {
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
        <div
          className={`${imageLeft ? "md:order-1" : "md:order-2"} ${
            imagePortrait ? "flex justify-center" : ""
          }`}
        >
          <div
            className={`relative rounded-2xl overflow-hidden border border-gray-200 bg-white ${
              imagePortrait ? "max-w-[280px]" : ""
            }`}
          >
            <Image
              src={image}
              alt={title}
              width={imagePortrait ? 360 : 640}
              height={imagePortrait ? 720 : 480}
              unoptimized
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

export default function ProyectoWappoints() {
  const { lang } = useLanguage();
  const es = lang === "es";

  const audienceTraits = es ? [
    { label: "Rubro", value: "Gastronomía con sucursales: cafeterías, restaurantes, postres" },
    { label: "Rol del usuario", value: "Dueño multi-negocio, encargado de sucursal y cliente final" },
    { label: "Necesidad", value: "Programa de fidelización profesional sin fricción para el cliente" },
  ] : [
    { label: "Industry", value: "Food & beverage with branches: cafés, restaurants, desserts" },
    { label: "User role", value: "Multi-business owner, branch manager and end customer" },
    { label: "Need", value: "Professional loyalty program with zero friction for the customer" },
  ];

  const aiToolkit = es ? [
    { title: "Lovable", text: "Núcleo del build. Pasé del diseño en Figma a un producto navegable iterando con prompts, manteniendo el sistema visual y el tono." },
    { title: "Claude Code", text: "Para refactors profundos, decisiones de arquitectura y features que escapan a la generación de UI: lógica de reglas, cálculo de puntos, vistas multi-rol." },
    { title: "Cursor", text: "Edición fina en el editor: ajustes localizados, tipos, y revisión de cada cambio antes de mergear." },
  ] : [
    { title: "Lovable", text: "Core of the build. I went from Figma design to a navigable product by iterating with prompts, keeping the visual system and tone consistent." },
    { title: "Claude Code", text: "For deep refactors, architecture decisions and features beyond UI generation: rule logic, point calculation, multi-role views." },
    { title: "Cursor", text: "Fine editing in the editor: localized adjustments, types, and reviewing each change before merging." },
  ];

  const findings = es ? [
    { title: "El cliente final no quiere otra app", text: "Pedir descarga es el principal motivo de abandono. WhatsApp ya está instalado, ya está autenticado y es el canal donde el cliente espera recibir cosas del comercio." },
    { title: "El dueño quiere ver todo desde un solo lugar", text: "Muchos comercios chicos tienen 2 o 3 sucursales (o incluso varios negocios). Necesitan comparar performance, no entrar a cada panel por separado." },
    { title: "El empleado de mostrador necesita velocidad", text: "Asignar puntos o canjear un premio tiene que pasar entre el saludo y el cobro. Cada paso extra es un cliente esperando." },
  ] : [
    { title: "The end customer doesn't want another app", text: "Asking for a download is the main reason for drop-off. WhatsApp is already installed, already authenticated, and is the channel where customers expect to receive things from businesses." },
    { title: "The owner wants to see everything in one place", text: "Many small businesses have 2 or 3 branches (or even multiple businesses). They need to compare performance, not log into each panel separately." },
    { title: "The counter employee needs speed", text: "Assigning points or redeeming a reward must happen between the greeting and the payment. Every extra step is a customer waiting." },
  ];

  const beforeAfter = es ? [
    { aspect: "Inscripción del cliente", before: "Tarjetas de sellos físicas que se pierden, o pedir descarga de app que el cliente nunca hace.", after: "El cliente escanea un QR en mostrador, llega al bot de WhatsApp y queda registrado en segundos. Sin app, sin login." },
    { aspect: "Gestión multi-sucursal", before: "Cada local lleva su propio registro. El dueño consolida números a mano o no los consolida.", after: "Vista global con comparativa entre sucursales, alertas automáticas y ranking de clientes consolidado." },
    { aspect: "Configuración del programa", before: "Reglas fijas que no se adaptan a cada negocio o que cambiar es un trámite.", after: "Pesos por punto, bonificaciones, vencimientos y puntos de bienvenida configurables, con preview en vivo del cálculo." },
  ] : [
    { aspect: "Customer registration", before: "Physical stamp cards that get lost, or asking for an app download the customer never completes.", after: "The customer scans a QR at the counter, reaches the WhatsApp bot and is registered in seconds. No app, no login." },
    { aspect: "Multi-branch management", before: "Each location keeps its own records. The owner consolidates numbers by hand or doesn't consolidate at all.", after: "Global view with branch comparisons, automatic alerts and a consolidated customer ranking." },
    { aspect: "Program configuration", before: "Fixed rules that don't adapt to each business or are a hassle to change.", after: "Points per peso, bonuses, expiries and welcome points all configurable, with a live preview of the calculation." },
  ];

  const decisions = es ? [
    { number: "01", title: "Cliente final sin app, vía WhatsApp", rationale: "El QR de mostrador lleva al bot de WhatsApp, que detecta quién escanea y lo registra. Eliminó el mayor punto de abandono de programas tradicionales: la descarga." },
    { number: "02", title: "Vista dual: sucursal vs. administración", rationale: "Un empleado ve solo lo de su sucursal y las acciones del día. El dueño ve el panel global con comparativas, alertas y exportación. Cada rol con su nivel de información." },
    { number: "03", title: "Acciones principales arriba de todo", rationale: "Asignar puntos y canjear premio están como primary actions visibles en el home de sucursal. El resto es secundario porque eso es lo que el empleado hace 50 veces al día." },
    { number: "04", title: "Reglas con preview en vivo", rationale: "Cuando el dueño cambia el valor de un punto o el monto mínimo, ve al instante cómo se calcularían los puntos en compras de ejemplo. Decisiones informadas, sin probar y ver qué pasa." },
    { number: "05", title: "Trazabilidad por empleado y sucursal", rationale: "Cada movimiento muestra quién lo hizo, en qué sucursal y cuándo. Genera confianza y permite auditar sin fricción." },
    { number: "06", title: "Alertas accionables, no dashboards densos", rationale: "El admin no recibe gráficos vacíos: recibe avisos concretos como 'Belgrano cayó 3.4% esta semana' o 'Stock bajo en Combo desayuno'." },
  ] : [
    { number: "01", title: "End customer without an app, via WhatsApp", rationale: "The counter QR leads to the WhatsApp bot, which detects who scans it and registers them. It eliminated the biggest drop-off point of traditional programs: the download." },
    { number: "02", title: "Dual view: branch vs. administration", rationale: "An employee sees only their branch and the day's actions. The owner sees the global panel with comparisons, alerts and export. Each role with its own information level." },
    { number: "03", title: "Main actions at the very top", rationale: "Assign points and redeem reward are visible as primary actions on the branch home. Everything else is secondary because that's what the employee does 50 times a day." },
    { number: "04", title: "Rules with live preview", rationale: "When the owner changes the value of a point or the minimum amount, they instantly see how points would be calculated on sample purchases. Informed decisions, no trial and error." },
    { number: "05", title: "Traceability by employee and branch", rationale: "Each movement shows who did it, at which branch and when. It builds trust and allows auditing without friction." },
    { number: "06", title: "Actionable alerts, not dense dashboards", rationale: "The admin doesn't receive empty charts: they receive concrete notices like 'Belgrano dropped 3.4% this week' or 'Low stock on Breakfast Combo'." },
  ];

  const visualPalette = [
    { hex: "#2563EB", name: "Blue 600" },
    { hex: "#F59E0B", name: "Amber 500" },
    { hex: "#10B981", name: "Emerald 500" },
    { hex: "#0F172A", name: "Slate 900" },
  ];

  const takeaways = es ? [
    { number: "01", title: "La AI acelera, pero el criterio sigue siendo humano", text: "Lovable y Claude Code escriben rápido, pero las decisiones de UX, jerarquía y prioridades de producto siguen siendo mías. La AI ejecuta una visión, no la define." },
    { number: "02", title: "Diseñar con AI exige prompts pensados como specs", text: "Cuanto más clara la intención (objetivo, restricciones, criterios de éxito), más alineado el output. Aprendí a escribir prompts como mini-briefs de diseño." },
    { number: "03", title: "El loop diseño → código → uso real se acortó muchísimo", text: "Pude validar decisiones probando el producto vivo en horas, no semanas. Eso cambió cómo iterar: menos especulación, más evidencia." },
  ] : [
    { number: "01", title: "AI accelerates, but the judgment stays human", text: "Lovable and Claude Code write fast, but the UX, hierarchy and product priority decisions are still mine. AI executes a vision, it doesn't define it." },
    { number: "02", title: "Designing with AI requires prompts written as specs", text: "The clearer the intent (goal, constraints, success criteria), the more aligned the output. I learned to write prompts as mini design briefs." },
    { number: "03", title: "The design → code → real use loop got much shorter", text: "I could validate decisions by testing the live product in hours, not weeks. That changed how I iterate: less speculation, more evidence." },
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
                {["UX/UI", "Web App", "Built with AI", "2026"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border border-gray-300 text-gray-600 font-manrope"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-5xl md:text-6xl font-medium tracking-tighter text-gray-900 leading-[1.05] font-space-grotesk mb-6">
                {es ? <>Wappoints,{" "}<span className="font-instrument-serif italic font-normal text-purple-600">fidelización</span>{" "}construida con AI</> : <>Wappoints,{" "}<span className="font-instrument-serif italic font-normal text-purple-600">loyalty</span>{" "}built with AI</>}
              </h1>

              <p className="text-lg text-gray-600 max-w-xl leading-relaxed mb-10 font-manrope">
                {es ? "Plataforma multi-negocio y multi-sucursal para programas de fidelización, donde el cliente final se inscribe por WhatsApp sin descargar nada. Diseñada en Figma y construida desde cero usando AI como copiloto." : "Multi-business and multi-branch platform for loyalty programs, where the end customer signs up via WhatsApp without downloading anything. Designed in Figma and built from scratch using AI as co-pilot."}
              </p>

              <div className="grid grid-cols-3 gap-6 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-manrope mb-2">{es ? "Rol" : "Role"}</p>
                  <p className="text-gray-900 font-medium font-space-grotesk">{es ? "Diseño + Build con AI" : "Design + Build with AI"}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-manrope mb-2">{es ? "Duración" : "Duration"}</p>
                  <p className="text-gray-900 font-medium font-space-grotesk">{es ? "En curso" : "Ongoing"}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-manrope mb-2">{es ? "Herramientas" : "Tools"}</p>
                  <p className="text-gray-900 font-medium font-space-grotesk">Figma, Lovable, Claude Code, Cursor</p>
                </div>
              </div>
            </div>

            <motion.div
              className="relative flex justify-center"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="rounded-2xl overflow-hidden w-full">
                <Image
                  src="/imagen/wappoints-hero.png"
                  alt="Wappoints — Vista global de administración"
                  width={720}
                  height={520}
                  className="w-full h-auto object-cover"
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
                  {es ? "Los programas de fidelización del mercado están pensados para cadenas grandes: caros, complejos y con un onboarding que el cliente final rara vez completa. Pedir que descargue una app es el principal motivo de abandono." : "Loyalty programs on the market are designed for large chains: expensive, complex, with an onboarding the end customer rarely completes. Asking them to download an app is the main reason for drop-off."}
                </p>
                <p className="text-gray-600 leading-relaxed font-manrope">
                  {es ? "Para los comercios chicos con varias sucursales (o varios negocios), no existe una plataforma simple que les permita administrar todo desde un solo lugar y que el cliente pueda empezar a sumar puntos en segundos." : "For small businesses with several branches (or multiple businesses), there's no simple platform that lets them manage everything from one place while customers can start earning points in seconds."}
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
                  {es ? "Diseñar y construir una plataforma profesional pensada para gastronomía multi-sucursal." : "Design and build a professional platform built for multi-branch food & beverage businesses."}
                </p>
                <ul className="space-y-2">
                  {(es ? [
                    "Cliente final cero fricción (QR + WhatsApp)",
                    "Vista de administración multi-negocio",
                    "Operación rápida en mostrador",
                    "Reglas del programa configurables con preview",
                    "Construcción acelerada con AI sin perder criterio",
                  ] : [
                    "Zero-friction end customer (QR + WhatsApp)",
                    "Multi-business administration view",
                    "Fast counter operation",
                    "Configurable program rules with live preview",
                    "AI-accelerated build without losing design judgment",
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
                {es ? "Tres perfiles muy distintos conviven en la plataforma. Cada pantalla se diseñó pensando en qué rol la va a usar." : "Three very different profiles coexist in the platform. Every screen was designed thinking about which role will use it."}
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
                {es ? "Insights de hablar con comercios y de probar plataformas existentes como cliente y como admin." : "Insights from talking to businesses and testing existing platforms as both a customer and an admin."}
              </p>
            </div>
          </ScrollReveal>

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

      {/* CONSTRUIDO CON AI */}
      <section className="px-6 py-32 bg-gradient-to-b from-white via-purple-50/40 to-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-16 max-w-2xl">
              <span className="uppercase tracking-widest text-sm text-purple-500 font-bold">
                BUILT WITH AI
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-gray-900 leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                {es ? <>Diseñar y{" "}<span className="font-instrument-serif italic font-normal text-purple-600">construir</span>{" "}con AI</> : <>Designing and{" "}<span className="font-instrument-serif italic font-normal text-purple-600">building</span>{" "}with AI</>}
              </h2>
              <p className="text-gray-600 mt-4 font-manrope text-lg">
                {es ? "No tercericé la decisión: usé la AI como un equipo extendido para ejecutar más rápido lo que ya tenía claro." : "I didn't outsource the decision-making: I used AI as an extended team to execute faster what I already had clear."}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="grid md:grid-cols-3 gap-4 mb-16">
              {aiToolkit.map((tool, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white border border-gray-200 rounded-2xl p-8"
                >
                  <p className="text-xs uppercase tracking-widest text-purple-500 font-manrope mb-3">
                    {es ? "Herramienta" : "Tool"}
                  </p>
                  <h3 className="text-xl font-medium font-space-grotesk text-gray-900 mb-3">
                    {tool.title}
                  </h3>
                  <p className="text-gray-600 font-manrope leading-relaxed text-sm">
                    {tool.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-gray-900 text-white rounded-2xl p-10 md:p-14">
              <p className="text-xs uppercase tracking-widest text-purple-300 font-manrope mb-4">
                {es ? "Mi flujo de trabajo" : "My workflow"}
              </p>
              <h3 className="text-2xl md:text-3xl font-medium font-space-grotesk leading-tight mb-8 max-w-3xl">
                {es ? "Pensé el producto como diseñadora primero. La AI entró cuando hizo falta acelerar la ejecución sin perder consistencia." : "I thought about the product as a designer first. AI came in when I needed to accelerate execution without losing consistency."}
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                {(es ? [
                  { n: "01", t: "Visión", d: "Definí el problema, los tres roles (admin, sucursal, cliente) y los principios antes de abrir el editor." },
                  { n: "02", t: "Diseño", d: "Arquitectura de información, flujos y sistema visual en Figma. Decisiones críticas resueltas a mano." },
                  { n: "03", t: "Build con AI", d: "Lovable para generar pantallas, Claude Code y Cursor para refactors y lógica. Revisión de cada cambio." },
                  { n: "04", t: "Validación", d: "Pruebas en producto real, ajustes en horas y vuelta al loop." },
                ] : [
                  { n: "01", t: "Vision", d: "Defined the problem, the three roles (admin, branch, customer) and the principles before opening the editor." },
                  { n: "02", t: "Design", d: "Information architecture, flows and visual system in Figma. Critical decisions resolved by hand." },
                  { n: "03", t: "Build with AI", d: "Lovable to generate screens, Claude Code and Cursor for refactors and logic. Reviewing each change." },
                  { n: "04", t: "Validation", d: "Tests on the real product, adjustments in hours and back to the loop." },
                ]).map((step, i) => (
                  <div key={i}>
                    <span className="font-instrument-serif italic text-2xl text-purple-300 block mb-2">
                      {step.n}
                    </span>
                    <p className="font-medium font-space-grotesk mb-2">
                      {step.t}
                    </p>
                    <p className="text-sm text-gray-300 font-manrope leading-relaxed">
                      {step.d}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ANTES vs DESPUÉS */}
      <section className="px-6 py-32 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-16 max-w-2xl">
              <span className="uppercase tracking-widest text-sm text-purple-500 font-bold">
                {es ? "IMPACTO" : "IMPACT"}
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-gray-900 leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                {es ? <>Antes vs{" "}<span className="font-instrument-serif italic font-normal text-purple-600">con Wappoints</span></> : <>Before vs{" "}<span className="font-instrument-serif italic font-normal text-purple-600">with Wappoints</span></>}
              </h2>
              <p className="text-gray-600 mt-4 font-manrope text-lg">
                {es ? "Tres ejes donde la plataforma cambia la forma en que un comercio gestiona su relación con clientes." : "Three areas where the platform changes how a business manages its relationship with customers."}
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
                    {es ? "Con Wappoints" : "With Wappoints"}
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

      {/* MÓDULOS DEL PRODUCTO */}
      <section className="px-6 py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-20 max-w-2xl">
              <span className="uppercase tracking-widest text-sm text-purple-500 font-bold">
                {es ? "PRODUCTO" : "PRODUCT"}
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-gray-900 leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                {es ? <>Qué hay{" "}<span className="font-instrument-serif italic font-normal text-purple-600">adentro</span></> : <>What's{" "}<span className="font-instrument-serif italic font-normal text-purple-600">inside</span></>}
              </h2>
              <p className="text-gray-600 mt-4 font-manrope text-lg">
                {es ? "Recorrido por los módulos principales que componen la plataforma." : "A walkthrough of the main modules that make up the platform."}
              </p>
            </div>
          </ScrollReveal>

          <ProcessStep
            number="01"
            title={es ? "Home sucursal" : "Branch home"}
            subtitle={es ? "Operación diaria del mostrador" : "Daily counter operation"}
            image="/imagen/wappoints-home-sucursal.gif"
          >
            <p>
              {es ? "La pantalla que ve el empleado de cara al cliente. Las dos acciones principales —asignar puntos y canjear premio— viven arriba de todo, seguidas de las métricas del día y la actividad reciente." : "The screen the employee sees when facing the customer. The two main actions — assign points and redeem reward — live at the very top, followed by the day's metrics and recent activity."}
            </p>
            <ul className="space-y-2 mt-4">
              {(es ? [
                "KPIs del día: puntos asignados, canjes, clientes activos",
                "Actividad en tiempo real con autor y monto",
                "Ranking local de clientes del mes",
              ] : [
                "Daily KPIs: assigned points, redemptions, active customers",
                "Real-time activity with author and amount",
                "Local customer ranking for the month",
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
            title={es ? "Vista global de administración" : "Global admin view"}
            subtitle={es ? "Para dueños con varias sucursales o varios negocios" : "For owners with multiple branches or businesses"}
            image="/imagen/wappoints-vista-global.gif"
            imageLeft
          >
            <p>
              {es ? "Panel consolidado con métricas de todas las sucursales, comparativas semanales, alertas accionables y ranking de clientes global." : "Consolidated panel with metrics from all branches, weekly comparisons, actionable alerts and a global customer ranking."}
            </p>
            <p className="border-l-2 border-purple-200 pl-4 italic">
              {es ? "💡 Las alertas no son gráficos vacíos: son avisos concretos como \"Belgrano cayó 3.4% esta semana\" o \"Stock bajo en Combo desayuno\"." : "💡 Alerts aren't empty charts: they're concrete notices like \"Belgrano dropped 3.4% this week\" or \"Low stock on Breakfast Combo\"."}
            </p>
          </ProcessStep>

          <ProcessStep
            number="03"
            title={es ? "Clientes y movimientos" : "Customers and movements"}
            subtitle={es ? "Perfil completo y trazabilidad total" : "Complete profile and full traceability"}
            image="/imagen/wappoints-clientes.gif"
          >
            <p>
              {es ? "Cada cliente tiene su perfil con tags (VIP, frecuente, alto ticket), histórico de visitas, ticket promedio y sucursal favorita. Cada movimiento queda trazado por empleado y sucursal, con la posibilidad de deshacer y restaurar." : "Each customer has their profile with tags (VIP, frequent, high ticket), visit history, average ticket and favorite branch. Every movement is traced by employee and branch, with the ability to undo and restore."}
            </p>
          </ProcessStep>

          <ProcessStep
            number="04"
            title={es ? "Reglas del programa" : "Program rules"}
            subtitle={es ? "Configuración con preview en vivo" : "Configuration with live preview"}
            image="/imagen/wappoints-reglas.gif"
            imageLeft
          >
            <p>
              {es ? "El dueño configura cómo se acumulan, multiplican y vencen los puntos. Cada cambio se ve al instante en una vista previa con compras de ejemplo, así sabe qué impacto va a tener antes de guardar." : "The owner configures how points accumulate, multiply and expire. Each change is instantly previewed with sample purchases, so they know the impact before saving."}
            </p>
          </ProcessStep>

          <ProcessStep
            number="05"
            title="QR + WhatsApp"
            subtitle={es ? "El cliente final entra sin descargar nada" : "The end customer joins without downloading anything"}
            image="/imagen/wappoints-qr.gif"
            imagePortrait
            imageLeft
          >
            <p>
              {es ? "El QR de mostrador lleva al bot de WhatsApp, que detecta quién escanea y lo registra como cliente. Sin app, sin login, sin formulario. Es el diferencial central del producto." : "The counter QR leads to the WhatsApp bot, which detects who scans it and registers them as a customer. No app, no login, no form. This is the product's core differentiator."}
            </p>
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
                {es ? "Qué decidí y por qué, en los puntos que más impactan en la adopción." : "What I decided and why, at the points that most impact adoption."}
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
                {es ? "Tipografía moderna y una paleta con códigos claros: azul para sumar, naranja para canjear, verde y rojo para estado." : "Modern typography and a palette with clear codes: blue for earning, orange for redeeming, green and red for status."}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
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

      <OtherProjects currentProjectId="wappoints" />

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
