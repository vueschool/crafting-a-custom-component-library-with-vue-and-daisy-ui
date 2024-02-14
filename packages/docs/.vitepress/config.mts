import { defineConfig } from 'vitepress'
import { VueReplMdPlugin } from 'vitepress-plugin-vue-repl'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'DaisyVue',
  description: 'A Vue Component Library based on the Daisy UI CSS Library',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components' },
      { text: 'Stories', link: 'http://localhost:6006' }
    ],

    sidebar: [
      {
        text: 'Docs',
        items: [
          { text: 'Install', link: '/install' },
          { text: 'Colors', link: '/colors' },
          { text: 'Themes', link: '/themes' }
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Alert', link: '/components/alert' },
          { text: 'Rating', link: '/components/rating' }
        ]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  },
  markdown: {
    config: (md) => {
      md.use(VueReplMdPlugin)
    }
  }
})
