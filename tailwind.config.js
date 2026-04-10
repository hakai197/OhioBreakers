/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#10e645",
          blue: "#1D3557",
          gold: "#007ACC",
          dark: "#0D1117",
          gray: "#161B22",
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
