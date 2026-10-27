export const categories = [
  "Édition & rapports",
  "Communication institutionnelle",
  "Infographies & data visualisation",
  "Campagnes & sensibilisation",
  "Identité visuelle & branding",
  "Digital & réseaux sociaux",
  "Événementiel",
] as const;

export type Category = (typeof categories)[number];

export type ProjectImage = {
  base: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  widths: number[];
  orientation: "portrait" | "landscape" | "square";
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  year: string | null;
  location: string;
  sector: string;
  categories: Category[];
  summary: string;
  context: string;
  objective: string;
  role: string;
  deliverables: string[];
  constraints: string[];
  approach: string[];
  relevance: string;
  rightsNote: string;
  verification: "confirmé" | "documenté";
  confidential?: boolean;
  images: ProjectImage[];
  featured: boolean;
  order: number;
};

const img = (
  base: string,
  width: number,
  height: number,
  widths: number[],
  alt: string,
  caption: string,
): ProjectImage => ({
  base,
  alt,
  caption,
  width,
  height,
  widths,
  orientation:
    width === height ? "square" : width > height ? "landscape" : "portrait",
});

const projectList: Project[] = [
  {
    slug: "fonds-mwinda",
    title: "Fonds Mwinda",
    subtitle:
      "Identité institutionnelle et système éditorial pour l’électrification rurale en RDC",
    client: "Fonds Mwinda / ANSER — République démocratique du Congo",
    year: "2026",
    location: "Kinshasa, RDC",
    sector: "Énergie & développement",
    categories: [
      "Identité visuelle & branding",
      "Édition & rapports",
      "Digital & réseaux sociaux",
    ],
    summary:
      "Une charte graphique complète, un rapport annuel, une newsletter et des gabarits PowerPoint : un même système visuel pour parler aux bailleurs, aux opérateurs et aux communautés.",
    context:
      "Le Fonds Mwinda est le véhicule financier de l’ANSER, l’Agence nationale pour les services d’électrification rurale en RDC. Sa communication doit tenir ensemble des publics aux attentes très différentes : bailleurs internationaux, opérateurs privés, autorités publiques et communautés bénéficiaires. La charte rappelle que « la confiance commence dès le premier regard ».",
    objective:
      "Construire une identité crédible et un système éditorial assez robuste pour couvrir la papeterie, un rapport annuel, une newsletter, des gabarits de présentation et les réseaux sociaux, sans perdre en lisibilité.",
    role:
      "Direction créative et conception graphique senior — système de marque et déclinaison éditoriale.",
    deliverables: [
      "Charte graphique de 45 pages : logo, palette, typographie, iconographie, papeterie, signalétique, goodies",
      "Rapport annuel 2026",
      "Newsletter de septembre 2026",
      "Gabarits PowerPoint pour les équipes",
      "Déclinaisons pour les réseaux sociaux",
    ],
    constraints: [
      "Publics multiples, du bailleur international à la communauté rurale",
      "Forte densité de textes et de données",
      "Cohérence entre print, présentation et digital",
      "Logos et signatures ANSER / partenaires",
    ],
    approach: [
      "Un symbole unique — l’ampoule, les mains, la carte et le rayon solaire — décliné sans variation",
      "Une palette 60-30-10 : neutres, bleu nuit institutionnel, jaune d’énergie",
      "Trois familles typographiques pour distinguer titres, corps de texte et données",
      "Des gabarits éditoriaux pour que les équipes produisent sans casser le système",
    ],
    relevance:
      "Il montre la capacité à concevoir un système complet pour une institution publique financée par des bailleurs, du logo au rapport annuel.",
    rightsNote:
      "Seules les couvertures et les pages publiques sont reproduites. Les données internes du rapport et de la charte ne sont pas publiées.",
    verification: "documenté",
    featured: true,
    order: 1,
    images: [
      img(
        "fonds-mwinda/newsletter",
        2481,
        3509,
        [480, 800, 1200, 1800],
        "Couverture de la newsletter du Fonds Mwinda de septembre 2026 : une centrale solaire au coucher du soleil et le titre « Électrifier la RDC, un village à la fois ».",
        "Couverture de la newsletter — septembre 2026.",
      ),
      img(
        "fonds-mwinda/rapport-annuel",
        2504,
        3517,
        [480, 800, 1200, 1800],
        "Couverture du rapport annuel 2026 du Fonds Mwinda, avec une photographie de village électrifié au solaire et le logotype du fonds.",
        "Rapport annuel 2026 — couverture.",
      ),
      img(
        "fonds-mwinda/charte",
        3504,
        2480,
        [480, 800, 1200, 1800],
        "Couverture de la charte graphique du Fonds Mwinda, main tenant un paysage avec le titre « Charte graphique ».",
        "Charte graphique — couverture.",
      ),
      img(
        "fonds-mwinda/charte-photographie",
        3519,
        2399,
        [480, 800, 1200, 1800],
        "Double page de la charte consacrée à la direction photographique, avec quatre images de terrain et les consignes de cadrage.",
        "Charte graphique — direction photographique.",
      ),
      img(
        "fonds-mwinda/papeterie",
        3362,
        2291,
        [480, 800, 1200, 1800],
        "Double page de la charte présentant le système de papeterie : entête, carte de visite et signature électronique.",
        "Charte graphique — papeterie et signature.",
      ),
      img(
        "fonds-mwinda/social",
        1080,
        1080,
        [480, 800],
        "Visuel social du Fonds Mwinda présentant un projet d’électrification, avec les logos des partenaires en pied de page.",
        "Déclinaison sociale — mise en avant d’un projet financé.",
      ),
    ],
  },
  {
    slug: "cilss-praps",
    title: "CILSS — Pastoralisme & PRAPS",
    subtitle: "Magazine et bulletin institutionnel pour le Sahel",
    client:
      "CILSS — Comité permanent inter-États de lutte contre la sécheresse dans le Sahel",
    year: "2023",
    location: "Ouagadougou, Burkina Faso",
    sector: "Développement rural & pastoralisme",
    categories: [
      "Édition & rapports",
      "Communication institutionnelle",
      "Infographies & data visualisation",
    ],
    summary:
      "Un magazine de 50e anniversaire et un bulletin bimensuel pour le PRAPS : faire tenir des contenus techniques, des cartes et de nombreux logos partenaires dans une maquette lisible.",
    context:
      "En 2023, le CILSS fêtait ses 50 ans. Le PRAPS, son Programme régional d’appui au pastoralisme au Sahel, publiait un bulletin d’information bimensuel destiné aux États membres et aux partenaires techniques et financiers — Banque mondiale, Union européenne, AFD, CEDEAO, UEMOA.",
    objective:
      "Rendre lisibles des contenus techniques et institutionnels multi-partenaires, tout en installant une identité éditoriale stable d’un numéro à l’autre.",
    role:
      "Direction créative et conception graphique senior — conception éditoriale et mise en page, au sein de Mpixel Agency.",
    deliverables: [
      "Magazine Pastoralisme Mag — couverture et pages intérieures",
      "Bulletin PRAPS — numéro de septembre 2023",
      "Déclinaisons de rubriques, encadrés et pages photo",
    ],
    constraints: [
      "Hiérarchie des logos bailleurs",
      "Textes denses, tableaux, cartes et photos de terrain",
      "Cohérence entre plusieurs publications",
      "Lecture par des publics institutionnels et de terrain",
    ],
    approach: [
      "Une grille stable et des rubriques récurrentes",
      "Une hiérarchie typographique nette entre titre, chapô, corps et encadrés",
      "Des respirations et des pages photo pour aérer les contenus techniques",
      "Un traitement sobre des logos partenaires",
    ],
    relevance:
      "Il démontre une pratique de l’édition institutionnelle multi-partenaires, au plus près des exigences des bailleurs.",
    rightsNote:
      "Les fichiers fournis sont des exports écran de 540 px de large ; les fichiers d’impression ne sont pas disponibles. Les visuels sont donc présentés à taille contenue.",
    verification: "confirmé",
    featured: true,
    order: 3,
    images: [
      img(
        "cilss/magazine-couverture",
        540,
        720,
        [540],
        "Couverture du magazine Pastoralisme Mag consacré aux 50 ans du CILSS, avec un troupeau de zébus au premier plan.",
        "Pastoralisme Mag — 50 ans du CILSS, 1973-2023.",
      ),
      img(
        "cilss/magazine-interieur",
        540,
        720,
        [540],
        "Page intérieure du magazine Pastoralisme Mag présentant le programme PRAPS et une photo de réunion de terrain.",
        "Pastoralisme Mag — page intérieure.",
      ),
      img(
        "cilss/newsletter-couverture",
        540,
        780,
        [540],
        "Couverture du bulletin d’information bimensuel du PRAPS, numéro 1, septembre 2023, avec les logos des partenaires.",
        "Bulletin PRAPS — n° 001, septembre 2023.",
      ),
      img(
        "cilss/newsletter-interieur",
        540,
        780,
        [540],
        "Page intérieure du bulletin PRAPS avec un article sur la mobilité pastorale et deux photographies de terrain.",
        "Bulletin PRAPS — page intérieure.",
      ),
    ],
  },
  {
    slug: "christian-aid-femmes-energie",
    title: "Femmes et énergie durable",
    subtitle:
      "Une campagne de terrain conforme aux règles de visibilité de l’Union européenne",
    client: "Christian Aid Burkina Faso — Projet FED (Union européenne)",
    year: "2021–2023",
    location: "Burkina Faso",
    sector: "Énergie, genre & développement",
    categories: [
      "Campagnes & sensibilisation",
      "Digital & réseaux sociaux",
      "Communication institutionnelle",
    ],
    summary:
      "Une série de visuels social media qui racontent les résultats du projet FED auprès de coopératives féminines, sans sacrifier les obligations de visibilité des bailleurs.",
    context:
      "Le projet FED accompagne des coopératives féminines dans la transformation et la commercialisation de produits agricoles. La campagne devait rendre visibles les résultats de terrain — équipements solaires, infrastructures, accès au crédit — tout en respectant les règles de visibilité de l’Union européenne.",
    objective:
      "Concevoir une série de visuels terrain, lisibles sur mobile, portant les logos et mentions obligatoires sans étouffer le récit des bénéficiaires.",
    role:
      "Direction créative et conception graphique senior — conception des supports visuels de campagne, au sein de Mpixel Agency.",
    deliverables: [
      "Visuels pour les réseaux sociaux",
      "Déclinaisons print et digitales",
      "Intégration des mentions de financement de l’Union européenne",
    ],
    constraints: [
      "Charte de visibilité de l’Union européenne",
      "Logos Christian Aid, CEAS et Réseau MARP",
      "Photographies et paroles de bénéficiaires",
      "Lisibilité sur petit écran",
    ],
    approach: [
      "Photo plein cadre et traitement documentaire",
      "Un bloc de texte court, une idée par visuel",
      "Bandeau rouge signature et hiérarchie claire des logos",
      "Mentions de financement intégrées sans concurrencer le message",
    ],
    relevance:
      "C’est l’exemple le plus direct d’une campagne ONG et bailleur : visibilité, conformité et récit de terrain dans un même format.",
    rightsNote:
      "Les personnes et les témoignages présents dans les supports sources ne sont pas reproduits sous forme de citations nominatives.",
    verification: "confirmé",
    featured: true,
    order: 4,
    images: [
      img(
        "christian-aid/campagne-produits",
        1141,
        1164,
        [480, 800, 1141],
        "Visuel de campagne montrant des femmes portant des produits agricoles sur une route de terre.",
        "Production et commercialisation des coopératives.",
      ),
      img(
        "christian-aid/campagne-portrait",
        1141,
        1103,
        [480, 800, 1141],
        "Visuel de campagne montrant une bénéficiaire du projet FED tenant un sachet de riz, avec les logos Christian Aid et Union européenne.",
        "Campagne « Femmes et énergie durable » — portrait de bénéficiaire.",
      ),
      img(
        "christian-aid/campagne-transformation",
        1153,
        1116,
        [480, 800, 1153],
        "Visuel de campagne montrant deux femmes travaillant sur une aire de séchage, avec les logos des partenaires.",
        "Transformation des produits agricoles dans une coopérative.",
      ),
      img(
        "christian-aid/campagne-cooperative",
        1153,
        1164,
        [480, 800, 1153],
        "Visuel de campagne montrant un groupe de femmes réunies dans un champ, avec les logos des partenaires.",
        "Coopérative bénéficiaire du projet FED.",
      ),
    ],
  },
  {
    slug: "projet-idea",
    title: "Projet I.D.E.A.",
    subtitle:
      "Donner une identité visible à la protection de l’enfance en Côte d’Ivoire",
    client: "Projet I.D.E.A. — Côte d’Ivoire, avec l’ONECI et ses partenaires",
    year: "2026",
    location: "Abidjan, Bouaké, Bouna, Boundiali — Côte d’Ivoire",
    sector: "Protection de l’enfance & état civil",
    categories: [
      "Campagnes & sensibilisation",
      "Identité visuelle & branding",
      "Événementiel",
    ],
    summary:
      "Bloc-notes, kakémonos et t-shirts pour un projet qui relie enregistrement des naissances, santé maternelle et résilience économique des familles.",
    context:
      "Le projet I.D.E.A. (Identité, Droits, Empowerment et Accès aux services essentiels) vise à protéger les enfants et à renforcer les communautés en Côte d’Ivoire. Il intervient sur l’enregistrement des naissances, l’accès aux services de santé maternelle et infantile et la résilience économique des familles vulnérables, dans quatre zones du pays.",
    objective:
      "Donner une identité visible et cohérente à un projet multi-partenaires, avec un message simple : l’acte de naissance est la première porte vers les droits.",
    role:
      "Consultant en design graphique — direction créative et conception graphique senior des supports de visibilité.",
    deliverables: ["Bloc-notes A5", "Kakémonos", "T-shirts"],
    constraints: [
      "Logos nombreux et hiérarchie institutionnelle",
      "Message social sensible",
      "Formats événementiels et objets",
      "Public mixte : communautés, autorités, partenaires",
    ],
    approach: [
      "Un motif de vagues colorées, inspiré des tissus, comme fil conducteur",
      "Une typographie condensée pour les messages forts",
      "Des blocs de couleur pour séparer objectif, composantes et zones",
      "Une déclinaison sur papier, textile et signalétique",
    ],
    relevance:
      "Il montre comment un projet de protection de l’enfance peut être rendu visible et compréhensible sur le terrain, au-delà du rapport.",
    rightsNote:
      "Le projet est présenté à partir des supports fournis ; le commanditaire direct n’est pas nommé dans le dossier.",
    verification: "confirmé",
    featured: true,
    order: 6,
    images: [
      img(
        "idea/kakemonos",
        5000,
        4000,
        [480, 800, 1200, 1800],
        "Deux kakémonos du projet I.D.E.A. installés dans un studio, avec le motif de vagues colorées et les logos des partenaires.",
        "Kakémonos du projet I.D.E.A.",
      ),
      img(
        "idea/bloc-notes",
        1747,
        2482,
        [480, 800, 1200, 1747],
        "Couverture du bloc-notes du projet I.D.E.A. avec le message « L’acte de naissance, pour une existence légale ».",
        "Bloc-notes — « L’acte de naissance, pour une existence légale ».",
      ),
      img(
        "idea/tshirts",
        4864,
        3242,
        [480, 800, 1200, 1800],
        "Deux t-shirts blancs du projet I.D.E.A., face et dos, avec le motif de vagues colorées et les logos partenaires.",
        "T-shirts — déclinaison textile.",
      ),
    ],
  },
  {
    slug: "plan-international-tchad",
    title: "Plan International Tchad",
    subtitle:
      "Droits de l’enfant : une campagne qui sort de l’écran",
    client: "Plan International Tchad",
    year: "2025–2026",
    location: "Tchad",
    sector: "Droits de l’enfant & éducation",
    categories: [
      "Campagnes & sensibilisation",
      "Identité visuelle & branding",
      "Événementiel",
      "Digital & réseaux sociaux",
      "Infographies & data visualisation",
    ],
    summary:
      "Fresque murale, kakémonos, goodies et visuels sociaux : un même langage visuel pour porter les droits de l’enfant dans l’espace public et sur mobile.",
    context:
      "Plan International Tchad déploie des messages sur la protection de l’enfance, l’égalité et l’éducation, notamment dans le cadre de « Children on the Move ». Les supports doivent fonctionner à grande échelle — mur, kakémono, gilet — comme sur un fil social.",
    objective:
      "Créer un langage visuel identifiable dans l’espace public et sur mobile, tout en respectant la charte internationale de Plan International.",
    role:
      "Direction créative et conception graphique senior — supports de campagne, fresque murale et déclinaisons print et digitales.",
    deliverables: [
      "Fresque murale",
      "Kakémonos",
      "Goodies : gilets, casquettes",
      "Visuels pour les réseaux sociaux",
      "Carte des zones d’intervention",
    ],
    constraints: [
      "Charte internationale Plan International",
      "Logos bailleurs",
      "Formats très variés, du mur au carrousel",
      "Lisibilité à distance et sur petit écran",
    ],
    approach: [
      "Des messages courts, portés par la photographie et l’illustration",
      "Des blocs de couleur bleu, jaune et orange pour structurer",
      "Une déclinaison stricte sur tous les formats",
      "Une carte simple pour situer l’intervention",
    ],
    relevance:
      "Il prouve qu’une campagne de droits de l’enfant peut tenir dehors, sur un mur, comme dans un carrousel.",
    rightsNote:
      "Les visuels présentent des enfants et des communautés ; ils sont reproduits tels que fournis, sans identification nominative. L’année 2025–2026 a été communiquée par Jean Marc Mahonté (octobre 2026).",
    verification: "confirmé",
    featured: true,
    order: 2,
    images: [
      img(
        "plan-international/chaque-enfant-compte",
        3300,
        2400,
        [480, 800, 1200, 1800],
        "Visuel Plan International avec un enfant souriant et le message « Chaque enfant compte, chaque rêve importe ».",
        "« Chaque enfant compte, chaque rêve importe. »",
      ),
      img(
        "plan-international/fresque",
        3543,
        1535,
        [480, 800, 1200, 1800],
        "Fresque murale Plan International représentant un baobab, des enfants et des maisons, installée sur un mur extérieur.",
        "Fresque murale — Children on the Move.",
      ),
      img(
        "plan-international/droits-enfant",
        3300,
        2400,
        [480, 800, 1200, 1800],
        "Visuel présentant la charte africaine des droits et du bien-être de l’enfant, avec une carte de l’Afrique illustrée.",
        "Charte africaine des droits et du bien-être de l’enfant — version adaptée aux enfants.",
      ),
      img(
        "plan-international/kakemono",
        5000,
        4000,
        [480, 800, 1200, 1800],
        "Deux kakémonos Plan International « Children on the Move » présentés dans un studio.",
        "Kakémonos — Children on the Move.",
      ),
      img(
        "plan-international/carte-intervention",
        850,
        850,
        [480, 800],
        "Carte des zones d’intervention de Plan International au Tchad, avec les noms des provinces.",
        "Carte des zones d’intervention au Tchad.",
      ),
      img(
        "plan-international/education",
        5974,
        5949,
        [480, 800, 1200, 1800],
        "Visuel social Plan International montrant des filles en classe, avec le message « L’éducation est la clé de tous les possibles ».",
        "Volet éducation — « L’éducation est la clé de tous les possibles ».",
      ),
    ],
  },
  {
    slug: "wateraid-tour-du-faso",
    title: "WaterAid — Tour du Faso 2021",
    subtitle: "L’eau et l’assainissement sur le parcours",
    client: "WaterAid Burkina Faso",
    year: "2021",
    location: "Burkina Faso",
    sector: "Eau, hygiène & assainissement",
    categories: [
      "Campagnes & sensibilisation",
      "Digital & réseaux sociaux",
      "Événementiel",
    ],
    summary:
      "Une campagne de visibilité pour un événement sportif populaire : la cause WaterAid dans le peloton, sur les réseaux et au bord de la route.",
    context:
      "WaterAid était partenaire du Tour du Faso 2021. La marque devait exister sur le parcours, dans les contenus sociaux et auprès du public, avec des messages sur l’eau, l’assainissement et le lavage des mains.",
    objective:
      "Rendre une cause technique visible dans un événement sportif populaire, sans perdre la clarté du message.",
    role:
      "Direction créative et conception graphique senior — supports de communication de l’événement, au sein de Mpixel Agency.",
    deliverables: [
      "Visuels pour les réseaux sociaux",
      "Déclinaisons événementielles",
      "Messages de campagne",
    ],
    constraints: [
      "Photographies de terrain",
      "Logos WaterAid et Tour du Faso",
      "Texte court et lisible",
      "Contextes extérieurs et mobiles",
    ],
    approach: [
      "Photo plein cadre et bandeau bleu",
      "Une phrase, un chiffre, une action",
      "Signature WaterAid constante",
      "Adaptation aux formats sociaux",
    ],
    relevance:
      "Il montre la capacité à faire exister une cause dans un événement grand public, avec peu de surface et beaucoup de contraintes.",
    rightsNote:
      "Les chiffres présents dans les visuels sont des messages de campagne de WaterAid, et non des données produites pour ce portfolio.",
    verification: "confirmé",
    featured: true,
    order: 7,
    images: [
      img(
        "wateraid/parcours",
        2373,
        1480,
        [480, 800, 1200, 1800],
        "Visuel WaterAid intégré au parcours du Tour du Faso, avec un message de campagne sur l’assainissement et le public au bord de la route.",
        "Dispositif de campagne sur le parcours du Tour du Faso.",
      ),
      img(
        "wateraid/tour-du-faso",
        1187,
        885,
        [480, 800, 1187],
        "Visuel WaterAid montrant un bidon d’eau solaire installé sur le site du Tour du Faso.",
        "Le lavage des mains au cœur du dispositif événementiel.",
      ),
      img(
        "wateraid/lavage-mains",
        1185,
        893,
        [480, 800, 1185],
        "Visuel WaterAid montrant une démonstration de lavage des mains devant le public du Tour du Faso.",
        "Démonstration de lavage des mains sur le village départ.",
      ),
    ],
  },
  {
    slug: "cnps-newsletter",
    title: "CNPS — Newsletter de transformation",
    subtitle: "Une publication interne pour conduire le changement",
    client:
      "CNPS — Caisse nationale de prévoyance sociale, Côte d’Ivoire",
    year: "2025",
    location: "Abidjan, Côte d’Ivoire",
    sector: "Protection sociale",
    categories: [
      "Édition & rapports",
      "Communication institutionnelle",
      "Digital & réseaux sociaux",
    ],
    summary:
      "Une newsletter de cinq pages pour expliquer une transformation de la relation client aux collaborateurs et aux assurés, sans jargon.",
    context:
      "La CNPS engageait une transformation de la relation client : CRM omnicanal, centre de contact, ambassadeurs, nouvelles procédures. La direction devait expliquer le changement aux équipes et aux assurés.",
    objective:
      "Concevoir une publication lisible, humaine et institutionnelle, capable de porter un message de transformation sans jargon.",
    role:
      "Direction créative et conception graphique senior — conception éditoriale, mise en page et déclinaisons sociales.",
    deliverables: [
      "Newsletter de cinq pages",
      "Visuels pour les réseaux sociaux",
      "Déclinaisons sur goodies",
    ],
    constraints: [
      "Charte CNPS",
      "Ton institutionnel",
      "Photographies de dirigeants",
      "Contenus denses",
    ],
    approach: [
      "Une couverture magazine avec portrait",
      "Des rubriques courtes et des encadrés",
      "Un chemin de fer stable",
      "Une déclinaison sociale cohérente",
    ],
    relevance:
      "Il montre la capacité à transformer un contenu interne en objet éditorial clair et humain.",
    rightsNote:
      "Seules les pages finalisées sont présentées ; les pages de travail du fichier source ne sont pas publiées.",
    verification: "confirmé",
    featured: false,
    order: 8,
    images: [
      img(
        "cnps/newsletter-couverture",
        2480,
        3508,
        [480, 800, 1200, 1800],
        "Couverture de la newsletter CNPS de janvier 2025, avec le portrait du directeur et le titre « Ensemble, transformons l’expérience client ».",
        "Newsletter CNPS — janvier 2025.",
      ),
      img(
        "cnps/newsletter-conclusion",
        2480,
        3508,
        [480, 800, 1200, 1800],
        "Page intérieure de la newsletter CNPS présentant les engagements et la conclusion.",
        "Page intérieure — engagements et appel à l’action.",
      ),
      img(
        "cnps/social",
        2000,
        2000,
        [480, 800, 1200, 1800],
        "Visuel social CNPS avec des mains tenant des pièces de puzzle et le message « Ensemble, transformons l’expérience client ».",
        "Déclinaison sociale de la campagne interne.",
      ),
      img(
        "cnps/goodies",
        4000,
        4000,
        [480, 800, 1200, 1800],
        "Mugs et objets promotionnels CNPS posés sur un fond clair.",
        "Goodies — déclinaison de l’identité de campagne.",
      ),
    ],
  },
  {
    slug: "association-warassa",
    title: "Association Warassa",
    subtitle:
      "Lancer un centre dédié aux femmes, aux enfants et aux familles",
    client: "Association Warassa, Tchad",
    year: "2025",
    location: "Tchad",
    sector: "Solidarité & autonomisation des femmes",
    categories: [
      "Campagnes & sensibilisation",
      "Identité visuelle & branding",
      "Événementiel",
    ],
    summary:
      "Une campagne de lancement digne et chaleureuse pour un centre d’accueil, avec affiches, kakémono, panneau mobile et visuels sociaux.",
    context:
      "L’Association Warassa ouvrait un centre d’accueil et d’accompagnement pour les femmes, les enfants et les familles. Le lancement des 3 et 4 mai 2025 comprenait une inauguration, un showroom, des tables rondes et des master class.",
    objective:
      "Donner une image digne, chaleureuse et crédible à un projet social, et faire venir le public comme les partenaires.",
    role:
      "Direction créative et conception graphique senior, en qualité de directeur créatif — campagne de lancement et supports événementiels.",
    deliverables: [
      "Affiches A3",
      "Kakémono",
      "Panneau mobile",
      "Visuels sociaux",
      "Invitations",
    ],
    constraints: [
      "Charte associative",
      "Logos partenaires",
      "Photographies sensibles",
      "Formats print et digital",
    ],
    approach: [
      "Photographie documentaire, sans misérabilisme",
      "Titres calligraphiés et palette bleu, vert et ocre",
      "Hiérarchie claire : événement, dates, programme, partenaires",
      "Déclinaison du format affiche au format social",
    ],
    relevance:
      "Il montre une communication sociale qui reste digne : les personnes sont montrées comme des actrices, pas comme des victimes.",
    rightsNote:
      "Les visuels reproduisent des personnes réelles ; ils sont présentés tels que fournis par l’association.",
    verification: "confirmé",
    featured: false,
    order: 9,
    images: [
      img(
        "warassa/affiche",
        2480,
        3508,
        [480, 800, 1200, 1800],
        "Affiche du lancement du Centre Warassa avec le portrait d’une femme portant une charge sur la tête et les dates des 3 et 4 mai 2025.",
        "Affiche A3 — lancement du Centre Warassa.",
      ),
      img(
        "warassa/campagne",
        2000,
        2000,
        [480, 800, 1200, 1800],
        "Visuel social du Centre Warassa montrant une mère et son enfant, avec le titre du lancement et les dates.",
        "Visuel social — lancement du Centre Warassa.",
      ),
      img(
        "warassa/kakemono",
        3344,
        3848,
        [480, 800, 1200, 1800],
        "Kakémono du Centre Warassa installé dans un intérieur, avec une photographie et le programme du lancement.",
        "Kakémono — programme du lancement.",
      ),
      img(
        "warassa/invitation",
        2000,
        2000,
        [480, 800, 1200, 1800],
        "Invitation du Centre Warassa avec un portrait de femme et les informations pratiques de l’événement.",
        "Invitation digitale — 3 et 4 mai 2025.",
      ),
    ],
  },
  {
    slug: "coris-bank-tchad",
    title: "Coris Bank International Tchad",
    subtitle:
      "Un dispositif de lancement complet, de la scène aux réseaux sociaux",
    client: "Coris Bank International Tchad",
    year: "2024–2025",
    location: "Tchad",
    sector: "Banque & services financiers",
    categories: [
      "Identité visuelle & branding",
      "Communication institutionnelle",
      "Événementiel",
      "Digital & réseaux sociaux",
    ],
    summary:
      "Fond de scène, chevalets, signalétique et visuels sociaux : un même système graphique pour accompagner le lancement de Coris Bank International au Tchad.",
    context:
      "Coris Bank International lançait officiellement ses activités au Tchad. Le dispositif devait tenir ensemble la cérémonie officielle, la conférence de presse, l’accueil des invités, la scène et les réseaux sociaux, avec un impératif de lisibilité à distance.",
    objective:
      "Donner au lancement une présence visuelle cohérente — du fond de scène aux publications sociales — sans perdre la lisibilité du logo et des messages institutionnels.",
    role:
      "Direction créative et conception graphique senior du dispositif de lancement, au sein de Sixième Sens SA.",
    deliverables: [
      "Fond de scène et habillage de la cérémonie",
      "Chevalets d’accueil et de cérémonie",
      "Visuels pour les réseaux sociaux",
      "Déclinaisons print et signalétique",
      "Supports de conférence de presse",
    ],
    constraints: [
      "Lisibilité à distance sur scène et sur les chevalets",
      "Cohérence entre supports print et formats sociaux",
      "Présence du logo et des mentions officielles",
      "Déclinaison sur plusieurs points de contact de l’événement",
    ],
    approach: [
      "Un bleu institutionnel dominant, un motif géométrique rouge et noir pour les supports événementiels",
      "Une hiérarchie simple : logo, événement, information pratique",
      "Des visuels sociaux distincts pour l’épargne, la banque digitale et la conférence de presse",
      "Une déclinaison du fond de scène jusqu’aux chevalets d’accueil",
    ],
    relevance:
      "Il montre la capacité à tenir un dispositif de lancement complet pour une institution financière, du support scénique aux réseaux sociaux, avec des contraintes de visibilité fortes.",
    rightsNote:
      "Les visuels proviennent des supports de production et de présentation fournis. Aucun nom d’invité ni donnée personnelle n’est reproduit. Les performances des campagnes sociales ne sont pas documentées et ne sont donc pas publiées.",
    verification: "confirmé",
    featured: true,
    order: 10,
    images: [
      img(
        "coris/ceremonie",
        5000,
        3333,
        [480, 800, 1200, 1800, 2400],
        "Simulation de présentation du dispositif de lancement de Coris Bank International Tchad : fond de scène, comptoir, chevalets et habillage graphique.",
        "Dispositif de lancement — vue d’ensemble.",
      ),
      img(
        "coris/soiree",
        2048,
        1649,
        [480, 800, 1200, 1800, 2048],
        "Photographie de la soirée de lancement de Coris Bank International Tchad, avec un artiste sur scène devant le fond de scène.",
        "Soirée de lancement — vue de terrain.",
      ),
      img(
        "coris/fond-scene",
        8540,
        5669,
        [480, 800, 1200, 1800, 2400],
        "Fond de scène bleu de la cérémonie officielle de lancement de Coris Bank International Tchad, avec le logo et un motif graphique.",
        "Fond de scène — cérémonie officielle.",
      ),
      img(
        "coris/chevalet-accueil",
        2500,
        2500,
        [480, 800, 1200, 1800, 2500],
        "Chevalet d’accueil rouge et bleu de la cérémonie officielle de lancement de Coris Bank International Tchad.",
        "Chevalet d’accueil.",
      ),
      img(
        "coris/chevalet-ceremonie",
        2500,
        2500,
        [480, 800, 1200, 1800, 2500],
        "Chevalet de cérémonie avec écran intégré présentant le visuel de lancement de Coris Bank International Tchad.",
        "Chevalet de cérémonie — écran intégré.",
      ),
      img(
        "coris/social-epargne",
        1181,
        1181,
        [480, 800, 1181],
        "Visuel social Coris Bank « Coris Premier Pas » montrant un père portant son enfant, avec un message sur l’épargne.",
        "Visuel social — épargne et famille.",
      ),
      img(
        "coris/social-conference",
        3416,
        2270,
        [480, 800, 1200, 1800, 2400],
        "Visuel social annonçant la conférence de presse du lancement de Coris Bank International Tchad, avec une carte, des drapeaux africains et une main tenant le drapeau tchadien.",
        "Visuel social — conférence de presse.",
      ),
      img(
        "coris/social-digitale",
        1181,
        1181,
        [480, 800, 1181],
        "Visuel social Coris Bank sur la banque digitale, avec une carte bancaire tenue à la main et le message « Ma banque digitale ».",
        "Visuel social — banque digitale.",
      ),
    ],
  },
  {
    slug: "canal-plus-tchad",
    title: "Canal+ Tchad",
    subtitle: "Un dispositif d’accueil pour le lancement de la marque",
    client: "Canal+ Tchad",
    year: null,
    location: "Tchad",
    sector: "Médias & télévision",
    categories: ["Communication institutionnelle", "Événementiel"],
    summary:
      "Trois chevalets de bienvenue et un cube de marque pour donner une présence physique à Canal+ lors d’un lancement au Tchad.",
    context:
      "Les supports fournis documentent un dispositif d’accueil pour le lancement de Canal+ au Tchad : trois variantes de chevalet et un cube de marque. Le brief, le commanditaire direct et le contexte de production ne sont pas précisés dans les sources.",
    objective:
      "Signaler l’événement dès l’accueil et installer la marque dans l’espace, avec un message simple et une déclinaison cohérente sur plusieurs supports.",
    role:
      "Direction créative et conception graphique senior — conception des chevalets de bienvenue et du cube de marque.",
    deliverables: [
      "Trois variantes de chevalet de bienvenue",
      "Cube de marque Canal+",
      "Déclinaisons du logo sur fond noir",
    ],
    constraints: [
      "Charte Canal+",
      "Logo blanc sur fond noir",
      "Supports imprimés présentés sur chevalets bois",
      "Message lisible à distance",
    ],
    approach: [
      "Un fond noir et une trame graphique discrète",
      "Trois variations de trame pour un même message de bienvenue",
      "Un cube de marque pour prolonger le dispositif dans l’espace",
      "Une hiérarchie simple : marque, message, contexte",
    ],
    relevance:
      "Il documente l’application d’une marque internationale sur des supports d’accueil et de signalétique événementielle, avec une contrainte de charte forte.",
    rightsNote:
      "Les visuels sont des simulations de présentation fournies dans le dossier, et non des photographies de l’événement. Le contexte de production, l’année et le commanditaire direct ne sont pas précisés dans les sources ; l’usage de la marque reste à valider.",
    verification: "confirmé",
    featured: false,
    order: 11,
    images: [
      img(
        "canal/chevalet-1",
        2500,
        2500,
        [480, 800, 1200, 1800, 2500],
        "Simulation de présentation d’un chevalet de bienvenue Canal+ sur fond noir, avec le message « Bienvenue au lancement de CANAL+ ».",
        "Chevalet de bienvenue — variante 1.",
      ),
      img(
        "canal/chevalet-2",
        2500,
        2500,
        [480, 800, 1200, 1800, 2500],
        "Simulation de présentation d’un chevalet de bienvenue Canal+ avec une trame graphique en éventail.",
        "Chevalet de bienvenue — variante 2.",
      ),
      img(
        "canal/chevalet-3",
        2500,
        2500,
        [480, 800, 1200, 1800, 2500],
        "Simulation de présentation d’un chevalet de bienvenue Canal+ avec une trame de petits points.",
        "Chevalet de bienvenue — variante 3.",
      ),
      img(
        "canal/cube",
        5000,
        3333,
        [480, 800, 1200, 1800, 2500],
        "Simulation d’un cube de signalétique noir à trois faces, avec le logo Canal+ en blanc.",
        "Cube de marque — signalétique.",
      ),
    ],
  },
  {
    slug: "youth-connekt-madagascar",
    title: "Youth Connekt Africa Summit 2025",
    subtitle:
      "Habillage et communication du sommet de la jeunesse à Madagascar",
    client: "Youth Connekt Africa Summit 2025 — Madagascar",
    year: "2025",
    location: "Madagascar",
    sector: "Jeunesse & développement",
    categories: [
      "Communication institutionnelle",
      "Campagnes & sensibilisation",
      "Digital & réseaux sociaux",
      "Événementiel",
    ],
    summary:
      "Une présentation d’accompagnement et une série de visuels social media pour le sommet Youth Connekt Africa 2025 à Madagascar, autour d’une même signature : « L’Afrique que nous méritons ».",
    context:
      "Le Youth Connekt Africa Summit 2025 s’est tenu à Madagascar. Les supports fournis présentent le contexte du sommet, ses enjeux — employabilité des jeunes, entrepreneuriat, engagement civique — et l’offre d’accompagnement proposée aux participants. La campagne sociale décline le message « L’Afrique que nous méritons commence avec nous ».",
    objective:
      "Donner au sommet une expression visuelle cohérente, du document de présentation aux publications sociales, et rendre les enjeux lisibles pour un public jeune et panafricain.",
    role:
      "Direction créative et conception graphique senior — présentation, campagne sociale et déclinaisons.",
    deliverables: [
      "Présentation de l’offre d’accompagnement",
      "Visuels pour les réseaux sociaux",
      "Déclinaisons de la campagne « L’Afrique que nous méritons »",
      "Slides de contexte et d’enjeux",
    ],
    constraints: [
      "Charte Youth Connekt Africa",
      "Public jeune et panafricain",
      "Formats sociaux et présentation",
      "Messages institutionnels et d’engagement",
    ],
    approach: [
      "Vert profond, orange et motifs géométriques",
      "Photographies de jeunes et compositions en réseau",
      "Une signature calligraphique pour « L’Afrique que nous méritons »",
      "Déclinaison du slide au post social",
    ],
    relevance:
      "Il montre la capacité à porter un message panafricain sur des supports institutionnels et sociaux, avec une direction créative assumée.",
    rightsNote:
      "Les visuels reproduisent des personnes réelles et la marque Youth Connekt Africa tels que fournis. Aucun nom de participant n’est publié. L’année, le pays et le rôle ont été communiqués par Jean Marc Mahonté (octobre 2026) ; les résultats du sommet ne sont pas documentés dans les sources.",
    verification: "confirmé",
    featured: true,
    order: 5,
    images: [
      img(
        "youth/campagne",
        1080,
        1080,
        [480, 800, 1080],
        "Visuel social Youth Connekt Africa pour le sommet 2025 à Madagascar, avec un portrait et le message « L’Afrique que nous méritons, c’est maintenant ».",
        "Campagne sociale — « L’Afrique que nous méritons, c’est maintenant ».",
      ),
      img(
        "youth/contexte",
        2480,
        1748,
        [480, 800, 1200, 1800, 2400],
        "Slide de présentation du Youth Connekt Africa Summit 2025 à Madagascar, avec une photographie de paysage et les enjeux du sommet.",
        "Présentation — contexte et enjeux du sommet.",
      ),
      img(
        "youth/accompagnement",
        2480,
        1748,
        [480, 800, 1200, 1800, 2400],
        "Slide présentant l’accompagnement pendant l’événement : communication, activation, logistique et couverture médiatique.",
        "Présentation — offre d’accompagnement.",
      ),
      img(
        "youth/reseau-vert",
        1080,
        1080,
        [480, 800, 1080],
        "Visuel social Youth Connekt Africa avec un réseau de portraits et le message « Connecter nos voix pour incarner l’Afrique que nous méritons ».",
        "Campagne sociale — connexion des voix.",
      ),
      img(
        "youth/reseau-bleu",
        1080,
        1080,
        [480, 800, 1080],
        "Visuel social Youth Connekt Africa avec des portraits reliés en réseau sur un ciel bleu et des baobabs.",
        "Campagne sociale — réseaux et territoires.",
      ),
      img(
        "youth/portrait-orange",
        1080,
        1080,
        [480, 800, 1080],
        "Visuel social Youth Connekt Africa avec un portrait de jeune femme et le message « L’Afrique que nous méritons commence avec nous ».",
        "Campagne sociale — portrait et message.",
      ),
      img(
        "youth/portrait",
        1080,
        1080,
        [480, 800, 1080],
        "Visuel social Youth Connekt Africa avec un portrait en noir et blanc et le message « L’Afrique que nous méritons commence avec nous ».",
        "Campagne sociale — portrait et engagement.",
      ),
    ],
  },
  {
    slug: "laborex-voeux-2026",
    title: "Laborex — Vœux 2026",
    subtitle:
      "Carte de vœux, roll-up et carnet pour une entreprise de santé",
    client: "Laborex CFAO Healthcare Burkina Faso",
    year: "2026",
    location: "Ouagadougou, Burkina Faso",
    sector: "Santé & distribution pharmaceutique",
    categories: [
      "Édition & rapports",
      "Identité visuelle & branding",
      "Communication institutionnelle",
    ],
    summary:
      "Une carte de vœux print et digitale, un roll-up et un carnet pour souder les équipes autour d’une même signature graphique.",
    context:
      "Le dossier source réunit les supports de vœux 2026 de Laborex CFAO Healthcare : carte digitale et recto print, roll-up « Unis pour la référence » et carnet « Cohésion, Synergie, Leadership ».",
    objective:
      "Adresser les vœux aux partenaires et aux équipes avec une série cohérente, à la fois institutionnelle et chaleureuse.",
    role:
      "Direction créative et conception graphique senior — conception des supports de vœux.",
    deliverables: [
      "Carte de vœux digitale",
      "Carte de vœux print",
      "Roll-up « Unis pour la référence »",
      "Carnet « Cohésion, Synergie, Leadership »",
    ],
    constraints: [
      "Charte Laborex",
      "Double public : équipes et partenaires",
      "Formats print et digital",
      "Photographies d’équipe",
    ],
    approach: [
      "Vert profond et bleu nuit",
      "Motifs graphiques discrets et typographie sans-serif",
      "Une signature commune sur les trois supports",
      "Hiérarchie simple entre marque, message et année",
    ],
    relevance:
      "Il montre la capacité à décliner un même message de vœux sur des supports éditoriaux, événementiels et imprimés.",
    rightsNote:
      "Les supports sont reproduits tels que fournis. Les personnes photographiées ne sont pas nommées. Le brief et le commanditaire direct ne figurent pas dans le dossier.",
    verification: "confirmé",
    featured: true,
    order: 12,
    images: [
      img(
        "laborex/voeux-digital",
        1080,
        1620,
        [480, 800, 1080],
        "Carte de vœux digitale Laborex 2026, fond blanc, motifs graphiques verts et bleu nuit.",
        "Carte de vœux digitale — 2026.",
      ),
      img(
        "laborex/voeux-print",
        2160,
        1080,
        [480, 800, 1200, 1800, 2160],
        "Carte de vœux print Laborex 2026, recto avec le logo et le message « Bonne et heureuse année ».",
        "Carte de vœux print — 2026.",
      ),
      img(
        "laborex/roll-up",
        5000,
        4000,
        [480, 800, 1200, 1800, 2400],
        "Roll-up Laborex « Unis pour la référence » installé sur un fond gris.",
        "Roll-up — « Unis pour la référence ».",
      ),
      img(
        "laborex/carnet",
        4000,
        3000,
        [480, 800, 1200, 1800, 2400],
        "Carnet Laborex « Cohésion, Synergie, Leadership » avec une photographie d’équipe.",
        "Carnet — « Cohésion, Synergie, Leadership ».",
      ),
    ],
  },
  {
    slug: "greenmax-capital",
    title: "GreenMax Capital Group",
    subtitle:
      "Un profil institutionnel pour le financement climatique en Afrique",
    client: "GreenMax Capital Group",
    year: "2026",
    location: "Cameroun — dossier source",
    sector: "Finance climatique & énergie",
    categories: [
      "Édition & rapports",
      "Communication institutionnelle",
      "Infographies & data visualisation",
    ],
    summary:
      "Un profil institutionnel et une brochure pour présenter une plateforme de financement climatique : mise en page, cartes, schémas et hiérarchie de l’information.",
    context:
      "Le dossier source contient un profil institutionnel daté d’avril 2026, une brochure et des pages de présentation. Le document présente l’organisation, ses secteurs prioritaires, ses implantations et ses véhicules d’investissement. Il est marqué confidentiel.",
    objective:
      "Mettre en page un document institutionnel dense — cartes, schémas, chiffres et textes — destiné à des interlocuteurs institutionnels et financiers.",
    role:
      "Direction créative et conception graphique senior — conception graphique et mise en page du profil institutionnel.",
    deliverables: [
      "Profil institutionnel — couverture et pages de présentation",
      "Brochure imprimée",
      "Cartes d’implantation et schémas d’organisation",
      "Pages de secteurs prioritaires",
    ],
    constraints: [
      "Contenu confidentiel",
      "Densité de données et de schémas",
      "Cohérence entre brochure et présentation",
      "Document en anglais",
    ],
    approach: [
      "Une grille éditoriale sobre et des pages de respiration",
      "Des cartes et schémas traités comme des objets graphiques",
      "Une palette verte et bleu nuit",
      "Une hiérarchie nette entre titres, chiffres et commentaires",
    ],
    relevance:
      "Il montre une pratique de l’édition institutionnelle appliquée à un acteur du financement climatique, avec des contenus denses et des schémas.",
    rightsNote:
      "Dossier marqué « Confidential — for recipient use only » par GreenMax Capital Group. Seule la couverture du profil institutionnel est reproduite ; les pages internes (structure, portefeuille, données chiffrées) ne sont pas publiées. Le brief et le périmètre exact ne figurent pas dans le dossier. Diffusion publique à valider avec le client.",
    verification: "confirmé",
    confidential: true,
    featured: false,
    order: 13,
    images: [
      img(
        "greenmax/couverture",
        4000,
        2250,
        [480, 800, 1200, 1800, 2400],
        "Couverture du profil institutionnel GreenMax Capital Group, avec le titre « Corporate Profile » et une photographie de panneaux solaires.",
        "Profil institutionnel — couverture, avril 2026.",
      ),
    ],
  },
  {
    slug: "azalai-hotel",
    title: "Azalai Hotel Ouagadougou",
    subtitle:
      "Une série de visuels social media pour l’hôtellerie",
    client: "Azalai Hotel Ouagadougou",
    year: null,
    location: "Ouagadougou, Burkina Faso",
    sector: "Hôtellerie & tourisme",
    categories: [
      "Digital & réseaux sociaux",
      "Campagnes & sensibilisation",
    ],
    summary:
      "Une série de publications pour présenter les chambres, la restauration et les espaces événementiels de l’hôtel, avec une déclinaison cohérente sur mobile.",
    context:
      "Le dossier source réunit neuf visuels social media de l’Azalai Hotel Ouagadougou : vues de l’hôtel, espace de restauration, salle de réunion et mises en avant de séjours. Les visuels intègrent les coordonnées de réservation de l’établissement.",
    objective:
      "Faire exister l’hôtel sur les réseaux avec une série identifiable, en mettant en avant le confort, le design et les services.",
    role:
      "Direction créative et conception graphique senior — conception des visuels social media.",
    deliverables: [
      "Série de visuels social media",
      "Déclinaisons carré et portrait",
      "Visuels séjour, restauration et événementiel",
    ],
    constraints: [
      "Charte Azalai",
      "Photographies d’architecture et de restauration",
      "Coordonnées de réservation à intégrer",
      "Lisibilité sur mobile",
    ],
    approach: [
      "Photo plein cadre et blocs de couleur",
      "Titre bicolore et bandeau de contact",
      "Motif en goutte décliné d’un visuel à l’autre",
      "Adaptation aux formats carrés et verticaux",
    ],
    relevance:
      "Il montre la capacité à décliner une identité hôtelière sur une série de publications, avec une contrainte de lisibilité mobile.",
    rightsNote:
      "Les visuels reproduisent la marque et les coordonnées de l’établissement tels que fournis. L’année de production et le brief ne sont pas précisés dans les sources.",
    verification: "confirmé",
    featured: false,
    order: 14,
    images: [
      img(
        "azalai/experience",
        1080,
        1080,
        [480, 800, 1080],
        "Visuel social de l’Azalai Hotel Ouagadougou montrant un serveur et une invitée dans un espace de réception.",
        "Série social media — accueil et restauration.",
      ),
      img(
        "azalai/mobile",
        2000,
        2000,
        [480, 800, 1200, 2000],
        "Visuel social Azalai avec un téléphone affichant la piscine de l’hôtel et le message « Confort ultime, design raffiné ».",
        "Annonce séjour — confort et design.",
      ),
      img(
        "azalai/architecture",
        2000,
        2000,
        [480, 800, 1200, 2000],
        "Visuel social Azalai montrant la façade illuminée de l’hôtel au bord de l’eau.",
        "Mise en avant de l’architecture.",
      ),
      img(
        "azalai/evenement",
        1080,
        1080,
        [480, 800, 1080],
        "Visuel social Azalai présentant un collage de vues de l’hôtel et le message « L’innovation au service de votre confort ».",
        "Événements et séjours.",
      ),
    ],
  },
  {
    slug: "oeacp-carte-voeux",
    title: "OEACP — Carte de vœux officielle",
    subtitle: "Une carte institutionnelle pour l’Aïd el-Fitr",
    client:
      "OEACP — Organisation des États d’Afrique, des Caraïbes et du Pacifique",
    year: null,
    location: "Bruxelles, Belgique — dossier source",
    sector: "Organisation intergouvernementale",
    categories: [
      "Communication institutionnelle",
      "Digital & réseaux sociaux",
      "Identité visuelle & branding",
    ],
    summary:
      "Une carte de vœux digitale pour l’Aïd, portée par le logo du 50e anniversaire de l’OEACP et une direction visuelle sobre.",
    context:
      "Le dossier source contient une carte de vœux officielle de l’OEACP pour l’Aïd el-Fitr, signée par son Secrétaire général. Le CV mentionne par ailleurs des visuels officiels du 11e Sommet des chefs d’État et de gouvernement (mars 2026), mais ces supports ne figurent pas dans le dossier.",
    objective:
      "Marquer une occasion institutionnelle avec une carte lisible, chaleureuse et conforme à l’identité de l’organisation.",
    role:
      "Direction créative et conception graphique senior — conception graphique de la carte de vœux.",
    deliverables: [
      "Carte de vœux digitale — Aïd el-Fitr",
      "Intégration du logo du 50e anniversaire",
      "Composition pour diffusion institutionnelle",
    ],
    constraints: [
      "Identité OEACP et logo anniversaire",
      "Message officiel signé",
      "Format digital",
      "Équilibre entre solennité et chaleur",
    ],
    approach: [
      "Fond vert profond et lanternes dorées",
      "Calligraphie pour le message de vœu",
      "Hiérarchie entre logo, message et signature",
      "Composition verticale adaptée au digital",
    ],
    relevance:
      "Il documente une communication institutionnelle attentive aux codes culturels et à la représentation officielle.",
    rightsNote:
      "La carte est reproduite telle que fournie. Le nom du signataire figure dans le visuel officiel ; il n’est pas repris dans les textes de la fiche. Le brief et le périmètre exact ne figurent pas dans le dossier. Les visuels du 11e Sommet cités au CV ne sont pas présents dans le dossier.",
    verification: "confirmé",
    featured: false,
    order: 15,
    images: [
      img(
        "oeacp/carte-voeux",
        2000,
        2000,
        [480, 800, 1200, 2000],
        "Carte de vœux officielle de l’OEACP pour l’Aïd el-Fitr : fond vert, lanternes dorées, logo du 50e anniversaire et message « Eid Mubarak ».",
        "Carte de vœux — Aïd el-Fitr.",
      ),
    ],
  },
];

export const projects = [...projectList].sort((a, b) => a.order - b.order);

export const featuredProjects = projects.filter((p) => p.featured);

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);

export const getNextProject = (slug: string) => {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return projects[0];
  return projects[(index + 1) % projects.length];
};

export const categoryCounts = categories.map((category) => ({
  category,
  count: projects.filter((p) => p.categories.includes(category)).length,
}));
