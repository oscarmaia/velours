import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/AdminPage.vue')
    },
    {
      path: '/admin/add',
      name: 'add',
      component: () => import('../views/AddItem.vue')
    }
  ]
})

export default router
