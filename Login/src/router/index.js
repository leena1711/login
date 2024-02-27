import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/login.vue'
import home from '../views/home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
  ],
});

export default router
