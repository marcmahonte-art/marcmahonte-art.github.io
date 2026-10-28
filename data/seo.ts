import type { Metadata } from "next";
import { siteContent, type Lang } from "./i18n";
import { site } from "./site";

export function languageAlternates(
  lang: Lang,
  fr: string,
  en: string,
): NonNullable<Metadata["alternates"]> {
  return {
    canonical: lang === "en" ? en : fr,
    languages: {
      fr,
      en,
      "x-default": fr,
    },
  };
}

const keywords = {
  fr: [
    "graphiste senior",
    "directeur créatif",
    "design graphique institutionnel",
    "rapport annuel",
    "édition",
    "communication visuelle",
    "ONG",
    "bailleurs",
    "Ouagadougou",
    "Burkina Faso",
    "Afrique de l’Ouest",
  ],
  en: [
    "senior graphic designer",
    "creative director",
    "institutional graphic design",
    "annual report",
    "editorial design",
    "visual communication",
    "NGO",
    "funders",
    "Ouagadougou",
    "Burkina Faso",
    "West Africa",
  ],
};

export function rootMetadata(lang: Lang): Metadata {
  const copy = siteContent[lang];
  const isEn = lang === "en";
  const url = isEn ? "/en/" : "/";
  const ogLocale = isEn ? "en_GB" : "fr_FR";
  const alternateLocale = isEn ? "fr_FR" : "en_GB";
  const imageAlt = isEn
    ? `Portfolio of ${site.name}, senior graphic designer and creative director in Ouagadougou.`
    : `Portfolio de ${site.name}, graphiste senior et directeur créatif à Ouagadougou.`;

  return {
    metadataBase: new URL(site.url),
    title: {
      default: `${site.name} — ${copy.roleShort}`,
      template: `%s — ${site.name}`,
    },
    description: copy.description,
    applicationName: `${site.name} — Portfolio`,
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    keywords: keywords[lang],
    alternates: languageAlternates(lang, "/", "/en/"),
    openGraph: {
      type: "website",
      locale: ogLocale,
      alternateLocale,
      url,
      siteName: `${site.name} — Portfolio`,
      title: `${site.name} — ${copy.roleShort}`,
      description: copy.description,
      images: [
        {
          url: "/og/jean-marc-mahonte.jpg",
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${site.name} — ${copy.roleShort}`,
      description: copy.description,
      images: ["/og/jean-marc-mahonte.jpg"],
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
      shortcut: "/icon.svg",
    },
  };
}
