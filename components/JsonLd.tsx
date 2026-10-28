import { siteContent, type Lang } from "@/data/i18n";
import { site } from "@/data/site";

const content = {
  fr: {
    jobTitle: "Graphiste senior & directeur créatif indépendant",
    knowsAbout: [
      "Design graphique",
      "Direction artistique",
      "Édition institutionnelle",
      "Identité visuelle",
      "Communication visuelle institutionnelle",
      "Rapports annuels",
      "Campagnes de sensibilisation",
    ],
  },
  en: {
    jobTitle: "Senior graphic designer & independent creative director",
    knowsAbout: [
      "Graphic design",
      "Art direction",
      "Institutional publishing",
      "Visual identity",
      "Institutional visual communication",
      "Annual reports",
      "Awareness campaigns",
    ],
  },
} as const;

export function PersonJsonLd({ lang = "fr" }: { lang?: Lang }) {
  const isEn = lang === "en";
  const copy = content[lang];
  const pageUrl = `${site.url}${isEn ? "/en/" : "/"}`;
  const personId = `${pageUrl}#person`;
  const websiteId = `${pageUrl}#website`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: site.name,
        jobTitle: copy.jobTitle,
        description: siteContent[lang].description,
        url: pageUrl,
        email: `mailto:${site.email}`,
        telephone: site.phones.map((phone) => phone.href),
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ouagadougou",
          addressCountry: "BF",
        },
        knowsLanguage: ["fr", "en"],
        knowsAbout: copy.knowsAbout,
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: pageUrl,
        name: `${site.name} — Portfolio`,
        description: siteContent[lang].description,
        inLanguage: lang,
        author: { "@id": personId },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
