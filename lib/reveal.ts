import type { CSSProperties } from "react";

export function reveal(delay = 0) {
  return {
    "data-reveal": "",
    style: { "--reveal-delay": `${delay}ms` } as CSSProperties,
  };
}
