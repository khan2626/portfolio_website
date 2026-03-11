/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0f",
        secondary: "#d53a13",
        tertiary: "#13d5d4",
        accent: "#13d5d4",
        muted: "#64748b",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
        display: ["Outfit", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(19, 213, 212, 0.15)",
        "glow-sm": "0 0 20px rgba(19, 213, 212, 0.1)",
        card: "0 4px 24px rgba(0, 0, 0, 0.4)",
        "card-hover": "0 8px 32px rgba(19, 213, 212, 0.2)",
      },
      animation: {
        "fade-in": "fadeInUp 0.6s ease-out forwards",
      },
    },
    screens: {
      lg: { max: "2023px" },
      sm: { max: "1000px" },
    },
  },
  plugins: [],
};
