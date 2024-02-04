<script setup>
import { computed, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import ProductReviewsForm from '../components/products/ProductReviewsForm.vue';
import ProductReviewsList from '../components/products/ProductReviewsList.vue';
import ProductDetails from '../components/products/ProductDetails.vue';
import { products } from '../mocks/products';

const reviewsList = ref([]);
const route = useRoute();
const productId = computed(() => route.params.id);

const product = ref();

onMounted(() => {
  product.value = products.find((localProduct) => localProduct.id === productId.value);
  console.log(products, productId.value);
});

const addReview = (newReview) => {
  reviewsList.value.push(newReview);
};
</script>

<template>
  <div class="test" v-if="product">
    <product-details :product="product" />
    <product-reviews-list :reviews="reviewsList" />
    <product-reviews-form @add-review="addReview($event)" />
  </div>
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
