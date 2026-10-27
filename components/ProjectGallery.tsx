"use client";

import { useEffect, useRef, useState } from "react";
import type { ProjectImage } from "@/data/projects";
import { ArrowIcon } from "./ArrowIcon";
import { ResponsiveImage } from "./ResponsiveImage";

type Props = {
  images: ProjectImage[];
  projectTitle: string;
};

export function ProjectGallery({ images, projectTitle }: Props) {
  const [active, setActive] = useState<number | null>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  const close = () => {
    setActive(null);
    window.setTimeout(() => lastTrigger.current?.focus(), 30);
  };

  const isOpen = active !== null;

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setActive(null);
        window.setTimeout(() => lastTrigger.current?.focus(), 30);
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActive((current) =>
          current === null ? null : (current + 1) % images.length,
        );
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActive((current) =>
          current === null
            ? null
            : (current - 1 + images.length) % images.length,
        );
        return;
      }

      if (event.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, images.length]);

  const current = active !== null ? images[active] : null;
  const hasSeveral = images.length > 1;

  return (
    <div>
      <div className="grid gap-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12">
        {images.map((image, index) => (
          <figure
            key={image.base}
            className={`print-break-avoid ${
              image.orientation === "landscape" ? "sm:col-span-2" : ""
            }`}
          >
            <button
              type="button"
              onClick={(event) => {
                lastTrigger.current = event.currentTarget;
                setActive(index);
              }}
              aria-label={`Agrandir le visuel : ${image.caption}`}
              className="group frame block w-full cursor-zoom-in p-4 text-left sm:p-6"
            >
              <ResponsiveImage
                image={image}
                sizes={
                  image.orientation === "landscape"
                    ? "(min-width: 1024px) 56rem, 90vw"
                    : "(min-width: 640px) 28rem, 90vw"
                }
                className="mx-auto h-auto w-full object-contain transition-transform duration-700 ease-editorial group-hover:scale-[1.015]"
                imgClassName="shadow-[0_18px_44px_-34px_rgba(18,35,51,0.55)]"
              />
            </button>
            <figcaption className="mt-3 flex items-start justify-between gap-4 text-xs leading-relaxed text-slate">
              <span>{image.caption}</span>
              <span className="mt-0.5 flex shrink-0 items-center gap-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/35">
                Agrandir
                <ArrowIcon className="h-2.5 w-2.5" />
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      {current !== null ? (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`Galerie du projet ${projectTitle}`}
          data-print-hidden
          className="on-dark fixed inset-0 z-[90] flex flex-col bg-ink/[0.97] text-paper"
          onClick={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <div className="flex items-center justify-between gap-4 px-5 py-5 sm:px-8">
            <p className="label-mono text-paper/60">
              {String((active ?? 0) + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </p>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              className="inline-flex items-center gap-2 border border-paper/30 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              Fermer
              <span aria-hidden="true" className="relative block h-3.5 w-3.5">
                <span className="absolute left-0 top-1/2 h-px w-full rotate-45 bg-current" />
                <span className="absolute left-0 top-1/2 h-px w-full -rotate-45 bg-current" />
              </span>
            </button>
          </div>

          <div className="flex min-h-0 flex-1 items-center gap-2 px-2 sm:gap-6 sm:px-8">
            {hasSeveral ? (
              <button
                type="button"
                onClick={() =>
                  setActive(
                    (currentIndex) =>
                      ((currentIndex ?? 0) - 1 + images.length) % images.length,
                  )
                }
                aria-label="Visuel précédent"
                className="grid h-11 w-11 shrink-0 place-items-center border border-paper/25 text-paper transition-colors hover:bg-paper hover:text-ink"
              >
                <ArrowIcon direction="left" />
              </button>
            ) : null}

            <div className="flex min-w-0 flex-1 items-center justify-center">
              <ResponsiveImage
                image={current}
                sizes="(min-width: 1024px) 80vw, 94vw"
                priority
                className="max-h-[68vh] w-auto max-w-full object-contain"
                imgClassName="max-h-[68vh] w-auto max-w-full object-contain"
              />
            </div>

            {hasSeveral ? (
              <button
                type="button"
                onClick={() =>
                  setActive(
                    (currentIndex) =>
                      ((currentIndex ?? 0) + 1) % images.length,
                  )
                }
                aria-label="Visuel suivant"
                className="grid h-11 w-11 shrink-0 place-items-center border border-paper/25 text-paper transition-colors hover:bg-paper hover:text-ink"
              >
                <ArrowIcon direction="right" />
              </button>
            ) : null}
          </div>

          <div className="px-5 py-5 sm:px-8">
            <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-paper/70">
              {current.caption}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
