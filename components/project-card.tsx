"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { track } from "@vercel/analytics";
import type { Project } from "@/components/data/projects-data";
import type { Lang } from "@/lib/i18n";

/**
 * Tarjeta de proyecto. Es un enlace real, no un div con onClick:
 * funciona con teclado, con click del medio y para los buscadores.
 *
 * layout "wide" pone la imagen y el texto lado a lado. Se usa para cerrar
 * la grilla cuando queda una tarjeta impar, en vez de dejar media fila vacia.
 */
export function ProjectCard({
  project,
  lang,
  index,
  source,
  ratio = "landscape",
  size = "md",
  layout = "stacked",
}: {
  project: Project;
  lang: Lang;
  index?: number;
  source: string;
  ratio?: "landscape" | "portrait";
  size?: "md" | "sm";
  layout?: "stacked" | "wide";
}) {
  const aspect = ratio === "portrait" ? "aspect-[4/5]" : "aspect-[16/10]";
  const wide = layout === "wide";

  return (
    <Link
      href={project.href}
      onClick={() => track("project_click", { project: project.title, url: project.href, source })}
      className="group block"
    >
      <div className={wide ? "grid items-center gap-8 md:grid-cols-12 md:gap-x-12" : undefined}>
        <div
          className={`relative ${aspect} overflow-hidden rounded-card border border-hairline bg-surface ${
            wide ? "md:col-span-7" : ""
          }`}
        >
          <Image
            src={project.image}
            alt={`Vista previa del proyecto ${project.title}`}
            fill
            sizes={
              wide
                ? "(max-width: 768px) 100vw, 660px"
                : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
            }
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <span
            className="absolute top-4 right-4 grid h-10 w-10 translate-y-1 place-items-center rounded-full bg-surface/95 text-ink opacity-0 shadow-[var(--shadow-soft)] transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
            aria-hidden="true"
          >
            <ArrowUpRight size={17} strokeWidth={1.75} />
          </span>
        </div>

        <div
          className={`mt-5 flex items-start gap-4 ${wide ? "md:col-span-5 md:mt-0" : ""}`}
        >
          {typeof index === "number" && (
            <span className="font-meta mt-1 w-7 shrink-0 text-[12px] text-ink-3">
              {String(index).padStart(2, "0")}
            </span>
          )}
          <div className="min-w-0 flex-1">
            <h3
              className={`font-display font-medium tracking-tight text-ink transition-colors duration-200 group-hover:text-brand ${
                size === "sm" ? "text-lg" : "text-2xl"
              }`}
            >
              {project.title}
            </h3>
            <p className="font-body pretty mt-2 max-w-[46ch] text-sm leading-relaxed text-ink-2">
              {size === "sm" ? project.subtitle[lang] : project.description[lang]}
            </p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {project.tags[lang].map((tag) => (
                <li
                  key={tag}
                  className="font-meta rounded-chip bg-brand-tint px-2.5 py-1 text-[10.5px] uppercase text-brand"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
}
