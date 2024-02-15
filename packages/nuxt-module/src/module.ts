import {
  defineNuxtModule,
  // addPlugin,
  // createResolver,
  addComponent
} from '@nuxt/kit'
import { components as DaisyVueComponents } from 'daisy-vue'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-daisy-vue',
    configKey: 'dasiyVue'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(options, nuxt) {
    // const resolver = createResolver(import.meta.url)

    for (const key in DaisyVueComponents) {
      addComponent({
        name: key, // name of the component to be used in vue templates
        filePath: `daisy-vue/${key.replace(/^Daisy/, '')}`
      })
    }
  }
})
