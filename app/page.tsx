import { AppLink as Link } from "@/components/AppLink";
import type { CSSProperties } from "react";
import { ArrowIcon } from "@/components/ArrowIcon";
import { ArrowLink, Cta } from "@/components/Cta";
import { ProjectCard } from "@/components/ProjectCard";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { SectionLabel } from "@/components/SectionLabel";
import { portrait } from "@/data/media";
import { featuredProjects, getProject, projects } from "@/data/projects";
import { site } from "@/data/site";
import { reveal } from "@/lib/reveal";

const mwinda = getProject("fonds-mwinda");
const heroImage = mwinda?.images[0];

const clients = [
  "CILSS",
  "OEACP",
  "Christian Aid",
  "WaterAid",
  "Plan International",
  "Youth Connekt Africa",
  "CNPS Côte d’Ivoire",
  "Fonds Mwinda",
  "Projet I.D.E.A.",
  "Association Warassa",
  "Coris Bank International",
  "GreenMax Capital",
  "Laborex",
  "Azalai Hotel",
];

const services = [
  {
    title: "Édition & rapports",
    description:
      "Rapports annuels, magazines, newsletters, guides et brochures. Une hiérarchie claire pour des contenus denses.",
    href: "/services#edition",
  },
  {
    title: "Identité & systèmes",
    description:
      "Logo, charte, papeterie et gabarits. Un système assez solide pour être utilisé par les équipes.",
    href: "/services#identite",
  },
  {
    title: "Campagnes & terrain",
    description:
      "Affiches, réseaux sociaux et supports événementiels. Le message reste lisible, du mur au téléphone.",
    href: "/services#campagnes",
  },
  {
    title: "Direction artistique",
    description:
      "Cadrage, direction photographique, suivi de production et cohérence sur tous les supports.",
    href: "/services#direction",
  },
];

const experience = [
  {
    period: "2024 — présent",
    role: "Directeur créatif & graphiste senior",
    place: "Sixième Sens SA",
  },
  {
    period: "2021 — 2023",
    role: "Brand designer / Directeur général",
    place: "Mpixel Agency",
  },
  {
    period: "2018 — 2021",
    role: "Senior Graphic & Web Designer",
    place: "ACIGI",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden border-b border-line">
        <div className="shell">
          <div className="grid gap-12 pb-16 pt-10 lg:grid-cols-12 lg:gap-10 lg:pb-20 lg:pt-14">
            <div className="flex flex-col justify-center lg:col-span-7 lg:pr-8">
              <div
                className="hero-enter flex flex-wrap items-center gap-x-5 gap-y-3"
                style={{ "--reveal-delay": "0ms" } as CSSProperties}
              >
                <span className="label-mono inline-flex items-center gap-2 text-teal-deep">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 bg-teal"
                  />
                  Disponible pour missions
                </span>
                <span aria-hidden="true" className="h-px w-8 bg-ink/20" />
                <span className="label-mono text-slate">
                  Ouagadougou · Burkina Faso
                </span>
              </div>

              <h1
                className="hero-enter display mt-8 text-[clamp(2.9rem,6.6vw,5.9rem)] text-ink"
                style={{ "--reveal-delay": "90ms" } as CSSProperties}
              >
                Donner forme
                <br />
                aux idées.
                <br />
                <span className="text-teal-deep">
                  Rendre l’impact
                  <br />
                  visible.
                </span>
                <span
                  aria-hidden="true"
                  className="ml-3 inline-block h-2.5 w-2.5 bg-ochre align-baseline"
                />
              </h1>

              <p
                className="hero-enter text-lead mt-8 max-w-[54ch]"
                style={{ "--reveal-delay": "180ms" } as CSSProperties}
              >
                Graphiste senior et directeur créatif indépendant, je conçois
                des rapports, des identités et des campagnes pour des
                organisations qui travaillent au développement, aux droits, à
                la santé et au climat. Onze ans de pratique, d’Ouagadougou vers
                huit pays.
              </p>

              <div
                className="hero-enter mt-10 flex flex-wrap gap-3"
                style={{ "--reveal-delay": "260ms" } as CSSProperties}
              >
                <Cta href="/projets">Découvrir les projets</Cta>
                <Cta href="/contact" variant="outline">
                  Me contacter
                </Cta>
              </div>

              <dl
                className="hero-enter mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-line pt-6"
                style={{ "--reveal-delay": "340ms" } as CSSProperties}
              >
                <div>
                  <dt className="label-mono text-slate">Expérience</dt>
                  <dd className="mt-2 font-display text-2xl font-semibold text-ink">
                    11+ <span className="text-base font-normal">ans</span>
                  </dd>
                </div>
                <div>
                  <dt className="label-mono text-slate">Pays</dt>
                  <dd className="mt-2 font-display text-2xl font-semibold text-ink">
                    08
                  </dd>
                </div>
                <div>
                  <dt className="label-mono text-slate">Langues</dt>
                  <dd className="mt-2 font-display text-2xl font-semibold text-ink">
                    FR <span className="text-base font-normal">/</span> EN
                  </dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-5">
              {heroImage ? (
                <div className="relative">
                  <div className="hero-enter frame aspect-[4/5] p-6 sm:p-9">
                    <ResponsiveImage
                      image={heroImage}
                      priority
                      sizes="(min-width: 1024px) 38vw, 92vw"
                      className="mx-auto h-full w-auto max-w-full object-contain"
                      imgClassName="shadow-[0_30px_70px_-40px_rgba(18,35,51,0.6)]"
                    />
                    <span className="label-mono absolute left-5 top-5 bg-paper px-2 py-1 text-ink/60">
                      Newsletter — 2026
                    </span>
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-6 border-t border-line pt-3">
                    <p className="text-xs leading-relaxed text-slate">
                      <Link
                        href="/projets/fonds-mwinda/"
                        className="link-line font-medium text-ink"
                      >
                        Fonds Mwinda
                      </Link>{" "}
                      — newsletter, RDC.
                      <br />
                      Direction créative et conception graphique.
                    </p>
                    <p className="label-mono shrink-0 text-ink/35">
                      01 / {String(projects.length).padStart(2, "0")}
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-line py-6 sm:flex-row sm:items-center sm:gap-10">
            <p className="label-mono shrink-0 text-slate">
              Supports conçus pour
            </p>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {clients.map((client) => (
                <li
                  key={client}
                  className="text-[0.8125rem] font-medium text-ink/65"
                >
                  {client}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="shell py-20 md:py-28">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div {...reveal()}>
            <SectionLabel index="01">Projets sélectionnés</SectionLabel>
            <h2 className="display mt-6 max-w-[18ch] text-[clamp(2.2rem,4.4vw,3.75rem)]">
              Des systèmes visuels pensés pour le terrain.
            </h2>
          </div>
          <ArrowLink href="/projets" className="shrink-0">
            Tous les projets
          </ArrowLink>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-16 md:grid-cols-2 md:gap-y-20">
          {featuredProjects
            .filter((project) => project.slug === "plan-international-tchad")
            .map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={project.order}
                aspect="wide"
                imageIndex={0}
                className="md:col-span-2"
                priority
              />
            ))}

          {featuredProjects
            .filter((project) => project.slug !== "plan-international-tchad")
            .map((project, index) => (
              <div key={project.slug} {...reveal(index * 80)}>
                <ProjectCard project={project} index={project.order} />
              </div>
            ))}
        </div>

        <div className="mt-16 flex justify-between border-t border-line pt-6">
          <p className="max-w-md text-sm leading-relaxed text-slate">
            {projects.length} études de cas. Les rôles et commanditaires non
            confirmés sont signalés sur chaque fiche.
          </p>
          <ArrowLink href="/projets">Voir la sélection complète</ArrowLink>
        </div>
      </section>

      <section className="on-dark bg-ink text-paper">
        <div className="shell grid gap-10 py-20 md:py-24 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel tone="light" index="02">
              Note de travail
            </SectionLabel>
          </div>
          <div className="lg:col-span-8" {...reveal()}>
            <p className="display text-[clamp(2rem,4vw,3.65rem)] leading-[1.1] text-paper">
              « Un rapport n’est pas un document à remplir. C’est un objet de
              confiance. »
            </p>
            <div className="mt-8 grid gap-6 border-t border-paper/15 pt-6 sm:grid-cols-2">
              <p className="text-[0.9375rem] leading-relaxed text-paper/65">
                Un bailleur, un ministère, une communauté ne lisent pas de la
                même manière. Mon travail consiste à trouver la forme qui
                permet à chacun de comprendre sa part, sans perdre
                l’exigence du contenu.
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-paper/65">
                Hiérarchie, respiration, images justes, données situées :
                chaque choix doit rendre le propos plus clair, jamais plus
                spectaculaire.
              </p>
            </div>
            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/40">
              Jean Marc Mahonté — note de travail
            </p>
          </div>
        </div>
      </section>

      <section className="shell py-20 md:py-28">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div {...reveal()}>
            <SectionLabel index="03">Savoir-faire</SectionLabel>
            <h2 className="display mt-6 max-w-[20ch] text-[clamp(2.2rem,4.4vw,3.75rem)]">
              Du document dense au message public.
            </h2>
          </div>
          <ArrowLink href="/services" className="shrink-0">
            Voir les services
          </ArrowLink>
        </div>

        <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex flex-col justify-between bg-paper p-7 transition-colors duration-500 hover:bg-paper-deep sm:p-9"
            >
              <div>
                <div className="flex items-start justify-between gap-6">
                  <span className="label-mono text-ink/35">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <ArrowIcon className="text-ink/35 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ink" />
                </div>
                <h3 className="mt-10 font-display text-[1.6rem] font-semibold leading-tight tracking-[-0.02em] text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-[34ch] text-sm leading-relaxed text-slate">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-paper-deep/50">
        <div className="shell grid gap-12 py-20 md:py-24 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5" {...reveal()}>
            <div className="frame aspect-[4/5] overflow-hidden">
              <ResponsiveImage
                image={portrait}
                sizes="(min-width: 1024px) 36vw, 92vw"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <p className="mt-3 text-xs text-slate">
              Jean Marc Mahonté, Ouagadougou.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7" {...reveal(120)}>
            <SectionLabel index="04">À propos</SectionLabel>
            <h2 className="display mt-6 max-w-[18ch] text-[clamp(2.2rem,4.2vw,3.5rem)]">
              Onze ans à concevoir pour le terrain.
            </h2>
            <p className="prose-editorial mt-6">
              Formé au design graphique à CALART et à l’université Aube
              Nouvelle, j’ai construit ma pratique dans des agences
              burkinabè, au contact d’institutions publiques, d’ONG et de
              programmes financés par des bailleurs. Cette expérience m’a
              appris une chose : un beau support ne suffit pas s’il ne tient
              pas debout face aux contraintes de production, de validation et
              de lecture.
            </p>

            <ol className="mt-9 border-t border-line">
              {experience.map((item) => (
                <li
                  key={item.period}
                  className="grid grid-cols-[8.5rem_1fr] gap-4 border-b border-line py-4 text-sm sm:grid-cols-[10rem_1fr]"
                >
                  <span className="label-mono pt-0.5 text-slate">
                    {item.period}
                  </span>
                  <span className="text-ink">
                    {item.role}
                    <span className="block text-slate">{item.place}</span>
                  </span>
                </li>
              ))}
            </ol>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Cta href="/a-propos" variant="outline">
                Lire le parcours
              </Cta>
              <a
                href={site.cvPath}
                download
                className="arrow-link text-ink"
              >
                <span className="link-line">Télécharger le CV</span>
                <ArrowIcon direction="down" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
