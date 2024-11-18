/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
      },
      fontFamily: {
        oohbaby: ["Oooh Baby", "cursive"],
        kiteone: ["Kite One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
