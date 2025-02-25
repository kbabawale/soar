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
        "c-sky-blue": "rgba(24, 173, 229, 1)",
        "c-sky-blue-light": "rgba(205, 246, 255, 1)",
        "c-blue": "rgba(51, 144, 253, 0.18)",
        "c-black": "rgba(51, 51, 51, 1)",
        "c-gray-900": "rgba(40, 51, 62, 1)",
        "c-gray-700": "rgba(62, 62, 62, 1)",
        "c-gray-600": "rgba(105, 112, 120, 1)",
        "c-gray-200": "rgba(191, 194, 197, 1)",
        "c-gray-50": "rgba(234, 235, 236, 1)",
        "c-gray-10": "rgba(249, 250, 252, 1)",
        "c-green": "rgba(0, 168, 90, 1)",
        "c-disabled": "rgba(228, 224, 238, 1)",
        "c-purple": "rgba(120, 121, 241, 1)",
        "c-yellow": "rgba(235, 226, 23, 0.13)",
        "c-red": "rgba(255, 130, 130, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
