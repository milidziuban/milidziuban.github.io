"use client";

import { projects } from "@/components/data/projects-data";
import { ScrollReveal } from "@/components/animated-components";
import { ProjectCard } from "@/components/project-card";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/i18n";

interface OtherProjectsProps {
  currentProjectId: string;
}

export function OtherProjects({ currentProjectId }: OtherProjectsProps) {
  const { lang } = useLanguage();
  const t = translations[lang];

  const others = projects.filter((project) => project.id !== currentProjectId).slice(0, 3);

  if (others.length === 0) return null;

  return (
    <section className="bg-paper px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
            {t.other.title}
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.08}>
              <ProjectCard project={project} lang={lang} source="other_projects" size="sm" />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
