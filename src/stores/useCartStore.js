import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

const useCartStore = defineStore('cart', () => {
  const products = ref([]);

  const numberOfProducts = computed(() => products.value.length);
  const totalPrice = computed(() =>
    // let sum = 0;
    // products.value.forEach((product) => {
    //   sum = product.price + sum;
    // });
    // return sum;

    products.value.reduce((sum, product) => sum + product.price, 0)
  );
  const addToCart = (product) => {
    products.value.push(product);
  };

  const removeFromCart = (product) => {
    products.value = products.value.filter((localProduct) => localProduct.id !== product.id);
  };

  return { products, totalPrice, numberOfProducts, addToCart, removeFromCart };
});

export { useCartStore };
