<template>
  <div class="product">
    <div class="product-img">
      <img :src="selectedVariant?.image" alt="" />
    </div>
    <div class="product-info">
      <h1>{{ title }}</h1>
      <p v-if="inStock">In Stock</p>
      <p v-else>Out of Stock</p>
      <p v-if="product.premium">Free</p>
      <p v-else>$2.99</p>
      <p>{{ product.description }}</p>
      <ul class="ingredients">
        <li v-for="detail in product.details" :key="detail">{{ detail }}</li>
      </ul>
      <ul class="sizes">
        <li v-for="size in product.sizes" :key="size">{{ size }}</li>
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
      <button class="add-to-cart" type="button" @click="addToCart">Add to Cart</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

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
  // cart.value.push(selectedVariant.value.id);
};

onMounted(() => {
  selectedVariant.value = props.product.variants[0];
});
</script>

<style lang="scss" scoped>
li {
  list-style: none;
}
h1 {
  margin: 0;
  color: white;
  text-align: left;
}
p {
  color: white;
  text-align: left;
}

.product-img img {
  width: 80%;
}
.product {
  display: flex;
  justify-content: space-between;
  margin-top: 140px;
}
.sizes {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 50px;
}
.ingredients {
  text-align-last: left;
}
.sizes li {
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
.ingredients li {
  list-style: circle;
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
