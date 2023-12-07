const routes = [
  {
    name: 'Home',
    path: '/',
    component: () => import('../../pages/HomePage.vue'),
  },
  {
    name: 'ProductDetails',
    path: '/products/:id',
    component: () => import('../../pages/ProductDetailsPage.vue'),
  },
];

export { routes };
