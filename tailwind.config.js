const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {},
    colors: {
      primary: '#DB3C25',
      accent: '#f9f9f9',
      ...colors,
   },
  },
  plugins: [],
}

