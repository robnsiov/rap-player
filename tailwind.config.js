/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      old: { max: "350px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      container: {
        center: true,
      },
      dropShadow: {
        "3xl": "0 0 31px #fff",
      },
      colors: {
        "one-dark": {
          DEFAULT: "#181D27",
          100: "#181d2726",
          200: "#2c313af2",
          400: "#222938",
        },
        "one-white": "#181d27f2",
        backdrop: "#00000064",
      },
      keyframes: {
        wave: {
          "0%, 100%": { height: "4px" },
          "50%": { height: "16px" },
        },
      },
    },
  },
  plugins: [],
};
