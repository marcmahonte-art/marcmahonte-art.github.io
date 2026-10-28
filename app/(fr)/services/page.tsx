import type { Metadata } from "next";
import { AppLink as Link } from "@/components/AppLink";
import { ArrowIcon } from "@/components/ArrowIcon";
import { ArrowLink, Cta } from "@/components/Cta";
import { SectionLabel } from "@/components/SectionLabel";
import { getProject } from "@/data/projects";
import { languageAlternates } from "@/data/seo";
import { reveal } from "@/lib/reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Édition institutionnelle, rapports annuels, identité visuelle, campagnes, infographies, communication numérique et direction artistique pour ONG, bailleurs et institutions.",
  alternates: languageAlternates("fr", "/services/", "/en/services/"),
  openGraph: {
    title: "Services — Jean Marc Mahonté",
    description:
      "Design éditorial, identité visuelle, campagnes et direction artistique pour des organisations de développement.",
    url: "/services/",
  },
};

const services = [
  {
    id: "edition",
    title: "Édition & rapports",
    description:
      "Rapports annuels, rapports d’activité, magazines, newsletters, guides méthodologiques et brochures. La mise en page installe une hiérarchie stable pour des contenus denses, des tableaux, des cartes et des encadrés.",
    deliverables: [
      "Rapport annuel ou d’activité",
      "Magazine ou newsletter",
      "Guide et manuel",
      "Brochure de projet",
      "Chemin de fer et gabarits",
    ],
    when: "Un contenu existe, mais la lecture se perd. Il faut un objet éditorial clair pour les bailleurs, les équipes et les partenaires.",
    related: [
      "fonds-mwinda",
      "cilss-praps",
      "cnps-newsletter",
      "greenmax-capital",
      "laborex-voeux-2026",
    ],
  },
  {
    id: "institutionnel",
    title: "Communication institutionnelle",
    description:
      "Supports de visibilité, plaquettes de présentation, synthèses de résultats, présentations et documents multi-partenaires. Les règles de visibilité des bailleurs et la hiérarchie des logos sont traitées comme des contraintes de conception, pas comme des ajouts.",
    deliverables: [
      "Plaquette institutionnelle",
      "Supports de visibilité bailleurs",
      "Synthèse de projet ou de résultats",
      "Présentation institutionnelle",
      "Déclinaisons print et digitales",
    ],
    when: "Plusieurs organisations co-signent un programme et chaque support doit rester lisible, conforme et cohérent.",
    related: [
      "christian-aid-femmes-energie",
      "cilss-praps",
      "coris-bank-tchad",
      "canal-plus-tchad",
      "oeacp-carte-voeux",
      "youth-connekt-madagascar",
      "greenmax-capital",
    ],
  },
  {
    id: "infographies",
    title: "Infographies & data visualisation",
    description:
      "Cartes, schémas, frises, encadrés chiffrés et pages de données intégrés à vos publications. L’objectif n’est pas de décorer un chiffre, mais de le situer et de le rendre compréhensible sans trahir la source.",
    deliverables: [
      "Cartes d’intervention",
      "Schémas de programme",
      "Pages de données",
      "Encadrés chiffrés",
      "Infographies sociales",
    ],
    when: "Les données existent mais restent invisibles dans le corps du texte ou difficiles à lire pour un public non spécialiste.",
    related: [
      "plan-international-tchad",
      "cilss-praps",
      "greenmax-capital",
    ],
  },
  {
    id: "campagnes",
    title: "Campagnes & sensibilisation",
    description:
      "Campagnes de sensibilisation, affiches, visuels sociaux, kakémonos, goodies et dispositifs événementiels. Un même message, décliné avec rigueur du format extérieur au carrousel social.",
    deliverables: [
      "Affiches et visuels de campagne",
      "Kakémonos et signalétique",
      "Visuels réseaux sociaux",
      "Goodies et textiles",
      "Dispositifs événementiels",
    ],
    when: "Une cause doit sortir du rapport pour rejoindre le terrain, un événement ou les réseaux.",
    related: [
      "christian-aid-femmes-energie",
      "plan-international-tchad",
      "wateraid-tour-du-faso",
      "association-warassa",
      "coris-bank-tchad",
      "youth-connekt-madagascar",
      "azalai-hotel",
    ],
  },
  {
    id: "identite",
    title: "Identité visuelle & branding",
    description:
      "Logo, charte graphique, palette, typographie, papeterie, gabarits et signalétique. Une identité n’est utile que si les équipes peuvent se l’approprier : je livre des règles et des modèles, pas seulement un symbole.",
    deliverables: [
      "Logotype et système de marque",
      "Charte graphique",
      "Papeterie et signature",
      "Gabarits Word, PowerPoint et réseaux sociaux",
      "Signalétique et goodies",
    ],
    when: "Une organisation, un fonds ou un projet a besoin d’une image cohérente sur tous ses points de contact.",
    related: [
      "fonds-mwinda",
      "projet-idea",
      "association-warassa",
      "coris-bank-tchad",
      "laborex-voeux-2026",
      "youth-connekt-madagascar",
    ],
  },
  {
    id: "digital",
    title: "Digital & réseaux sociaux",
    description:
      "Visuels sociaux, gabarits de publication, bannières et déclinaisons numériques de vos campagnes ou publications. Les formats sont pensés pour rester lisibles sur un écran de téléphone, sans perdre la qualité du print.",
    deliverables: [
      "Gabarits de publications",
      "Carrousels et stories",
      "Bannières web",
      "Déclinaisons de campagnes",
      "Kit de publication pour les équipes",
    ],
    when: "Les supports print existent mais les équipes ont besoin d’un système simple pour publier régulièrement.",
    related: [
      "fonds-mwinda",
      "cnps-newsletter",
      "wateraid-tour-du-faso",
      "plan-international-tchad",
      "coris-bank-tchad",
      "azalai-hotel",
      "youth-connekt-madagascar",
    ],
  },
  {
    id: "direction",
    title: "Direction artistique & accompagnement",
    description:
      "Cadrage créatif, direction photographique, suivi de production et cohérence éditoriale sur plusieurs supports. J’interviens en renfort d’une équipe ou d’une agence, sur une mission ponctuelle ou un programme pluriannuel.",
    deliverables: [
      "Note d’intention et cadrage",
      "Direction photographique",
      "Suivi de production et BAT",
      "Refonte ou harmonisation de supports",
      "Renfort d’agence ou d’équipe",
    ],
    when: "Plusieurs supports ou prestataires doivent converger vers une même qualité visuelle.",
    related: [
      "fonds-mwinda",
      "plan-international-tchad",
      "projet-idea",
      "coris-bank-tchad",
      "youth-connekt-madagascar",
      "greenmax-capital",
      "oeacp-carte-voeux",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <header className="border-b border-line">
        <div className="shell grid gap-10 pb-14 pt-14 lg:grid-cols-12 lg:pb-20 lg:pt-20">
          <div className="lg:col-span-8">
            <SectionLabel index="07 services">Savoir-faire</SectionLabel>
            <h1 className="display mt-7 max-w-[14ch] text-[clamp(3rem,6.8vw,6rem)]">
              Concevoir des supports qui tiennent.
            </h1>
            <p className="text-lead mt-7 max-w-[58ch]">
              Du rapport annuel à la campagne de terrain, chaque prestation
              part du contenu, du public et des contraintes de production.
              Missions ponctuelles, programmes pluriannuels ou renfort
              d’agence.
            </p>
          </div>
          <aside className="self-end lg:col-span-3 lg:col-start-10">
            <p className="border-t border-ink/25 pt-4 text-sm leading-relaxed text-slate">
              Les prestations listées ici sont adossées à des projets réels
              présentés dans le portfolio. Aucune offre générique n’est
              ajoutée pour compléter la liste.
            </p>
          </aside>
        </div>
      </header>

      <div className="shell">
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className="scroll-mt-28 border-b border-line py-14 md:py-16"
            {...reveal()}
          >
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-4">
                <div className="flex items-baseline gap-4">
                  <span className="label-mono text-ink/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-[clamp(1.6rem,2.6vw,2.15rem)] font-semibold leading-tight tracking-[-0.02em] text-ink">
                    {service.title}
                  </h2>
                </div>
                <p className="mt-5 max-w-[36ch] text-sm leading-relaxed text-slate">
                  {service.description}
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
                <div>
                  <p className="label-mono border-b border-line pb-2.5 text-slate">
                    Livrables types
                  </p>
                  <ul className="mt-3 flex flex-col gap-2">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-relaxed text-ink/80"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-2.5 shrink-0 bg-teal"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col">
                  <div>
                    <p className="label-mono border-b border-line pb-2.5 text-slate">
                      Quand faire appel
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ink/80">
                      {service.when}
                    </p>
                  </div>
                  <div className="mt-6">
                    <p className="label-mono border-b border-line pb-2.5 text-slate">
                      Projets liés
                    </p>
                    <ul className="mt-3 flex flex-col gap-2">
                      {service.related.map((slug) => {
                        const project = getProject(slug);
                        if (!project) return null;
                        return (
                          <li key={slug}>
                            <Link
                              href={`/projets/${slug}/`}
                              className="group inline-flex items-center gap-2 text-sm text-ink transition-colors hover:text-teal-deep"
                            >
                              <span className="link-line">{project.title}</span>
                              <ArrowIcon className="h-2.5 w-2.5 shrink-0 opacity-40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="shell grid gap-8 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-7">
          <SectionLabel index="Suite">Prochaine étape</SectionLabel>
          <h2 className="display mt-5 max-w-[22ch] text-[clamp(2rem,3.8vw,3.2rem)]">
            Un besoin précis, un brief encore flou ?
          </h2>
          <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-slate">
            Décrivez le contexte, le commanditaire et l’échéance. Il est
            souvent possible de clarifier le périmètre avant de parler
            d’esthétique.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 md:col-span-4 md:col-start-9 md:justify-end">
          <Cta href="/contact">Me contacter</Cta>
          <ArrowLink href="/methodologie">Voir la méthode</ArrowLink>
        </div>
      </section>
    </>
  );
}
