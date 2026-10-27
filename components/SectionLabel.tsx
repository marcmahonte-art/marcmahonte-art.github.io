import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  index?: string;
  tone?: "dark" | "light";
  className?: string;
};

export function SectionLabel({
  children,
  index,
  tone = "dark",
  className = "",
}: Props) {
  return (
    <div
      className={`flex items-center gap-4 ${
        tone === "light" ? "text-paper/60" : "text-slate"
      } ${className}`}
    >
      <span
        aria-hidden="true"
        className={`h-px w-8 ${
          tone === "light" ? "bg-paper/30" : "bg-ink/25"
        }`}
      />
      <span className="label-mono">{children}</span>
      {index ? (
        <span
          className={`label-mono ml-auto ${
            tone === "light" ? "text-paper/40" : "text-ink/35"
          }`}
        >
          / {index}
        </span>
      ) : null}
    </div>
  );
}
