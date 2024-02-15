import './assets/main.css'
// uncomment lines 4 & 12 to install components globally
// not great for performance!
// import { DaisyVuePlugin } from 'daisy-vue'
import 'daisy-vue/style.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
  // and this one too
  // .use(DaisyVuePlugin)
  .mount('#app')
