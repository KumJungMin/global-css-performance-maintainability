import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'DomainPage',
    component: () => import('./pages/DomainPage.vue'),
  },
  {
    path: '/handle',
    name: 'HandlePage',
    component: () => import('./pages/HandlePage.vue'),
  },
  {
    path: '/market',
    name: 'MarketPage',
    component: () => import('./pages/MarketPage.vue'),
  },
  {
    path: '/store',
    name: 'StorePage',
    component: () => import('./pages/StorePage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
