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
      path: '/results',
      name: 'results',
      component: () => import('../views/TierResults.vue')
    },
    {
      path: '/graph',
      name: 'graph',
      component: () => import('../views/GraphView.vue')
    },
    {
      path: '/tier',
      name: 'tier',
      component: () => import('../views/TierView.vue')
    },
    {
      path: '/youtube',
      name: 'youtube',
      component: () => import('../views/YoutubeView.vue')
    },
    {
      path: '/register/',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    }
  ]
})

export default router
