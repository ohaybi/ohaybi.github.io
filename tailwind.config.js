/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./*.html", "./dist/js/*.js", "./dist/js/component/*.js"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "8px",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        oren: "#EE4823",
        hitam: "#0E0E0E",
        abu: "#E4E4E4",
        putih: "#F6F6F6",
        biru: "#0C8CE9",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
