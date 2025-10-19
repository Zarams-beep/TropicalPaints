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
        // 🖌️ Theme Colors (Natural + Balanced)
        primary: {
          DEFAULT: "#2F4F4F",   // darkslategray
          light: "#5E7A7A",     // soft sage
          softer: "#DDE5E5",    // pale mint
        },
        accent: {
          DEFAULT: "#C9A66B",   // muted gold
          light: "#E9D5A1",     // warm parchment
        },
        secondary: {
          DEFAULT: "#6B705C",   // olive-gray
          light: "#B7B7A4",     // ash
        },
        neutral: {
          DEFAULT: "#F9F9F9",   // off-white
          dark: "#1F1F1F",      // near black
        },
        text: {
          DEFAULT: "#2E2E2E",   // base text
          muted: "#6C757D",     // muted gray
        },
        error: {
          DEFAULT: "#B00020",   // dark red
        },
      },
      screens: {
        xs: "480px",
        xss: "580px",
        sm: "640px",
        smm: "724px",
        md: "768px",
        mdd: "993px",
        lg: "1024px",
        xl: "1280px",
        "1xl": "1044px",
        "2xl": "1536px",
        xxl: "1600px",
        xxxl: "1920px",
      },
      fontFamily: {
        coffee: ['"Playfair Display"', "serif"],
        clean: ["Raleway", "sans-serif"],
        classic: ["Cormorant Garamond", "serif"],
        calm: ["Quattrocento", "serif"],
        signature: ["Pacifico", "cursive"],
        read: ["Merriweather", "serif"],
        clicker: ['"Clicker Script"', "cursive"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        bounceY: {
          "0%, 100%": { transform: "translateY(-5%)" },
          "50%": { transform: "translateY(5%)" },
        },
        bounceX: {
          "0%, 100%": { transform: "translateX(-5%)" },
          "50%": { transform: "translateX(5%)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        zoomIn: {
          from: { transform: "scale(0.8)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
        slideLeft: {
          from: { transform: "translateX(100%)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        slideRight: {
          from: { transform: "translateX(-100%)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        slideUp: {
          from: { transform: "translateY(100%)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          from: { transform: "translateY(-100%)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        pulseFast: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        fillDrain: {
          "0%, 100%": { height: "0%", opacity: "0.2" },
          "50%": { height: "80%", opacity: "1" },
        },
        floatRoller: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        float: "float 3s infinite",
        wiggle: "wiggle 0.3s ease-in-out",
        bounceY: "bounceY 1s infinite",
        bounceX: "bounceX 3s infinite",
        fadeIn: "fadeIn 0.5s ease-in forwards",
        zoomIn: "zoomIn 0.5s ease-in-out",
        slideLeft: "slideLeft 0.5s ease-out",
        slideRight: "slideRight 0.5s ease-out",
        slideUp: "slideUp 0.5s ease-out",
        slideDown: "slideDown 0.5s ease-out",
        pulseFast: "pulseFast 0.8s ease-in-out infinite",
        fillDrain: "fillDrain 2.5s ease-in-out infinite",
        floatRoller: "floatRoller 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
