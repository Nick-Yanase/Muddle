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

        gray10: '#E3E8EF',
        realBlue: '#3662E3',
        green20: '#32D657 ',
        red20: '#DD524C',
        yellow20: '#F5D565',
        beige10: '#F5E8D5',
        orange20: '#E9A23B',
        iceWhite: '#F8FAFC',

        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;


