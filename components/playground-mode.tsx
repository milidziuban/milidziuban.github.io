"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MonitorSmartphone } from "lucide-react" // o usá un ícono similar si tenés otro sistema

export function PlaygroundMode() {
  const [isPlaygroundMode, setIsPlaygroundMode] = useState(false)

  const togglePlaygroundMode = () => {
    setIsPlaygroundMode(!isPlaygroundMode)
  }

  return (
    <>
      {/* Botón superior derecho */}
      <motion.div
        className="fixed top-4 right-4 z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <button
          onClick={togglePlaygroundMode}
          className="flex items-center space-x-2 bg-white text-gray-800 border border-gray-200 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all"
        >
          <span className="text-sm">
            {isPlaygroundMode ? "Modo Normal" : "Modo Juego"}
          </span>
          <span>{isPlaygroundMode ? "🎯" : "🎮"}</span>
        </button>
      </motion.div>

      {/* Instrucciones */}
      <AnimatePresence>
        {isPlaygroundMode && (
          <motion.div
            className="fixed top-20 right-4 z-40 bg-purple-100 border border-purple-200 rounded-lg p-4 max-w-xs shadow-md"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-start space-x-2">
              <span className="text-purple-600 text-lg">🎮</span>
              <div>
                <h4 className="font-semibold text-purple-800 text-sm">Modo Playground</h4>
                <p className="text-purple-700 text-xs mt-1">
                  ¡Arrastra las imágenes por toda la pantalla!
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contexto oculto */}
      <div id="playground-context" data-active={isPlaygroundMode} className="hidden" />
    </>
  )
}
