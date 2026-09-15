"use client";

import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowDown, Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/i18n";
import { LanguageSwitch } from "@/components/language-switch";

const SECTION_IDS = ["inicio", "sobre-mi", "proyectos", "contacto"] as const;

export function NavigationHeader({ tone = "paper" }: { tone?: "paper" | "ink" }) {
  const pathname = usePathname();
  const { lang } = useLanguage();
  const t = translations[lang];
  const reduce = useReducedMotion();
  const onInk = tone === "ink";

  const cvHref =
    lang === "en" ? "/CV_MilagrosDziuban_2026_EN.pdf" : "/CV_MilagrosDziuban_2026_ES.pdf";
  const isHome = pathname === "/";

  const [activeSection, setActiveSection] = useState<string>(isHome ? "inicio" : "proyectos");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  // Seccion activa por IntersectionObserver: no hay listeners de scroll
  // ejecutandose en cada frame.
  useEffect(() => {
    if (!isHome) {
      setActiveSection(pathname.includes("/proyecto") ? "proyectos" : "");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    const nodes = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (node): node is HTMLElement => Boolean(node),
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [isHome, pathname]);

  // Bloquea el scroll del cuerpo mientras el menu movil esta abierto.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const items = [
    { label: t.nav.inicio, href: "/", id: "inicio" },
    { label: t.nav.sobreMi, href: "/#sobre-mi", id: "sobre-mi" },
    { label: t.nav.proyectos, href: "/#proyectos", id: "proyectos" },
    { label: t.nav.contacto, href: "/#contacto", id: "contacto" },
  ];

  const surface = onInk
    ? scrolled
      ? "bg-ink/85 border-white/15 shadow-[0_18px_40px_-30px_rgba(0,0,0,0.9)]"
      : "bg-ink/40 border-white/10"
    : scrolled
      ? "bg-surface/90 border-hairline shadow-[0_18px_40px_-32px_rgba(23,20,26,0.45)]"
      : "bg-surface/70 border-hairline";

  const linkIdle = onInk ? "text-white/60 hover:text-white" : "text-ink-3 hover:text-ink";
  const linkActive = onInk ? "text-white" : "text-ink";

  return (
    <>
      <a className="skip-link font-body" href="#contenido">
        {t.a11y.skip}
      </a>

      {/* Barra unica, una sola linea en escritorio, 56px de alto */}
      <motion.header
        initial={reduce ? false : { y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-3 z-50 px-4 md:top-4 md:px-6"
      >
        <nav
          aria-label={t.nav.inicio}
          className={`mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 rounded-full border px-3 backdrop-blur-xl transition-colors duration-300 md:px-5 ${surface}`}
        >
          {/* Marca */}
          {/* En mobile el nombre esta oculto por CSS y la inicial es
              aria-hidden: sin este label el enlace se queda sin nombre. */}
          <Link
            href="/"
            aria-label={t.a11y.home}
            className="group flex shrink-0 items-center gap-2.5"
            onClick={() => setMenuOpen(false)}
          >
            <span
              className={`grid h-8 w-8 place-items-center rounded-full text-[13px] font-semibold transition-colors duration-200 ${
                onInk ? "bg-white text-ink" : "bg-ink text-white group-hover:bg-brand"
              }`}
              aria-hidden="true"
            >
              M
            </span>
            <span
              className={`font-display hidden text-[15px] font-medium tracking-tight sm:block ${
                onInk ? "text-white" : "text-ink"
              }`}
            >
              Milagros Dziuban
            </span>
          </Link>

          {/* Enlaces de escritorio */}
          <ul className="hidden items-center gap-1 md:flex">
            {items.map((item) => {
              const active = activeSection === item.id;
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`font-body relative block rounded-full px-3 py-2 text-[14px] font-medium transition-colors duration-200 ${
                      active ? linkActive : linkIdle
                    }`}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className={`absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full ${
                          onInk ? "bg-brand-lite" : "bg-brand"
                        }`}
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Acciones */}
          <div className="flex shrink-0 items-center gap-2">
            <LanguageSwitch tone={onInk ? "ink" : "paper"} />
            <a
              href={cvHref}
              download
              className={`font-body hidden items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-medium whitespace-nowrap transition-all duration-200 active:scale-[0.97] md:inline-flex ${
                onInk ? "bg-white text-ink hover:bg-brand-lite" : "bg-ink text-white hover:bg-brand"
              }`}
            >
              {t.nav.cv}
              <ArrowDown size={14} strokeWidth={2} aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="menu-movil"
              aria-label={menuOpen ? t.a11y.close : t.a11y.menu}
              className={`grid h-9 w-9 place-items-center rounded-full transition-colors duration-200 md:hidden ${
                onInk ? "text-white hover:bg-white/10" : "text-ink hover:bg-brand-tint"
              }`}
            >
              {menuOpen ? (
                <X size={20} strokeWidth={1.75} />
              ) : (
                <Menu size={20} strokeWidth={1.75} />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Menu movil.
          La entrada se anima con CSS y no con AnimatePresence: el overlay
          ocupa toda la pantalla, y un nodo que sobreviva a la animacion de
          salida se come todos los clicks de la pagina. Desmontaje directo. */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            type="button"
            aria-label={t.a11y.close}
            onClick={() => setMenuOpen(false)}
            className="menu-backdrop absolute inset-0 h-full w-full bg-ink/45 backdrop-blur-sm"
          />
          <div
            id="menu-movil"
            className="menu-panel absolute inset-x-4 top-20 overflow-hidden rounded-card border border-hairline bg-surface p-2 shadow-[var(--shadow-lift)]"
          >
              <ul>
                {items.map((item) => {
                  const active = activeSection === item.id;
                  return (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        aria-current={active ? "page" : undefined}
                        className={`font-display flex items-center justify-between rounded-chip px-4 py-3.5 text-lg font-medium transition-colors duration-200 ${
                          active ? "bg-brand-tint text-brand" : "text-ink hover:bg-paper-2"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-2 border-t border-hairline p-2 pt-4">
                <a
                  href={cvHref}
                  download
                  onClick={() => setMenuOpen(false)}
                  className="font-body flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-brand active:scale-[0.98]"
                >
                  {t.nav.cv}
                  <ArrowDown size={15} strokeWidth={2} aria-hidden="true" />
                </a>
              </div>
          </div>
        </div>
      )}
    </>
  );
}
