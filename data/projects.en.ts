import { projects, type Project, type ProjectImage } from "./projects";

export const categoriesEn = [
  "Editorial & reports",
  "Institutional communication",
  "Infographics & data visualisation",
  "Campaigns & awareness",
  "Visual identity & branding",
  "Digital & social media",
  "Events",
] as const;

export type CategoryEn = (typeof categoriesEn)[number];

export type ProjectEn = Omit<Project, "categories"> & {
  categories: CategoryEn[];
};

type ImageCopy = Pick<ProjectImage, "alt" | "caption">;

type Translation = {
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  location: string;
  sector: string;
  categories: CategoryEn[];
  summary: string;
  context: string;
  objective: string;
  role: string;
  deliverables: string[];
  constraints: string[];
  approach: string[];
  relevance: string;
  rightsNote: string;
  images: Record<string, ImageCopy>;
};

const translations: Translation[] = [
  {
    slug: "fonds-mwinda",
    title: "Fonds Mwinda",
    subtitle:
      "Institutional identity and editorial system for rural electrification in the DRC",
    client: "Fonds Mwinda / ANSER — Democratic Republic of the Congo",
    location: "Kinshasa, DRC",
    sector: "Energy & development",
    categories: [
      "Visual identity & branding",
      "Editorial & reports",
      "Digital & social media",
    ],
    summary:
      "A full brand system, an annual report, a newsletter and PowerPoint templates: one visual system to speak to funders, operators and communities.",
    context:
      "Fonds Mwinda is the financing vehicle of ANSER, the national agency for rural electrification services in the DRC. Its communication has to hold together audiences with very different expectations: international funders, private operators, public authorities and beneficiary communities. The brand guidelines recall that “trust begins at first glance”.",
    objective:
      "Build a credible identity and an editorial system robust enough to cover stationery, an annual report, a newsletter, presentation templates and social media without losing legibility.",
    role:
      "Creative direction and senior graphic design — brand system and editorial rollout.",
    deliverables: [
      "45-page brand guidelines: logo, palette, typography, iconography, stationery, signage, merchandise",
      "2026 annual report",
      "September 2026 newsletter",
      "PowerPoint templates for teams",
      "Social media adaptations",
    ],
    constraints: [
      "Multiple audiences, from international funder to rural community",
      "High density of text and data",
      "Consistency across print, presentation and digital",
      "ANSER / partner logos and signatures",
    ],
    approach: [
      "A single symbol — lightbulb, hands, map and solar ray — used without variation",
      "A 60-30-10 palette: neutrals, institutional midnight blue, energy yellow",
      "Three type families to distinguish headings, body text and data",
      "Editorial templates so teams can produce without breaking the system",
    ],
    relevance:
      "It demonstrates the ability to design a complete system for a publicly funded institution, from logo to annual report.",
    rightsNote:
      "Only covers and public pages are reproduced. Internal report and brand-guideline data are not published.",
    images: {
      "fonds-mwinda/newsletter": {
        alt: "Cover of the September 2026 Fonds Mwinda newsletter: a solar plant at sunset and the headline “Electrifying the DRC, one village at a time”.",
        caption: "Newsletter cover — September 2026.",
      },
      "fonds-mwinda/rapport-annuel": {
        alt: "Cover of the Fonds Mwinda 2026 annual report, with a photograph of a solar-electrified village and the fund’s logotype.",
        caption: "2026 annual report — cover.",
      },
      "fonds-mwinda/charte": {
        alt: "Cover of the Fonds Mwinda brand guidelines: a hand holding a landscape with the title “Charte graphique”.",
        caption: "Brand guidelines — cover.",
      },
      "fonds-mwinda/charte-photographie": {
        alt: "Double page of the brand guidelines on photography direction, with four field images and framing guidance.",
        caption: "Brand guidelines — photography direction.",
      },
      "fonds-mwinda/papeterie": {
        alt: "Double page presenting the stationery system: letterhead, business card and email signature.",
        caption: "Brand guidelines — stationery and signature.",
      },
      "fonds-mwinda/social": {
        alt: "Fonds Mwinda social visual presenting an electrification project, with partner logos at the foot.",
        caption: "Social adaptation — spotlight on a funded project.",
      },
    },
  },
  {
    slug: "cilss-praps",
    title: "CILSS — Pastoralism & PRAPS",
    subtitle: "Magazine and institutional bulletin for the Sahel",
    client:
      "CILSS — Permanent Inter-State Committee for Drought Control in the Sahel",
    location: "Ouagadougou, Burkina Faso",
    sector: "Rural development & pastoralism",
    categories: [
      "Editorial & reports",
      "Institutional communication",
      "Infographics & data visualisation",
    ],
    summary:
      "A 50th-anniversary magazine and a bimonthly bulletin for PRAPS: fitting technical content, maps and many partner logos into a legible layout.",
    context:
      "In 2023, CILSS celebrated its 50th anniversary. PRAPS, its regional programme supporting pastoralism in the Sahel, published a bimonthly information bulletin for member states and technical and financial partners — the World Bank, European Union, AFD, ECOWAS and WAEMU.",
    objective:
      "Make multi-partner technical and institutional content legible while establishing a stable editorial identity from one issue to the next.",
    role:
      "Creative direction and senior graphic design — editorial design and layout, within Mpixel Agency.",
    deliverables: [
      "Pastoralisme Mag magazine — cover and inside pages",
      "PRAPS bulletin — September 2023 issue",
      "Section, box and photo-page variations",
    ],
    constraints: [
      "Funders’ logo hierarchy",
      "Dense text, tables, maps and field photography",
      "Consistency across several publications",
      "Readability for institutional and field audiences",
    ],
    approach: [
      "A stable grid and recurring sections",
      "A clear typographic hierarchy between headline, standfirst, body and boxes",
      "White space and photo pages to open up technical content",
      "Understated treatment of partner logos",
    ],
    relevance:
      "It demonstrates institutional multi-partner publishing practice, closely aligned with funders’ requirements.",
    rightsNote:
      "The files supplied are 540-px-wide screen exports; print files are not available. The visuals are therefore shown at contained size.",
    images: {
      "cilss/magazine-couverture": {
        alt: "Cover of Pastoralisme Mag devoted to CILSS’s 50th anniversary, with a herd of zebu cattle in the foreground.",
        caption: "Pastoralisme Mag — CILSS 50th anniversary, 1973–2023.",
      },
      "cilss/magazine-interieur": {
        alt: "Inside page of Pastoralisme Mag presenting the PRAPS programme and a photograph of a field meeting.",
        caption: "Pastoralisme Mag — inside page.",
      },
      "cilss/newsletter-couverture": {
        alt: "Cover of the PRAPS bimonthly information bulletin, issue 1, September 2023, with partner logos.",
        caption: "PRAPS bulletin — no. 001, September 2023.",
      },
      "cilss/newsletter-interieur": {
        alt: "Inside page of the PRAPS bulletin with an article on pastoral mobility and two field photographs.",
        caption: "PRAPS bulletin — inside page.",
      },
    },
  },
  {
    slug: "christian-aid-femmes-energie",
    title: "Women and sustainable energy",
    subtitle:
      "A field campaign compliant with European Union visibility rules",
    client: "Christian Aid Burkina Faso — EU-funded project (FED)",
    location: "Burkina Faso",
    sector: "Energy, gender & development",
    categories: [
      "Campaigns & awareness",
      "Digital & social media",
      "Institutional communication",
    ],
    summary:
      "A series of social media visuals telling the story of the EU-funded project’s results with women’s cooperatives, without sacrificing funder visibility requirements.",
    context:
      "The FED project supports women’s cooperatives in processing and marketing agricultural products. The campaign had to make field results visible — solar equipment, infrastructure, access to credit — while complying with European Union visibility rules.",
    objective:
      "Design a series of field visuals, legible on mobile, carrying mandatory logos and statements without smothering beneficiaries’ stories.",
    role:
      "Creative direction and senior graphic design — campaign visual materials, within Mpixel Agency.",
    deliverables: [
      "Social media visuals",
      "Print and digital adaptations",
      "Integration of European Union funding statements",
    ],
    constraints: [
      "European Union visibility guidelines",
      "Christian Aid, CEAS and Réseau MARP logos",
      "Photographs and beneficiaries’ words",
      "Legibility on small screens",
    ],
    approach: [
      "Full-bleed photography and documentary treatment",
      "A short text block, one idea per visual",
      "Signature red band and a clear logo hierarchy",
      "Funding statements integrated without competing with the message",
    ],
    relevance:
      "It is the most direct example of an NGO and funder campaign: visibility, compliance and field narrative in a single format.",
    rightsNote:
      "People and testimonials in the source materials are not reproduced as named quotations.",
    images: {
      "christian-aid/campagne-produits": {
        alt: "Campaign visual showing women carrying agricultural produce on a dirt road.",
        caption: "Production and marketing by the cooperatives.",
      },
      "christian-aid/campagne-portrait": {
        alt: "Campaign visual showing a FED project beneficiary holding a bag of rice, with Christian Aid and European Union logos.",
        caption: "“Women and sustainable energy” campaign — beneficiary portrait.",
      },
      "christian-aid/campagne-transformation": {
        alt: "Campaign visual showing two women working on a drying floor, with partner logos.",
        caption: "Processing agricultural products at a cooperative.",
      },
      "christian-aid/campagne-cooperative": {
        alt: "Campaign visual showing a group of women gathered in a field, with partner logos.",
        caption: "Cooperative supported by the FED project.",
      },
    },
  },
  {
    slug: "projet-idea",
    title: "I.D.E.A. Project",
    subtitle: "Giving visible identity to child protection in Côte d’Ivoire",
    client: "I.D.E.A. Project — Côte d’Ivoire, with ONECI and its partners",
    location: "Abidjan, Bouaké, Bouna, Boundiali — Côte d’Ivoire",
    sector: "Child protection & civil registration",
    categories: [
      "Campaigns & awareness",
      "Visual identity & branding",
      "Events",
    ],
    summary:
      "Notebooks, pull-up banners and T-shirts for a project linking birth registration, maternal health and families’ economic resilience.",
    context:
      "The I.D.E.A. project (Identity, Rights, Empowerment and Access to essential services) aims to protect children and strengthen communities in Côte d’Ivoire. It works on birth registration, access to maternal and child health services and the economic resilience of vulnerable families in four parts of the country.",
    objective:
      "Give a multi-partner project a visible, consistent identity, with a simple message: a birth certificate is the first door to rights.",
    role:
      "Graphic design consultant — creative direction and senior graphic design of visibility materials.",
    deliverables: ["A5 notebooks", "Pull-up banners", "T-shirts"],
    constraints: [
      "Numerous logos and institutional hierarchy",
      "Sensitive social message",
      "Event formats and objects",
      "Mixed audience: communities, authorities, partners",
    ],
    approach: [
      "A pattern of coloured waves, inspired by fabrics, as a running thread",
      "Condensed typography for key messages",
      "Colour blocks separating objective, components and areas",
      "Adaptation across paper, textile and signage",
    ],
    relevance:
      "It shows how a child protection project can be made visible and understandable in the field, beyond the report.",
    rightsNote:
      "The project is presented from the materials supplied; the direct commissioning client is not named in the file.",
    images: {
      "idea/kakemonos": {
        alt: "Two I.D.E.A. project pull-up banners installed in a studio, with the coloured-wave pattern and partner logos.",
        caption: "I.D.E.A. project pull-up banners.",
      },
      "idea/bloc-notes": {
        alt: "Cover of the I.D.E.A. project notebook with the message “A birth certificate, for a legal existence”.",
        caption: "Notebook — “A birth certificate, for a legal existence”.",
      },
      "idea/tshirts": {
        alt: "Two white I.D.E.A. project T-shirts, front and back, with the coloured-wave pattern and partner logos.",
        caption: "T-shirts — textile adaptation.",
      },
    },
  },
  {
    slug: "plan-international-tchad",
    title: "Plan International Chad",
    subtitle: "Children’s rights: a campaign that leaves the screen",
    client: "Plan International Chad",
    location: "Chad",
    sector: "Children’s rights & education",
    categories: [
      "Campaigns & awareness",
      "Visual identity & branding",
      "Events",
      "Digital & social media",
      "Infographics & data visualisation",
    ],
    summary:
      "Mural, pull-up banners, merchandise and social visuals: one visual language carrying children’s rights into public space and onto mobile.",
    context:
      "Plan International Chad communicates on child protection, equality and education, particularly through “Children on the Move”. The materials must work at large scale — wall, banner, vest — as well as in a social feed.",
    objective:
      "Create a visual language identifiable in public space and on mobile while respecting Plan International’s international brand.",
    role:
      "Creative direction and senior graphic design — campaign materials, mural and print and digital adaptations.",
    deliverables: [
      "Mural",
      "Pull-up banners",
      "Merchandise: vests, caps",
      "Social media visuals",
      "Map of intervention areas",
    ],
    constraints: [
      "Plan International international brand",
      "Funder logos",
      "Highly varied formats, from wall to carousel",
      "Legibility at a distance and on small screens",
    ],
    approach: [
      "Short messages carried by photography and illustration",
      "Blue, yellow and orange colour blocks for structure",
      "Strict adaptation across all formats",
      "A simple map locating the intervention",
    ],
    relevance:
      "It proves that a children’s rights campaign can hold up outdoors, on a wall, as well as in a carousel.",
    rightsNote:
      "The visuals show children and communities; they are reproduced as supplied, without naming individuals. The 2025–2026 timeframe was provided by Jean Marc Mahonté (October 2026).",
    images: {
      "plan-international/chaque-enfant-compte": {
        alt: "Plan International visual with a smiling child and the message “Every child counts, every dream matters”.",
        caption: "“Every child counts, every dream matters.”",
      },
      "plan-international/fresque": {
        alt: "Plan International mural depicting a baobab, children and houses, installed on an exterior wall.",
        caption: "Mural — Children on the Move.",
      },
      "plan-international/droits-enfant": {
        alt: "Visual presenting the African Charter on the Rights and Welfare of the Child, with an illustrated map of Africa.",
        caption:
          "African Charter on the Rights and Welfare of the Child — child-friendly version.",
      },
      "plan-international/kakemono": {
        alt: "Two Plan International “Children on the Move” pull-up banners shown in a studio.",
        caption: "Pull-up banners — Children on the Move.",
      },
      "plan-international/carte-intervention": {
        alt: "Map of Plan International’s intervention areas in Chad, with province names.",
        caption: "Map of intervention areas in Chad.",
      },
      "plan-international/education": {
        alt: "Plan International social visual showing girls in a classroom, with the message “Education is the key to every possibility”.",
        caption:
          "Education strand — “Education is the key to every possibility”.",
      },
    },
  },
  {
    slug: "wateraid-tour-du-faso",
    title: "WaterAid — Tour du Faso 2021",
    subtitle: "Water and sanitation along the race route",
    client: "WaterAid Burkina Faso",
    location: "Burkina Faso",
    sector: "Water, hygiene & sanitation",
    categories: [
      "Campaigns & awareness",
      "Digital & social media",
      "Events",
    ],
    summary:
      "A visibility campaign for a popular sporting event: WaterAid’s cause in the peloton, on social media and at the roadside.",
    context:
      "WaterAid was a partner of the 2021 Tour du Faso. The brand needed a presence along the route, in social content and with the public, with messages on water, sanitation and handwashing.",
    objective:
      "Make a technical cause visible within a popular sporting event without losing message clarity.",
    role:
      "Creative direction and senior graphic design — event communication materials, within Mpixel Agency.",
    deliverables: [
      "Social media visuals",
      "Event adaptations",
      "Campaign messages",
    ],
    constraints: [
      "Field photography",
      "WaterAid and Tour du Faso logos",
      "Short, legible copy",
      "Outdoor and mobile contexts",
    ],
    approach: [
      "Full-bleed photography and a blue band",
      "One sentence, one figure, one action",
      "Consistent WaterAid signature",
      "Adaptation to social formats",
    ],
    relevance:
      "It shows the ability to give a cause a presence at a mass-audience event, with little space and many constraints.",
    rightsNote:
      "Figures in the visuals are WaterAid campaign messages, not data produced for this portfolio.",
    images: {
      "wateraid/parcours": {
        alt: "WaterAid visual integrated into the Tour du Faso route, with a campaign message on sanitation and spectators at the roadside.",
        caption: "Campaign installation along the Tour du Faso route.",
      },
      "wateraid/tour-du-faso": {
        alt: "WaterAid visual showing a solar water dispenser installed at the Tour du Faso site.",
        caption: "Handwashing at the heart of the event installation.",
      },
      "wateraid/lavage-mains": {
        alt: "WaterAid visual showing a handwashing demonstration in front of the Tour du Faso audience.",
        caption: "Handwashing demonstration at the start village.",
      },
    },
  },
  {
    slug: "cnps-newsletter",
    title: "CNPS — Transformation newsletter",
    subtitle: "An internal publication to drive change",
    client: "CNPS — National Social Insurance Fund, Côte d’Ivoire",
    location: "Abidjan, Côte d’Ivoire",
    sector: "Social protection",
    categories: [
      "Editorial & reports",
      "Institutional communication",
      "Digital & social media",
    ],
    summary:
      "A five-page newsletter explaining a customer-relationship transformation to staff and members, without jargon.",
    context:
      "CNPS was undertaking a customer-relationship transformation: omnichannel CRM, contact centre, ambassadors, new procedures. Management needed to explain the change to teams and members.",
    objective:
      "Design a readable, human and institutional publication capable of carrying a transformation message without jargon.",
    role:
      "Creative direction and senior graphic design — editorial design, layout and social adaptations.",
    deliverables: [
      "Five-page newsletter",
      "Social media visuals",
      "Merchandise adaptations",
    ],
    constraints: [
      "CNPS brand",
      "Institutional tone",
      "Photographs of executives",
      "Dense content",
    ],
    approach: [
      "A magazine cover with a portrait",
      "Short sections and boxes",
      "A stable page flow",
      "A consistent social adaptation",
    ],
    relevance:
      "It shows the ability to turn internal content into a clear, human editorial object.",
    rightsNote:
      "Only finalised pages are shown; working pages from the source file are not published.",
    images: {
      "cnps/newsletter-couverture": {
        alt: "Cover of the January 2025 CNPS newsletter, with the director’s portrait and the headline “Together, let’s transform the customer experience”.",
        caption: "CNPS newsletter — January 2025.",
      },
      "cnps/newsletter-conclusion": {
        alt: "Inside page of the CNPS newsletter presenting commitments and the conclusion.",
        caption: "Inside page — commitments and call to action.",
      },
      "cnps/social": {
        alt: "CNPS social visual with hands holding puzzle pieces and the message “Together, let’s transform the customer experience”.",
        caption: "Social adaptation of the internal campaign.",
      },
      "cnps/goodies": {
        alt: "CNPS mugs and promotional items on a light background.",
        caption: "Merchandise — campaign identity adaptation.",
      },
    },
  },
  {
    slug: "association-warassa",
    title: "Warassa Association",
    subtitle: "Launching a centre for women, children and families",
    client: "Warassa Association, Chad",
    location: "Chad",
    sector: "Solidarity & women’s empowerment",
    categories: [
      "Campaigns & awareness",
      "Visual identity & branding",
      "Events",
    ],
    summary:
      "A dignified, warm launch campaign for a welcome centre, with posters, a pull-up banner, a mobile panel and social visuals.",
    context:
      "The Warassa Association was opening a welcome and support centre for women, children and families. The launch on 3 and 4 May 2025 included an inauguration, a showroom, round tables and master classes.",
    objective:
      "Give a social project a dignified, warm and credible image, and attract both the public and partners.",
    role:
      "Creative direction and senior graphic design as creative director — launch campaign and event materials.",
    deliverables: [
      "A3 posters",
      "Pull-up banner",
      "Mobile panel",
      "Social visuals",
      "Invitations",
    ],
    constraints: [
      "Association brand",
      "Partner logos",
      "Sensitive photographs",
      "Print and digital formats",
    ],
    approach: [
      "Documentary photography, without pity",
      "Calligraphic headlines and a blue, green and ochre palette",
      "Clear hierarchy: event, dates, programme, partners",
      "Adaptation from poster to social format",
    ],
    relevance:
      "It shows social communication that remains dignified: people are shown as actors, not victims.",
    rightsNote:
      "The visuals reproduce real people; they are presented as supplied by the association.",
    images: {
      "warassa/affiche": {
        alt: "Poster for the launch of the Warassa Centre with a portrait of a woman carrying a load on her head and the dates 3 and 4 May 2025.",
        caption: "A3 poster — Warassa Centre launch.",
      },
      "warassa/campagne": {
        alt: "Warassa Centre social visual showing a mother and child, with the launch title and dates.",
        caption: "Social visual — Warassa Centre launch.",
      },
      "warassa/kakemono": {
        alt: "Warassa Centre pull-up banner installed indoors, with a photograph and the launch programme.",
        caption: "Pull-up banner — launch programme.",
      },
      "warassa/invitation": {
        alt: "Warassa Centre invitation with a portrait of a woman and practical event information.",
        caption: "Digital invitation — 3 and 4 May 2025.",
      },
    },
  },
  {
    slug: "coris-bank-tchad",
    title: "Coris Bank International Chad",
    subtitle: "A complete launch installation, from stage to social media",
    client: "Coris Bank International Chad",
    location: "Chad",
    sector: "Banking & financial services",
    categories: [
      "Visual identity & branding",
      "Institutional communication",
      "Events",
      "Digital & social media",
    ],
    summary:
      "Stage backdrop, easels, signage and social visuals: one graphic system supporting Coris Bank International’s launch in Chad.",
    context:
      "Coris Bank International was officially launching its operations in Chad. The installation had to hold together the official ceremony, press conference, guest reception, stage and social media, with demanding legibility at a distance.",
    objective:
      "Give the launch a consistent visual presence — from stage backdrop to social posts — without losing logo and institutional message legibility.",
    role:
      "Creative direction and senior graphic design of the launch installation, within Sixième Sens SA.",
    deliverables: [
      "Stage backdrop and ceremony dressing",
      "Reception and ceremony easels",
      "Social media visuals",
      "Print and signage adaptations",
      "Press conference materials",
    ],
    constraints: [
      "Legibility at a distance on stage and on easels",
      "Consistency between print materials and social formats",
      "Presence of the logo and official statements",
      "Adaptation across several event touchpoints",
    ],
    approach: [
      "A dominant institutional blue, with a red and black geometric pattern for event materials",
      "A simple hierarchy: logo, event, practical information",
      "Distinct social visuals for savings, digital banking and the press conference",
      "Adaptation from stage backdrop to reception easels",
    ],
    relevance:
      "It demonstrates the ability to deliver a complete launch installation for a financial institution, from stage to social media, with strong visibility constraints.",
    rightsNote:
      "The visuals come from the production and presentation materials supplied. No guest names or personal data are reproduced. Social campaign performance is not documented and is therefore not published.",
    images: {
      "coris/ceremonie": {
        alt: "Presentation simulation of the Coris Bank International Chad launch installation: stage backdrop, counter, easels and graphic dressing.",
        caption: "Launch installation — overview.",
      },
      "coris/soiree": {
        alt: "Photograph of the Coris Bank International Chad launch evening, with an artist on stage in front of the backdrop.",
        caption: "Launch evening — field view.",
      },
      "coris/fond-scene": {
        alt: "Blue stage backdrop for the official Coris Bank International Chad launch ceremony, with the logo and a graphic pattern.",
        caption: "Stage backdrop — official ceremony.",
      },
      "coris/chevalet-accueil": {
        alt: "Red and blue reception easel for the official Coris Bank International Chad launch ceremony.",
        caption: "Reception easel.",
      },
      "coris/chevalet-ceremonie": {
        alt: "Ceremony easel with an integrated screen showing the Coris Bank International Chad launch visual.",
        caption: "Ceremony easel — integrated screen.",
      },
      "coris/social-epargne": {
        alt: "Coris Bank “Coris Premier Pas” social visual showing a father carrying his child, with a message about savings.",
        caption: "Social visual — savings and family.",
      },
      "coris/social-conference": {
        alt: "Social visual announcing the Coris Bank International Chad launch press conference, with a map, African flags and a hand holding the Chadian flag.",
        caption: "Social visual — press conference.",
      },
      "coris/social-digitale": {
        alt: "Coris Bank social visual on digital banking, with a bank card held in hand and the message “My digital bank”.",
        caption: "Social visual — digital banking.",
      },
    },
  },
  {
    slug: "canal-plus-tchad",
    title: "Canal+ Chad",
    subtitle: "A welcome installation for the brand launch",
    client: "Canal+ Chad",
    location: "Chad",
    sector: "Media & television",
    categories: ["Institutional communication", "Events"],
    summary:
      "Three welcome easels and a brand cube giving Canal+ a physical presence at a launch in Chad.",
    context:
      "The materials supplied document a welcome installation for Canal+’s launch in Chad: three easel variants and a brand cube. The brief, direct client and production context are not specified in the sources.",
    objective:
      "Signal the event from the welcome point and install the brand in the space, with a simple message and consistent adaptation across several materials.",
    role:
      "Creative direction and senior graphic design — design of the welcome easels and brand cube.",
    deliverables: [
      "Three welcome easel variants",
      "Canal+ brand cube",
      "Logo adaptations on black",
    ],
    constraints: [
      "Canal+ brand",
      "White logo on black",
      "Printed materials presented on wooden easels",
      "Message legible at a distance",
    ],
    approach: [
      "A black background and a discreet graphic grid",
      "Three grid variations for a single welcome message",
      "A brand cube extending the installation into the space",
      "A simple hierarchy: brand, message, context",
    ],
    relevance:
      "It documents the application of an international brand to welcome and event signage, under a strict brand guideline.",
    rightsNote:
      "The visuals are presentation simulations supplied in the file, not photographs of the event. Production context, year and direct client are not specified in the sources; use of the brand remains to be validated.",
    images: {
      "canal/chevalet-1": {
        alt: "Presentation simulation of a Canal+ welcome easel on a black background, with the message “Welcome to the CANAL+ launch”.",
        caption: "Welcome easel — variant 1.",
      },
      "canal/chevalet-2": {
        alt: "Presentation simulation of a Canal+ welcome easel with a fan-shaped graphic grid.",
        caption: "Welcome easel — variant 2.",
      },
      "canal/chevalet-3": {
        alt: "Presentation simulation of a Canal+ welcome easel with a small-dot grid.",
        caption: "Welcome easel — variant 3.",
      },
      "canal/cube": {
        alt: "Simulation of a black three-sided signage cube with the Canal+ logo in white.",
        caption: "Brand cube — signage.",
      },
    },
  },
  {
    slug: "youth-connekt-madagascar",
    title: "Youth Connekt Africa Summit 2025",
    subtitle:
      "Visual identity and communication for the youth summit in Madagascar",
    client: "Youth Connekt Africa Summit 2025 — Madagascar",
    location: "Madagascar",
    sector: "Youth & development",
    categories: [
      "Institutional communication",
      "Campaigns & awareness",
      "Digital & social media",
      "Events",
    ],
    summary:
      "A support presentation and a series of social media visuals for the Youth Connekt Africa 2025 summit in Madagascar, built around one signature: “The Africa We Want”.",
    context:
      "The Youth Connekt Africa Summit 2025 took place in Madagascar. The materials supplied present the summit context, its issues — youth employability, entrepreneurship, civic engagement — and the support offer proposed to participants. The social campaign rolls out the message “The Africa we want starts with us”.",
    objective:
      "Give the summit a consistent visual expression, from the presentation document to social posts, and make the issues legible for a young, pan-African audience.",
    role:
      "Creative direction and senior graphic design — presentation, social campaign and adaptations.",
    deliverables: [
      "Support offer presentation",
      "Social media visuals",
      "Adaptations of “The Africa We Want” campaign",
      "Context and issues slides",
    ],
    constraints: [
      "Youth Connekt Africa brand",
      "Young, pan-African audience",
      "Social formats and presentation",
      "Institutional and engagement messages",
    ],
    approach: [
      "Deep green, orange and geometric patterns",
      "Photographs of young people and network compositions",
      "A calligraphic signature for “The Africa We Want”",
      "Adaptation from slide to social post",
    ],
    relevance:
      "It shows the ability to carry a pan-African message across institutional and social materials, with an assured creative direction.",
    rightsNote:
      "The visuals reproduce real people and the Youth Connekt Africa brand as supplied. No participant names are published. The year, country and role were provided by Jean Marc Mahonté (October 2026); summit outcomes are not documented in the sources.",
    images: {
      "youth/campagne": {
        alt: "Youth Connekt Africa social visual for the 2025 summit in Madagascar, with a portrait and the message “The Africa we want is now”.",
        caption: "Social campaign — “The Africa we want is now”.",
      },
      "youth/contexte": {
        alt: "Presentation slide for the Youth Connekt Africa Summit 2025 in Madagascar, with a landscape photograph and the summit issues.",
        caption: "Presentation — summit context and issues.",
      },
      "youth/accompagnement": {
        alt: "Slide presenting event support: communication, activation, logistics and media coverage.",
        caption: "Presentation — support offer.",
      },
      "youth/reseau-vert": {
        alt: "Youth Connekt Africa social visual with a network of portraits and the message “Connecting our voices to embody the Africa we want”.",
        caption: "Social campaign — connecting voices.",
      },
      "youth/reseau-bleu": {
        alt: "Youth Connekt Africa social visual with portraits linked in a network against a blue sky and baobabs.",
        caption: "Social campaign — networks and territories.",
      },
      "youth/portrait-orange": {
        alt: "Youth Connekt Africa social visual with a portrait of a young woman and the message “The Africa we want starts with us”.",
        caption: "Social campaign — portrait and message.",
      },
      "youth/portrait": {
        alt: "Youth Connekt Africa social visual with a black-and-white portrait and the message “The Africa we want starts with us”.",
        caption: "Social campaign — portrait and engagement.",
      },
    },
  },
  {
    slug: "laborex-voeux-2026",
    title: "Laborex — 2026 Season’s Greetings",
    subtitle: "Greeting card, roll-up and notebook for a healthcare company",
    client: "Laborex CFAO Healthcare Burkina Faso",
    location: "Ouagadougou, Burkina Faso",
    sector: "Health & pharmaceutical distribution",
    categories: [
      "Editorial & reports",
      "Visual identity & branding",
      "Institutional communication",
    ],
    summary:
      "A print and digital greeting card, a roll-up and a notebook to bring teams together around one graphic signature.",
    context:
      "The source file brings together Laborex CFAO Healthcare’s 2026 greetings materials: digital card and print front, the “United for reference” roll-up and the “Cohesion, Synergy, Leadership” notebook.",
    objective:
      "Send greetings to partners and teams with a consistent series that is both institutional and warm.",
    role:
      "Creative direction and senior graphic design — design of the greetings materials.",
    deliverables: [
      "Digital greeting card",
      "Print greeting card",
      "Roll-up — “United for reference”",
      "Notebook — “Cohesion, Synergy, Leadership”",
    ],
    constraints: [
      "Laborex brand",
      "Dual audience: teams and partners",
      "Print and digital formats",
      "Team photographs",
    ],
    approach: [
      "Deep green and midnight blue",
      "Discreet graphic motifs and sans-serif typography",
      "A shared signature across the three materials",
      "Simple hierarchy between brand, message and year",
    ],
    relevance:
      "It shows the ability to adapt a single greetings message across editorial, event and printed materials.",
    rightsNote:
      "The materials are reproduced as supplied. The people photographed are not named. The brief and direct client are not included in the file.",
    images: {
      "laborex/voeux-digital": {
        alt: "Laborex 2026 digital greeting card, white background, green and midnight-blue graphic motifs.",
        caption: "Digital greeting card — 2026.",
      },
      "laborex/voeux-print": {
        alt: "Laborex 2026 print greeting card, front with the logo and the message “Happy New Year”.",
        caption: "Print greeting card — 2026.",
      },
      "laborex/roll-up": {
        alt: "Laborex “United for reference” roll-up installed on a grey background.",
        caption: "Roll-up — “United for reference”.",
      },
      "laborex/carnet": {
        alt: "Laborex “Cohesion, Synergy, Leadership” notebook with a team photograph.",
        caption: "Notebook — “Cohesion, Synergy, Leadership”.",
      },
    },
  },
  {
    slug: "greenmax-capital",
    title: "GreenMax Capital Group",
    subtitle: "An institutional profile for climate finance in Africa",
    client: "GreenMax Capital Group",
    location: "Cameroon — source file",
    sector: "Climate finance & energy",
    categories: [
      "Editorial & reports",
      "Institutional communication",
      "Infographics & data visualisation",
    ],
    summary:
      "An institutional profile and brochure presenting a climate finance platform: layout, maps, diagrams and information hierarchy.",
    context:
      "The source file contains an institutional profile dated April 2026, a brochure and presentation pages. The document presents the organisation, its priority sectors, locations and investment vehicles. It is marked confidential.",
    objective:
      "Lay out a dense institutional document — maps, diagrams, figures and text — intended for institutional and financial audiences.",
    role:
      "Creative direction and senior graphic design — graphic design and layout of the institutional profile.",
    deliverables: [
      "Institutional profile — cover and presentation pages",
      "Printed brochure",
      "Location maps and organisation diagrams",
      "Priority-sector pages",
    ],
    constraints: [
      "Confidential content",
      "Density of data and diagrams",
      "Consistency between brochure and presentation",
      "Document in English",
    ],
    approach: [
      "A restrained editorial grid and breathing pages",
      "Maps and diagrams treated as graphic objects",
      "A green and midnight-blue palette",
      "A clear hierarchy between headings, figures and commentary",
    ],
    relevance:
      "It shows institutional publishing practice applied to a climate finance player, with dense content and diagrams.",
    rightsNote:
      "File marked “Confidential — for recipient use only” by GreenMax Capital Group. Only the cover of the institutional profile is reproduced; internal pages (structure, portfolio, figures) are not published. The brief and exact scope are not included in the file. Public distribution to be validated with the client.",
    images: {
      "greenmax/couverture": {
        alt: "Cover of the GreenMax Capital Group institutional profile, with the title “Corporate Profile” and a photograph of solar panels.",
        caption: "Institutional profile — cover, April 2026.",
      },
    },
  },
  {
    slug: "azalai-hotel",
    title: "Azalai Hotel Ouagadougou",
    subtitle: "A social media visual series for hospitality",
    client: "Azalai Hotel Ouagadougou",
    location: "Ouagadougou, Burkina Faso",
    sector: "Hospitality & tourism",
    categories: ["Digital & social media", "Campaigns & awareness"],
    summary:
      "A series of posts presenting the hotel’s rooms, dining and event spaces, with a consistent mobile-first adaptation.",
    context:
      "The source file contains nine Azalai Hotel Ouagadougou social media visuals: hotel views, dining space, meeting room and stay highlights. The visuals include the establishment’s booking details.",
    objective:
      "Give the hotel a recognisable presence on social media, highlighting comfort, design and services.",
    role:
      "Creative direction and senior graphic design — design of the social media visuals.",
    deliverables: [
      "Social media visual series",
      "Square and portrait adaptations",
      "Stay, dining and event visuals",
    ],
    constraints: [
      "Azalai brand",
      "Architecture and dining photography",
      "Booking details to include",
      "Mobile legibility",
    ],
    approach: [
      "Full-bleed photography and colour blocks",
      "Two-tone headline and a contact band",
      "A droplet motif carried from one visual to the next",
      "Adaptation to square and vertical formats",
    ],
    relevance:
      "It shows the ability to adapt a hotel identity across a series of posts, with a mobile legibility constraint.",
    rightsNote:
      "The visuals reproduce the establishment’s brand and contact details as supplied. Production year and brief are not specified in the sources.",
    images: {
      "azalai/experience": {
        alt: "Azalai Hotel Ouagadougou social visual showing a waiter and a guest in a reception space.",
        caption: "Social media series — welcome and dining.",
      },
      "azalai/mobile": {
        alt: "Azalai social visual with a phone displaying the hotel pool and the message “Ultimate comfort, refined design”.",
        caption: "Stay announcement — comfort and design.",
      },
      "azalai/architecture": {
        alt: "Azalai social visual showing the hotel’s illuminated façade by the water.",
        caption: "Architecture highlight.",
      },
      "azalai/evenement": {
        alt: "Azalai social visual showing a collage of hotel views and the message “Innovation at the service of your comfort”.",
        caption: "Events and stays.",
      },
    },
  },
  {
    slug: "oeacp-carte-voeux",
    title: "OACPS — Official greeting card",
    subtitle: "An institutional card for Eid al-Fitr",
    client:
      "OACPS — Organisation of African, Caribbean and Pacific States",
    location: "Brussels, Belgium — source file",
    sector: "Intergovernmental organisation",
    categories: [
      "Institutional communication",
      "Digital & social media",
      "Visual identity & branding",
    ],
    summary:
      "A digital Eid greeting card, carried by the OACPS 50th-anniversary logo and a restrained visual direction.",
    context:
      "The source file contains an official OACPS greeting card for Eid al-Fitr, signed by its Secretary-General. The CV also mentions official visuals for the 11th Summit of Heads of State and Government (March 2026), but those materials are not in the file.",
    objective:
      "Mark an institutional occasion with a card that is legible, warm and consistent with the organisation’s identity.",
    role:
      "Creative direction and senior graphic design — graphic design of the greeting card.",
    deliverables: [
      "Digital greeting card — Eid al-Fitr",
      "Integration of the 50th-anniversary logo",
      "Composition for institutional distribution",
    ],
    constraints: [
      "OACPS identity and anniversary logo",
      "Signed official message",
      "Digital format",
      "Balance between solemnity and warmth",
    ],
    approach: [
      "Deep green background and golden lanterns",
      "Calligraphy for the greeting message",
      "Hierarchy between logo, message and signature",
      "Vertical composition suited to digital",
    ],
    relevance:
      "It documents institutional communication attentive to cultural codes and official representation.",
    rightsNote:
      "The card is reproduced as supplied. The signatory’s name appears in the official visual; it is not repeated in the case-study text. The brief and exact scope are not included in the file. The 11th Summit visuals mentioned in the CV are not present in the file.",
    images: {
      "oeacp/carte-voeux": {
        alt: "Official OACPS Eid al-Fitr greeting card: green background, golden lanterns, 50th-anniversary logo and the message “Eid Mubarak”.",
        caption: "Greeting card — Eid al-Fitr.",
      },
    },
  },
];

export const projectsEn: ProjectEn[] = projects.map((project) => {
  const translation = translations.find((item) => item.slug === project.slug);

  if (!translation) {
    throw new Error(`Missing English translation for project "${project.slug}"`);
  }

  const { slug: _slug, images: imageCopy, ...text } = translation;

  return {
    ...project,
    ...text,
    images: project.images.map((image) => ({
      ...image,
      ...(imageCopy[image.base] ?? {}),
    })),
  };
});

export const featuredProjectsEn = projectsEn.filter((project) => project.featured);

export const getProjectEn = (slug: string) =>
  projectsEn.find((project) => project.slug === slug);

export const getNextProjectEn = (slug: string) => {
  const index = projectsEn.findIndex((project) => project.slug === slug);
  if (index === -1) return projectsEn[0];
  return projectsEn[(index + 1) % projectsEn.length];
};
