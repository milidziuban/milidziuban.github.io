/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // El sitio se despliega en Vercel, asi que la optimizacion de imagenes
    // esta disponible: Next sirve WebP/AVIF del tamano que pide cada `sizes`.
    // Estuvo desactivada por herencia del repo, cuando apuntaba a GitHub Pages.
    formats: ["image/avif", "image/webp"],
  },
}

export default nextConfig
