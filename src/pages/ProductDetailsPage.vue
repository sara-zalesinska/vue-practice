<script setup>
import { ref } from 'vue';
import ProductReviewsForm from '../components/products/ProductReviewsForm.vue';
import ProductReviewsList from '../components/products/ProductReviewsList.vue';
import ProductDetails from '../components/products/ProductDetails.vue';

// const cart = ref([]);
const reviewsList = ref([]);

const product = ref({
  brand: 'Vue',
  productName: 'socks',
  image: new URL('./assets/images/socks_blue.jpg', import.meta.url).href,
  premium: false,
  price: 3.99,
  color: 'green',
  selectedVariant: 0,
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
});

const addReview = (newReview) => {
  reviewsList.value.push(newReview);
};
</script>

<template>
  <!-- <div class="top">
    <a class="cart" href="">\_/ CART {{ cart.length }}</a>
  </div> -->
  <product-details :product="product" />
  <product-reviews-list :reviews="reviewsList" />
  <product-reviews-form @add-review="addReview($event)" />
</template>

<style scoped>
/* .add-to-cart {
  width: 100%;
  margin-top: 40px;
} */
nav a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 40px;
  padding: 3px 10px;
  border: 1px solid whitesmoke;
  border-radius: 5px;
  color: whitesmoke;

  transition: all 0.25s;

  &:hover {
    border-color: #646cff;
    color: #646cff;
  }
}
</style>
