// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'

// import PlaygroundWrapper from '../components/PlaygroundWrapper.vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  // enhanceApp({ app, router, siteData }) {
  //   app.component('VuePlayground', PlaygroundWrapper)
  // }
} satisfies Theme
