const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js,svelte}"],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'svelte-orange': '#ff3e00'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
