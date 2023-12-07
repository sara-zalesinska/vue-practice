import { createRouter, createWebHashHistory } from 'vue-router';
import { routes } from './modules/routes';

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export { router };
