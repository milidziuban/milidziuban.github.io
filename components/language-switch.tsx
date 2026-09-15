"use client";

import { useLanguage } from "@/contexts/language-context";
import { translations, type Lang } from "@/lib/i18n";

/**
 * Selector de idioma segmentado. Vive dentro de la navegacion,
 * no flotando sobre el contenido.
 * `tone="ink"` es la variante para superficies oscuras.
 */
export function LanguageSwitch({ tone = "paper" }: { tone?: "paper" | "ink" }) {
  const { lang, setLang } = useLanguage();
  const t = translations[lang];
  const onInk = tone === "ink";

  const options: Lang[] = ["es", "en"];

  return (
    <div
      role="group"
      aria-label={t.a11y.language}
      className={`flex items-center rounded-full p-0.5 ${
        onInk ? "bg-white/10" : "bg-brand-tint"
      }`}
    >
      {options.map((code) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            className={`font-meta rounded-full px-2.5 py-1 text-[11px] uppercase transition-colors duration-200 active:scale-[0.96] ${
              active
                ? onInk
                  ? "bg-white text-ink"
                  : "bg-brand text-white"
                : onInk
                  ? "text-white/60 hover:text-white"
                  : "text-ink-3 hover:text-brand"
            }`}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
