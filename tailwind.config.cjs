/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        body: "rgb(var(--color-bg))",
        "box-bg": "rgb(var(--color-box))",
        "box-shadow": "rgb(var(--box-sd))",
        "box-border": "rgb(var(--box-border))",
        "heading-1": "rgb(var(--heading-1))",
        "heading-2": "rgb(var(--heading-2))",
        "heading-3": "rgb(var(--heading-3))",
        primary: {
          50: "#eff7ff",
          100: "#dcebfd",
          200: "#c0ddfd",
          300: "#95c9fb",
          400: "#63aaf7",
          500: "#3f89f2",
          600: "#296ce7",
          700: "#2156d4",
          800: "#2147ac",
          900: "#234493",
          950: "#182853",
        },
        secondary: {
          50: "#f7f7f7",
          100: "#ededed",
          200: "#dfdfdf",
          300: "#c8c8c8",
          400: "#b2b2b2",
          500: "#999999",
          600: "#888888",
          700: "#7b7b7b",
          800: "#676767",
          900: "#545454",
          950: "#363636",
        },
      },
      screens: {
        midmd: "880px",
      },
    },
  },
  plugins: [],
};
