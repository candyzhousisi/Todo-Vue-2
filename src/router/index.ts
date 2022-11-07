import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/all'
  },
  {
    name: 'All',
    path: '/all',
    component: () => import('@/views/home/index.vue')
  },
  {
    name: 'Active',
    path: '/active',
    component: () => import('@/views/home/index.vue')
  },
  {
    name: 'Completed',
    path: '/completed',
    component: () => import('@/views/home/index.vue')
  },
  {
    name: 'go',
    path: '/go',
    component: () => import('@/views/go/index.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: '/',
  routes
})
export default router
