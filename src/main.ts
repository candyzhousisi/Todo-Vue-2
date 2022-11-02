import Vue from 'vue'
import router from './router'
import store from '@/store'

import 'animate.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'

Vue.use(ElementUI)

console.warn(import.meta.env.MODE)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
