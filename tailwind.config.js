// import {daisyui} from 'daisyui'
// const {daisyui}= require('daisyui');

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  // plugins: [daisyui],
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light", "dark", "cupcake",'cmyk'],
  },
}

