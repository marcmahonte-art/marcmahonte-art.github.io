import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/projets/", priority: 0.9 },
    { path: "/a-propos/", priority: 0.8 },
    { path: "/services/", priority: 0.8 },
    { path: "/methodologie/", priority: 0.7 },
    { path: "/references/", priority: 0.7 },
    { path: "/contact/", priority: 0.8 },
  ];

  const projectRoutes = projects.map((project) => ({
    path: `/projets/${project.slug}/`,
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes].map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route.priority,
  }));
}
