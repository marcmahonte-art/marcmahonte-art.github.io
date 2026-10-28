import type { Metadata } from "next";
import { Cta } from "@/components/Cta";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { SectionLabel } from "@/components/SectionLabel";
import { projects } from "@/data/projects";
import { languageAlternates } from "@/data/seo";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Quinze études de cas en édition institutionnelle, identité visuelle, campagnes et communication numérique, réalisées pour des ONG, institutions et programmes de développement.",
  alternates: languageAlternates("fr", "/projets/", "/en/projects/"),
  openGraph: {
    title: "Projets — Jean Marc Mahonté",
    description:
      "Édition institutionnelle, identité visuelle, campagnes et communication numérique pour des organisations de développement.",
    url: "/projets/",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <header className="border-b border-line">
        <div className="shell grid gap-10 pb-14 pt-14 lg:grid-cols-12 lg:gap-8 lg:pb-16 lg:pt-20">
          <div className="lg:col-span-8">
            <SectionLabel index={`${projects.length} études de cas`}>
              Portfolio
            </SectionLabel>
            <h1 className="display mt-7 text-[clamp(3.4rem,8vw,7rem)]">
              Du document
              <br />
              au terrain.
            </h1>
            <p className="text-lead mt-7 max-w-[58ch]">
              Rapports annuels, magazines, identités, campagnes et supports
              numériques. Une sélection de projets réels, documentés à partir
              des fichiers de production et des supports livrés.
            </p>
          </div>

          <aside className="self-end lg:col-span-3 lg:col-start-10">
            <p className="border-t border-ink/25 pt-4 text-sm leading-relaxed text-slate">
              Chaque fiche précise le contexte, l’objectif, le rôle et les
              livrables. Aucun résultat chiffré n’est publié sans source
              vérifiée.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              Le rôle de direction créative et de conception graphique senior
              est confirmé sur les {projects.length} études de cas.
            </p>
          </aside>
        </div>
      </header>

      <div className="shell py-10 md:py-14">
        <ProjectsExplorer />
      </div>

      <section className="border-t border-line">
        <div className="shell flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <div>
            <p className="label-mono text-slate">Un projet comparable ?</p>
            <h2 className="display mt-4 max-w-[24ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              Parlons de vos contraintes avant de parler de style.
            </h2>
          </div>
          <Cta href="/contact">Me contacter</Cta>
        </div>
      </section>
    </>
  );
}
