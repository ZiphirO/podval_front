import { createRouter, createWebHistory } from 'vue-router'
import PodLogIn from '@/pages/PodLogIn.vue'
import PodSignUp from '@/pages/PodSignUp.vue'
import UserPodStorage from '@/pages/UserPodStorage.vue'

const routes = [
  {
    path: '/',
    name:'LogIn',
    component: PodLogIn,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: PodSignUp,
  },
  {
    path: '/storage',
    name: 'Storage',
    component: UserPodStorage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
