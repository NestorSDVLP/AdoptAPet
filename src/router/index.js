import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/features/home/views/HomeView.vue'
import PetsView from '@/features/pets/views/PetsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pets',
    name: 'pets',
    component: PetsView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
