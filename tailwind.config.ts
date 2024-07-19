import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      secondary: ['Montserrat', 'sans-serif'],
    },
    colors: {
      dark: '#111111',
      bright: '#fafafa',
      lightGreen: '#C8E318',
      midGreen: '#97C61E',
      darkGreen: '#6CB125',
      errorRed: '#ff0024'
    }
  },
  plugins: [],
};
export default config;
