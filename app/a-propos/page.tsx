import type { Metadata } from "next";
import { ArrowIcon } from "@/components/ArrowIcon";
import { ArrowLink } from "@/components/Cta";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { SectionLabel } from "@/components/SectionLabel";
import { portrait } from "@/data/media";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Parcours, expertise et méthode de Jean Marc Mahonté, graphiste senior et directeur créatif indépendant à Ouagadougou, plus de onze ans d’expérience en communication visuelle institutionnelle.",
  alternates: {
    canonical: "/a-propos/",
  },
  openGraph: {
    title: "À propos — Jean Marc Mahonté",
    description:
      "Plus de onze ans de design graphique au service d’institutions, d’ONG et de programmes financés par des bailleurs.",
    url: "/a-propos/",
    images: ["/og/jean-marc-mahonte.jpg"],
  },
};

const principles = [
  {
    title: "Lire avant de dessiner",
    text: "Comprendre le mandat, les publics, les obligations du bailleur et la chaîne de validation avant de proposer une direction.",
  },
  {
    title: "Faire système",
    text: "Une grille, une palette, des gabarits : ce qui tient une publication tient aussi les suivantes, même lorsque les équipes changent.",
  },
  {
    title: "Rester lisible",
    text: "La densité est une contrainte, pas une excuse. Hiérarchie, respiration et images utiles au service du contenu.",
  },
];

const experience = [
  {
    period: "2024 — présent",
    role: "Directeur créatif & graphiste senior",
    organisation: "Sixième Sens SA · Ouagadougou",
    points: [
      "Direction artistique de marques et d’événements institutionnels, dont Coris Bank International Tchad et Beaufort Lager",
      "Identité de lancement, signalétique, réseaux sociaux et animation motion",
      "Conception de supports premium pour des activations au Tchad",
    ],
  },
  {
    period: "2021 — 2023",
    role: "Brand designer / Directeur général",
    organisation: "Mpixel Agency · Ouagadougou",
    points: [
      "CILSS : newsletters et mise en page de documents institutionnels",
      "Christian Aid / projet FED (Union européenne) : campagne « Femmes et énergie durable », conformité visibilité UE",
      "WaterAid Burkina Faso : communication du Tour du Faso 2021",
      "Identité et supports print et digitaux pour Bobo Games Week (Telecel Faso & Enter Africa)",
      "Ecobank / Pan African Microfinance Burkina Faso : communication digitale et refonte graphique web",
    ],
  },
  {
    period: "2018 — 2021",
    role: "Senior Graphic & Web Designer",
    organisation: "ACIGI · Ouagadougou",
    points: [
      "Identités visuelles complètes : logo, charte, brochures, rapports, habillage de véhicules",
      "Supports institutionnels pour des projets de développement au Burkina Faso, au Tchad, au Bénin et en Côte d’Ivoire",
      "Communication multicanale ABB avec partenaires UE, USAID et UNFPA",
      "Cour des Comptes du Burkina Faso : identité et supports des Journées portes ouvertes",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <header className="shell grid gap-12 pb-16 pt-14 lg:grid-cols-12 lg:gap-10 lg:pb-20 lg:pt-20">
        <div className="lg:col-span-7">
          <SectionLabel index="Profil">À propos</SectionLabel>
          <h1 className="display mt-7 text-[clamp(3rem,6.8vw,6rem)]">
            La rigueur,
            <br />
            au service
            <br />
            <span className="text-teal-deep">du sens.</span>
          </h1>
          <p className="text-lead mt-8 max-w-[52ch]">
            Graphiste senior et directeur créatif indépendant à Ouagadougou.
            Plus de onze ans de pratique en design graphique, branding et
            communication visuelle institutionnelle.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Édition institutionnelle",
              "Identité visuelle",
              "Campagnes",
              "Direction artistique",
            ].map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          <div className="frame aspect-[4/5] overflow-hidden">
            <ResponsiveImage
              image={portrait}
              priority
              sizes="(min-width: 1024px) 30vw, 92vw"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="mt-3 flex items-start justify-between gap-4 border-t border-line pt-3 text-xs text-slate">
            <span>Jean Marc Mahonté — Ouagadougou.</span>
            <span className="label-mono shrink-0 text-ink/35">Photo réelle</span>
          </div>
        </div>
      </header>

      <section className="border-y border-line bg-paper-deep/40">
        <div className="shell grid gap-10 py-16 md:py-20 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <SectionLabel index="01">Parcours</SectionLabel>
          </div>
          <div className="lg:col-span-7 lg:col-start-5">
            <div className="prose-editorial max-w-[62ch]">
              <p>
                Créatif senior et directeur de création, j’ai construit ma
                pratique dans des agences burkinabè, au contact d’institutions
                internationales, de projets financés par l’Union européenne et
                d’institutions étatiques. Cette trajectoire m’a donné une
                habitude simple :<strong> comprendre le cadre avant de
                proposer la forme.</strong>
              </p>
              <p>
                Mes projets vont du rapport annuel au magazine institutionnel,
                de la charte graphique à la campagne de sensibilisation. Le
                point commun : des contenus exigeants, plusieurs niveaux de
                validation, des publics hétérogènes et des contraintes de
                production réelles.
              </p>
              <p>
                Je travaille en français et en anglais, avec des équipes
                programmes, communication et direction, en agence comme en
                indépendant. J’interviens à Ouagadougou et à distance, du
                cadrage jusqu’à la livraison des fichiers sources.
              </p>
            </div>

            <dl className="mt-10 grid gap-6 border-t border-line pt-6 sm:grid-cols-3">
              <div>
                <dt className="label-mono text-slate">Expérience</dt>
                <dd className="mt-2 font-display text-3xl font-semibold">
                  11+
                </dd>
                <dd className="text-xs text-slate">années de pratique</dd>
              </div>
              <div>
                <dt className="label-mono text-slate">Pays</dt>
                <dd className="mt-2 font-display text-3xl font-semibold">
                  08
                </dd>
                <dd className="text-xs leading-relaxed text-slate">
                  Burkina, Tchad, Côte d’Ivoire, RDC, Cameroun, Madagascar,
                  Bénin, Belgique
                </dd>
              </div>
              <div>
                <dt className="label-mono text-slate">Langues</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink">
                  <span className="font-semibold">Français</span> — langue
                  maternelle
                </dd>
                <dd className="text-sm leading-relaxed text-ink">
                  <span className="font-semibold">Anglais</span> — courant
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="shell py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <SectionLabel index="02">Principes</SectionLabel>
            <h2 className="display mt-6 max-w-[12ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              Trois exigences, à chaque projet.
            </h2>
          </div>
          <div className="grid gap-px border border-line bg-line sm:grid-cols-3 lg:col-span-8 lg:col-start-5">
            {principles.map((principle, index) => (
              <div key={principle.title} className="bg-paper p-6 sm:p-7">
                <span className="label-mono text-ink/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 font-display text-xl font-semibold leading-tight tracking-[-0.01em]">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  {principle.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line">
        <div className="shell grid gap-10 py-16 md:py-24 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <SectionLabel index="03">Expérience</SectionLabel>
            <h2 className="display mt-6 max-w-[10ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              Onze ans de terrain.
            </h2>
            <p className="mt-5 max-w-[30ch] text-sm leading-relaxed text-slate">
              Les fonctions et périodes ci-dessous sont celles déclarées au
              CV. Les intitulés sont repris sans reformulation.
            </p>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <ol>
              {experience.map((job) => (
                <li
                  key={job.period}
                  className="grid gap-4 border-t border-line py-8 first:border-t-0 first:pt-0 sm:grid-cols-[9rem_1fr]"
                >
                  <span className="label-mono pt-1 text-slate">
                    {job.period}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold leading-snug tracking-[-0.01em] text-ink">
                      {job.role}
                    </h3>
                    <p className="mt-1 text-sm text-slate">{job.organisation}</p>
                    <ul className="mt-4 space-y-2">
                      {job.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm leading-relaxed text-ink/75"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1 w-2.5 shrink-0 bg-teal"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="shell py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <SectionLabel index="04">Formation & outils</SectionLabel>
          </div>

          <div className="grid gap-12 sm:grid-cols-2 lg:col-span-8 lg:col-start-5">
            <div>
              <h2 className="font-display text-xl font-semibold tracking-[-0.01em]">
                Formation
              </h2>
              <ul className="mt-5 space-y-5 border-t border-line pt-5">
                <li>
                  <p className="label-mono text-slate">2014</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink">
                    Certificat en Graphic Design — Graphic Design
                    Specialization, CALART
                  </p>
                </li>
                <li>
                  <p className="label-mono text-slate">2011 — 2015</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink">
                    Licence en réseaux informatique et télécommunications,
                    Université Aube Nouvelle · Ouagadougou
                  </p>
                </li>
                <li>
                  <p className="label-mono text-slate">2011</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink">
                    Baccalauréat série D — Lycée Sainte Colette, Burkina Faso
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold tracking-[-0.01em]">
                Outils & compétences
              </h2>
              <div className="mt-5 border-t border-line pt-5">
                <p className="label-mono text-slate">Design</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/80">
                  Adobe Illustrator, InDesign et Photoshop (niveau expert
                  déclaré), Figma, UI/UX et webdesign, Canva, CapCut
                </p>
              </div>
              <div className="mt-5">
                <p className="label-mono text-slate">Communication</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/80">
                  Branding institutionnel, visibilité UE et bailleurs,
                  communication événementielle, direction artistique, identité
                  visuelle et charte
                </p>
              </div>
              <div className="mt-5">
                <p className="label-mono text-slate">Technique</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/80">
                  Mise en page print, préparation des fichiers pour
                  l’impression, déclinaisons numériques, WordPress et Laravel
                  (notions déclarées)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper-deep/60">
        <div className="shell flex flex-col gap-8 py-14 md:flex-row md:items-center md:justify-between md:py-16">
          <div>
            <p className="label-mono text-slate">Curriculum vitæ</p>
            <h2 className="display mt-4 max-w-[26ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              Le parcours complet, en un document.
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={site.cvPath}
              download
              className="btn btn-primary"
            >
              Télécharger le CV (PDF)
              <ArrowIcon direction="down" />
            </a>
            <ArrowLink href="/contact">Me contacter</ArrowLink>
          </div>
        </div>
      </section>
    </>
  );
}
