import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Roboto Slab", "serif"],
      body: ["Roboto", "sans-serif"],
      code: ["Roboto Mono"]
    },
    extend: {
      colors: {
        code: {
          50: "#00FF41",
          100: "#008F11",
          200: "#003B00",
          300: "#0D0208",
        }
      },
      animation: {
        'flicker': 'flicker 0.8s infinite',
      },
      keyframes: {
        'flicker': {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: []
});

export default config;
