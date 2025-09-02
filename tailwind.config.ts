import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FFD700",
          hover: "#FFE44D",
        },
        secondary: {
          DEFAULT: "#1E4D40",
          hover: "#2A6B59",
        },
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-jp)"],
      },
    },
  },
  plugins: [],
};

export default config;
