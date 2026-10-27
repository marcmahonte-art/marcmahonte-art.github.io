const fallbackUrl =
  process.env.NODE_ENV === "production"
    ? "https://marcmahonte-art.github.io"
    : "http://localhost:3000";

export const site = {
  name: "Jean Marc Mahonté",
  shortName: "JMM",
  role: "Graphiste senior & directeur créatif indépendant",
  roleShort: "Graphiste senior & directeur créatif",
  tagline: "Donner forme aux idées. Rendre l’impact visible.",
  email: "marcmahonte@gmail.com",
  phones: [
    { label: "+226 07 23 63 51", href: "+22607236351" },
    { label: "+226 66 64 14 14", href: "+22666641414" },
  ],
  location: "Ouagadougou, Burkina Faso",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? fallbackUrl,
  cvPath: "/cv/CV_Jean_Marc_Mahonte.pdf",
  description:
    "Portfolio de Jean Marc Mahonté, graphiste senior et directeur créatif indépendant à Ouagadougou. Design éditorial, identité visuelle et communication institutionnelle pour ONG, bailleurs et organisations internationales.",
  nav: [
    { label: "Projets", href: "/projets" },
    { label: "À propos", href: "/a-propos" },
    { label: "Services", href: "/services" },
    { label: "Méthode", href: "/methodologie" },
    { label: "Références", href: "/references" },
    { label: "Contact", href: "/contact" },
  ],
  countries: [
    "Burkina Faso",
    "Tchad",
    "Côte d’Ivoire",
    "RDC",
    "Cameroun",
    "Madagascar",
    "Bénin",
    "Belgique",
  ],
  social: [],
};
