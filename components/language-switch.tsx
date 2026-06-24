"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

export function LanguageSwitch() {
  const { lang, setLang } = useLanguage();

  return (
    <motion.button
      onClick={() => setLang(lang === "es" ? "en" : "es")}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full px-4 py-2.5 shadow-lg hover:border-purple-300 transition-colors duration-200 cursor-pointer"
      aria-label="Toggle language"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className={`text-xs font-bold font-manrope transition-colors duration-200 ${lang === "es" ? "text-gray-900" : "text-gray-400"}`}>
        ES
      </span>
      <div className="relative w-9 h-5 rounded-full bg-gray-200">
        <motion.div
          className="absolute top-1 w-3 h-3 rounded-full bg-purple-600"
          animate={{ left: lang === "en" ? "20px" : "4px" }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </div>
      <span className={`text-xs font-bold font-manrope transition-colors duration-200 ${lang === "en" ? "text-gray-900" : "text-gray-400"}`}>
        EN
      </span>
    </motion.button>
  );
}
