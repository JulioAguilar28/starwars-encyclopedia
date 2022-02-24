import charactersPageVue from '@/pages/charactersPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: charactersPageVue
    }
  ]
})

export default router
