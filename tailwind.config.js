import daisyui from 'daisyui'
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['selector', '[data-theme="night"]'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto']
      }
    },
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
  },

  plugins: [daisyui],
  daisyui: {
    themes: ["light","night"],
  },
}

