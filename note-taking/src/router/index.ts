import { createRouter, createWebHistory } from 'vue-router'
import TakeNotes  from '../views/TakeNotes.vue'
import ViewNotes from '@/views/ViewNotes.vue'
import ShowNotes from '@/views/ShowNotes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TakeNotes
    },
    {
      path: '/viewnotes',
      name: 'viewnotes',
      component: ViewNotes
    },
    {
      path: '/viewnotes/:id',
      name: 'NotePage',
      component:ShowNotes ,
    },
  ]
})

export default router
