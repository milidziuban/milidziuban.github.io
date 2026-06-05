"use client";

import { motion } from "framer-motion";
import { NavigationHeader } from "./components/navigation-header";
import { ScrollReveal } from "./components/animated-components";
import Image from "next/image";
import { OtherProjects } from "./components/otherproject";

export default function ProyectoHousePlants() {
  const tools = [
    {
      title: "Entrevistas",
      text: "Hablamos con usuarios para conocer sus necesidades, comportamientos, motivaciones y frustraciones. Esto nos permite obtener insights reales desde su perspectiva.",
    },
    {
      title: "Mapa de empatía",
      text: "Ayuda a comprender mejor el contexto emocional y cognitivo del usuario, para diseñar soluciones alineadas con sus verdaderas necesidades.",
    },
    {
      title: "Puntos de dolor",
      text: "Son los problemas o frustraciones que experimentan los usuarios en su recorrido. Identificarlos permite resolver lo que realmente genera malestar o fricción.",
    },
    {
      title: "User Persona",
      text: "Arquetipo del usuario ideal, construido a partir de datos reales. Resume características, objetivos, necesidades y comportamientos.",
    },
    {
      title: "Mapa de experiencia",
      text: "Visualiza el recorrido del usuario a través de una experiencia o producto, incluyendo acciones, emociones, pensamientos y puntos de contacto.",
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
                {["UX/UI", "Mobile App", "2025"].map((tag) => (
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
                  HousePlants
                </span>
              </h1>

              <p className="text-lg text-gray-600 max-w-xl leading-relaxed mb-10 font-manrope">
                Aplicación móvil diseñada para ayudar a los usuarios a
                diagnosticar y cuidar sus plantas de interior. Permite
                identificar problemas comunes como plagas, enfermedades o
                errores de riego, y brinda recomendaciones personalizadas
                para el cuidado diario de cada planta.
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
                    2 meses
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
                  src="/imagen/HousePlant.png"
                  alt="HousePlants preview"
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
                  Muchas personas que tienen plantas de interior, especialmente
                  quienes están dando sus primeros pasos, enfrentan dificultades
                  para reconocer problemas como plagas, enfermedades, falta o
                  exceso de riego, o condiciones inadecuadas de luz.
                </p>
                <p className="text-gray-600 leading-relaxed font-manrope">
                  La información disponible suele ser confusa, poco confiable o
                  no está adaptada a sus necesidades, lo que genera frustración
                  y, muchas veces, la pérdida de la planta.
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
                  Desarrollar una app móvil intuitiva y accesible que ayude a
                  diagnosticar rápidamente los problemas de las plantas de
                  interior y brinde recomendaciones claras y personalizadas para
                  su cuidado.
                </p>
                <p className="text-gray-600 leading-relaxed font-manrope">
                  La app busca fomentar una experiencia de cuidado más
                  consciente, educativa y satisfactoria, independientemente del
                  nivel de conocimiento del usuario.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* HERRAMIENTAS UTILIZADAS */}
      <section className="px-6 py-32 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-16 max-w-2xl">
              <span className="uppercase tracking-widest text-sm text-purple-500 font-bold">
                INVESTIGACIÓN
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-gray-900 leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                Herramientas{" "}
                <span className="font-instrument-serif italic font-normal text-purple-600">
                  utilizadas
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {tools.map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-purple-300 transition"
              >
                <span className="font-instrument-serif italic text-2xl text-purple-400 block mb-3">
                  0{i + 1}
                </span>
                <h3 className="text-base font-medium font-space-grotesk text-gray-900 mb-3">
                  {tool.title}
                </h3>
                <p className="text-gray-600 text-sm font-manrope leading-relaxed">
                  {tool.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HALLAZGOS */}
      <section className="px-6 py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="relative rounded-2xl overflow-hidden border border-gray-200/60 bg-white">
                <Image
                  src="/hallazgos.png"
                  alt="Hallazgos"
                  width={640}
                  height={480}
                  className="w-full h-auto object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div>
                <span className="font-instrument-serif italic text-5xl text-purple-400 block mb-4 leading-none">
                  01
                </span>
                <h3 className="text-3xl md:text-4xl font-medium text-gray-900 font-space-grotesk leading-tight mb-2">
                  Hallazgos
                </h3>
                <p className="text-gray-400 font-manrope mb-6">
                  Frases que revelan las emociones del usuario
                </p>
                <p className="text-gray-600 font-manrope leading-relaxed">
                  Durante la investigación surgieron frases clave que revelan
                  las emociones e inseguridades de los usuarios al enfrentarse
                  a un problema con sus plantas. Muchos expresaron miedo a
                  &ldquo;hacer algo mal&rdquo; o &ldquo;no saber qué está
                  pasando&rdquo;. Este insight fue clave para diseñar una
                  experiencia clara, comprensiva y no juzgadora.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* USER PERSONA */}
      <section className="px-6 py-32 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="font-instrument-serif italic text-5xl text-purple-400 block mb-4 leading-none">
                  02
                </span>
                <h3 className="text-3xl md:text-4xl font-medium text-gray-900 font-space-grotesk leading-tight mb-2">
                  User Persona
                </h3>
                <p className="text-gray-400 font-manrope mb-8">
                  El arquetipo que guió las decisiones
                </p>

                <div className="bg-white border border-gray-200 rounded-2xl p-8 space-y-4">
                  <p className="text-2xl font-medium text-gray-900 font-space-grotesk">
                    Paula
                  </p>
                  <ul className="space-y-2 text-gray-600 font-manrope">
                    <li>📍 32 años — Vive en un departamento en la ciudad</li>
                    <li>
                      💼 Trabaja de forma híbrida y pasa mucho tiempo en casa
                    </li>
                    <li>
                      🌱 Tiene varias plantas pero poca experiencia en
                      jardinería
                    </li>
                  </ul>

                  <div className="pt-4 space-y-3 border-t border-gray-200">
                    <p className="font-instrument-serif italic text-gray-700">
                      &ldquo;Si una planta se pone fea, tardo mucho en darme
                      cuenta de lo que tiene.&rdquo;
                    </p>
                    <p className="font-instrument-serif italic text-gray-700">
                      &ldquo;A veces intento soluciones que encuentro en
                      Google, pero no sé si están bien.&rdquo;
                    </p>
                    <p className="font-instrument-serif italic text-gray-700">
                      &ldquo;Necesito que alguien me diga qué hacer con una
                      planta sin tener que investigar horas.&rdquo;
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 font-manrope leading-relaxed mt-6">
                  Su perfil fue clave para diseñar una solución empática y
                  clara, enfocada en la accesibilidad del lenguaje y la
                  facilidad de uso.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden border border-gray-200/60 bg-white">
                <Image
                  src="/userpersona.png"
                  alt="User Persona"
                  width={640}
                  height={480}
                  className="w-full h-auto object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SCREENS */}
      <section className="px-6 py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-16 max-w-2xl">
              <span className="uppercase tracking-widest text-sm text-purple-500 font-bold">
                RESULTADO
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-gray-900 leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                Pantallas{" "}
                <span className="font-instrument-serif italic font-normal text-purple-600">
                  finales
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden border border-gray-200/60 bg-white">
              <Image
                src="/Screens.png"
                alt="Pantallas finales"
                width={1400}
                height={900}
                className="w-full h-auto object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <OtherProjects currentProjectId="houseplants" />

      {/* CTA */}
      <section className="px-6 py-32 bg-gradient-to-br from-[#f7f7fb] via-[#f1f1f6] to-[#f5edff]">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-gray-600 mb-6 font-manrope">
              ¿Querés ver el caso completo?
            </p>
            <h2 className="text-4xl md:text-6xl font-medium text-gray-900 leading-[1.05] tracking-tighter font-space-grotesk mb-10">
              Mirá el proyecto en{" "}
              <span className="font-instrument-serif italic font-normal text-purple-600">
                Behance
              </span>
            </h2>
            <a
              href="https://www.behance.net/gallery/230158335/HousePlants"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-gray-900 hover:bg-purple-600 text-white px-6 py-4 rounded-full shadow-lg font-manrope transition"
            >
              Ver caso completo
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
