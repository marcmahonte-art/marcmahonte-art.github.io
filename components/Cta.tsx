import { AppLink as Link } from "@/components/AppLink";
import type { ReactNode } from "react";
import { ArrowIcon } from "./ArrowIcon";

type Variant = "primary" | "outline" | "light" | "ghost-light";

const buttonStyles: Record<Variant, string> = {
  primary: "btn btn-primary",
  outline: "btn btn-outline",
  light: "btn btn-light",
  "ghost-light": "btn btn-ghost-light",
};

type CtaProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  direction?: "up-right" | "right";
};

const isInternal = (href: string) => href.startsWith("/") || href.startsWith("#");

export function Cta({
  href,
  children,
  variant = "primary",
  className = "",
  direction = "up-right",
}: CtaProps) {
  const content = (
    <>
      <span>{children}</span>
      <ArrowIcon direction={direction} />
    </>
  );

  if (isInternal(href)) {
    return (
      <Link href={href} className={`${buttonStyles[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={`${buttonStyles[variant]} ${className}`}>
      {content}
    </a>
  );
}

type ArrowLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  direction?: "up-right" | "right";
  tone?: "dark" | "light";
};

export function ArrowLink({
  href,
  children,
  className = "",
  direction = "up-right",
  tone = "dark",
}: ArrowLinkProps) {
  const classes = `arrow-link ${
    tone === "light" ? "text-paper" : "text-ink"
  } ${className}`;
  const content = (
    <>
      <span className="link-line">{children}</span>
      <ArrowIcon direction={direction} />
    </>
  );

  if (isInternal(href)) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={classes}>
      {content}
    </a>
  );
}
