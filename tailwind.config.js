/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-gradient': 'linear-gradient(357deg, rgba(7,23,36,1) 0%, rgba(0,142,198,1) 100%)',
        'custom-gradient': "linear-gradient(to right, rgba(159, 1, 656, 1), url('https://img.freepik.com/premium-vector/programming-code-coding-hacker-background-programming-code-icon-made-with-binary-code_127544-815.jpg'))",
      },
      colors: {
        maincolor: '#00abf0',
      },
    },
  },
  plugins: [],
}