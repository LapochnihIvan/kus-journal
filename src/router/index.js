import { createRouter, createWebHistory } from 'vue-router'
import {login_required} from "@/utils/authorization";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/journal',
      name: 'journal',
      component: ()=>import("@/views/teachers/JournalView.vue")
    },
    {
      path: '/login',
      name: 'login',
      component: ()=>import("@/views/system_functions/Login.vue")
    },
    {
      path: '/',
      name: 'home',
      beforeEnter: login_required,
      component: ()=>import("@/views/Home.vue")
    },
  ]
})

export default router
