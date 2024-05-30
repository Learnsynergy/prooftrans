import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import ReadOnly from '../views/ReadOnly.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/readonly/:id',
    name: 'ReadOnly',
    component: ReadOnly
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL || '/'),  // Utiliser import.meta.env.BASE_URL
  routes
});

export default router;
