"use client"

import type React from "react"
import { motion } from "framer-motion"
import Link from "next/link"

// Componente para estrellas animadas
export function AnimatedStar({
  className,
  delay = 0,
  children,
}: {
  className?: string
  delay?: number
  children?: React.ReactNode
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.8, rotateZ: -10 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotateZ: 0,
        y: [0, -10, 0],
      }}
      transition={{
        duration: 0.8,
        delay,
        y: {
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        },
      }}
      whileHover={{
        scale: 1.2,
        rotateZ: 15,
        transition: { duration: 0.3 },
      }}
    >
      {children || (
        <div className="w-12 h-12 relative">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-6 bg-gray-400 top-0 left-1/2 origin-bottom"
              style={{ transform: `translateX(-50%) rotate(${i * 45}deg)` }}
            />
          ))}
        </div>
      )}
    </motion.div>
  )
}

// Componente para tarjetas de proyecto animadas
export function AnimatedProjectCard({
  children,
  delay = 0,
  className = "",
  href,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  href?: string
}) {
  const MotionCard = (
    <motion.div
      className={`${className} cursor-pointer`}
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        y: -10,
        rotateX: 5,
        rotateY: 5,
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  )

  return href ? <Link href={href}>{MotionCard}</Link> : MotionCard
}

// Componente para elementos que aparecen al hacer scroll
export function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
}) {
  const directions = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 },
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}
