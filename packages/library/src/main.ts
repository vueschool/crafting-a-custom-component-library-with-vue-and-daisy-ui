import type { App } from 'vue'
import './assets/tailwind.css'
export * from './components/components'
import * as components from '././components/components'

export const Plugin = {
  // need this for the Type to be right even if we aren't using it
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  install(app: App, options: Record<string, any> = {}) {
    for (const key in components) {
      app.component(key, components[key])
    }
  }
}
