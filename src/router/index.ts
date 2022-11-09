import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/all',
      name: 'All',
      component: HomeView
    },
    {
      path: '/active',
      name: 'Active',
      component: HomeView
    },
    {
      path: '/completed',
      name: 'Completed',
      component: HomeView
    }
  ]
})

export default router
