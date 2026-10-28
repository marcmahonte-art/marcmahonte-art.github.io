import type { Metadata } from "next";
import { AppLink as Link } from "@/components/AppLink";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { ArrowIcon } from "@/components/ArrowIcon";
import { ArrowLink } from "@/components/Cta";
import { PrintButton } from "@/components/PrintButton";
import { ProjectGallery } from "@/components/ProjectGallery";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { SectionLabel } from "@/components/SectionLabel";
import {
  getNextProject,
  getProject,
  projects,
  type Project,
} from "@/data/projects";
import { languageAlternates } from "@/data/seo";
import { site } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  const cover = project.images[0];
  const coverUrl = `/images/${cover.base}-${
    cover.widths[cover.widths.length - 1]
  }.webp`;

  return {
    title: project.title,
    description: project.summary,
    alternates: languageAlternates(
      "fr",
      `/projets/${project.slug}/`,
      `/en/projects/${project.slug}/`,
    ),
    openGraph: {
      type: "article",
      title: `${project.title} — Jean Marc Mahonté`,
      description: project.summary,
      url: `/projets/${project.slug}/`,
      images: [
        {
          url: coverUrl,
          width: cover.width,
          height: cover.height,
          alt: cover.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Jean Marc Mahonté`,
      description: project.summary,
      images: [coverUrl],
    },
  };
}

const verificationStyles = {
  confirmé: {
    label: "Rôle confirmé",
    className: "text-teal-deep",
    dot: "bg-teal",
    copy: "Collaboration et rôle confirmés par les sources du dossier ou par Jean Marc Mahonté.",
  },
  documenté: {
    label: "Projet documenté",
    className: "text-slate",
    dot: "bg-slate",
    copy: "Projet documenté à partir des supports de production fournis.",
  },
} as const;

function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-t border-line py-9 first:border-t-0 first:pt-0"
    >
      <div className="grid gap-5 sm:grid-cols-[3.25rem_1fr]">
        <span className="label-mono pt-1.5 text-ink/30">{index}</span>
        <div>
          <h2 className="font-display text-[1.5rem] font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-[1.7rem]">
            {title}
          </h2>
          <div className="mt-4">{children}</div>
        </div>
      </div>
    </section>
  );
}

function ProjectJsonLd({ project }: { project: Project }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: `${site.url}/projets/${project.slug}/`,
    creator: {
      "@type": "Person",
      name: site.name,
      url: site.url,
    },
    about: project.sector,
    inLanguage: "fr",
    keywords: project.categories.join(", "),
    ...(project.year ? { dateCreated: project.year } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const cover = project.images[0];
  const galleryImages = project.images.slice(1);
  const nextProject = getNextProject(project.slug);
  const verification = verificationStyles[project.verification];
  const indexLabel = String(project.order).padStart(2, "0");
  const totalLabel = String(projects.length).padStart(2, "0");

  const sections = [
    { id: "contexte", label: "Contexte" },
    { id: "objectif", label: "Objectif" },
    { id: "role", label: "Rôle" },
    { id: "livrables", label: "Livrables" },
    { id: "contraintes", label: "Contraintes" },
    { id: "approche", label: "Approche" },
    ...(galleryImages.length > 0
      ? [{ id: "visuels", label: "Visuels" }]
      : []),
    { id: "sources", label: "Sources & limites" },
  ];

  return (
    <article>
      <ProjectJsonLd project={project} />

      <div className="shell pt-8">
        <nav aria-label="Fil d’Ariane" className="label-mono text-slate">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="transition-colors hover:text-ink">
                Accueil
              </Link>
            </li>
            <li aria-hidden="true" className="text-ink/25">
              /
            </li>
            <li>
              <Link href="/projets/" className="transition-colors hover:text-ink">
                Projets
              </Link>
            </li>
            <li aria-hidden="true" className="text-ink/25">
              /
            </li>
            <li aria-current="page" className="text-ink">
              {project.title}
            </li>
          </ol>
        </nav>
      </div>

      <header className="shell pb-12 pt-10 md:pb-16 md:pt-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <SectionLabel index={`${indexLabel} / ${totalLabel}`}>
              Étude de cas
            </SectionLabel>
            <h1 className="display mt-7 max-w-[16ch] text-[clamp(2.6rem,5.6vw,4.9rem)]">
              {project.title}
            </h1>
            <p className="text-lead mt-6 max-w-[52ch]">{project.subtitle}</p>

            <ul className="mt-7 flex flex-wrap gap-2">
              {project.categories.map((category) => (
                <li key={category} className="tag">
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-4">
            <dl className="border-t border-ink/25">
              <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-line py-3.5">
                <dt className="label-mono pt-0.5 text-slate">Client</dt>
                <dd className="text-sm leading-relaxed text-ink">
                  {project.client}
                </dd>
              </div>
              <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-line py-3.5">
                <dt className="label-mono pt-0.5 text-slate">Année</dt>
                <dd className="text-sm text-ink">
                  {project.year ?? "Non précisée dans les sources"}
                </dd>
              </div>
              <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-line py-3.5">
                <dt className="label-mono pt-0.5 text-slate">Lieu</dt>
                <dd className="text-sm text-ink">{project.location}</dd>
              </div>
              <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-line py-3.5">
                <dt className="label-mono pt-0.5 text-slate">Secteur</dt>
                <dd className="text-sm text-ink">{project.sector}</dd>
              </div>
              <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-line py-3.5">
                <dt className="label-mono pt-0.5 text-slate">Statut</dt>
                <dd
                  className={`flex items-start gap-2 text-sm ${verification.className}`}
                >
                  <span
                    aria-hidden="true"
                    className={`mt-1.5 h-1.5 w-1.5 shrink-0 ${verification.dot}`}
                  />
                  <span>
                    {verification.label}
                    <span className="mt-1 block text-xs leading-relaxed text-slate">
                      {verification.copy}
                    </span>
                  </span>
                </dd>
              </div>
            </dl>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <PrintButton />
              <ArrowLink href="/contact" className="text-xs">
                Parler d’un projet similaire
              </ArrowLink>
            </div>
          </aside>
        </div>
      </header>

      <figure className="shell">
        <div className="frame p-5 sm:p-8 md:p-12">
          <ResponsiveImage
            image={cover}
            priority
            sizes="(min-width: 1024px) 84rem, 92vw"
            className="mx-auto h-auto max-h-[82vh] w-auto max-w-full object-contain"
            imgClassName="shadow-[0_30px_80px_-45px_rgba(18,35,51,0.6)]"
          />
        </div>
        <figcaption className="mt-3 flex flex-col gap-2 border-b border-line pb-10 text-xs leading-relaxed text-slate sm:flex-row sm:items-start sm:justify-between">
          <span>{cover.caption}</span>
          <span className="label-mono shrink-0 text-ink/35">
            {indexLabel} / {totalLabel}
          </span>
        </figcaption>
      </figure>

      <div className="shell grid gap-12 py-12 md:py-16 lg:grid-cols-12 lg:gap-12">
        <aside className="hidden lg:col-span-3 lg:block">
          <div className="sticky top-28">
            <p className="label-mono border-b border-line pb-3 text-slate">
              Sommaire
            </p>
            <nav aria-label="Sommaire de l’étude de cas">
              <ol className="mt-4 flex flex-col gap-2.5">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="group inline-flex items-baseline gap-3 text-sm text-slate transition-colors hover:text-ink"
                    >
                      <span className="font-mono text-[9px] text-ink/30">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="link-line">{section.label}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <a
              href={site.cvPath}
              download
              className="mt-8 inline-flex items-center gap-2 border border-ink/20 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-slate transition-colors hover:border-ink hover:text-ink"
            >
              CV (PDF)
              <ArrowIcon direction="down" />
            </a>
          </div>
        </aside>

        <div className="lg:col-span-9">
          <div className="mb-10 border-b border-line pb-10">
            <p className="prose-editorial max-w-[64ch] text-[1.15rem] text-ink">
              {project.summary}
            </p>
          </div>

          {project.confidential ? (
            <div className="mb-10 border-l-2 border-ink bg-ink/[0.04] p-5">
              <p className="label-mono text-ink">Projet confidentiel</p>
              <p className="mt-2 max-w-[62ch] text-sm leading-relaxed text-ink/75">
                Le dossier source est marqué confidentiel par l’organisation.
                Seule la couverture publique est reproduite ; les pages
                internes, la structure et les données ne sont pas publiées.
                Toute diffusion doit être validée avec le client.
              </p>
            </div>
          ) : null}

          <Section id="contexte" index="01" title="Contexte">
            <p className="prose-editorial max-w-[62ch]">{project.context}</p>
          </Section>

          <Section id="objectif" index="02" title="Objectif de communication">
            <p className="max-w-[56ch] font-display text-[1.25rem] font-normal leading-snug tracking-[-0.01em] text-ink sm:text-[1.4rem]">
              {project.objective}
            </p>
          </Section>

          <Section id="role" index="03" title="Rôle">
            <p className="prose-editorial max-w-[62ch]">{project.role}</p>
          </Section>

          <Section id="livrables" index="04" title="Livrables">
            <ul className="border-t border-line">
              {project.deliverables.map((deliverable, index) => (
                <li
                  key={deliverable}
                  className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-line py-3 text-[0.9375rem] text-ink/85"
                >
                  <span className="font-mono text-[10px] text-ink/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{deliverable}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="contraintes" index="05" title="Contraintes">
            <ul className="grid gap-3 sm:grid-cols-2">
              {project.constraints.map((constraint) => (
                <li
                  key={constraint}
                  className="flex items-start gap-3 text-[0.9375rem] leading-relaxed text-ink/80"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1 w-3 shrink-0 bg-ochre"
                  />
                  <span>{constraint}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="approche" index="06" title="Approche">
            <ol className="flex flex-col gap-5">
              {project.approach.map((step, index) => (
                <li
                  key={step}
                  className="grid grid-cols-[2.5rem_1fr] items-start gap-3"
                >
                  <span className="font-display text-xl font-semibold text-ink/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="max-w-[58ch] text-[0.9375rem] leading-relaxed text-ink/80">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </Section>

          {galleryImages.length > 0 ? (
            <section
              id="visuels"
              className="scroll-mt-28 border-t border-line py-10"
            >
              <div className="grid gap-5 sm:grid-cols-[3.25rem_1fr]">
                <span className="label-mono pt-1.5 text-ink/30">07</span>
                <div>
                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <h2 className="font-display text-[1.5rem] font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-[1.7rem]">
                      Visuels de production
                    </h2>
                    <p className="label-mono text-slate">
                      {String(project.images.length).padStart(2, "0")} visuels
                    </p>
                  </div>
                  <p className="mt-3 max-w-[58ch] text-sm leading-relaxed text-slate">
                    Cliquez sur un visuel pour l’agrandir. Les images sont
                    reproduites sans modification de leur composition.
                  </p>
                  <div className="mt-8">
                    <ProjectGallery
                      images={project.images}
                      projectTitle={project.title}
                    />
                  </div>
                </div>
              </div>
            </section>
          ) : null}

          <section
            id="sources"
            className="scroll-mt-28 border-t border-line py-10"
          >
            <div className="grid gap-5 sm:grid-cols-[3.25rem_1fr]">
              <span className="label-mono pt-1.5 text-ink/30">08</span>
              <div>
                <h2 className="font-display text-[1.5rem] font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-[1.7rem]">
                  Sources & limites
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate">
                  <p className="max-w-[64ch]">
                    Cette étude de cas est établie à partir des supports et
                    fichiers présents dans le dossier professionnel de Jean
                    Marc Mahonté. Aucun résultat quantitatif, témoignage ou
                    donnée d’impact n’est publié : ces éléments ne sont pas
                    documentés dans les sources disponibles.
                  </p>
                  <p className="max-w-[64ch]">{project.rightsNote}</p>
                  <p className="max-w-[64ch]">
                    Les noms et marques cités le sont à titre de références
                    professionnelles. Leur mention n’implique aucune
                    approbation officielle des organisations concernées.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="border-t border-line bg-paper-deep/50">
        <Link
          href={`/projets/${nextProject.slug}/`}
          className="group shell grid gap-8 py-12 md:py-16 lg:grid-cols-12 lg:items-center"
        >
          <div className="lg:col-span-4">
            <div className="frame aspect-[16/10] p-4">
              <ResponsiveImage
                image={nextProject.images[0]}
                sizes="(min-width: 1024px) 30vw, 90vw"
                className="mx-auto h-full w-auto max-w-full object-contain"
              />
            </div>
          </div>
          <div className="lg:col-span-8">
            <p className="label-mono text-slate">Projet suivant</p>
            <div className="mt-4 flex items-start justify-between gap-6">
              <h2 className="display max-w-[18ch] text-[clamp(2rem,4.2vw,3.4rem)] transition-colors duration-300 group-hover:text-teal-deep">
                {nextProject.title}
              </h2>
              <span className="mt-1 grid h-11 w-11 shrink-0 place-items-center border border-ink/20 transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
                <ArrowIcon />
              </span>
            </div>
            <p className="mt-3 max-w-[55ch] text-sm leading-relaxed text-slate">
              {nextProject.subtitle}
            </p>
          </div>
        </Link>
      </section>
    </article>
  );
}
