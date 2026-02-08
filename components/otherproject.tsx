"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/components/data/projects-data"
import { ScrollReveal } from "./animated-components"

interface OtherProjectsProps {
  currentProjectId: string
}

export function OtherProjects({ currentProjectId }: OtherProjectsProps) {
  const otherProjects = projects.filter((project) => project.id !== currentProjectId)

  return (
    <section className="px-6 py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center font-space-grotesk">Otros Proyectos</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <Link href={project.href} className="block">
                <motion.div
                  className="bg-white rounded-3xl p-6 shadow-lg h-full flex flex-col justify-between"
                  whileHover={{ scale: 1.02, rotateY: 3 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-60 w-full mb-4 rounded-xl overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-space-grotesk">{project.title}</h3>
                    <p className="text-gray-600 text-sm font-manrope">{project.subtitle}</p>
                  </div>
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
