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
        oren: "#FD5D2C",
        peach: "#FED0AA",
        brown: "#423533",
        "light-brown": "#8D5D52",
        hitam: "#06040D",
        putih: "#FFF3F0",
      },
      screens: {
        "2xl": "1320px",
      },
      keyframes: {
        "infinite-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        dadah: {
          "0%,100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(20deg)" },
        },
      },
      animation: {
        "infinite-spin": "infinite-spin 30s linear infinite",
        dadah: "dadah 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
