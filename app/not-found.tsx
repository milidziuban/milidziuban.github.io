import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="flex min-h-[100dvh] flex-col justify-center bg-paper px-6 py-24">
      <div className="mx-auto w-full max-w-2xl">
        <p className="font-meta text-[12px] tracking-wide text-ink-3 uppercase">Error 404</p>

        <h1 className="font-display mt-4 text-[clamp(2rem,5vw,3.25rem)] leading-[1.14] font-medium tracking-tight text-ink">
          Esta página no existe.
          <br />
          <span className="italic text-brand">This page does not exist.</span>
        </h1>

        <p className="font-body pretty mt-6 max-w-[52ch] text-[17px] leading-relaxed text-ink-2">
          El enlace puede estar roto o la página pudo haber cambiado de dirección. Desde el inicio
          llegás a todos los proyectos.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
          <Link
            href="/"
            className="font-body inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[15px] font-medium text-white transition-colors duration-200 hover:bg-brand active:scale-[0.98]"
          >
            Volver al inicio
          </Link>
          <Link
            href="/#proyectos"
            className="font-body text-[15px] font-medium text-ink-2 transition-colors duration-200 hover:text-brand"
          >
            Ver proyectos
          </Link>
        </div>
      </div>
    </main>
  );
}
