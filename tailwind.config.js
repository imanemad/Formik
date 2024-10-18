/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      spacing:{
        "sidebar_width" : "350px",
        "navbar_height": "60px"
      }
    },
  },
  plugins: [],
}