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
        cyan10: 'hsl(193, 100%, 96%)',
        cyan30: 'hsl(208, 11%, 55%)',
        cyan50: 'hsl(192, 100%, 9%)',
        pink: ' hsl(322, 100%, 66%)',

        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;


