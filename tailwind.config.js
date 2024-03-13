// import {daisyui} from 'daisyui'
// const {daisyui}= require('daisyui');

/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['selector', '[data-theme="night"]'],
  theme: {
    extend: {
      fontFamily:{
        roboto:['Roboto']
      }
    },
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
  },

  // plugins: [daisyui],
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light", "dark", "cupcake",'cmyk','night'],
  },
}

