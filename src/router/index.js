import { createRouter, createWebHistory } from 'vue-router'
import Stores from '../views/Stores.vue'

const routes = [
  {
    path: '/',
    name: 'Stores',
    component: Stores
  },
  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
