import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

createApp(App)
  .directive('focus', {
    updated(el) {
      if (el) el.focus()
    }
  })
  .use(createPinia())
  .use(router)
  .mount('#app')
