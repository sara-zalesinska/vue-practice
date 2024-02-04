const products = [
  {
    brand: 'Vue',
    productName: 'socks',
    image: new URL('./assets/images/socks_blue.jpg', import.meta.url).href,
    premium: false,
    price: 3.99,
    // color: 'green',
    selectedVariant: 0,
    id: 'prodiuct-1',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis sostrud exercitation ullamco laboris nisi.',
    details: ['30% wool', '50% cotton', '20% polyester'],
    variants: [
      {
        id: 3838,
        color: 'blue',
        image: new URL('@/assets/images/socks_blue.jpg', import.meta.url).href,
        quantity: 0,
      },
      {
        id: 2929,
        color: 'green',
        image: new URL('@/assets/images/socks_green.jpg', import.meta.url).href,
        quantity: 50,
      },
    ],
    sizes: ['36-39', '39-42', '42-45'],
  },
  {
    brand: 'JavaScript',
    productName: 'socks',
    image: new URL('./assets/images/socks_blue.jpg', import.meta.url).href,
    premium: false,
    price: 2.99,
    // color: 'green',
    selectedVariant: 0,
    id: 'prodiuct-2',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis sostrud exercitation ullamco laboris nisi.',
    details: ['30% wool', '50% cotton', '20% polyester'],
    variants: [
      {
        id: 3838,
        color: 'blue',
        image: new URL('@/assets/images/socks_blue.jpg', import.meta.url).href,
        quantity: 0,
      },
      {
        id: 2929,
        color: 'green',
        image: new URL('@/assets/images/socks_green.jpg', import.meta.url).href,
        quantity: 50,
      },
    ],
    sizes: ['36-39', '39-42', '42-45'],
  },
  {
    brand: 'Dupa',
    productName: 'socks',
    image: new URL('./assets/images/socks_blue.jpg', import.meta.url).href,
    premium: false,
    price: 1.99,
    // color: 'green',
    selectedVariant: 0,
    id: 'prodiuct-3',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis sostrud exercitation ullamco laboris nisi.',
    details: ['30% wool', '50% cotton', '20% polyester'],
    variants: [
      {
        id: 3838,
        color: 'blue',
        image: new URL('@/assets/images/socks_blue.jpg', import.meta.url).href,
        quantity: 0,
      },
      {
        id: 2929,
        color: 'green',
        image: new URL('@/assets/images/socks_green.jpg', import.meta.url).href,
        quantity: 50,
      },
    ],
    sizes: ['36-39', '39-42', '42-45'],
  },
  {
    brand: 'SASS',
    productName: 'socks',
    image: new URL('./assets/images/socks_blue.jpg', import.meta.url).href,
    premium: false,
    price: 5.99,
    // color: 'green',
    selectedVariant: 0,
    id: 'prodiuct-4',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis sostrud exercitation ullamco laboris nisi.',
    details: ['30% wool', '50% cotton', '20% polyester'],
    variants: [
      {
        id: 3838,
        color: 'blue',
        image: new URL('@/assets/images/socks_blue.jpg', import.meta.url).href,
        quantity: 0,
      },
      {
        id: 2929,
        color: 'green',
        image: new URL('@/assets/images/socks_green.jpg', import.meta.url).href,
        quantity: 50,
      },
    ],
    sizes: ['36-39', '39-42', '42-45'],
  },
  {
    brand: 'HTML',
    productName: 'socks',
    image: new URL('./assets/images/socks_blue.jpg', import.meta.url).href,
    premium: false,
    price: 4.99,
    // color: 'green',
    selectedVariant: 0,
    id: 'prodiuct-5',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis sostrud exercitation ullamco laboris nisi.',
    details: ['30% wool', '50% cotton', '20% polyester'],
    variants: [
      {
        id: 3838,
        color: 'blue',
        image: new URL('@/assets/images/socks_blue.jpg', import.meta.url).href,
        quantity: 0,
      },
      {
        id: 2929,
        color: 'green',
        image: new URL('@/assets/images/socks_green.jpg', import.meta.url).href,
        quantity: 50,
      },
    ],
    sizes: ['36-39', '39-42', '42-45'],
  },
  {
    brand: 'CSS',
    productName: 'socks',
    image: new URL('./assets/images/socks_blue.jpg', import.meta.url).href,
    premium: false,
    price: 1.99,
    // color: 'green',
    selectedVariant: 0,
    id: 'prodiuct-6',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis sostrud exercitation ullamco laboris nisi.',
    details: ['30% wool', '50% cotton', '20% polyester'],
    variants: [
      {
        id: 3838,
        color: 'blue',
        image: new URL('@/assets/images/socks_blue.jpg', import.meta.url).href,
        quantity: 0,
      },
      {
        id: 2929,
        color: 'green',
        image: new URL('@/assets/images/socks_green.jpg', import.meta.url).href,
        quantity: 50,
      },
    ],
    sizes: ['36-39', '39-42', '42-45'],
  },
];

export { products };
