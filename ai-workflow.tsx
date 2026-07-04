"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { NavigationHeader } from "./components/navigation-header";
import { ScrollReveal } from "./components/animated-components";
import { track } from "@vercel/analytics";
import { useLanguage } from "./contexts/language-context";

export default function AIWorkflow() {
  const { lang } = useLanguage();
  const es = lang === "es";

  const phases = es
    ? [
        {
          number: "01",
          title: "Research",
          tools: ["Claude", "ChatGPT", "Notion"],
          desc: "Uso IA para acelerar el desk research: benchmarks de competidores, síntesis de entrevistas y armado de proto-personas. Le pido que desafíe mis supuestos en lugar de confirmarlos — el análisis final y las decisiones sobre qué investigar siguen siendo míos.",
          example: "Para Wappoints, mapeé el mercado de apps de fidelización en una tarde: features, pricing y quejas frecuentes de usuarios reales extraídas de reviews.",
        },
        {
          number: "02",
          title: "Generación de assets",
          tools: ["Gemini", "Figma"],
          desc: "Genero y edito imágenes para heros, ilustraciones de apoyo y contenido placeholder realista para prototipos. Esto me permite testear layouts con contenido creíble desde el primer wireframe, sin esperar assets finales.",
          example: "La imagen del hero de este portfolio la produje iterando con Gemini y la recorté para integrarla al sistema visual del sitio.",
        },
        {
          number: "03",
          title: "Prototipado rápido",
          tools: ["Lovable", "v0", "Claude Code", "Cursor"],
          desc: "Paso del diseño en Figma a un producto navegable en código real, iterando con prompts. Un prototipo funcional revela problemas de flujo y de estados que un mockup estático nunca muestra — y se puede testear con usuarios reales.",
          example: "Wappoints pasó de mockups a una web app multi-rol funcionando. Este portfolio también: lo construí y lo mantengo con v0 y Claude Code.",
        },
        {
          number: "04",
          title: "Testing de copy",
          tools: ["Claude", "ChatGPT"],
          desc: "Genero variantes de microcopy — CTAs, estados vacíos, mensajes de error, onboarding — y las comparo contra el tono del producto. También lo uso para mantener la versión bilingüe ES/EN de mis proyectos sin que se sienta traducida.",
          example: "Todo el contenido de este sitio existe en español e inglés, revisado para que cada versión suene natural en su idioma.",
        },
      ]
    : [
        {
          number: "01",
          title: "Research",
          tools: ["Claude", "ChatGPT", "Notion"],
          desc: "I use AI to speed up desk research: competitor benchmarks, interview synthesis and proto-personas. I ask it to challenge my assumptions instead of confirming them — the final analysis and decisions about what to research remain mine.",
          example: "For Wappoints, I mapped the loyalty-app market in one afternoon: features, pricing and recurring complaints from real users extracted from reviews.",
        },
        {
          number: "02",
          title: "Asset generation",
          tools: ["Gemini", "Figma"],
          desc: "I generate and edit images for heros, supporting illustrations and realistic placeholder content for prototypes. This lets me test layouts with believable content from the first wireframe, without waiting for final assets.",
          example: "The hero image on this portfolio was produced by iterating with Gemini, then cropped to fit the site's visual system.",
        },
        {
          number: "03",
          title: "Rapid prototyping",
          tools: ["Lovable", "v0", "Claude Code", "Cursor"],
          desc: "I go from Figma designs to a navigable product in real code, iterating with prompts. A working prototype reveals flow and state problems a static mockup never shows — and it can be tested with real users.",
          example: "Wappoints went from mockups to a working multi-role web app. So did this portfolio: I built it and maintain it with v0 and Claude Code.",
        },
        {
          number: "04",
          title: "Copy testing",
          tools: ["Claude", "ChatGPT"],
          desc: "I generate microcopy variants — CTAs, empty states, error messages, onboarding — and compare them against the product's tone. I also use it to keep the ES/EN bilingual version of my projects from feeling translated.",
          example: "Everything on this site exists in Spanish and English, reviewed so each version sounds natural in its own language.",
        },
      ];

  const stack = [
    {
      group: es ? "Diseño" : "Design",
      tools: ["Figma", "FigJam"],
    },
    {
      group: es ? "Research y contenido" : "Research & content",
      tools: ["Claude", "ChatGPT", "Gemini"],
    },
    {
      group: "Build",
      tools: ["Lovable", "v0", "Claude Code", "Cursor"],
    },
    {
      group: "Ship",
      tools: ["GitHub", "Vercel"],
    },
  ];

  const principles = es
    ? [
        {
          title: "La IA propone, yo decido",
          desc: "Ninguna salida de IA llega al producto sin pasar por mi criterio. Es un multiplicador de velocidad, no un reemplazo del juicio de diseño.",
        },
        {
          title: "Verifico todo",
          desc: "Datos de research, código generado, copy: todo se contrasta con fuentes reales, se testea en el navegador o se lee completo antes de usarse.",
        },
        {
          title: "El usuario sigue en el centro",
          desc: "La IA acelera cómo llego a las respuestas, pero las preguntas siguen saliendo de observar personas reales usando productos reales.",
        },
      ]
    : [
        {
          title: "AI proposes, I decide",
          desc: "No AI output reaches the product without passing through my judgment. It's a speed multiplier, not a replacement for design thinking.",
        },
        {
          title: "I verify everything",
          desc: "Research data, generated code, copy: everything gets checked against real sources, tested in the browser or fully read before it ships.",
        },
        {
          title: "The user stays at the center",
          desc: "AI speeds up how I reach answers, but the questions still come from watching real people use real products.",
        },
      ];

  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationHeader />

      {/* HERO */}
      <section className="relative px-6 pt-40 pb-24 bg-[#f5f7fb] overflow-hidden">
        <div className="absolute top-20 right-[10%] w-72 h-72 bg-purple-200/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-[5%] w-56 h-56 bg-pink-100/60 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto relative">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="uppercase tracking-widest text-sm text-purple-500 font-bold">
              {es ? "MI WORKFLOW CON IA" : "MY AI WORKFLOW"}
            </span>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-gray-900 leading-[1.05] font-space-grotesk mt-3 mb-8 max-w-4xl">
              {es ? (
                <>
                  Cómo integro la{" "}
                  <span className="font-instrument-serif italic font-normal text-purple-600">IA</span>{" "}
                  a mi proceso de diseño
                </>
              ) : (
                <>
                  How I integrate{" "}
                  <span className="font-instrument-serif italic font-normal text-purple-600">AI</span>{" "}
                  into my design process
                </>
              )}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed font-manrope">
              {es
                ? "No es una lista de herramientas de moda: es cómo trabajo todos los días. Uso IA en cuatro momentos concretos del proceso — research, assets, prototipado y copy — y este mismo sitio es parte de la evidencia."
                : "This isn't a list of trendy tools: it's how I actually work every day. I use AI at four concrete moments of the process — research, assets, prototyping and copy — and this very site is part of the evidence."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* FASES */}
      <section className="px-6 py-28 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tighter font-space-grotesk mb-16">
              {es ? "Cuatro momentos, un mismo criterio" : "Four moments, one same judgment"}
            </h2>
          </ScrollReveal>

          <div className="space-y-8">
            {phases.map((phase, i) => (
              <ScrollReveal key={phase.number} delay={i * 0.08}>
                <div className="group bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-10 hover:border-purple-200 transition">
                  <div className="grid md:grid-cols-[100px_1fr] gap-6 items-start">
                    <span className="font-instrument-serif italic text-6xl text-purple-400 leading-none">
                      {phase.number}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <h3 className="text-2xl md:text-3xl font-medium text-gray-900 font-space-grotesk">
                          {phase.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {phase.tools.map((tool) => (
                            <span key={tool} className="text-xs px-3 py-1 rounded-full bg-white border border-gray-300 text-gray-600 font-manrope">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 font-manrope leading-relaxed mb-4">{phase.desc}</p>
                      <div className="border-l-2 border-purple-300 pl-4">
                        <p className="text-sm text-gray-500 font-manrope leading-relaxed">
                          <span className="text-purple-500 font-semibold">{es ? "En la práctica: " : "In practice: "}</span>
                          {phase.example}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="px-6 py-28 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <span className="uppercase tracking-widest text-sm text-purple-500 font-bold">STACK</span>
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tighter font-space-grotesk mt-3 mb-16">
              {es ? (
                <>Las herramientas,{" "}<span className="font-instrument-serif italic font-normal text-purple-600">por etapa</span></>
              ) : (
                <>The tools,{" "}<span className="font-instrument-serif italic font-normal text-purple-600">by stage</span></>
              )}
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stack.map((group, i) => (
              <ScrollReveal key={group.group} delay={i * 0.08}>
                <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full hover:border-purple-200 transition">
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-manrope mb-4">{group.group}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.tools.map((tool) => (
                      <span key={tool} className="px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-sm font-manrope text-gray-700">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPIOS */}
      <section className="px-6 py-28 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <span className="uppercase tracking-widest text-sm text-purple-500 font-bold">
              {es ? "PRINCIPIOS" : "PRINCIPLES"}
            </span>
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tighter font-space-grotesk mt-3 mb-16 max-w-3xl">
              {es ? (
                <>Lo que la IA{" "}<span className="font-instrument-serif italic font-normal text-purple-600">no</span>{" "}decide</>
              ) : (
                <>What AI does{" "}<span className="font-instrument-serif italic font-normal text-purple-600">not</span>{" "}decide</>
              )}
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {principles.map((principle, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-purple-50 border border-purple-100 rounded-2xl p-8 h-full">
                  <span className="font-instrument-serif italic text-4xl text-purple-400 block mb-4">✦</span>
                  <h3 className="text-xl font-medium text-gray-900 font-space-grotesk mb-3">{principle.title}</h3>
                  <p className="text-gray-600 text-sm font-manrope leading-relaxed">{principle.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-28 bg-gradient-to-br from-[#f7f7fb] via-[#f1f1f6] to-[#f5edff]">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tighter font-space-grotesk mb-6">
              {es ? (
                <>¿Querés verlo{" "}<span className="font-instrument-serif italic font-normal text-purple-600">aplicado</span>?</>
              ) : (
                <>Want to see it{" "}<span className="font-instrument-serif italic font-normal text-purple-600">applied</span>?</>
              )}
            </h2>
            <p className="text-gray-600 font-manrope text-lg leading-relaxed mb-10">
              {es
                ? "Wappoints es el caso más completo: diseñado en Figma y construido desde cero con este workflow."
                : "Wappoints is the most complete case: designed in Figma and built from scratch with this workflow."}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/proyecto-wappoints" onClick={() => track("workflow_to_wappoints")}>
                <Button className="group bg-gray-900 hover:bg-purple-600 text-white px-6 py-4 rounded-full font-manrope shadow-lg inline-flex items-center gap-2">
                  {es ? "Ver caso Wappoints" : "View Wappoints case"}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Button>
              </a>
              <a href="/#contacto" onClick={() => track("workflow_to_contact")}>
                <Button variant="outline" className="border-gray-300 text-gray-800 hover:border-purple-400 hover:text-purple-600 px-6 py-4 rounded-full font-manrope bg-white">
                  {es ? "Hablemos" : "Let's talk"}
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
