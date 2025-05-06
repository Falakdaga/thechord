/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        accent: '#800020', // Burgundy
        neutral: '#F5F5F5',
        burgundy: '#800020',
        rose: '#B76E79',
        blush: '#F8E1E7',
        dark: '#2D1A23',
      },
    },
  },
  plugins: [],
}