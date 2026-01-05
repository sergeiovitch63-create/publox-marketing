import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "page-bg": "#EEEEEE",
        "text-primary": "#1A1A1A",
        "text-secondary": "#6B6B6B",
        "button-primary-bg": "#1E1E1E",
        "pastel-blue": "#93BEE9",
        "warm-beige": "#EDDFD0",
        "soft-beige": "#EDEAE7",
        "blue-grey": "#BBCDDE",
        "offwhite-card": "#F0EAE5",
      },
      borderRadius: {
        card: "24px",
        image: "20px",
        pill: "9999px",
      },
      boxShadow: {
        soft: "0 2px 8px rgba(0, 0, 0, 0.04)",
        "soft-lg": "0 4px 16px rgba(0, 0, 0, 0.06)",
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;

