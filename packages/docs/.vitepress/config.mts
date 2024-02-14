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
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Components', link: '/components' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
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
