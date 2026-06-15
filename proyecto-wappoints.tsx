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
  const audienceTraits = [
    {
      label: "Rubro",
      value: "Gastronomía con sucursales: cafeterías, restaurantes, postres",
    },
    {
      label: "Rol del usuario",
      value: "Dueño multi-negocio, encargado de sucursal y cliente final",
    },
    {
      label: "Necesidad",
      value: "Programa de fidelización profesional sin fricción para el cliente",
    },
  ];

  const aiToolkit = [
    {
      title: "Lovable",
      text: "Núcleo del build. Pasé del diseño en Figma a un producto navegable iterando con prompts, manteniendo el sistema visual y el tono.",
    },
    {
      title: "Claude Code",
      text: "Para refactors profundos, decisiones de arquitectura y features que escapan a la generación de UI: lógica de reglas, cálculo de puntos, vistas multi-rol.",
    },
    {
      title: "Cursor",
      text: "Edición fina en el editor: ajustes localizados, tipos, y revisión de cada cambio antes de mergear.",
    },
  ];

  const findings = [
    {
      title: "El cliente final no quiere otra app",
      text: "Pedir descarga es el principal motivo de abandono. WhatsApp ya está instalado, ya está autenticado y es el canal donde el cliente espera recibir cosas del comercio.",
    },
    {
      title: "El dueño quiere ver todo desde un solo lugar",
      text: "Muchos comercios chicos tienen 2 o 3 sucursales (o incluso varios negocios). Necesitan comparar performance, no entrar a cada panel por separado.",
    },
    {
      title: "El empleado de mostrador necesita velocidad",
      text: "Asignar puntos o canjear un premio tiene que pasar entre el saludo y el cobro. Cada paso extra es un cliente esperando.",
    },
  ];

  const beforeAfter = [
    {
      aspect: "Inscripción del cliente",
      before:
        "Tarjetas de sellos físicas que se pierden, o pedir descarga de app que el cliente nunca hace.",
      after:
        "El cliente escanea un QR en mostrador, llega al bot de WhatsApp y queda registrado en segundos. Sin app, sin login.",
    },
    {
      aspect: "Gestión multi-sucursal",
      before:
        "Cada local lleva su propio registro. El dueño consolida números a mano o no los consolida.",
      after:
        "Vista global con comparativa entre sucursales, alertas automáticas y ranking de clientes consolidado.",
    },
    {
      aspect: "Configuración del programa",
      before:
        "Reglas fijas que no se adaptan a cada negocio o que cambiar es un trámite.",
      after:
        "Pesos por punto, bonificaciones, vencimientos y puntos de bienvenida configurables, con preview en vivo del cálculo.",
    },
  ];

  const decisions = [
    {
      number: "01",
      title: "Cliente final sin app, vía WhatsApp",
      rationale:
        "El QR de mostrador lleva al bot de WhatsApp, que detecta quién escanea y lo registra. Eliminó el mayor punto de abandono de programas tradicionales: la descarga.",
    },
    {
      number: "02",
      title: "Vista dual: sucursal vs. administración",
      rationale:
        "Un empleado ve solo lo de su sucursal y las acciones del día. El dueño ve el panel global con comparativas, alertas y exportación. Cada rol con su nivel de información.",
    },
    {
      number: "03",
      title: "Acciones principales arriba de todo",
      rationale:
        "Asignar puntos y canjear premio están como primary actions visibles en el home de sucursal. El resto es secundario porque eso es lo que el empleado hace 50 veces al día.",
    },
    {
      number: "04",
      title: "Reglas con preview en vivo",
      rationale:
        "Cuando el dueño cambia el valor de un punto o el monto mínimo, ve al instante cómo se calcularían los puntos en compras de ejemplo. Decisiones informadas, sin probar y ver qué pasa.",
    },
    {
      number: "05",
      title: "Trazabilidad por empleado y sucursal",
      rationale:
        "Cada movimiento muestra quién lo hizo, en qué sucursal y cuándo. Genera confianza y permite auditar sin fricción.",
    },
    {
      number: "06",
      title: "Alertas accionables, no dashboards densos",
      rationale:
        "El admin no recibe gráficos vacíos: recibe avisos concretos como “Belgrano cayó 3.4% esta semana” o “Stock bajo en Combo desayuno”.",
    },
  ];

  const visualPalette = [
    { hex: "#2563EB", name: "Blue 600" },
    { hex: "#F59E0B", name: "Amber 500" },
    { hex: "#10B981", name: "Emerald 500" },
    { hex: "#0F172A", name: "Slate 900" },
  ];

  const takeaways = [
    {
      number: "01",
      title: "La AI acelera, pero el criterio sigue siendo humano",
      text: "Lovable y Claude Code escriben rápido, pero las decisiones de UX, jerarquía y prioridades de producto siguen siendo mías. La AI ejecuta una visión, no la define.",
    },
    {
      number: "02",
      title: "Diseñar con AI exige prompts pensados como specs",
      text: "Cuanto más clara la intención (objetivo, restricciones, criterios de éxito), más alineado el output. Aprendí a escribir prompts como mini-briefs de diseño.",
    },
    {
      number: "03",
      title: "El loop diseño → código → uso real se acortó muchísimo",
      text: "Pude validar decisiones probando el producto vivo en horas, no semanas. Eso cambió cómo iterar: menos especulación, más evidencia.",
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
                Wappoints,{" "}
                <span className="font-instrument-serif italic font-normal text-purple-600">
                  fidelización
                </span>{" "}
                construida con AI
              </h1>

              <p className="text-lg text-gray-600 max-w-xl leading-relaxed mb-10 font-manrope">
                Plataforma multi-negocio y multi-sucursal para programas de
                fidelización, donde el cliente final se inscribe por WhatsApp
                sin descargar nada. Diseñada en Figma y construida desde cero
                usando AI como copiloto.
              </p>

              <div className="grid grid-cols-3 gap-6 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-manrope mb-2">
                    Rol
                  </p>
                  <p className="text-gray-900 font-medium font-space-grotesk">
                    Diseño + Build con AI
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-manrope mb-2">
                    Duración
                  </p>
                  <p className="text-gray-900 font-medium font-space-grotesk">
                    En curso
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-manrope mb-2">
                    Herramientas
                  </p>
                  <p className="text-gray-900 font-medium font-space-grotesk">
                    Figma, Lovable, Claude Code, Cursor
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
                  Problema
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 font-manrope">
                  Los programas de fidelización del mercado están pensados
                  para cadenas grandes: caros, complejos y con un onboarding
                  que el cliente final rara vez completa. Pedir que descargue
                  una app es el principal motivo de abandono.
                </p>
                <p className="text-gray-600 leading-relaxed font-manrope">
                  Para los comercios chicos con varias sucursales (o varios
                  negocios), no existe una plataforma simple que les permita
                  administrar todo desde un solo lugar y que el cliente pueda
                  empezar a sumar puntos en segundos.
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
                  Diseñar y construir una plataforma profesional pensada
                  para gastronomía multi-sucursal.
                </p>
                <ul className="space-y-2">
                  {[
                    "Cliente final cero fricción (QR + WhatsApp)",
                    "Vista de administración multi-negocio",
                    "Operación rápida en mostrador",
                    "Reglas del programa configurables con preview",
                    "Construcción acelerada con AI sin perder criterio",
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
                Tres perfiles muy distintos conviven en la plataforma. Cada
                pantalla se diseñó pensando en qué rol la va a usar.
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
                Insights de hablar con comercios y de probar plataformas
                existentes como cliente y como admin.
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
                Diseñar y{" "}
                <span className="font-instrument-serif italic font-normal text-purple-600">
                  construir
                </span>{" "}
                con AI
              </h2>
              <p className="text-gray-600 mt-4 font-manrope text-lg">
                No tercericé la decisión: usé la AI como un equipo extendido
                para ejecutar más rápido lo que ya tenía claro.
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
                    Herramienta
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
                Mi flujo de trabajo
              </p>
              <h3 className="text-2xl md:text-3xl font-medium font-space-grotesk leading-tight mb-8 max-w-3xl">
                Pensé el producto como diseñadora primero. La AI entró cuando
                hizo falta acelerar la ejecución sin perder consistencia.
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    n: "01",
                    t: "Visión",
                    d: "Definí el problema, los tres roles (admin, sucursal, cliente) y los principios antes de abrir el editor.",
                  },
                  {
                    n: "02",
                    t: "Diseño",
                    d: "Arquitectura de información, flujos y sistema visual en Figma. Decisiones críticas resueltas a mano.",
                  },
                  {
                    n: "03",
                    t: "Build con AI",
                    d: "Lovable para generar pantallas, Claude Code y Cursor para refactors y lógica. Revisión de cada cambio.",
                  },
                  {
                    n: "04",
                    t: "Validación",
                    d: "Pruebas en producto real, ajustes en horas y vuelta al loop.",
                  },
                ].map((step, i) => (
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
                IMPACTO
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-gray-900 leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                Antes vs{" "}
                <span className="font-instrument-serif italic font-normal text-purple-600">
                  con Wappoints
                </span>
              </h2>
              <p className="text-gray-600 mt-4 font-manrope text-lg">
                Tres ejes donde la plataforma cambia la forma en que un
                comercio gestiona su relación con clientes.
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
                    Con Wappoints
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
                PRODUCTO
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-gray-900 leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                Qué hay{" "}
                <span className="font-instrument-serif italic font-normal text-purple-600">
                  adentro
                </span>
              </h2>
              <p className="text-gray-600 mt-4 font-manrope text-lg">
                Recorrido por los módulos principales que componen la
                plataforma.
              </p>
            </div>
          </ScrollReveal>

          <ProcessStep
            number="01"
            title="Home sucursal"
            subtitle="Operación diaria del mostrador"
            image="/imagen/wappoints-home-sucursal.gif"
          >
            <p>
              La pantalla que ve el empleado de cara al cliente. Las dos
              acciones principales —asignar puntos y canjear premio— viven
              arriba de todo, seguidas de las métricas del día y la
              actividad reciente.
            </p>
            <ul className="space-y-2 mt-4">
              {[
                "KPIs del día: puntos asignados, canjes, clientes activos",
                "Actividad en tiempo real con autor y monto",
                "Ranking local de clientes del mes",
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
            title="Vista global de administración"
            subtitle="Para dueños con varias sucursales o varios negocios"
            image="/imagen/wappoints-vista-global.gif"
            imageLeft
          >
            <p>
              Panel consolidado con métricas de todas las sucursales,
              comparativas semanales, alertas accionables y ranking de
              clientes global.
            </p>
            <p className="border-l-2 border-purple-200 pl-4 italic">
              💡 Las alertas no son gráficos vacíos: son avisos concretos
              como “Belgrano cayó 3.4% esta semana” o “Stock bajo en Combo
              desayuno”.
            </p>
          </ProcessStep>

          <ProcessStep
            number="03"
            title="Clientes y movimientos"
            subtitle="Perfil completo y trazabilidad total"
            image="/imagen/wappoints-clientes.gif"
          >
            <p>
              Cada cliente tiene su perfil con tags (VIP, frecuente, alto
              ticket), histórico de visitas, ticket promedio y sucursal
              favorita. Cada movimiento queda trazado por empleado y
              sucursal, con la posibilidad de deshacer y restaurar.
            </p>
          </ProcessStep>

          <ProcessStep
            number="04"
            title="Reglas del programa"
            subtitle="Configuración con preview en vivo"
            image="/imagen/wappoints-reglas.gif"
            imageLeft
          >
            <p>
              El dueño configura cómo se acumulan, multiplican y vencen los
              puntos. Cada cambio se ve al instante en una vista previa con
              compras de ejemplo, así sabe qué impacto va a tener antes de
              guardar.
            </p>
          </ProcessStep>

          <ProcessStep
            number="05"
            title="QR + WhatsApp"
            subtitle="El cliente final entra sin descargar nada"
            image="/imagen/wappoints-qr.gif"
            imagePortrait
            imageLeft
          >
            <p>
              El QR de mostrador lleva al bot de WhatsApp, que detecta
              quién escanea y lo registra como cliente. Sin app, sin login,
              sin formulario. Es el diferencial central del producto.
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
                RACIONAL
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-gray-900 leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                Decisiones de{" "}
                <span className="font-instrument-serif italic font-normal text-purple-600">
                  diseño
                </span>
              </h2>
              <p className="text-gray-600 mt-4 font-manrope text-lg">
                Qué decidí y por qué, en los puntos que más impactan en la
                adopción.
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
                Tipografía moderna y una paleta con códigos claros: azul
                para sumar, naranja para canjear, verde y rojo para estado.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
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

      <OtherProjects currentProjectId="wappoints" />

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
