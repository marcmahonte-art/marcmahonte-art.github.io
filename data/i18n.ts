export type Lang = "fr" | "en";

export const navByLang: Record<
  Lang,
  { label: string; href: string }[]
> = {
  fr: [
    { label: "Projets", href: "/projets" },
    { label: "À propos", href: "/a-propos" },
    { label: "Services", href: "/services" },
    { label: "Méthode", href: "/methodologie" },
    { label: "Références", href: "/references" },
    { label: "Contact", href: "/contact" },
  ],
  en: [
    { label: "Projects", href: "/en/projects" },
    { label: "About", href: "/en/about" },
    { label: "Services", href: "/en/services" },
    { label: "Method", href: "/en/method" },
    { label: "References", href: "/en/references" },
    { label: "Contact", href: "/en/contact" },
  ],
};

export const siteContent = {
  fr: {
    role: "Graphiste senior & directeur créatif indépendant",
    roleShort: "Graphiste senior & directeur créatif",
    tagline: "Donner forme aux idées. Rendre l’impact visible.",
    description:
      "Portfolio de Jean Marc Mahonté, graphiste senior et directeur créatif indépendant à Ouagadougou. Design éditorial, identité visuelle et communication institutionnelle pour ONG, bailleurs et organisations internationales.",
    location: "Ouagadougou, Burkina Faso",
  },
  en: {
    role: "Senior graphic designer & independent creative director",
    roleShort: "Senior graphic designer & creative director",
    tagline: "Giving shape to ideas. Making impact visible.",
    description:
      "Portfolio of Jean Marc Mahonté, senior graphic designer and independent creative director based in Ouagadougou. Editorial design, visual identity and institutional communication for NGOs, funders and international organisations.",
    location: "Ouagadougou, Burkina Faso",
  },
} as const;

export const ui = {
  fr: {
    skip: "Aller au contenu",
    header: {
      contact: "Me contacter",
      menu: "Menu",
      close: "Fermer",
      mainNav: "Navigation principale",
      mobileNav: "Navigation mobile",
      menuLabel: "Menu principal",
      language: "Langue",
    },
    footer: {
      section: "Fin",
      contact: "Contact",
      title: "Un projet à rendre lisible ?",
      intro:
        "Rapports, identités, campagnes : parlons du contexte, des contraintes et de ce que le design doit accomplir.",
      start: "Démarrer la conversation",
      email: "Écrire un e-mail",
      details: "Coordonnées",
      nav: "Navigation",
      cv: "CV (PDF)",
      disclaimer:
        "Les noms, organisations et marques cités sur ce site le sont à titre de références professionnelles. Leur mention n’implique aucune approbation officielle ni aucun partenariat institutionnel non confirmé. Les visuels appartiennent à leurs commanditaires respectifs et sont reproduits dans un cadre de présentation professionnelle.",
    },
    card: {
      yearUnknown: "Année non précisée",
      confidential: "Confidentiel",
      caseStudy: "Étude de cas",
    },
    explorer: {
      title: "Explorer les projets",
      filter: "Filtrer les projets par discipline",
      all: "Tous",
      count: (count: number) =>
        `${count} projet${count > 1 ? "s" : ""} affiché${
          count > 1 ? "s" : ""
        }`,
      empty: "Aucun projet dans cette catégorie pour le moment.",
      seeAll: "Voir tous les projets",
    },
    gallery: {
      enlargeAria: (caption: string) => `Agrandir le visuel : ${caption}`,
      enlarge: "Agrandir",
      close: "Fermer",
      previous: "Visuel précédent",
      next: "Visuel suivant",
      dialog: (title: string) => `Galerie du projet ${title}`,
    },
    contactForm: {
      howTitle: "Comment fonctionne ce formulaire",
      howBody:
        "Ce site n’a pas de serveur d’envoi. Le formulaire prépare un e-mail dans votre logiciel de messagerie. Aucune donnée n’est stockée ni transmise à un service tiers par ce site.",
      name: "Nom et prénom *",
      organisation: "Organisation",
      optional: "(facultatif)",
      email: "E-mail *",
      projectType: "Type de projet *",
      choose: "Choisir…",
      message: "Votre demande *",
      messageHint:
        "Contexte, commanditaire, échéance, volume et contraintes : plus le brief est précis, plus la réponse sera utile.",
      privacy:
        "En utilisant ce formulaire, vous ouvrez votre messagerie. Aucun message n’est envoyé tant que vous ne validez pas vous-même l’e-mail.",
      submit: "Préparer l’e-mail",
      prepared: "Message préparé",
      preparedBody:
        "Votre messagerie devrait s’ouvrir avec le message prérempli. Aucun envoi n’a été effectué par ce site. Si rien ne s’est ouvert, utilisez le lien ci-dessous ou écrivez directement à",
      open: "Ouvrir le message dans ma messagerie",
      errors: {
        name: "Indiquez votre nom (2 caractères minimum).",
        email: "Indiquez une adresse e-mail valide.",
        projectType: "Choisissez le type de projet.",
        message: "Décrivez votre demande en 20 caractères minimum.",
      },
      types: [
        "Rapport annuel ou publication",
        "Identité visuelle ou charte",
        "Campagne ou sensibilisation",
        "Communication institutionnelle",
        "Direction artistique ou renfort d’agence",
        "Autre demande",
      ],
      subject: "Demande de collaboration — ",
      labels: {
        name: "Nom",
        organisation: "Organisation",
        email: "E-mail",
        projectType: "Type de projet",
        message: "Message",
        unspecified: "Non précisée",
      },
    },
    print: "Imprimer la fiche",
    notFound: {
      label: "Erreur 404",
      title: "Cette page n’existe pas.",
      body: "Le lien est peut-être obsolète, ou la page a été déplacée. Les projets et les références restent accessibles depuis le menu.",
      home: "Retour à l’accueil",
      projects: "Voir les projets",
    },
  },
  en: {
    skip: "Skip to content",
    header: {
      contact: "Get in touch",
      menu: "Menu",
      close: "Close",
      mainNav: "Main navigation",
      mobileNav: "Mobile navigation",
      menuLabel: "Main menu",
      language: "Language",
    },
    footer: {
      section: "End",
      contact: "Contact",
      title: "A project to make legible?",
      intro:
        "Reports, identities, campaigns: let’s talk about the context, the constraints and what the design has to achieve.",
      start: "Start the conversation",
      email: "Send an email",
      details: "Contact details",
      nav: "Navigation",
      cv: "CV (PDF, French)",
      disclaimer:
        "Names, organisations and brands cited on this site are professional references. Their mention does not imply any official endorsement or unconfirmed institutional partnership. Visuals remain the property of their respective clients and are reproduced for professional presentation purposes.",
    },
    card: {
      yearUnknown: "Year not specified",
      confidential: "Confidential",
      caseStudy: "Case study",
    },
    explorer: {
      title: "Explore projects",
      filter: "Filter projects by discipline",
      all: "All",
      count: (count: number) =>
        `${count} project${count > 1 ? "s" : ""} shown`,
      empty: "No projects in this category yet.",
      seeAll: "See all projects",
    },
    gallery: {
      enlargeAria: (caption: string) => `Enlarge image: ${caption}`,
      enlarge: "Enlarge",
      close: "Close",
      previous: "Previous image",
      next: "Next image",
      dialog: (title: string) => `Project gallery: ${title}`,
    },
    contactForm: {
      howTitle: "How this form works",
      howBody:
        "This site has no sending server. The form prepares an email in your email application. No data is stored or sent to a third-party service by this site.",
      name: "Full name *",
      organisation: "Organisation",
      optional: "(optional)",
      email: "Email *",
      projectType: "Project type *",
      choose: "Choose…",
      message: "Your enquiry *",
      messageHint:
        "Context, client, deadline, volume and constraints: the more precise the brief, the more useful the reply.",
      privacy:
        "By using this form you open your email application. No message is sent until you send the email yourself.",
      submit: "Prepare the email",
      prepared: "Message prepared",
      preparedBody:
        "Your email application should open with the message pre-filled. Nothing has been sent by this site. If nothing opened, use the link below or write directly to",
      open: "Open the message in my email app",
      errors: {
        name: "Please enter your name (at least 2 characters).",
        email: "Please enter a valid email address.",
        projectType: "Please choose a project type.",
        message: "Please describe your enquiry in at least 20 characters.",
      },
      types: [
        "Annual report or publication",
        "Visual identity or brand guidelines",
        "Campaign or awareness raising",
        "Institutional communication",
        "Art direction or agency support",
        "Other enquiry",
      ],
      subject: "Collaboration enquiry — ",
      labels: {
        name: "Name",
        organisation: "Organisation",
        email: "Email",
        projectType: "Project type",
        message: "Message",
        unspecified: "Not specified",
      },
    },
    print: "Print this case study",
    notFound: {
      label: "Error 404",
      title: "This page does not exist.",
      body: "The link may be out of date, or the page has moved. Projects and references remain available from the menu.",
      home: "Back to home",
      projects: "View projects",
    },
  },
} as const;

export const projectHref = (lang: Lang, slug: string) =>
  lang === "en" ? `/en/projects/${slug}/` : `/projets/${slug}/`;

const stripTrailingSlash = (path: string) =>
  path.length > 1 ? path.replace(/\/+$/, "") : path;

export function languagePaths(pathname: string): { fr: string; en: string } {
  const path = stripTrailingSlash(pathname);

  if (path === "/en") return { fr: "/", en: "/en/" };
  if (path === "/") return { fr: "/", en: "/en/" };

  if (path.startsWith("/en/")) {
    const rest = path.slice(4);
    if (rest === "projects") return { fr: "/projets/", en: "/en/projects/" };
    if (rest.startsWith("projects/"))
      return {
        fr: `/projets/${rest.slice("projects/".length)}/`,
        en: `/en/${rest}/`,
      };
    if (rest === "about") return { fr: "/a-propos/", en: "/en/about/" };
    if (rest === "services") return { fr: "/services/", en: "/en/services/" };
    if (rest === "method") return { fr: "/methodologie/", en: "/en/method/" };
    if (rest === "references")
      return { fr: "/references/", en: "/en/references/" };
    if (rest === "contact") return { fr: "/contact/", en: "/en/contact/" };
    return { fr: "/", en: "/en/" };
  }

  if (path === "/projets") return { fr: "/projets/", en: "/en/projects/" };
  if (path.startsWith("/projets/"))
    return {
      fr: `/projets/${path.slice("projets/".length)}/`,
      en: `/en/projects/${path.slice("projets/".length)}/`,
    };
  if (path === "/a-propos") return { fr: "/a-propos/", en: "/en/about/" };
  if (path === "/methodologie")
    return { fr: "/methodologie/", en: "/en/method/" };
  if (path === "/references")
    return { fr: "/references/", en: "/en/references/" };
  if (path === "/contact") return { fr: "/contact/", en: "/en/contact/" };
  if (path === "/services") return { fr: "/services/", en: "/en/services/" };

  return { fr: "/", en: "/en/" };
}
