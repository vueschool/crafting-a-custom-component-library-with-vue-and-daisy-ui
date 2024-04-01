// https://vitepress.dev/guide/custom-theme
import { h, defineComponent, onMounted } from 'vue'
import type { Theme } from 'vitepress'
import { initThemeSwitcher } from './theme-switcher-support'

import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(
      defineComponent({
        setup() {
          onMounted(() => {
            initThemeSwitcher()
          })
          return () =>
            h(DefaultTheme.Layout, null, {
              // https://vitepress.dev/guide/extending-default-theme#layout-slots
            })
        }
      })
    )
  }
} satisfies Theme
