/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#000000",
        accent: "#F5F5DC",
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
