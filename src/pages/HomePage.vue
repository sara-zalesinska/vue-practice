<template>
  <div class="products-page">
    <div class="products-page__heading">
      <h2>Product list:</h2>
    </div>
    <div class="products-page__products">
      <ul class="products-page__products-list" >
        <product-card v-for="product in products" :key ="product.id" :product="product"/>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { products } from '../mocks/products';
import ProductCard from '../components/ProductCard.vue';
</script>

<style scoped lang="scss">
.products-page {
  &__products {
    margin-top: 60px;
  }

  &__products-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 0;
    gap: 20px;
  }
}

li {
  list-style: none;
}
</style>
