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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'xs': '480px',  
        'xss': '580px', 
        'sm': '640px',  
        'smm': '724px',  
        'md': '768px', 
        'mdd': '993x',  
        'lg': '1024px', 
        'xl': '1280px', 
        '1xl': '1044px',
        '2xl': '1536px',
        'xxl': '1600px',
        'xxxl': '1920px',
      },
    },
  },
  plugins: [],
};
export default config;
