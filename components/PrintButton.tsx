"use client";

import { ui, type Lang } from "@/data/i18n";

export function PrintButton({ lang = "fr" }: { lang?: Lang }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      data-print-hidden
      className="inline-flex items-center gap-2 border border-ink/20 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-slate transition-colors hover:border-ink hover:text-ink"
    >
      <svg
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        className="h-3.5 w-3.5"
      >
        <path
          d="M4.5 6V2.5h7V6M4.5 11.5h-2v-4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v4h-2M4.5 9.5h7v4h-7z"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>
      {ui[lang].print}
    </button>
  );
}
