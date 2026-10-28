import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export const dynamic = "force-static";

type Route = {
  fr: string;
  en: string;
  priority: number;
};

const staticRoutes: Route[] = [
  { fr: "/", en: "/en/", priority: 1 },
  { fr: "/projets/", en: "/en/projects/", priority: 0.9 },
  { fr: "/a-propos/", en: "/en/about/", priority: 0.8 },
  { fr: "/services/", en: "/en/services/", priority: 0.8 },
  { fr: "/methodologie/", en: "/en/method/", priority: 0.7 },
  { fr: "/references/", en: "/en/references/", priority: 0.7 },
  { fr: "/contact/", en: "/en/contact/", priority: 0.8 },
];

const projectRoutes: Route[] = projects.map((project) => ({
  fr: `/projets/${project.slug}/`,
  en: `/en/projects/${project.slug}/`,
  priority: 0.8,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...staticRoutes, ...projectRoutes];

  return routes.flatMap((route) => {
    const alternates = {
      languages: {
        fr: `${site.url}${route.fr}`,
        en: `${site.url}${route.en}`,
        "x-default": `${site.url}${route.fr}`,
      },
    };

    return [route.fr, route.en].map((path) => ({
      url: `${site.url}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route.priority,
      alternates,
    }));
  });
}
