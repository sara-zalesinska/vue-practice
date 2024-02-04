<template>
  <li class="products-card__product-element">
    <router-link
      class="products-card__product-link"
      :to="{ name: 'ProductDetails', params: { id: product.id } }"
    >
      {{ product.brand }}
      <p class="products-card__product-description">
        {{ product.description }}
      </p>
    </router-link>
  </li>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: false,
    default: undefined,
  },
});
</script>

<style lang="scss" scoped>
.product-card {
  &__product-element {
    width: 350px;
    height: 200px;
    border: 1px solid rgba(245, 245, 245, 0.36);
    border-radius: 8px;
    transition: all 0.3s;

    &:hover {
      scale: 1.03;
      border-color: #646cff;
    }
  }

  &__product-description {
    color: white;
  }

  &__product-link {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
