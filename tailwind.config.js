/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        'buttonsFont' : '5vw'
      },
      spacing: {
        'half': '20%',
        'edge': '65vw',
      },
    },
  },
  plugins: [],
}
