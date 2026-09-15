"use client";

import { ArrowUp, ArrowUpRight, Download } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/i18n";
import { track } from "@vercel/analytics";

const EMAIL = "milagrosdziuban1@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/milagros-dziuban-dise%C3%B1adora/";

/**
 * `compact` se usa en la portada, donde la seccion de contacto ya lista
 * mail, LinkedIn y CV justo arriba: repetirlos seria ruido.
 */
export function SiteFooter({ compact = false }: { compact?: boolean }) {
  const { lang } = useLanguage();
  const t = translations[lang];
  const cvHref =
    lang === "en" ? "/CV_MilagrosDziuban_2026_EN.pdf" : "/CV_MilagrosDziuban_2026_ES.pdf";
  const year = new Date().getFullYear();

  const links = [
    { label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, external: false },
    { label: "LinkedIn", value: "milagros-dziuban", href: LINKEDIN, external: true },
  ];

  return (
    <footer
      className={`on-ink bg-ink px-6 pb-10 text-white/70 ${compact ? "pt-10" : "pt-16"}`}
    >
      <div className="mx-auto max-w-6xl">
        <div
          className={`grid gap-12 border-t border-white/10 pt-12 ${
            compact ? "" : "md:grid-cols-[1fr_auto]"
          }`}
        >
          <div>
            <p className="font-display text-2xl font-medium tracking-tight text-white">
              Milagros Dziuban
            </p>
            <p className="font-body mt-1 text-sm text-white/55">{t.footer.role}</p>
            {!compact && (
              <p className="font-body mt-6 max-w-xs text-sm leading-relaxed text-white/55">
                {t.contact.availability}
              </p>
            )}
          </div>

          <ul className={`grid gap-3 self-start md:min-w-[280px] ${compact ? "hidden" : ""}`}>
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  onClick={() => track("contact_click", { method: link.label, source: "footer" })}
                  className="group flex items-center justify-between gap-6 border-b border-white/10 pb-3 transition-colors duration-200 hover:border-brand-lite"
                >
                  <span className="font-meta text-[11px] uppercase text-white/55">
                    {link.label}
                  </span>
                  <span className="font-body flex items-center gap-2 text-sm text-white transition-colors duration-200 group-hover:text-brand-lite">
                    {link.value}
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.75}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </li>
            ))}
            <li>
              <a
                href={cvHref}
                download
                onClick={() => track("cv_download", { source: "footer" })}
                className="group flex items-center justify-between gap-6 border-b border-white/10 pb-3 transition-colors duration-200 hover:border-brand-lite"
              >
                <span className="font-meta text-[11px] uppercase text-white/55">CV</span>
                <span className="font-body flex items-center gap-2 text-sm text-white transition-colors duration-200 group-hover:text-brand-lite">
                  {lang === "en" ? "PDF, EN" : "PDF, ES"}
                  <Download
                    size={14}
                    strokeWidth={1.75}
                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                    aria-hidden="true"
                  />
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-meta text-[11px] uppercase tracking-wide text-white/55">
            {year} {t.footer.credit}
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-body inline-flex items-center gap-2 self-start text-sm text-white/60 transition-colors duration-200 hover:text-white"
          >
            <ArrowUp size={14} strokeWidth={1.75} aria-hidden="true" />
            {t.footer.top}
          </button>
        </div>
      </div>
    </footer>
  );
}
