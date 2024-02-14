import components from './components/components'
import type { App } from 'vue'

export default {
  install(app: App) {
    for (const key in components) {
      // @ts-ignore this is fine
      app.component(key, components[key])
    }
  }
}
