import daisyui from 'daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./node_modules/daisy-vue/src/{components,directives}/**/*.vue'],
  theme: {
    extend: {}
  },
  plugins: [daisyui]
}
