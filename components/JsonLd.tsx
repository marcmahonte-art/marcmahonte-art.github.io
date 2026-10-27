import { site } from "@/data/site";

export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: site.name,
        jobTitle: "Graphiste senior & directeur créatif indépendant",
        description: site.description,
        url: site.url,
        email: `mailto:${site.email}`,
        telephone: site.phones.map((phone) => `+${phone.href}`),
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ouagadougou",
          addressCountry: "BF",
        },
        knowsLanguage: ["fr", "en"],
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
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: `${site.name} — Portfolio`,
        description: site.description,
        inLanguage: "fr",
        author: { "@id": `${site.url}/#person` },
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
