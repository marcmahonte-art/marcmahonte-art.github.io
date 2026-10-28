import { AppLink as Link } from "@/components/AppLink";
import type { Lang } from "@/data/i18n";
import { siteContent } from "@/data/i18n";

type Props = {
  tone?: "dark" | "light";
  compact?: boolean;
  lang?: Lang;
};

export function Logo({ tone = "dark", compact = false, lang = "fr" }: Props) {
  const isLight = tone === "light";

  return (
    <Link
      href={lang === "en" ? "/en/" : "/"}
      aria-label={
        lang === "en"
          ? "Jean Marc Mahonté — back to home"
          : "Jean Marc Mahonté — retour à l’accueil"
      }
      className="group inline-flex items-center gap-3"
    >
      <span
        aria-hidden="true"
        className={`relative grid h-9 w-9 shrink-0 place-items-center ${
          isLight ? "bg-paper text-ink" : "bg-ink text-paper"
        }`}
      >
        <span className="font-display text-[13px] font-semibold leading-none tracking-[0.01em]">
          JM
        </span>
        <span className="absolute -right-[3px] -top-[3px] h-[7px] w-[7px] bg-ochre transition-colors duration-300 group-hover:bg-teal" />
      </span>
      <span className={`flex flex-col leading-none ${compact ? "sr-only" : ""}`}>
        <span
          className={`font-display text-[15px] font-semibold tracking-[-0.01em] ${
            isLight ? "text-paper" : "text-ink"
          }`}
        >
          Jean Marc Mahonté
        </span>
        <span
          className={`mt-1.5 font-mono text-[9.5px] uppercase tracking-[0.13em] ${
            isLight ? "text-paper/55" : "text-slate"
          }`}
        >
          {lang === "en" ? "Senior graphic designer · Creative director" : "Graphiste senior · Directeur créatif"}
        </span>
      </span>
    </Link>
  );
}
