import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

createApp(App)
  .directive('focus', {
    // beforeMount(el, binding, vnode) {
    //   console.log('beforeMount , 观察它的执行时机')
    // },
    // mounted(el) {
    //   el.focus()
    //   console.log('mounted , 观察它的执行时机')
    // },
    // beforeUpdate(el) {
    //   console.log('beforeUpdate , 观察它的执行时机')
    // },
    updated(el) {
      el.focus()
    }
    // beforeUnmount(el) {
    //   console.log('beforeUnmount , 观察它的执行时机')
    // },
    // unmounted(el) {
    //   console.log('unmounted , 观察它的执行时机')
    // }
  })
  .use(createPinia())
  .use(router)
  .mount('#app')
