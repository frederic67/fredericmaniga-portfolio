import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B1020",
        surface: "#0F1730",
        border: "#223058",
        text: "#E7ECFF",
        muted: "#A8B3D6",
        accent: "#5B8CFF",
        accent2: "#22D3EE",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(91,140,255,0.25), 0 12px 40px rgba(91,140,255,0.12)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
} satisfies Config;

