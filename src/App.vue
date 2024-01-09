<template>
  <div class="app">
    <header>
      <div class="wrapper">
        <nav>
          <router-link :to="{ name: 'Home' }">Home</router-link> |
          <router-link :to="{ name: 'ProductDetails' }">Products</router-link> |
          <router-link :to="{ name: 'Cart' }">
            Cart <span v-if="cartLength > 0" class="app-badge">{{ cartLength }}</span>
          </router-link>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useCartStore } from './stores/useCartStore';

const cartStore = useCartStore();
const cartLength = computed(() => cartStore.numberOfProducts);
</script>
