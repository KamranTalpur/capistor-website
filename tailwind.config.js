/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sexyblue: "#4daab3",
        kindofwhite: "#eeeeee",
        darkgray: "#2a2a2a",
      },
      fontFamily: {
        domine: ["Domine", "serif"],
        helvetica: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
