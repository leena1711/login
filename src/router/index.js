import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/home.vue'),
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem('token'); // Anda perlu menyesuaikan ini dengan cara Anda menyimpan token
        if (!token) {
          next({ name: 'login' }); // Jika tidak ada token, arahkan kembali ke halaman login
        } else {
          // Lakukan pengecekan token di API menggunakan fetch
          fetch('https://dummyjson.com/users', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then(response => {
            if (response.ok) {
              // Jika token valid, biarkan pengguna masuk
              next();
            } else {
              // Jika token tidak valid, arahkan kembali ke halaman login
              next({ name: 'login' });
            }
          })
          .catch(error => {
            console.error('Error checking token:', error);
            // Jika terjadi kesalahan, arahkan kembali ke halaman login
            next({ name: 'login' });
          });
        }
      }
    }
  ]
})

export default router