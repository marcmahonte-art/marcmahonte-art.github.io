import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#122333",
        "ink-soft": "#1C3142",
        paper: "#F7F6F2",
        "paper-deep": "#EFEDE6",
        line: "#DDD9CE",
        slate: "#536273",
        teal: "#168C88",
        "teal-deep": "#0E615E",
        ochre: "#D98A42",
        "ochre-deep": "#A96229",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-archivo)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        shell: "1440px",
        prose: "62ch",
      },
      letterSpacing: {
        label: "0.16em",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        rise: "rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        fade: "fade 0.5s ease both",
      },
    },
  },
  plugins: [],
};

export default config;
