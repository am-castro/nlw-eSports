/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
      },
      backgroundImage: {
        galaxy: "url('/galaxy.png')",
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 33%, #43E7AD 33%, #E1D55D 34%)'
      }
    },
  },
  plugins: [],
}
