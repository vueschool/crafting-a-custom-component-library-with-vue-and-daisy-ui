/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/daisy-vue/**/*.{vue,ts}'
  ],
  theme: {
    extend: {}
  },
  plugins: [daisyui]
}
