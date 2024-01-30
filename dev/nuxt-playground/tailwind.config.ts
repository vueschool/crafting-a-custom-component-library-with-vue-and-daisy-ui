import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./node_modules/@daisy-vuei/core/src/components/**/*.vue"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
