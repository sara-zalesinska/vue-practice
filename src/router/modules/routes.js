const routes = [
  {
    name: 'Home',
    path: '/',
    component: () => import('../../pages/HomePage.vue'),
  },
  {
    name: 'ProductDetails',
    path: '/products/',
    component: () => import('../../pages/ProductDetailsPage.vue'),
  },
  {
    name: 'Cart',
    path: '/cart',
    component: () => import('../../pages/Cart.vue'),
  },
];

export { routes };
