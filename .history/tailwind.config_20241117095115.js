/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#000000",
        accent: "#B0B0B0",
      },
      fontFamily: {
        oohbaby: ["Oooh Baby", "cursive"],
        kiteone: ["Kite One", "sans-serif"],
        orelegaone: ["Orelega One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
