import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/home',
    component: () => import('@/views/Layout.vue'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/Home.vue')
      }, {
        path: 'about',
        name: 'About',
        component: () => import('@/views/About.vue')
      }
    ]
  }, {
    path: '/error',
    name: 'Error',
    component: () => import('@/views/Error.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
