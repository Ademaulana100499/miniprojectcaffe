/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#000000",
        accent: "#816F57",
      },
      fontFamily: {
        oohbaby: ["Oooh Baby", "cursive"],
        kiteone: ["Kite One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
