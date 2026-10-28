import type { Metadata } from "next";
import { AppLink as Link } from "@/components/AppLink";
import { ArrowIcon } from "@/components/ArrowIcon";
import { ArrowLink, Cta } from "@/components/Cta";
import { SectionLabel } from "@/components/SectionLabel";
import { getProject } from "@/data/projects";
import { languageAlternates } from "@/data/seo";
import { reveal } from "@/lib/reveal";

export const metadata: Metadata = {
  title: "Références",
  description:
    "Organisations, programmes et marques pour lesquels Jean Marc Mahonté a conçu des supports : CILSS, OEACP, Christian Aid, WaterAid, Plan International, Youth Connekt, CNPS, Fonds Mwinda, Coris Bank, Canal+, GreenMax, Laborex, Azalai et autres.",
  alternates: languageAlternates("fr", "/references/", "/en/references/"),
  openGraph: {
    title: "Références — Jean Marc Mahonté",
    description:
      "Institutions, ONG, programmes financés par des bailleurs et marques : références professionnelles documentées.",
    url: "/references/",
  },
};

type Reference = {
  name: string;
  type: string;
  context: string;
  year: string;
  caseSlug?: string;
  note?: string;
};

const groups: { title: string; intro: string; items: Reference[] }[] = [
  {
    title: "Institutions, programmes & ONG",
    intro:
      "Organisations pour lesquelles des publications, identités, campagnes ou supports institutionnels ont été conçus.",
    items: [
      {
        name: "CILSS",
        type: "Institution inter-États · Sahel",
        context:
          "Magazine des 50 ans et bulletins d’information du programme PRAPS.",
        year: "2023",
        caseSlug: "cilss-praps",
      },
      {
        name: "OEACP",
        type: "Organisation intergouvernementale",
        context:
          "Carte de vœux officielle de l’Aïd el-Fitr et identité du 50e anniversaire.",
        year: "Non précisée",
        caseSlug: "oeacp-carte-voeux",
        note: "Les visuels du 11e Sommet cités au CV ne sont pas présents dans le dossier.",
      },
      {
        name: "Christian Aid Burkina Faso",
        type: "ONG · Projet FED, Union européenne",
        context:
          "Campagne « Femmes et énergie durable » et supports de visibilité UE.",
        year: "2021 — 2023",
        caseSlug: "christian-aid-femmes-energie",
      },
      {
        name: "WaterAid Burkina Faso",
        type: "ONG · Eau, hygiène et assainissement",
        context:
          "Communication et supports événementiels du Tour du Faso 2021.",
        year: "2021",
        caseSlug: "wateraid-tour-du-faso",
      },
      {
        name: "Plan International Tchad",
        type: "ONG · Droits de l’enfant",
        context:
          "Fresque murale, kakémonos, goodies et visuels de campagne.",
        year: "2025 — 2026",
        caseSlug: "plan-international-tchad",
        note: "Année communiquée par Jean Marc Mahonté.",
      },
      {
        name: "Youth Connekt Africa",
        type: "Programme panafricain · Jeunesse",
        context:
          "Présentation et campagne sociale du sommet 2025 à Madagascar.",
        year: "2025",
        caseSlug: "youth-connekt-madagascar",
        note: "Rôle, année et pays communiqués par Jean Marc Mahonté.",
      },
      {
        name: "Fonds Mwinda / ANSER",
        type: "Fonds public · Électrification rurale, RDC",
        context:
          "Charte graphique, rapport annuel, newsletter et gabarits de présentation.",
        year: "2026",
        caseSlug: "fonds-mwinda",
      },
      {
        name: "CNPS Côte d’Ivoire",
        type: "Institution publique · Protection sociale",
        context:
          "Newsletter de transformation de la relation client et déclinaisons sociales.",
        year: "2025",
        caseSlug: "cnps-newsletter",
      },
      {
        name: "Projet I.D.E.A. / ONECI",
        type: "Projet multi-partenaires · Protection de l’enfance",
        context:
          "Bloc-notes, kakémonos et t-shirts de visibilité du projet en Côte d’Ivoire.",
        year: "2026",
        caseSlug: "projet-idea",
      },
      {
        name: "Association Warassa",
        type: "Association · Solidarité et autonomisation",
        context:
          "Campagne de lancement du centre d’accueil, Tchad.",
        year: "2025",
        caseSlug: "association-warassa",
      },
      {
        name: "Cour des Comptes du Burkina Faso",
        type: "Institution publique",
        context:
          "Identité et supports des Journées portes ouvertes, d’après le CV.",
        year: "2023",
        note: "Dossier source vide. Aucun visuel de ce projet n’est présent dans le dossier.",
      },
      {
        name: "ABB",
        type: "Programme · Partenaires UE, USAID, UNFPA",
        context:
          "Communication multicanale et supports institutionnels, d’après le CV.",
        year: "—",
        note: "Source : CV. Aucun dossier ni visuel de ce projet n’est présent dans les sources.",
      },
    ],
  },
  {
    title: "Secteur privé & événementiel",
    intro:
      "Collaborations dans le secteur privé et l’événementiel, documentées par des supports de production ou citées au CV.",
    items: [
      {
        name: "Coris Bank International Tchad",
        type: "Banque",
        context:
          "Dispositif de lancement : fond de scène, chevalets, signalétique et visuels sociaux.",
        year: "2024 — 2025",
        caseSlug: "coris-bank-tchad",
      },
      {
        name: "Canal+ Tchad",
        type: "Médias & télévision",
        context:
          "Chevalets de bienvenue et cube de marque pour un lancement au Tchad.",
        year: "Non précisée",
        caseSlug: "canal-plus-tchad",
        note: "Les visuels sont des simulations de présentation, non des photographies de l’événement. Année et commanditaire direct non précisés dans les sources.",
      },
      {
        name: "Beaufort Lager",
        type: "Marque",
        context:
          "Activations premium au Tchad : golf, tennis et soirées privées, d’après le CV.",
        year: "2024 — 2025",
      },
      {
        name: "Ecobank / Pan African Microfinance BF",
        type: "Banque · Microfinance",
        context:
          "Communication digitale et refonte graphique web, d’après le CV.",
        year: "2021 — 2023",
        note: "Dossier source vide. Aucun visuel disponible.",
      },
      {
        name: "Telecel Faso / Enter Africa",
        type: "Télécom · Événementiel",
        context:
          "Identité et supports print et digitaux de Bobo Games Week, d’après le CV.",
        year: "2021 — 2023",
        note: "Dossier source vide. Aucun visuel disponible.",
      },
      {
        name: "GreenMax Capital Group",
        type: "Finance climatique",
        context:
          "Profil institutionnel, brochure et pages de présentation.",
        year: "2026",
        caseSlug: "greenmax-capital",
        note: "Dossier marqué confidentiel. Seule la couverture est reproduite ; diffusion publique à valider avec le client.",
      },
      {
        name: "Laborex CFAO Healthcare",
        type: "Santé & distribution pharmaceutique",
        context:
          "Carte de vœux 2026, roll-up et carnet d’équipe.",
        year: "2026",
        caseSlug: "laborex-voeux-2026",
      },
      {
        name: "Azalai Hotel Ouagadougou",
        type: "Hôtellerie & tourisme",
        context:
          "Série de visuels social media pour les séjours, la restauration et l’événementiel.",
        year: "Non précisée",
        caseSlug: "azalai-hotel",
        note: "Année de production non précisée dans les sources.",
      },
    ],
  },
  {
    title: "Agences & structures",
    intro:
      "Les projets présentés ont été réalisés dans ces structures, en indépendant ou en renfort d’équipe.",
    items: [
      {
        name: "Sixième Sens SA",
        type: "Agence de communication · Ouagadougou",
        context: "Directeur créatif & graphiste senior.",
        year: "2024 — présent",
      },
      {
        name: "Mpixel Agency",
        type: "Agence · Ouagadougou",
        context: "Brand designer / Directeur général.",
        year: "2021 — 2023",
      },
      {
        name: "ACIGI",
        type: "Agence · Ouagadougou",
        context: "Senior Graphic & Web Designer.",
        year: "2018 — 2021",
      },
    ],
  },
];

const emptySources = [
  {
    folder: "BDT — Tchad",
    note: "Aucun fichier et aucune mention au CV : aucun rôle ne peut être établi.",
  },
  {
    folder: "Cour des Comptes — Burkina Faso",
    note: "Référence citée au CV (2023) ; aucun visuel disponible.",
  },
  {
    folder: "Ecobank — Burkina Faso",
    note: "Référence citée au CV (2021 — 2023) ; aucun visuel disponible.",
  },
  {
    folder: "Telecel — Burkina Faso",
    note: "Référence citée au CV (2021 — 2023, Bobo Games Week) ; aucun visuel disponible.",
  },
];

type PersonReference = {
  name: string;
  role: string;
  organisation: string;
  missions: string;
  caseSlugs?: string[];
};

const people: PersonReference[] = [
  {
    name: "Aicha Ouedraogo",
    role: "Directrice",
    organisation: "Sixième Sens SA — Ouagadougou",
    missions:
      "Direction créative et conception graphique exercées au sein de l’agence (2024 — présent).",
  },
  {
    name: "Kambou Gabriel",
    role: "Président",
    organisation: "Association des Blogueurs du Burkina (ABB)",
    missions:
      "Cour des Comptes (2023), Christian Aid / FED (2021), WaterAid / Tour du Faso (2021), Blog Awards ABB (2020).",
    caseSlugs: ["christian-aid-femmes-energie", "wateraid-tour-du-faso"],
  },
  {
    name: "Audy-Fred Tetiniam",
    role: "Responsable communication",
    organisation: "Danon’s Group",
    missions: "Ecobank / Pan African Microfinance Burkina Faso (2022).",
  },
  {
    name: "Frederick Laldjim Mianyo",
    role: "Ex-secrétaire",
    organisation: "CTBF",
    missions: "Forum des Tchadiens au Burkina Faso sur la situation du pays (2021).",
  },
  {
    name: "Evelia Gad",
    role: "Country Manager",
    organisation: "Enter Africa / Telecel",
    missions: "Bobo Games Week, Telecel Faso & Enter Africa (2021).",
  },
  {
    name: "Konfè Dada",
    role: "Gérant",
    organisation: "Konfyam — Lino miel naturel",
    missions: "Identité visuelle, étiquettes et packaging (2021).",
  },
];

function ReferenceRow({ reference }: { reference: Reference }) {
  const project = reference.caseSlug
    ? getProject(reference.caseSlug)
    : undefined;

  return (
    <li className="border-b border-line">
      <div className="grid gap-4 py-6 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <h3 className="font-display text-[1.15rem] font-semibold leading-tight tracking-[-0.01em] text-ink">
            {reference.name}
          </h3>
          <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-slate">
            {reference.type}
          </p>
        </div>
        <div className="md:col-span-5">
          <p className="text-sm leading-relaxed text-ink/80">
            {reference.context}
          </p>
          {reference.note ? (
            <p className="mt-2 text-xs leading-relaxed text-ochre-deep">
              {reference.note}
            </p>
          ) : null}
        </div>
        <div className="flex items-start justify-between gap-4 md:col-span-3 md:justify-end">
          <span className="label-mono pt-1 text-slate">{reference.year}</span>
          {project ? (
            <Link
              href={`/projets/${project.slug}/`}
              className="group inline-flex items-center gap-2 text-xs text-ink transition-colors hover:text-teal-deep"
            >
              <span className="link-line">Étude de cas</span>
              <ArrowIcon className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          ) : (
            <span className="label-mono pt-1 text-ink/30">CV</span>
          )}
        </div>
      </div>
    </li>
  );
}

function PersonReferenceRow({ person }: { person: PersonReference }) {
  return (
    <li className="border-b border-line">
      <div className="grid gap-4 py-6 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <h3 className="font-display text-[1.15rem] font-semibold leading-tight tracking-[-0.01em] text-ink">
            {person.name}
          </h3>
          <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-slate">
            {person.role}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-slate">
            {person.organisation}
          </p>
        </div>
        <div className="md:col-span-5">
          <p className="text-sm leading-relaxed text-ink/80">
            {person.missions}
          </p>
          {person.caseSlugs?.length ? (
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
              {person.caseSlugs.map((slug) => {
                const project = getProject(slug);
                return project ? (
                  <Link
                    key={slug}
                    href={`/projets/${project.slug}/`}
                    className="group inline-flex items-center gap-2 text-xs text-ink transition-colors hover:text-teal-deep"
                  >
                    <span className="link-line">{project.title}</span>
                    <ArrowIcon className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                ) : null;
              })}
            </div>
          ) : null}
        </div>
        <div className="flex items-start md:col-span-3 md:justify-end">
          <span className="label-mono pt-1 text-right text-slate">
            Coordonnées sur demande
          </span>
        </div>
      </div>
    </li>
  );
}

export default function ReferencesPage() {
  return (
    <>
      <header className="border-b border-line">
        <div className="shell grid gap-10 pb-14 pt-14 lg:grid-cols-12 lg:pb-20 lg:pt-20">
          <div className="lg:col-span-8">
            <SectionLabel index="Collaborations">Références</SectionLabel>
            <h1 className="display mt-7 max-w-[14ch] text-[clamp(3rem,6.8vw,6rem)]">
              Des causes, des institutions, des marques.
            </h1>
            <p className="text-lead mt-7 max-w-[58ch]">
              Une sélection d’organisations pour lesquelles des supports ont
              été conçus, dans un cadre d’agence ou en indépendant. Les projets
              documentés renvoient à une étude de cas ; les autres sont
              explicitement signalés comme citations du CV.
            </p>
          </div>
          <aside className="self-end lg:col-span-3 lg:col-start-10">
            <p className="border-t border-ink/25 pt-4 text-sm leading-relaxed text-slate">
              Aucun logo n’est reproduit sur cette page. La mention d’une
              organisation ne vaut pas approbation officielle.
            </p>
          </aside>
        </div>
      </header>

      <div className="shell">
        {groups.map((group, groupIndex) => (
          <section
            key={group.title}
            className="border-b border-line py-12 md:py-16"
            {...reveal()}
          >
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <div className="flex items-baseline gap-3">
                  <span className="label-mono text-ink/30">
                    {String(groupIndex + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-xl font-semibold leading-tight tracking-[-0.01em]">
                    {group.title}
                  </h2>
                </div>
                <p className="mt-4 max-w-[32ch] text-sm leading-relaxed text-slate">
                  {group.intro}
                </p>
              </div>
              <div className="lg:col-span-9">
                <ul className="border-t border-line">
                  {group.items.map((reference) => (
                    <ReferenceRow
                      key={reference.name}
                      reference={reference}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section
        className="shell border-b border-line py-12 md:py-16"
        {...reveal()}
      >
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <div className="flex items-baseline gap-3">
              <span className="label-mono text-ink/30">04</span>
              <h2 className="font-display text-xl font-semibold leading-tight tracking-[-0.01em]">
                Références professionnelles
              </h2>
            </div>
            <p className="mt-4 max-w-[34ch] text-sm leading-relaxed text-slate">
              Personnes citées comme références pour les missions conduites.
              Leurs coordonnées ne sont pas publiées afin de préserver leur vie
              privée ; elles sont transmises sur demande, avec leur accord.
            </p>
          </div>
          <div className="lg:col-span-9">
            <ul className="border-t border-line">
              {people.map((person) => (
                <PersonReferenceRow key={person.name} person={person} />
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-slate">
              Pour obtenir une coordonnée, précisez la mission concernée via la{" "}
              <Link
                href="/contact/"
                className="link-line text-ink transition-colors hover:text-teal-deep"
              >
                page de contact
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="shell border-b border-line py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <div className="flex items-baseline gap-3">
              <span className="label-mono text-ink/30">05</span>
              <h2 className="font-display text-xl font-semibold leading-tight tracking-[-0.01em]">
                Sources sans visuels
              </h2>
            </div>
            <p className="mt-4 max-w-[34ch] text-sm leading-relaxed text-slate">
              Quatre dossiers présents dans les sources ne contiennent aucun
              fichier. Ils ne font pas l’objet d’une étude de cas ; les
              références correspondantes restent citées au CV lorsqu’elles y
              figurent.
            </p>
          </div>
          <div className="lg:col-span-9">
            <ul className="grid gap-px border border-line bg-line sm:grid-cols-2">
              {emptySources.map((source) => (
                <li key={source.folder} className="bg-paper p-5 sm:p-6">
                  <p className="font-display text-[1.05rem] font-semibold text-ink">
                    {source.folder}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {source.note}
                  </p>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-ochre-deep">
                    Dossier source vide
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="shell py-16 md:py-20">
        <div className="grid gap-8 border border-line bg-paper-deep/50 p-6 sm:p-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="label-mono text-ochre-deep">Précision</p>
            <h2 className="mt-3 font-display text-xl font-semibold">
              Ce que ces références ne signifient pas
            </h2>
          </div>
          <ul className="space-y-3 text-sm leading-relaxed text-slate lg:col-span-7 lg:col-start-6">
            <li className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-2 h-1 w-3 shrink-0 bg-ochre"
              />
              Aucune organisation citée n’approuve officiellement ce portfolio
              ni ne sponsorise son contenu.
            </li>
            <li className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-2 h-1 w-3 shrink-0 bg-ochre"
              />
              Aucun témoignage, résultat chiffré ou donnée d’impact n’est
              présenté sans source vérifiée.
            </li>
            <li className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-2 h-1 w-3 shrink-0 bg-ochre"
              />
              Les visuels clients restent soumis aux droits des organisations
              et des personnes représentées ; leur diffusion doit être validée
              avant publication.
            </li>
          </ul>
        </div>

        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-sm leading-relaxed text-slate">
            Un projet, une organisation ou un programme qui ne figure pas dans
            cette liste ? Le dossier de candidature peut être complété sur
            demande, dans le respect de la confidentialité.
          </p>
          <Cta href="/contact">Prendre contact</Cta>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="shell flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-mono text-slate">En savoir plus</p>
          <div className="flex flex-wrap gap-6">
            <ArrowLink href="/a-propos">Le parcours</ArrowLink>
            <ArrowLink href="/projets">Les projets</ArrowLink>
          </div>
        </div>
      </section>
    </>
  );
}
