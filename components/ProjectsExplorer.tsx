"use client";

import { useMemo, useState } from "react";
import {
  categories,
  projects,
  type Category,
} from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectsExplorer() {
  const [active, setActive] = useState<Category | null>(null);

  const filtered = useMemo(
    () =>
      active
        ? projects.filter((project) => project.categories.includes(active))
        : projects,
    [active],
  );

  const countLabel = `${filtered.length} projet${
    filtered.length > 1 ? "s" : ""
  } affiché${filtered.length > 1 ? "s" : ""}${
    active ? ` — ${active}` : ""
  }`;

  return (
    <section aria-labelledby="explorateur-titre">
      <h2 id="explorateur-titre" className="sr-only">
        Explorer les projets
      </h2>

      <div className="border-y border-line py-5">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div
            role="group"
            aria-label="Filtrer les projets par discipline"
            className="flex flex-wrap gap-2"
          >
            <button
              type="button"
              aria-pressed={active === null}
              onClick={() => setActive(null)}
              className={`inline-flex items-center gap-2 border px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors duration-300 ${
                active === null
                  ? "border-ink bg-ink text-paper"
                  : "border-ink/15 bg-transparent text-slate hover:border-ink/40 hover:text-ink"
              }`}
            >
              Tous
              <span
                className={`text-[10px] ${
                  active === null ? "text-paper/60" : "text-ink/35"
                }`}
              >
                {projects.length}
              </span>
            </button>

            {categories.map((category) => {
              const count = projects.filter((project) =>
                project.categories.includes(category),
              ).length;
              const selected = active === category;

              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActive(selected ? null : category)}
                  className={`inline-flex items-center gap-2 border px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors duration-300 ${
                    selected
                      ? "border-ink bg-ink text-paper"
                      : "border-ink/15 bg-transparent text-slate hover:border-ink/40 hover:text-ink"
                  }`}
                >
                  {category}
                  <span
                    className={`text-[10px] ${
                      selected ? "text-paper/60" : "text-ink/35"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <p
            aria-live="polite"
            aria-atomic="true"
            className="label-mono shrink-0 text-slate"
          >
            {countLabel}
          </p>
        </div>
      </div>

      <div
        id="projets-grille"
        className="mt-12 grid gap-x-8 gap-y-16 md:grid-cols-2 md:gap-y-20"
      >
        {filtered.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={project.order}
          />
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-12 border border-line px-6 py-16 text-center">
          <p className="font-display text-2xl text-ink">
            Aucun projet dans cette catégorie pour le moment.
          </p>
          <button
            type="button"
            onClick={() => setActive(null)}
            className="mt-6 inline-flex border border-ink px-5 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            Voir tous les projets
          </button>
        </div>
      ) : null}
    </section>
  );
}
