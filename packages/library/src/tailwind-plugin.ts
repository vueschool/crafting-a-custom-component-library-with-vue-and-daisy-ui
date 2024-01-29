import plugin from 'tailwindcss/plugin'
import daisyui from 'daisyui'

export const tailwindPlugin = plugin(function (tw) {
  daisyui.handler(tw)
})
