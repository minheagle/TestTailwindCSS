/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['"Barlow Condensed"', "sans-serif"],
      },
      colors: {
        primary: "#FCB717",
        dark: "#1f1f1f",
        darkLight: "#f0f0f0",
      },
    },
  },
  plugins: [],
};
