import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#14223B",
        accent: "#26C8D0",
        gold: "#BAAC7F",
        surface: "#12181A",
        text: "#EAF2F6",
        muted: "#9AA1A9"
      }
    }
  },
  plugins: []
} satisfies Config;
