"use client";

import type React from "react";
import { motion, useReducedMotion } from "framer-motion";

export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const OFFSETS = {
  up: { y: 28 },
  down: { y: -28 },
  left: { x: 28 },
  right: { x: -28 },
} as const;

/**
 * Revelado al entrar en viewport. Solo anima transform y opacity, y
 * se apaga por completo cuando el sistema pide menos movimiento.
 *
 * `as` existe para no romper el HTML: dentro de un <ul> el envoltorio
 * tiene que ser un <li>, no un <div>.
 */
export function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: keyof typeof OFFSETS;
  className?: string;
  as?: "div" | "li";
}) {
  const reduce = useReducedMotion();
  const Tag = as === "li" ? motion.li : motion.div;

  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, ...OFFSETS[direction] }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </Tag>
  );
}
