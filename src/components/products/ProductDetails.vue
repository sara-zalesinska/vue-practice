<template>
  <div class="product">
    <div class="product__image-container">
      <img class="product__image" :src="selectedVariant?.image" alt="" />
    </div>
    <div class="product-info">
      <h1 class="product-info__heading">{{ title }}</h1>
      <p v-if="inStock" class="product-info__stock">In Stock</p>
      <p v-else class="product-info__stock">Out of Stock</p>
      <p v-if="product.premium" class="product-info__price">Free</p>
      <p v-else class="product-info__price">{{ product.price }}</p>
      <p class="product-info__description">{{ product.description }}</p>
      <ul class="product-info__ingredients-list">
        <li
          v-for="detail in product.details"
          :key="detail"
          class="product-info__ingredients-list-element"
        >
          {{ detail }}
        </li>
      </ul>
      <ul class="product-info__sizes-list">
        <li v-for="size in product.sizes" :key="size" class="product-info__sizes-list-element">
          {{ size }}
        </li>
      </ul>
      <div class="product-variants-container">
        <div
          v-for="variant in product.variants"
          :key="variant.id"
          class="product-variant"
          :style="{ backgroundColor: variant.color }"
          @mouseover="setVariant(variant)"
        ></div>
      </div>
      <app-button class="product__add-to-cart-btn" @click="addToCart">Add to Cart</app-button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useCartStore } from '@/stores/useCartStore';
import AppButton from '../app/AppButton.vue';

const cartStore = useCartStore();

const props = defineProps({
  product: {
    type: Object,
    required: false,
    default: () => {},
  },
});
const selectedVariant = ref();

const title = computed(() => `${props.product.brand} ${props.product.productName}`);
const inStock = computed(() => selectedVariant.value?.quantity > 0);

const setVariant = (variant) => {
  selectedVariant.value = variant;
};

const addToCart = () => {
  cartStore.addToCart({ ...props.product, variantId: selectedVariant.value.id });
};

onMounted(() => {
  selectedVariant.value = props.product.variants[0];
});
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  justify-content: space-between;
  margin-top: 140px;

  &__image {
    width: 80%;
  }

  &__add-to-cart-btn {
    margin-top: 25px;
    width: 100%;
  }
}

.product-info {
  &__heading {
    margin: 0;
    color: white;
    text-align: left;
  }
  &__stock,
  &__price,
  &__description {
    color: white;
    text-align: left;
  }

  &__ingredients-list {
    text-align-last: left;
  }

  &__ingredients-list-element {
    list-style: circle;
  }

  &__sizes-list {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 50px;
  }

  &__sizes-list-element {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 40px;
    padding: 5px;
    border: 1px solid whitesmoke;
    border-radius: 5px;
    font-size: 15px;
    cursor: pointer;
    transition: border-color 0.25s;

    &:hover {
      border-color: #646cff;
    }
  }
}
.product-variants-container {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
}
.product-variant {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  padding: 5px;
  border: 1px solid whitesmoke;
  border-radius: 50%;
  font-size: 15px;
  cursor: pointer;
}
</style>
