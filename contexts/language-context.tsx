"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "es" | "en";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "es",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  // El servidor siempre renderiza "es". Leer localStorage en el inicializador
  // haria que el cliente pinte otro idioma en el primer render: mismatch de
  // hidratacion. Por eso la preferencia guardada se aplica en un efecto.
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "es" || saved === "en") setLang(saved);
  }, []);

  // El atributo lang del <html> tiene que seguir al idioma activo. Si queda
  // fijo en "es", un lector de pantalla lee el ingles con fonetica espanola.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  function handleSetLang(l: Lang) {
    localStorage.setItem("lang", l);
    setLang(l);
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
