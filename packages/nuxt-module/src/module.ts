import { defineNuxtModule, addComponent, installModule } from '@nuxt/kit'

// @ts-ignore
import * as DaisyVueComponents from 'daisy-vue/js'
import daisyui from 'daisyui'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-daisy-vue',
    configKey: 'daisyVue'
  },
  // Default configuration options of the Nuxt module
  defaults: {},

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async setup(options, nuxt) {
    const nuxtOptions = nuxt.options as typeof nuxt.options & { tailwindcss: Record<string, any> }

    nuxtOptions.tailwindcss = nuxtOptions.tailwindcss || {}

    nuxtOptions.tailwindcss.config = {
      ...(nuxtOptions?.tailwindcss?.config || {}),
      content: [
        './node_modules/daisy-vue/src/{components,directives}/**/*.vue',
        './node_modules/nuxt-daisy-vue/node_modules/daisy-vue/src/{components,directives}/**/*.vue',

        // @ts-ignore this works fine
        ...(nuxtOptions?.tailwindcss?.config?.content || [])
      ],
      plugins: [daisyui, ...(nuxtOptions?.tailwindcss?.config?.plugins || [])]
    }

    // this must come after the tailwind config is set
    // otherwise our config will not be used
    await installModule('@nuxtjs/tailwindcss')

    for (const key in DaisyVueComponents) {
      if (key.startsWith('Daisy')) {
        addComponent({
          name: key, // name of the component to be used in vue templates
          export: key,
          filePath: `daisy-vue`
        })
      }
    }
  }
})
