import comps from './components/components'
import type { App } from 'vue'
import './assets/tailwind.css'

export const components = comps
export const DaisyVuePlugin = {
  install(app: App) {
    for (const key in comps) {
      // @ts-ignore this is fine
      app.component(key, components[key])
    }
  }
}
