import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#050A14",
        surface: "#0B1220",
        "surface-alt": "#0F1828",
        "surface-elevated": "#151F33",
        "surface-glass": "#0f1527",
        accent: "#3EC1D3",
        "accent-soft": "#6FE0EE",
        "accent-hover": "#56D0DE",
        gold: "#C8B88A",
        "gold-hover": "#D4C59A",
        "brand-navy": "#101A2C",
        text: "#EDF2F8",
        "text-subtle": "#B4BFCC",
        "text-muted": "#8F99A8",
        "border-subtle": "rgba(180,191,204,0.18)",
        "border-strong": "rgba(180,191,204,0.3)",
        success: "#35D89A",
        warn: "#F7B84F",
        error: "#F97373",
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
        "section-lg": "7rem",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        soft: "0 18px 55px rgba(0, 0, 0, 0.35)",
        panel: "0 18px 50px rgba(3, 8, 22, 0.55)",
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(circle at 12% 14%, rgba(62, 193, 211, 0.26), transparent 40%), radial-gradient(circle at 85% 20%, rgba(200,184,138,0.24), transparent 44%), radial-gradient(circle at 80% 85%, rgba(62, 193, 211, 0.12), transparent 43%)",
        "surface-gradient": "linear-gradient(170deg, rgba(15,24,40,0.98), rgba(11,18,32,0.94))",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.2, 0.6, 0.3, 1) both",
        "stagger-one": "fadeUp 0.6s cubic-bezier(0.2, 0.6, 0.3, 1) both",
        "stagger-two": "fadeUp 0.7s cubic-bezier(0.2, 0.6, 0.3, 1) both",
        "stagger-three": "fadeUp 0.8s cubic-bezier(0.2, 0.6, 0.3, 1) both",
        "soft-glow": "softGlow 6s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(18px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        softGlow: {
          "0%": { transform: "translate3d(0,0,0) scale(1)", opacity: "0.45" },
          "50%": { transform: "translate3d(0,0,0) scale(1.05)", opacity: "0.75" },
          "100%": { transform: "translate3d(0,0,0) scale(1)", opacity: "0.45" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
