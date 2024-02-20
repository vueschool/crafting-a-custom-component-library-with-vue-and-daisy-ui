import './assets/main.css'
// uncomment lines 4, 5, & 12 to install components globally
// not great for performance!
// import { Plugin as DaisyVuePlugin } from 'daisy-vue'
// import 'daisy-vue/style.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
  // and this one too
  // .use(DaisyVuePlugin)
  .mount('#app')
