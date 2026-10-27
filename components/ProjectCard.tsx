import { AppLink as Link } from "@/components/AppLink";
import type { Project } from "@/data/projects";
import { ArrowIcon } from "./ArrowIcon";
import { ResponsiveImage } from "./ResponsiveImage";

type Props = {
  project: Project;
  index: number;
  priority?: boolean;
  className?: string;
  aspect?: "standard" | "wide";
  imageIndex?: number;
};

export function ProjectCard({
  project,
  index,
  priority = false,
  className = "",
  aspect = "standard",
  imageIndex = 0,
}: Props) {
  const cover = project.images[imageIndex] ?? project.images[0];
  const year = project.year ?? "Année non précisée";

  return (
    <article className={className}>
      <Link
        href={`/projets/${project.slug}/`}
        className="group block focus-visible:outline-offset-8"
      >
        <div
          className={`frame ${
            aspect === "wide" ? "aspect-[16/10]" : "aspect-[4/3]"
          }`}
        >
          <span className="label-mono absolute left-4 top-4 z-10 text-ink/45">
            {String(index).padStart(2, "0")}
          </span>
          {project.confidential ? (
            <span className="label-mono absolute right-4 top-4 z-10 border border-ink/20 bg-paper px-2 py-1 text-ink/60">
              Confidentiel
            </span>
          ) : null}
          <div className="flex h-full w-full items-center justify-center p-5 sm:p-8">
            <ResponsiveImage
              image={cover}
              sizes={
                aspect === "wide"
                  ? "(min-width: 1024px) 60vw, 100vw"
                  : "(min-width: 1024px) 42vw, (min-width: 640px) 46vw, 92vw"
              }
              priority={priority}
              className="max-h-full w-auto max-w-full origin-center shadow-[0_22px_50px_-34px_rgba(18,35,51,0.55)] transition-transform duration-700 ease-editorial group-hover:scale-[1.025]"
              imgClassName="h-auto w-auto max-h-full max-w-full object-contain"
            />
          </div>
        </div>

        <div className="mt-5 flex items-start justify-between gap-5 border-t border-line pt-4">
          <div>
            <p className="label-mono text-slate">
              {project.client.split("—")[0].trim()} · {year}
            </p>
            <h3 className="mt-2.5 font-display text-[1.375rem] font-semibold leading-tight tracking-[-0.02em] text-ink transition-colors duration-300 group-hover:text-teal-deep sm:text-2xl">
              {project.title}
            </h3>
            <p className="mt-2 max-w-[46ch] text-sm leading-relaxed text-slate">
              {project.subtitle}
            </p>
          </div>
          <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center border border-ink/15 text-ink transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
            <ArrowIcon />
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.categories.slice(0, 2).map((category) => (
            <span key={category} className="tag">
              {category}
            </span>
          ))}
        </div>
      </Link>
    </article>
  );
}
