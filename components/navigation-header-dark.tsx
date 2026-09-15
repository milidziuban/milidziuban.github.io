"use client";

import { NavigationHeader } from "@/components/navigation-header";

/**
 * Variante sobre fondo oscuro. Es la misma navegacion con otra piel,
 * para que no convivan dos implementaciones que se desincronizan.
 */
export function NavigationHeaderDark() {
  return <NavigationHeader tone="ink" />;
}
