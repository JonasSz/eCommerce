/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        'buttonsFont' : '5vw',
        '2vw' : '5vmin'
      },
      spacing: {
        'half': '20%',
        'edge': '65vw',
        '50vw' : '50%'
      },
    },
  },
  plugins: [],
}
