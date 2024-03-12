import { defineConfig } from 'vitepress'
// import { VueReplMdPlugin } from 'vitepress-plugin-vue-repl'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'DaisyVue',
  description: 'A Vue Component Library based on the Daisy UI CSS Library',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components' },
      { text: 'Stories', link: 'https://daisy-vue-stories.netlify.app/' }
    ],

    sidebar: [
      {
        text: 'Docs',
        items: [
          { text: 'Install (Recommended)', link: '/install-recommended' },
          { text: 'Install (Global Components)', link: '/install-global-components' },
          { text: 'Install (Nuxt)', link: '/install-nuxt' },
          { text: 'Colors', link: '/colors' },
          { text: 'Themes', link: '/themes' }
        ]
      },
      {
        text: 'Components',

        // leave trailing comma for hygen
        // prettier-ignore
        items: [
          { text: 'Loading', link: '/components/loading' },
          { text: 'Badge', link: '/components/badge' },
          { text: 'Tabs', link: '/components/tabs' },
          // do not remove - used by hygen
        ]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  }
  // markdown: {
  //   config: (md) => {
  //     md.use(VueReplMdPlugin)
  //   }
  // }
})
