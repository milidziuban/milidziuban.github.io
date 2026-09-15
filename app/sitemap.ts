import type { MetadataRoute } from "next";
import { projects } from "@/components/data/projects-data";

const siteUrl = "https://milidziuban.vercel.app";

/**
 * Las rutas de proyecto salen de `projects-data` para que agregar un caso
 * no implique acordarse de tocar el sitemap.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/ai-workflow`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...projects.map((project) => ({
      url: `${siteUrl}${project.href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: project.featured ? 0.9 : 0.6,
    })),
  ];
}
