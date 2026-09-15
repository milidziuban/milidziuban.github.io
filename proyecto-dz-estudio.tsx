"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { NavigationHeader } from "./components/navigation-header";
import { ScrollReveal } from "./components/animated-components";
import Image from "next/image";
import { OtherProjects } from "./components/otherproject";
import { useLanguage } from "./contexts/language-context";
import { SiteFooter } from "./components/site-footer";

function ScreenShot({
  src,
  alt,
  caption,
  width = 1440,
  height = 900,
}: {
  src: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
}) {
  return (
    <figure className="m-0">
      <div className="relative rounded-2xl overflow-hidden border border-hairline bg-white">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto object-contain"
        />
      </div>
      <figcaption className="text-sm text-ink-3 font-manrope mt-3">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function ProyectoDzEstudio() {
  const { lang } = useLanguage();
  const es = lang === "es";

  const context = es
    ? [
        { label: "Marca", value: "DZ Estudio: almohadones e individuales estampados, tiradas cortas" },
        { label: "Mi rol", value: "Identidad, sistema de diseño, UX/UI, desarrollo y operación" },
        { label: "Contexto", value: "Proyecto propio, con ventas reales y envíos a todo el país" },
      ]
    : [
        { label: "Brand", value: "DZ Estudio: printed cushions and placemats, short runs" },
        { label: "My role", value: "Identity, design system, UX/UI, development and operations" },
        { label: "Context", value: "My own venture, with real sales and nationwide shipping" },
      ];

  const palette = [
    { hex: "#F26D9E", name: es ? "Rosa" : "Pink" },
    { hex: "#F26430", name: es ? "Naranja" : "Orange" },
    { hex: "#8FC5E8", name: "Celeste" },
    { hex: "#7CB562", name: es ? "Verde" : "Green" },
    { hex: "#B8A4E3", name: es ? "Lila" : "Lilac" },
    { hex: "#2F5D62", name: es ? "Petróleo" : "Petrol" },
    { hex: "#F4C542", name: es ? "Amarillo" : "Yellow" },
    { hex: "#1A1A1A", name: es ? "Tinta" : "Ink" },
    { hex: "#F3EFE4", name: es ? "Crema" : "Cream" },
  ];

  const typeSystem = es
    ? [
        { font: "Lato", role: "Sans", text: "Todo el contenido: titulares, párrafos y navegación." },
        { font: "Instrument Serif", role: "Serif italic", text: "Una palabra por titular, en color de contraste. El acento de la marca." },
        { font: "DM Mono", role: "Mono", text: "Precios, etiquetas, botones y badges. Siempre en mayúsculas y con tracking." },
      ]
    : [
        { font: "Lato", role: "Sans", text: "All content: headlines, body copy and navigation." },
        { font: "Instrument Serif", role: "Serif italic", text: "One word per headline, in the contrast color. The brand accent." },
        { font: "DM Mono", role: "Mono", text: "Prices, labels, buttons and badges. Always uppercase, always tracked." },
      ];

  const brandRules = es
    ? [
        "Dos colores vibrantes por pieza como máximo, siempre sobre crema y tinta.",
        "Superficies planas: sin sombras duras ni bordes gruesos.",
        "Botones pill en tinta, con tipografía mono en mayúsculas.",
        "Marquesina superior con las condiciones de compra siempre a la vista.",
      ]
    : [
        "Two vibrant colors per piece at most, always over cream and ink.",
        "Flat surfaces: no hard shadows, no thick borders.",
        "Pill buttons in ink, with mono type in uppercase.",
        "Top marquee keeping the purchase conditions always in sight.",
      ];

  const adminModules = es
    ? [
        { title: "Inicio", text: "KPIs del período, ganancia contra la meta del mes, top de productos y últimas ventas." },
        { title: "Estadísticas", text: "Visitas y conversión con registro propio, sin depender de la API de reportes de GA4." },
        { title: "Ventas", text: "Pedidos por mes, qué está esperando cada uno, notas internas y descarga." },
        { title: "Clientes", text: "Quién compró, cuánto gastó y hace cuánto que no vuelve." },
        { title: "Productos", text: "Alta y edición con fotos, variantes, peso y stock. Escribe directo en la tienda." },
        { title: "Distribución", text: "Depósitos y stock, con descuento automático al despachar el pedido." },
        { title: "Precios", text: "Calculadora costo → margen → combo → transferencia, con la misma fórmula que la planilla." },
        { title: "Descuentos", text: "Cupones y promos por combo, con vigencia y tope de uso." },
        { title: "Marketing", text: "Suscriptores del newsletter y textos de campaña." },
        { title: "Pagos y envíos", text: "Métodos activos, costos y zonas, editables sin tocar código." },
        { title: "Contenido y redes", text: "Calendario editorial: qué se publica cada día, con la pieza adjunta." },
      ]
    : [
        { title: "Home", text: "Period KPIs, profit against the monthly goal, top products and latest sales." },
        { title: "Analytics", text: "Visits and conversion from first-party tracking, no GA4 reporting API needed." },
        { title: "Sales", text: "Orders by month, what each one is waiting for, internal notes and export." },
        { title: "Customers", text: "Who bought, how much they spent, and how long since they came back." },
        { title: "Products", text: "Create and edit with photos, variants, weight and stock. Writes straight to the store." },
        { title: "Distribution", text: "Warehouses and stock, with automatic deduction when an order ships." },
        { title: "Pricing", text: "Cost → margin → bundle → transfer calculator, same formula as the spreadsheet." },
        { title: "Discounts", text: "Coupons and bundle promos, with validity and usage caps." },
        { title: "Marketing", text: "Newsletter subscribers and campaign copy." },
        { title: "Payments & shipping", text: "Active methods, costs and zones, editable without touching code." },
        { title: "Content & social", text: "Editorial calendar: what goes out each day, with the asset attached." },
      ];

  const stack = es
    ? [
        { title: "Front", text: "React 18 + Vite + TypeScript con Tailwind. React Router, React Query para los datos, Zustand para el carrito y React Hook Form + Zod en el checkout." },
        { title: "Datos", text: "Supabase: Postgres con RLS, Auth para el panel y Storage para las fotos. Lo que protege los datos son las policies de la base, no el guard del front." },
        { title: "Pagos y envíos", text: "Edge Functions propias: preferencia de Mercado Pago, webhook de confirmación, cotización de Correo Argentino y los tres mails del pedido con Resend." },
        { title: "Medición", text: "Eventos de e-commerce en GA4 más un registro propio de visitas, anónimo, que alimenta las tarjetas del panel." },
        { title: "SEO", text: "JSON-LD por producto, Open Graph en el HTML servido para que WhatsApp e Instagram armen la tarjeta, y sitemap generado en cada build." },
        { title: "Calidad", text: "Code splitting por pantalla, imágenes con tamaño declarado, contraste AA y foco visible." },
      ]
    : [
        { title: "Front", text: "React 18 + Vite + TypeScript with Tailwind. React Router, React Query for data, Zustand for the cart, React Hook Form + Zod at checkout." },
        { title: "Data", text: "Supabase: Postgres with RLS, Auth for the panel and Storage for photos. What protects the data are the database policies, not the front-end guard." },
        { title: "Payments & shipping", text: "Custom Edge Functions: Mercado Pago preference, confirmation webhook, Correo Argentino shipping quote and the three order emails through Resend." },
        { title: "Measurement", text: "GA4 e-commerce events plus first-party anonymous visit tracking that feeds the panel's cards." },
        { title: "SEO", text: "Per-product JSON-LD, Open Graph in the served HTML so WhatsApp and Instagram build the card, and a sitemap generated on every build." },
        { title: "Quality", text: "Per-screen code splitting, images with declared dimensions, AA contrast and visible focus." },
      ];

  const aiWork = es
    ? [
        {
          number: "01",
          title: "Un cerebro de marca, no un chat",
          text: "Armé un vault en Obsidian con negocio, marca, clientes, productos, contenido, diseño y operación. La AI lee de ahí antes de responder y escribe ahí cuando se define algo. Tres reglas lo sostienen: un dato vive en un solo lugar, toda decisión va fechada y lo que no está confirmado se marca como hipótesis.",
        },
        {
          number: "02",
          title: "Skills propias para lo que se repite",
          text: "Escribí tres skills de Claude Code para la marca: estrategia (precios, márgenes, metas y producción), contenido (copy con la voz de marca) y diseño (piezas gráficas, packaging y fotografía). Dejé de reexplicar el contexto en cada conversación: el criterio quedó escrito una vez.",
        },
        {
          number: "03",
          title: "La AI como par de programación",
          text: "De la migración SQL al mail transaccional, trabajé con Claude Code sobre el repositorio. Yo defino el qué y el por qué; la AI acelera el cómo. Cada commit se lee como un resultado del negocio y no como una tarea técnica: la historia del proyecto se entiende sin ser programadora.",
        },
        {
          number: "04",
          title: "Exploración visual generada, selección humana",
          text: "Usé generación de imágenes para explorar estampas y climas de foto antes de mandar a producir. La AI amplía el abanico; el recorte, la corrección de color y qué llega a la tienda siguen siendo decisión de diseño.",
        },
      ]
    : [
        {
          number: "01",
          title: "A brand brain, not a chat",
          text: "I built an Obsidian vault covering business, brand, customers, products, content, design and operations. AI reads from it before answering and writes back to it when something gets decided. Three rules hold it up: one fact lives in one place, every decision is dated, and anything unconfirmed is flagged as a hypothesis.",
        },
        {
          number: "02",
          title: "Custom skills for what repeats",
          text: "I wrote three Claude Code skills for the brand: strategy (pricing, margins, goals and production), content (copy in the brand voice) and design (graphic pieces, packaging and photography). I stopped re-explaining context in every conversation. The judgment is written down once.",
        },
        {
          number: "03",
          title: "AI as a pair programmer",
          text: "From the SQL migration to the transactional email, I worked with Claude Code on the repository. I define the what and the why; AI speeds up the how. Every commit reads as a business outcome instead of a technical task: the project history makes sense without being a developer.",
        },
        {
          number: "04",
          title: "Generated exploration, human selection",
          text: "I used image generation to explore prints and photo moods before sending anything to production. AI widens the range; cropping, color correction and what actually reaches the store stay design decisions.",
        },
      ];

  const decisions = es
    ? [
        { number: "01", title: "Dos colores, nunca cinco", rationale: "La regla nació en producción (cada color es una tela más) y terminó definiendo la identidad. Cada pieza usa una dupla sobre crema y tinta, y por eso el catálogo se ve como una familia aunque las estampas sean muy distintas." },
        { number: "02", title: "La ficha responde antes de que pregunten", rationale: "Medidas, peso, material, cuidados, envío y retiro están en la misma pantalla que el botón de comprar. Las preguntas que llegaban por Instagram se convirtieron en contenido de la ficha." },
        { number: "03", title: "Barra fija de compra en mobile", rationale: "Casi todo el tráfico llega de Instagram, en teléfono. El precio y el botón quedan pegados abajo mientras se lee la descripción: no hay que volver a subir para comprar." },
        { number: "04", title: "El descuento se ve en la grilla, no en el carrito", rationale: "Cada tarjeta muestra el 10% por llevar dos. La promo influye cuando la clienta todavía está eligiendo, no cuando ya decidió." },
        { number: "05", title: "El precio por transferencia, siempre a la vista", rationale: "En Argentina el medio de pago cambia el precio real. Mostrar las dos cifras desde la ficha evita la sorpresa del checkout, que es donde se abandona el carrito." },
        { number: "06", title: "El panel escribe la tienda", rationale: "Textos, métodos de pago, costos de envío y promos viven en la base, no en el código. Cambiar una condición comercial es entrar al panel, no pedir un deploy." },
      ]
    : [
        { number: "01", title: "Two colors, never five", rationale: "The rule was born in production (every color is one more fabric) and ended up defining the identity. Each piece uses one pair over cream and ink, which is why the catalog reads as a family even when the prints differ." },
        { number: "02", title: "The product page answers before they ask", rationale: "Dimensions, weight, material, care, shipping and pickup sit on the same screen as the buy button. The questions arriving via Instagram became product page content." },
        { number: "03", title: "Sticky buy bar on mobile", rationale: "Almost all traffic comes from Instagram, on a phone. Price and button stay pinned at the bottom while you read the description: no scrolling back up to buy." },
        { number: "04", title: "The discount shows in the grid, not in the cart", rationale: "Every card shows the 10% off for taking two. The promo lands while the customer is still choosing, not after they've decided." },
        { number: "05", title: "Bank transfer price always in sight", rationale: "In Argentina the payment method changes the real price. Showing both figures on the product page avoids the checkout surprise, which is where carts get abandoned." },
        { number: "06", title: "The panel writes the store", rationale: "Copy, payment methods, shipping costs and promos live in the database, not in the code. Changing a commercial condition means opening the panel, not requesting a deploy." },
      ];

  const numbers = es
    ? [
        { value: "13", label: "pantallas del panel" },
        { value: "12", label: "migraciones de base" },
        { value: "4", label: "edge functions" },
        { value: "116", label: "archivos TypeScript" },
      ]
    : [
        { value: "13", label: "admin screens" },
        { value: "12", label: "database migrations" },
        { value: "4", label: "edge functions" },
        { value: "116", label: "TypeScript files" },
      ];

  const takeaways = es
    ? [
        { number: "01", title: "Diseñar y producir a la vez cambia las decisiones", text: "Saber cuánto cuesta una tela más hizo que la regla de dos colores fuera una decisión de identidad y de costo al mismo tiempo. Las restricciones reales dan mejores sistemas que las inventadas." },
        { number: "02", title: "El contexto escrito rinde más que el prompt perfecto", text: "Desde que la marca vive en un vault y en skills, la AI dejó de improvisar el tono y los números. Escribir el criterio una vez vale más que redactar mil prompts largos." },
        { number: "03", title: "Un panel también es diseño de producto", text: "Diseñar para mí misma en un día de trabajo me obligó a priorizar de verdad: menos gráficos lindos y más respuestas a lo que necesito saber para despachar y reponer." },
      ]
    : [
        { number: "01", title: "Designing and producing at once changes the decisions", text: "Knowing what one more fabric costs turned the two-color rule into an identity and a cost decision at the same time. Real constraints make better systems than invented ones." },
        { number: "02", title: "Written context beats the perfect prompt", text: "Since the brand lives in a vault and in skills, AI stopped improvising tone and numbers. Writing the judgment down once is worth more than a thousand long prompts." },
        { number: "03", title: "An admin panel is product design too", text: "Designing for myself on a working day forced real prioritization: fewer pretty charts, more answers to what I need in order to ship and restock." },
      ];

  return (
    <div className="min-h-screen bg-paper">
      <NavigationHeader />

      {/* HERO */}
      <section className="relative px-6 py-32 bg-paper-2 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {["UX/UI", "E-commerce", "Branding", "Built with AI", "2026"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border border-hairline text-ink-2 font-manrope"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-5xl md:text-6xl font-medium tracking-tighter text-ink leading-[1.05] font-space-grotesk mb-6">
                {es ? (
                  <>
                    DZ Estudio, de la{" "}
                    <span className="font-instrument-serif italic font-normal text-brand">marca</span>{" "}
                    a la tienda online
                  </>
                ) : (
                  <>
                    DZ Estudio, from{" "}
                    <span className="font-instrument-serif italic font-normal text-brand">brand</span>{" "}
                    to online store
                  </>
                )}
              </h1>

              <p className="text-lg text-ink-2 max-w-xl leading-relaxed mb-10 font-manrope">
                {es
                  ? "Mi marca de objetos textiles y su e-commerce completo: identidad, sistema de diseño, tienda con checkout real y un panel privado para operarla. Todo diseñado y programado por mí, con AI como equipo extendido."
                  : "My textile goods brand and its full e-commerce: identity, design system, a store with a real checkout and a private panel to run it. All designed and coded by me, with AI as an extended team."}
              </p>

              <div className="grid grid-cols-3 gap-6 text-sm mb-10">
                <div>
                  <p className="text-xs uppercase tracking-widest text-ink-3 font-manrope mb-2">
                    {es ? "Rol" : "Role"}
                  </p>
                  <p className="text-ink font-medium font-space-grotesk">
                    {es ? "Marca + UX/UI + Desarrollo" : "Brand + UX/UI + Development"}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-ink-3 font-manrope mb-2">
                    {es ? "Estado" : "Status"}
                  </p>
                  <p className="text-ink font-medium font-space-grotesk">
                    {es ? "Online, con ventas" : "Live, with real sales"}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-ink-3 font-manrope mb-2">
                    Stack
                  </p>
                  <p className="text-ink font-medium font-space-grotesk">
                    React, TypeScript, Supabase, Mercado Pago
                  </p>
                </div>
              </div>

              <a
                href="https://www.dz-estudio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-ink font-manrope font-medium"
              >
                <span className="group-hover:text-brand transition-colors">
                  {es ? "Ver la tienda en vivo" : "Visit the live store"}
                </span>
                <span className="w-10 h-10 rounded-full border border-hairline flex items-center justify-center transition-all duration-500 group-hover:bg-brand group-hover:border-brand group-hover:text-white group-hover:-rotate-45">
                  →
                </span>
              </a>
            </div>

            <motion.div
              className="relative flex justify-center"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="rounded-2xl overflow-hidden w-full border border-hairline bg-white">
                <Image
                  src="/imagen/dz/dz-home.png"
                  alt={es ? "Home de la tienda DZ Estudio" : "DZ Estudio store home page"}
                  width={1440}
                  height={900}
                  priority
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROBLEMA + OBJETIVO */}
      <section className="px-6 py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <ScrollReveal direction="left">
              <div>
                <span className="font-instrument-serif italic text-2xl text-brand-lite mb-3 block">01</span>
                <h2 className="text-4xl md:text-5xl font-medium text-ink leading-[1.05] tracking-tighter font-space-grotesk mb-6">
                  {es ? "Problema" : "Problem"}
                </h2>
                <p className="text-ink-2 leading-relaxed mb-4 font-manrope">
                  {es
                    ? "Vender por Instagram y por plataformas armadas funciona hasta que la marca necesita verse como una marca: las plantillas achatan la identidad, cobran comisión por venta y no dejan tocar el detalle que hace la diferencia."
                    : "Selling through Instagram and off-the-shelf platforms works until the brand needs to look like a brand: templates flatten the identity, charge a commission per sale, and don't let you touch the detail that makes the difference."}
                </p>
                <p className="text-ink-2 leading-relaxed font-manrope">
                  {es
                    ? "Además, la operación quedaba repartida: precios en una planilla, stock en la cabeza, pedidos en el chat. Cada venta significaba revisar tres lugares distintos y responder las mismas preguntas de siempre."
                    : "On top of that, operations were scattered: prices in a spreadsheet, stock in my head, orders in the chat. Every sale meant checking three different places and answering the same questions over and over."}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div>
                <span className="font-instrument-serif italic text-2xl text-brand-lite mb-3 block">02</span>
                <h2 className="text-4xl md:text-5xl font-medium text-ink leading-[1.05] tracking-tighter font-space-grotesk mb-6">
                  {es ? "Objetivo" : "Goal"}
                </h2>
                <p className="text-ink-2 leading-relaxed mb-4 font-manrope">
                  {es
                    ? "Una tienda propia que se vea como la marca y que se pueda operar sola, sin depender de nadie para cambiar un precio."
                    : "An owned store that looks like the brand and can be run single-handedly, without depending on anyone to change a price."}
                </p>
                <ul className="space-y-2">
                  {(es
                    ? [
                        "Identidad y sistema de diseño propios, aplicados sin excepción",
                        "Checkout argentino real: Mercado Pago y transferencia",
                        "Ficha de producto que responda todo antes de la compra",
                        "Panel privado para vender, reponer y medir",
                        "AI como equipo extendido, con el criterio escrito",
                      ]
                    : [
                        "Own identity and design system, applied without exception",
                        "Real Argentine checkout: Mercado Pago and bank transfer",
                        "Product pages that answer everything before the purchase",
                        "Private panel to sell, restock and measure",
                        "AI as an extended team, with the judgment written down",
                      ]
                  ).map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-ink-2 font-manrope">
                      <span className="text-brand mt-1">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CONTEXTO */}
      <section className="px-6 py-24 bg-paper">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-4">
            {context.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-hairline rounded-2xl p-6"
              >
                <p className="text-xs uppercase tracking-widest text-brand font-manrope mb-2">
                  {item.label}
                </p>
                <p className="text-lg font-medium font-space-grotesk text-ink">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MARCA Y SISTEMA DE DISEÑO */}
      <section className="px-6 py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-16 max-w-2xl">
              <span className="uppercase tracking-widest text-sm text-brand font-bold">
                {es ? "MARCA" : "BRAND"}
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-ink leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                {es ? (
                  <>
                    Un sistema{" "}
                    <span className="font-instrument-serif italic font-normal text-brand">antes</span>{" "}
                    que un logo
                  </>
                ) : (
                  <>
                    A system{" "}
                    <span className="font-instrument-serif italic font-normal text-brand">before</span>{" "}
                    a logo
                  </>
                )}
              </h2>
              <p className="text-ink-2 mt-4 font-manrope text-lg">
                {es
                  ? "Maximalismo editado: color fuerte con reglas estrictas. La identidad se escribió como sistema para que cualquier pieza nueva (una foto, una etiqueta, una pantalla) se resuelva sola."
                  : "Edited maximalism: bold color under strict rules. The identity was written as a system so any new piece (a photo, a label, a screen) resolves itself."}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid md:grid-cols-[1fr_1.1fr] gap-10 items-start mb-16">
              <div className="bg-[#F3EFE4] rounded-2xl p-10 flex items-center justify-center min-h-[220px]">
                <Image
                  src="/imagen/dz/dz-logo.svg"
                  alt="Logo DZ Estudio"
                  width={320}
                  height={80}
                  // Next no optimiza SVG salvo que se habilite dangerouslyAllowSVG.
                  unoptimized
                  className="w-full max-w-[280px] h-auto"
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-ink-3 font-manrope mb-4">
                  {es ? "Paleta" : "Palette"}
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                  {palette.map((color) => (
                    <div key={color.hex}>
                      <div
                        className="w-full aspect-square rounded-xl border border-hairline"
                        style={{ backgroundColor: color.hex }}
                      />
                      <p className="text-xs font-manrope text-ink mt-2">{color.name}</p>
                      <p className="text-[11px] font-manrope text-ink-3">{color.hex}</p>
                    </div>
                  ))}
                </div>
                <ul className="mt-6 space-y-2">
                  {brandRules.map((rule, i) => (
                    <li key={i} className="flex items-start gap-3 text-ink-2 font-manrope text-sm">
                      <span className="text-brand mt-0.5">✦</span>
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid md:grid-cols-3 gap-4">
              {typeSystem.map((item, i) => (
                <div key={i} className="bg-paper border border-hairline rounded-2xl p-8">
                  <p className="text-xs uppercase tracking-widest text-brand font-manrope mb-3">
                    {item.role}
                  </p>
                  <h3 className="text-2xl font-medium font-space-grotesk text-ink mb-3">
                    {item.font}
                  </h3>
                  <p className="text-ink-2 font-manrope leading-relaxed text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PRODUCTO Y FOTOGRAFÍA */}
      <section className="px-6 py-32 bg-paper">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-12 max-w-2xl">
              <span className="uppercase tracking-widest text-sm text-brand font-bold">
                {es ? "PRODUCTO Y FOTOGRAFÍA" : "PRODUCT & PHOTOGRAPHY"}
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-ink leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                {es ? (
                  <>
                    La estampa{" "}
                    <span className="font-instrument-serif italic font-normal text-brand">manda</span>
                  </>
                ) : (
                  <>
                    The print{" "}
                    <span className="font-instrument-serif italic font-normal text-brand">leads</span>
                  </>
                )}
              </h2>
              <p className="text-ink-2 mt-4 font-manrope text-lg">
                {es
                  ? "Diseñé las estampas y definí la dirección de fotografía: packshot limpio para comparar en la grilla y una foto de contexto para imaginar el objeto en casa. Dos fotos por producto, siempre en el mismo orden."
                  : "I designed the prints and set the photography direction: a clean packshot to compare inside the grid, plus one context shot to picture the object at home. Two photos per product, always in the same order."}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  src: "/imagen/dz/almohadon-rombo-celeste.webp",
                  alt: es ? "Almohadón rombo celeste, packshot" : "Diamond print cushion, packshot",
                },
                {
                  src: "/imagen/dz/almohadon-rayas-cama.jpg",
                  alt: es ? "Almohadones de rayas en contexto" : "Striped cushions in context",
                },
                {
                  src: "/imagen/dz/individuales-reversibles-celeste-mesa.webp",
                  alt: es ? "Individuales reversibles sobre la mesa" : "Reversible placemats on a table",
                },
              ].map((photo, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative rounded-2xl overflow-hidden border border-hairline bg-white aspect-[4/5]"
                >
                  <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* LA TIENDA */}
      <section className="px-6 py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-16 max-w-2xl">
              <span className="uppercase tracking-widest text-sm text-brand font-bold">
                {es ? "LA TIENDA" : "THE STORE"}
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-ink leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                {es ? (
                  <>
                    Comprar{" "}
                    <span className="font-instrument-serif italic font-normal text-brand">sin dudar</span>
                  </>
                ) : (
                  <>
                    Buying{" "}
                    <span className="font-instrument-serif italic font-normal text-brand">
                      without doubts
                    </span>
                  </>
                )}
              </h2>
              <p className="text-ink-2 mt-4 font-manrope text-lg">
                {es
                  ? "Cinco pantallas públicas: home, tienda con filtros, ficha de producto, carrito lateral y checkout en pasos. El objetivo era que nadie tenga que escribir por Instagram para poder comprar."
                  : "Five public screens: home, filtered store, product page, side cart and a step-by-step checkout. The goal was that nobody should need to DM on Instagram in order to buy."}
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-16">
            <ScrollReveal>
              <div className="grid md:grid-cols-2 gap-8">
                <ScreenShot
                  src="/imagen/dz/dz-tienda.png"
                  alt={
                    es
                      ? "Tienda con filtros por categoría, color y precio"
                      : "Store with category, color and price filters"
                  }
                  caption={
                    es
                      ? "Tienda: filtros por categoría, color y precio, con la promo visible en cada tarjeta."
                      : "Store: category, color and price filters, with the promo visible on every card."
                  }
                  height={1000}
                />
                <ScreenShot
                  src="/imagen/dz/dz-producto.png"
                  alt={
                    es
                      ? "Ficha de producto con galería, precio y datos de envío"
                      : "Product page with gallery, price and shipping info"
                  }
                  caption={
                    es
                      ? "Ficha: galería, precio con transferencia, envío, retiro, medidas, peso y cuidados."
                      : "Product page: gallery, transfer price, shipping, pickup, dimensions, weight and care."
                  }
                  height={950}
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="grid md:grid-cols-[1.6fr_1fr] gap-8 items-start">
                <ScreenShot
                  src="/imagen/dz/dz-sobre.png"
                  alt={es ? "Página Sobre nosotros" : "About page"}
                  caption={
                    es
                      ? "Sobre nosotros: la página editorial que sostiene el precio: qué se hace, cómo y por qué."
                      : "About: the editorial page that supports the price: what is made, how and why."
                  }
                />
                <ScreenShot
                  src="/imagen/dz/dz-mobile.png"
                  alt={es ? "Home en mobile" : "Mobile home"}
                  caption={
                    es
                      ? "Mobile: el tráfico llega de Instagram, así que el diseño se resolvió primero en pantalla chica."
                      : "Mobile: traffic comes from Instagram, so the design was solved on the small screen first."
                  }
                  width={420}
                  height={880}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* PANEL DE ADMINISTRACIÓN */}
      <section className="px-6 py-32 bg-paper">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-16 max-w-2xl">
              <span className="uppercase tracking-widest text-sm text-brand font-bold">
                {es ? "PANEL PRIVADO" : "PRIVATE PANEL"}
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-ink leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                {es ? (
                  <>
                    La tienda se{" "}
                    <span className="font-instrument-serif italic font-normal text-brand">maneja</span>{" "}
                    sin tocar código
                  </>
                ) : (
                  <>
                    Running the store{" "}
                    <span className="font-instrument-serif italic font-normal text-brand">without</span>{" "}
                    touching code
                  </>
                )}
              </h2>
              <p className="text-ink-2 mt-4 font-manrope text-lg">
                {es
                  ? "Un back office diseñado como producto: trece pantallas para vender, reponer, medir y publicar. Vive fuera de la navegación pública, con acceso por whitelist y policies de base que protegen los datos aunque alguien adivine la URL."
                  : "A back office designed as a product: thirteen screens to sell, restock, measure and publish. It lives outside the public navigation, with whitelist access and database policies that protect the data even if someone guesses the URL."}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {adminModules.map((mod, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.06 }}
                  className="bg-white border border-hairline rounded-2xl p-6 hover:border-brand/40 transition"
                >
                  <h3 className="text-lg font-medium font-space-grotesk text-ink mb-2">
                    {mod.title}
                  </h3>
                  <p className="text-ink-2 font-manrope leading-relaxed text-sm">{mod.text}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* DESARROLLO */}
      <section className="px-6 py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-16 max-w-2xl">
              <span className="uppercase tracking-widest text-sm text-brand font-bold">
                {es ? "DESARROLLO" : "DEVELOPMENT"}
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-ink leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                {es ? (
                  <>
                    Cómo está{" "}
                    <span className="font-instrument-serif italic font-normal text-brand">construido</span>
                  </>
                ) : (
                  <>
                    How it's{" "}
                    <span className="font-instrument-serif italic font-normal text-brand">built</span>
                  </>
                )}
              </h2>
              <p className="text-ink-2 mt-4 font-manrope text-lg">
                {es
                  ? "El e-commerce entero, del carrito al mail de despacho, sin plataforma de por medio ni comisión por venta."
                  : "The whole e-commerce, from cart to dispatch email, with no platform in between and no commission per sale."}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {stack.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.08 }}
                  className="bg-paper border border-hairline rounded-2xl p-8"
                >
                  <h3 className="text-xl font-medium font-space-grotesk text-ink mb-3">
                    {item.title}
                  </h3>
                  <p className="text-ink-2 font-manrope leading-relaxed text-sm">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {numbers.map((item, i) => (
                <div key={i} className="rounded-2xl border border-hairline p-6 text-center">
                  <p className="text-4xl font-medium font-space-grotesk text-ink">{item.value}</p>
                  <p className="text-xs uppercase tracking-widest text-ink-3 font-manrope mt-2">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CONSTRUIDO CON AI */}
      <section className="px-6 py-32 bg-brand-tint/40">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-16 max-w-2xl">
              <span className="uppercase tracking-widest text-sm text-brand font-bold">
                BUILT WITH AI
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-ink leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                {es ? (
                  <>
                    La AI como{" "}
                    <span className="font-instrument-serif italic font-normal text-brand">equipo</span>, no
                    como atajo
                  </>
                ) : (
                  <>
                    AI as a{" "}
                    <span className="font-instrument-serif italic font-normal text-brand">team</span>, not a
                    shortcut
                  </>
                )}
              </h2>
              <p className="text-ink-2 mt-4 font-manrope text-lg">
                {es
                  ? "Una marca chica no tiene equipo de diseño, de desarrollo y de contenido. Lo que hice fue construir el contexto para que la AI pudiera ocupar esos lugares sin inventar."
                  : "A small brand doesn't have a design, development and content team. What I did was build the context so AI could fill those seats without making things up."}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4">
            {aiWork.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 2) * 0.1 }}
                className="bg-white border border-hairline rounded-2xl p-8 hover:border-brand/40 transition"
              >
                <span className="font-instrument-serif italic text-3xl text-brand-lite block mb-3 leading-none">
                  {item.number}
                </span>
                <h3 className="text-xl font-medium font-space-grotesk text-ink mb-3">{item.title}</h3>
                <p className="text-ink-2 font-manrope leading-relaxed text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <div className="mt-8 rounded-2xl bg-ink p-10">
              <p className="font-instrument-serif italic text-2xl md:text-3xl text-white leading-snug">
                {es
                  ? "«La AI escribe rápido. El criterio de marca, el precio y lo que se publica siguen siendo decisiones mías.»"
                  : "“AI writes fast. Brand judgment, pricing and what gets published are still my decisions.”"}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* DECISIONES DE DISEÑO */}
      <section className="px-6 py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-16 max-w-2xl">
              <span className="uppercase tracking-widest text-sm text-brand font-bold">
                {es ? "DECISIONES" : "DECISIONS"}
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-ink leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                {es ? (
                  <>
                    Seis decisiones que{" "}
                    <span className="font-instrument-serif italic font-normal text-brand">sostienen</span>{" "}
                    la tienda
                  </>
                ) : (
                  <>
                    Six decisions that{" "}
                    <span className="font-instrument-serif italic font-normal text-brand">hold</span> the
                    store up
                  </>
                )}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
            {decisions.map((decision, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 2) * 0.1 }}
                className="border-t border-hairline pt-6"
              >
                <span className="font-instrument-serif italic text-2xl text-brand-lite block mb-2 leading-none">
                  {decision.number}
                </span>
                <h3 className="text-xl font-medium font-space-grotesk text-ink mb-2">
                  {decision.title}
                </h3>
                <p className="text-ink-2 font-manrope leading-relaxed text-sm">{decision.rationale}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* APRENDIZAJES */}
      <section className="px-6 py-32 bg-paper">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-16 max-w-2xl">
              <span className="uppercase tracking-widest text-sm text-brand font-bold">
                {es ? "APRENDIZAJES" : "TAKEAWAYS"}
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-ink leading-[1.05] tracking-tighter font-space-grotesk mt-3">
                {es ? (
                  <>
                    Lo que me{" "}
                    <span className="font-instrument-serif italic font-normal text-brand">llevo</span>
                  </>
                ) : (
                  <>
                    What I{" "}
                    <span className="font-instrument-serif italic font-normal text-brand">take</span> with
                    me
                  </>
                )}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {takeaways.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-hairline rounded-2xl p-8"
              >
                <span className="font-instrument-serif italic text-3xl text-brand-lite block mb-4">
                  {item.number}
                </span>
                <h3 className="text-xl font-medium font-space-grotesk text-ink mb-3">{item.title}</h3>
                <p className="text-ink-2 leading-relaxed font-manrope text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <OtherProjects currentProjectId="dz-estudio" />

      {/* CTA */}
      <section className="px-6 py-32 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-ink-2 mb-6 font-manrope">
              {es ? "¿Te gustó este proyecto?" : "Did you like this project?"}
            </p>
            <h2 className="text-4xl md:text-6xl font-medium text-ink leading-[1.05] tracking-tighter font-space-grotesk mb-10">
              {es ? (
                <>
                  Explorá más de mi{" "}
                  <span className="font-instrument-serif italic font-normal text-brand">trabajo</span>
                </>
              ) : (
                <>
                  Explore more of my{" "}
                  <span className="font-instrument-serif italic font-normal text-brand">work</span>
                </>
              )}
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                onClick={() => {
                  window.location.href = "/#proyectos";
                }}
                className="group bg-ink hover:bg-brand text-white px-6 py-4 rounded-full shadow-lg font-manrope inline-flex items-center gap-2"
              >
                <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>
                {es ? "Volver al inicio" : "Back to home"}
              </Button>
              <a href="https://www.dz-estudio.com" target="_blank" rel="noopener noreferrer">
                <Button className="group bg-white hover:bg-brand-tint text-ink border border-hairline hover:border-brand/40 px-6 py-4 rounded-full font-manrope inline-flex items-center gap-2">
                  {es ? "Ver la tienda" : "Visit the store"}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
