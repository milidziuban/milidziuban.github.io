"use client";

import { LanguageProvider } from "@/contexts/language-context";
import { LanguageSwitch } from "@/components/language-switch";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      {children}
      <LanguageSwitch />
    </LanguageProvider>
  );
}
