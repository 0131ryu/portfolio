/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#6096B4",
        "light-blue": "#93BFCF",
        "gray-blue": "#BDCDD6",
        "light-beige": "#EEE9DA",
        "dark-red": "#AA5656",
      },
      fontFamily: {
        sans: ["Source Sans Pro"],
      },
    },
  },
  plugins: [],
};
