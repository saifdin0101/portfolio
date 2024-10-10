/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-gradient': 'linear-gradient(357deg, rgba(7,23,36,1) 0%, rgba(0,142,198,1) 100%)',
      },
      colors: {
        maincolor: '#00abf0',
      },
    },
  },
  plugins: [],
}