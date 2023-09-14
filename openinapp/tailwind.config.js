/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    fontWeight: {
      '100': '100',
      '200': '200',
      '300': '300',
      '400': '400',
      '500': '500',
      '600': '600',
      '700': '700',
      '800': '800',
      '900': '900',
    },
    fontFamily: {
      'lato' : ['Lato','sans-serif'],
      'montserrat': ['Montserrat', 'serif'], // For headings or other elements
    },
  },
  plugins: [],
}

