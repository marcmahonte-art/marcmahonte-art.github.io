import type { Metadata } from "next";
import { Cta } from "@/components/Cta";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { SectionLabel } from "@/components/SectionLabel";
import { projectsEn } from "@/data/projects.en";
import { languageAlternates } from "@/data/seo";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Fifteen case studies in institutional publishing, visual identity, campaigns and digital communication, produced for NGOs, institutions and development programmes.",
  alternates: languageAlternates("en", "/projets/", "/en/projects/"),
  openGraph: {
    locale: "en_GB",
    title: "Projects — Jean Marc Mahonté",
    description:
      "Institutional publishing, visual identity, campaigns and digital communication for development organisations.",
    url: "/en/projects/",
  },
};

export default function EnglishProjectsPage() {
  return (
    <>
      <header className="border-b border-line">
        <div className="shell grid gap-10 pb-14 pt-14 lg:grid-cols-12 lg:gap-8 lg:pb-16 lg:pt-20">
          <div className="lg:col-span-8">
            <SectionLabel index={`${projectsEn.length} case studies`}>
              Portfolio
            </SectionLabel>
            <h1 className="display mt-7 text-[clamp(3.4rem,8vw,7rem)]">
              From document
              <br />
              to the field.
            </h1>
            <p className="text-lead mt-7 max-w-[58ch]">
              Annual reports, magazines, identities, campaigns and digital
              materials. A selection of real projects, documented from
              production files and delivered materials.
            </p>
          </div>

          <aside className="self-end lg:col-span-3 lg:col-start-10">
            <p className="border-t border-ink/25 pt-4 text-sm leading-relaxed text-slate">
              Each page sets out the context, objective, role and
              deliverables. No performance figures are published without a
              verified source.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              The creative direction and senior graphic design role is
              confirmed on all {projectsEn.length} case studies.
            </p>
          </aside>
        </div>
      </header>

      <div className="shell py-10 md:py-14">
        <ProjectsExplorer lang="en" />
      </div>

      <section className="border-t border-line">
        <div className="shell flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <div>
            <p className="label-mono text-slate">A comparable project?</p>
            <h2 className="display mt-4 max-w-[24ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              Let’s talk about your constraints before style.
            </h2>
          </div>
          <Cta href="/en/contact">Get in touch</Cta>
        </div>
      </section>
    </>
  );
}
