/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode : 'class',
  theme: {
    fontFamily: {
      'lexend': ['Lexend Deca', 'sans-serif',],
      'bigs': ['Big Shoulders Display', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
