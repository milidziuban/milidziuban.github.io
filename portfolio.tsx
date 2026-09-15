"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, Mail, Linkedin } from "lucide-react";
import { track } from "@vercel/analytics";

import { NavigationHeader } from "@/components/navigation-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollReveal, EASE } from "@/components/animated-components";
import { ProjectCard } from "@/components/project-card";
import { featuredProjects } from "@/components/data/projects-data";
import { useLanguage } from "@/contexts/language-context";
import { translations, type Lang, type T } from "@/lib/i18n";

const EMAIL = "milagrosdziuban1@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/milagros-dziuban-dise%C3%B1adora/";

/* ------------------------------------------------------------------ */
/* Hero: solo tipografia. El titular ocupa todo el ancho y entra linea   */
/* por linea; abajo, una fila con filete separa descripcion y CTA.       */
/* ------------------------------------------------------------------ */
function HeroSection({ t }: { t: T }) {
  const reduce = useReducedMotion();

  // Cada linea del titular entra con un pequeno retraso respecto a la
  // anterior; con reduce-motion se pintan todas de una.
  const line = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.08 + i * 0.1, ease: EASE },
  });

  return (
    <section
      id="inicio"
      className="flex min-h-[100dvh] flex-col justify-center px-6 pt-28 pb-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.p
          {...line(0)}
          className="font-meta flex items-center gap-3 text-[12px] tracking-wide text-ink-3 uppercase"
        >
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand" />
          {t.hero.eyebrow}
        </motion.p>

        <h1 className="font-display mt-7 text-[clamp(2.75rem,7.2vw,6rem)] leading-[1.02] font-medium tracking-[-0.03em] text-ink">
          <motion.span {...line(1)} className="block">
            {t.hero.h1a}{" "}
            <em className="pr-[0.06em] italic text-brand">{t.hero.h1em}</em>
          </motion.span>
          <motion.span {...line(2)} className="block">
            {t.hero.h1b}
          </motion.span>
        </h1>

        <motion.div
          {...line(3)}
          className="mt-12 grid gap-8 border-t border-hairline pt-8 md:mt-16 md:grid-cols-12 md:items-start md:gap-x-12"
        >
          <p className="font-body pretty max-w-[46ch] text-[17px] leading-relaxed text-ink-2 md:col-span-7 md:text-[18px]">
            {t.hero.desc}
          </p>

          <div className="flex flex-wrap items-center gap-x-7 gap-y-4 md:col-span-5 md:justify-end">
            <Link
              href="#proyectos"
              onClick={() => track("cta_ver_proyectos", { source: "hero" })}
              className="font-body group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[15px] font-medium text-white transition-colors duration-200 hover:bg-brand active:scale-[0.98]"
            >
              {t.hero.cta}
              <ArrowRight
                size={17}
                strokeWidth={1.75}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>

            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("linkedin_click", { source: "hero" })}
              className="font-body group relative inline-flex items-center gap-1.5 text-[15px] font-medium text-ink-2 transition-colors duration-200 hover:text-brand"
            >
              {t.hero.linkedin}
              <ArrowUpRight size={15} strokeWidth={1.75} aria-hidden="true" />
              <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-brand transition-all duration-300 group-hover:w-[calc(100%-18px)]" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Cinta de capacidades: banda a sangre entre filetes.                  */
/* Es la unica marquesina de la pagina y se pausa al pasar el mouse.    */
/* ------------------------------------------------------------------ */
function CapabilitiesStrip({ t }: { t: T }) {
  return (
    <section aria-label={t.capabilities.join(", ")} className="border-y border-hairline bg-paper-2">
      <div className="marquee-track marquee-mask overflow-hidden py-5">
        <div className="animate-marquee flex w-max whitespace-nowrap">
          {/* 4 copias: con 2 la pista quedaba mas corta que el viewport y
              aparecia un hueco en blanco al final de cada ciclo */}
          {[0, 1, 2, 3].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center" aria-hidden={copy !== 0}>
              {t.capabilities.map((item) => (
                <li key={item} className="flex items-center">
                  <span className="font-meta px-7 text-[12px] tracking-wide text-ink-3 uppercase">
                    {item}
                  </span>
                  <span aria-hidden="true" className="h-3 w-px bg-hairline" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Sobre mi: retrato + intro, despues dos filas con etiqueta fija.      */
/* ------------------------------------------------------------------ */
function AboutSection({ t }: { t: T }) {
  const tools = [
    "Figma",
    "Visual Studio",
    "Photoshop",
    "Notion",
    "Miro",
  ];

  return (
    <section id="sobre-mi" className="bg-paper px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-12 md:grid-cols-12 md:gap-x-14">
          <ScrollReveal direction="right" className="md:col-span-5">
            <div className="relative overflow-hidden rounded-card border border-hairline bg-brand-tint">
              <Image
                src="/imagen/pngcv.png"
                alt={t.about.portraitAlt}
                width={420}
                height={520}
                sizes="(max-width: 768px) 100vw, 440px"
                className="h-auto w-full object-cover"
              />
            </div>
          </ScrollReveal>

          <div className="md:col-span-7">
            <ScrollReveal>
              <h2 className="font-display text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.14] font-medium tracking-tight text-ink">
                {t.about.t1}{" "}
                <em className="pb-1 leading-[1.15] italic text-brand">{t.about.t2}</em>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="font-body pretty mt-6 max-w-[58ch] text-[17px] leading-relaxed text-ink-2">
                {t.about.desc}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <h3 className="font-display mt-10 text-sm font-semibold text-ink">{t.about.tools}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <li
                    key={tool}
                    className="font-body rounded-chip border border-hairline bg-surface px-3.5 py-2 text-[13px] text-ink-2"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>

        {/* Experiencia */}
        <div className="mt-24 grid gap-8 md:grid-cols-[200px_1fr] md:gap-x-14">
          <ScrollReveal>
            <h3 className="font-display text-2xl font-medium tracking-tight text-ink md:sticky md:top-28">
              {t.about.experience}
            </h3>
          </ScrollReveal>

          <ol className="border-l border-hairline pl-8">
            {t.about.jobs.map((job, i) => (
              <ScrollReveal
                as="li"
                key={job.company}
                delay={i * 0.08}
                className="relative block pb-11 last:pb-0"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-2 -left-[37px] h-2.5 w-2.5 rounded-full bg-brand ring-4 ring-paper"
                />
                <p className="font-meta text-[11.5px] text-ink-3 uppercase">{job.date}</p>
                <h4 className="font-display mt-2 text-xl font-medium tracking-tight text-ink">
                  {job.role}{" "}
                  <span className="text-ink-3">
                    {job.prep} {job.company}
                  </span>
                </h4>
                <p className="font-body pretty mt-2 max-w-[58ch] leading-relaxed text-ink-2">
                  {job.desc}
                </p>
              </ScrollReveal>
            ))}
          </ol>
        </div>

        {/* Formacion */}
        <div className="mt-24 grid gap-8 md:grid-cols-[200px_1fr] md:gap-x-14">
          <ScrollReveal>
            <h3 className="font-display text-2xl font-medium tracking-tight text-ink md:sticky md:top-28">
              {t.about.formation}
            </h3>
          </ScrollReveal>

          <ul className="grid gap-4 sm:grid-cols-2">
            {t.about.studies.map((item, i) => (
              <ScrollReveal
                as="li"
                key={item.title}
                delay={i * 0.05}
                className={`h-full rounded-card border p-6 transition-colors duration-200 ${
                  item.featured
                    ? "border-transparent bg-brand-tint sm:col-span-2"
                    : "border-hairline bg-surface hover:border-brand/40"
                }`}
              >
                <p className="font-meta text-[11.5px] text-ink-3 uppercase">{item.date}</p>
                <h4 className="font-display mt-2 text-[17px] leading-snug font-medium text-ink">
                  {item.title}
                </h4>
                <p className="font-body mt-1 text-sm text-ink-2">{item.place}</p>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Proyectos: uno principal a ancho completo y el resto en una grilla   */
/* pareja de dos columnas, con las filas alineadas.                     */
/* ------------------------------------------------------------------ */
function ProjectsSection({ t, lang }: { t: T; lang: Lang }) {
  const [lead, ...rest] = featuredProjects;

  // Con una cantidad impar de tarjetas la ultima queda sola en la columna
  // izquierda y deja media fila vacia al lado. En ese caso la sacamos de la
  // grilla y la mostramos a ancho completo para cerrar la seccion.
  const trailing = rest.length % 2 === 1 ? rest[rest.length - 1] : null;
  const gridProjects = trailing ? rest.slice(0, -1) : rest;

  return (
    <section id="proyectos" className="bg-paper-2 px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="font-display text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.14] font-medium tracking-tight text-ink">
            {t.projects.t1}{" "}
            <em className="pb-1 leading-[1.15] italic text-brand">{t.projects.t2}</em>
          </h2>
        </ScrollReveal>

        {/* Proyecto principal */}
        {lead && (
          <ScrollReveal delay={0.1}>
            <Link
              href={lead.href}
              onClick={() => track("project_click", { project: lead.title, url: lead.href, source: "lead" })}
              className="group mt-14 grid items-center gap-8 md:grid-cols-12 md:gap-x-12"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-card border border-hairline bg-surface md:col-span-7">
                <Image
                  src={lead.image}
                  alt={`Vista previa del proyecto ${lead.title}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 660px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>

              <div className="md:col-span-5">
                <p className="font-meta text-[11.5px] text-ink-3 uppercase">{t.projects.lead}</p>
                <h3 className="font-display mt-3 text-3xl font-medium tracking-tight text-ink transition-colors duration-200 group-hover:text-brand md:text-4xl">
                  {lead.title}
                </h3>
                <p className="font-body pretty mt-4 max-w-[46ch] leading-relaxed text-ink-2">
                  {lead.description[lang]}
                </p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {lead.tags[lang].map((tag) => (
                    <li
                      key={tag}
                      className="font-meta rounded-chip bg-brand-tint px-2.5 py-1 text-[10.5px] text-brand uppercase"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <span className="font-body mt-7 inline-flex items-center gap-2 text-[15px] font-medium text-ink transition-colors duration-200 group-hover:text-brand">
                  {t.projects.caseStudy}
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.75}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          </ScrollReveal>
        )}

        {/* Resto, en dos columnas parejas: todas las imagenes al mismo alto */}
        <div className="mt-24 grid items-start gap-x-10 gap-y-16 md:grid-cols-2">
          {gridProjects.map((project, i) => (
            <ScrollReveal key={project.id} delay={(i % 2) * 0.08}>
              <ProjectCard project={project} lang={lang} index={i + 2} source="grid" />
            </ScrollReveal>
          ))}
        </div>

        {/* La impar, con imagen y texto lado a lado en vez de media fila vacia */}
        {trailing && (
          <ScrollReveal className="mt-16">
            <ProjectCard
              project={trailing}
              lang={lang}
              index={rest.length + 1}
              source="grid"
              layout="wide"
            />
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Proceso: banda ancha que lleva a la pagina de workflow.              */
/* ------------------------------------------------------------------ */
function ProcessBand({ t }: { t: T }) {
  return (
    <section className="bg-paper px-6 py-20">
      <ScrollReveal className="mx-auto max-w-6xl">
        <Link
          href="/ai-workflow"
          onClick={() => track("ai_workflow_banner_click", { source: "landing" })}
          className="group flex flex-col gap-8 rounded-card border border-hairline bg-brand-tint px-8 py-12 transition-colors duration-300 hover:border-brand/40 md:flex-row md:items-end md:justify-between md:px-14"
        >
          <div>
            <h2 className="font-display text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.14] font-medium tracking-tight text-ink">
              {t.process.t1}{" "}
              <em className="pb-1 leading-[1.15] italic text-brand">{t.process.t2}</em>
            </h2>
            <p className="font-body pretty mt-4 max-w-[52ch] leading-relaxed text-ink-2">
              {t.process.desc}
            </p>
          </div>

          <span className="font-body inline-flex shrink-0 items-center gap-3 text-[15px] font-medium whitespace-nowrap text-ink">
            {t.process.cta}
            <span className="grid h-12 w-12 place-items-center rounded-full border border-brand/25 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
              <ArrowUpRight size={18} strokeWidth={1.75} aria-hidden="true" />
            </span>
          </span>
        </Link>
      </ScrollReveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Contacto: unica banda oscura, cierra la pagina junto al pie.         */
/* ------------------------------------------------------------------ */
function ContactSection({ t, lang }: { t: T; lang: Lang }) {
  const cvHref =
    lang === "en" ? "/CV_MilagrosDziuban_2026_EN.pdf" : "/CV_MilagrosDziuban_2026_ES.pdf";

  const channels = [
    {
      label: t.contact.email,
      value: EMAIL,
      href: `mailto:${EMAIL}`,
      icon: Mail,
      external: false,
    },
    {
      label: t.contact.linkedin,
      value: "LinkedIn",
      href: LINKEDIN,
      icon: Linkedin,
      external: true,
    },
  ];

  return (
    <section id="contacto" className="on-ink bg-ink px-6 pt-28 pb-16 md:pt-36">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-12 md:gap-x-14">
        <ScrollReveal className="md:col-span-6">
          <h2 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.14] font-medium tracking-tight text-white">
            {t.contact.t1}
            <em className="pb-1 leading-[1.15] italic text-brand-lite">
              {t.contact.t2}
            </em>
          </h2>
          <p className="font-body pretty mt-6 max-w-[44ch] leading-relaxed text-white/65">
            {t.contact.desc}
          </p>
          <p className="font-meta mt-8 text-[11.5px] tracking-wide text-white/55 uppercase">
            {t.contact.availability}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.12} className="md:col-span-5 md:col-start-8">
          <ul className="grid gap-0">
            {channels.map(({ label, value, href, icon: Icon, external }) => (
              <li key={value}>
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  onClick={() => track("contact_click", { method: value, source: "contact" })}
                  className="group flex items-center gap-4 border-b border-white/10 py-5 transition-colors duration-200 hover:border-brand-lite"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/8 text-white transition-colors duration-200 group-hover:bg-brand-lite group-hover:text-ink">
                    <Icon size={17} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="font-body block text-[15px] text-white">{label}</span>
                    <span className="font-body block truncate text-sm text-white/50">{value}</span>
                  </span>
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.75}
                    className="shrink-0 text-white/55 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-lite"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>

          <a
            href={cvHref}
            download
            onClick={() => track("cv_download", { source: "contact" })}
            className="font-body group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-medium text-ink transition-colors duration-200 hover:bg-brand-lite active:scale-[0.98]"
          >
            {t.contact.cv}
            <ArrowDown
              size={16}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default function Portfolio() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-paper">
      <NavigationHeader />
      <main id="contenido">
        <HeroSection t={t} />
        <CapabilitiesStrip t={t} />
        <AboutSection t={t} />
        <ProjectsSection t={t} lang={lang} />
        <ProcessBand t={t} />
        <ContactSection t={t} lang={lang} />
      </main>
      <SiteFooter compact />
    </div>
  );
}
