/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-blue": "#6096B4",
        "light-blue": "#93BFCF",
        "gray-blue": "#BDCDD6",
        "light-beige": "#EEE9DA",
        "gray-beige": "#EDDBC7",
        "dark-red": "#E96479",
        black: {
          DEFAULT: "#010101",
          100: "#0a0b0e",
          200: "#16181D",
          //?FIX this
          300: "#16181D",
          500: "#0f1115",
          700: "#202125",
        },
      },
      fontFamily: {
        sans: ["Source Sans Pro"],
      },
      theme: {
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
    },
    boxShadow: {
      "custom-light": " 0 0 10px #313131",
      "custom-dark": "5px 5px 10px #0a0c0e, -5px -5px 10px #14161c",
    },
  },
  variants: {
    extend: {
      boxShadow: ["dark"],
    },
  },
  plugins: [],
};
