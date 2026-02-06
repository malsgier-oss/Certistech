import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0B0F14",
        surface: "#12181A",
        "surface-elevated": "#1A2226",
        accent: "#00C2D8",
        "accent-hover": "#00D4E8",
        gold: "#BAAC7F",
        "gold-hover": "#C4B68A",
        text: "#EAF2F6",
        "text-muted": "#9AA1A9",
        "border-subtle": "rgba(234,242,246,0.12)",
        "border-strong": "rgba(234,242,246,0.18)",
      },
      fontSize: {
        display: ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h1: ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        h2: ["1.5rem", { lineHeight: "1.3", letterSpacing: "-0.005em" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        body: ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        label: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.01em" }],
      },
      spacing: {
        section: "5rem",
        "section-sm": "4rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
