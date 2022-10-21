/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#F4F5F6",
          200: "#EBEBF0",
          300: "#DEDEE3",
          400: "#AEAEB3",
          500: "#7A7A80",
          600: "#47474D",
          700: "#29292E",
          800: "#1B1B1F",
        },
        red: {
          100: "#FDEDEF",
          400: "#DC1637",
          500: "#B2122C",
        },
        green: {
          400: "#03B252",
          500: "#038A3F",
        },
      },
      fontFamily: {
        default: "Inter, sans-serif",
        heading: "Archivo, sans-serif",
      },
    },
  },
  plugins: [require("tailwindcss-radix")()],
};
