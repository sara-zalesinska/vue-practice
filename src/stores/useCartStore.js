import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

const useCartStore = defineStore('cart', () => {
  const products = ref([]);
  const numberOfProducts = computed(() => products.value.length);

  const totalPrice = computed(() =>
    products.value.reduce((sum, product) => sum + product.price * product.quantity, 0).toFixed(2)
  );

  const addToCart = (product) => {
    const hasDuplicate = products.value.some((cartProduct) => product.id === cartProduct.id);

    if (hasDuplicate) {
      const localProduct = products.value.find((cartProduct) => product.id === cartProduct.id);
      localProduct.quantity += 1;
      return;
    }

    products.value.push({ ...product, quantity: 1 });
  };

  const removeFromCart = (product) => {
    products.value = products.value.filter((localProduct) => localProduct.id !== product.id);
  };

  return { products, totalPrice, numberOfProducts, addToCart, removeFromCart };
});

export { useCartStore };
