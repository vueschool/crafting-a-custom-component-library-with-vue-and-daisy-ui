import { createApp } from 'vue'
import App from './App.vue'
import { createDaisyVue } from './main'

const daisyVue = createDaisyVue({
  shamefullyRegisterAllComponents: true,
  button: {
    loading: 'infinity'
  }
})

createApp(App).use(daisyVue).mount('#app')
