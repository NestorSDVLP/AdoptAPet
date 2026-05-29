import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/features/home/views/HomeView.vue'
import PetsView from '@/features/pets/views/PetsView.vue'
import PetDetailView from '@/features/pets/views/PetDetailView.vue'

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
  {
    path: '/pet/:id',
    name: 'pet',
    component: PetDetailView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
