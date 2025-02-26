import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    ".src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    ".src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      lato: ["Lato", "serif"],
    },
    extend: {
      colors: {
        "c-primary": "rgba(52, 60, 106, 1)",
        "c-secondary": "rgba(35, 35, 35, 1)",
        "c-light": "rgba(177, 177, 177, 1)",
        "c-alt": "rgba(113, 142, 191, 1)",
        "c-red": "rgba(255, 75, 74, 1)",
        "c-orange": "rgba(252, 121, 0, 1)",
        "c-light-purple": "rgba(231, 237, 255, 1)",
        "c-light-green": "rgba(220, 250, 248, 1)",
        "c-green": "rgba(65, 212, 168, 1)",
        "c-blue": "rgba(57, 106, 255, 1)",
        "c-light-gray": "rgba(244, 247, 250,1)",
        "c-light-ash": "rgba(245, 247, 250,1)",
        "c-dark-ash": "rgba(237, 241, 247,1)",
        "c-text": "rgba(139, 163, 203,1)",
      },
    },
  },
  plugins: [],
};
export default config;
