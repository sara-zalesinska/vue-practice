<template>
  <div class="product-table">
    <table class="cart">
      <thead>
        <tr>
          <th><h3 class="cart__heading">CART</h3></th>
        </tr>
      </thead>
      <tbody>
        <tr class="cart__subheading cart__main-subheading">
          <td>Product name</td>
          <td>Quantity</td>
          <td>Price</td>
        </tr>

        <tr v-for="product in products" :key="product.id" class="cart__subheading">
          <td class="product-name">{{ product.productName }}</td>
          <td class="product-quantity">{{ product.quantity }}</td>
          <td class="product-price">{{ product.price }} </td>
        </tr>
        <tr class="cart__subheading cart__sumed-up">
          <td>Total:</td>
          <td></td>
          <td class="cart__total-price">{{ totalPrice }}</td>
        </tr>
      </tbody>
    </table>
    <!-- <div class="" v-for="product in products" :key="product.id">
      {{ product.productName }}
    </div> -->
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useCartStore } from '@/stores/useCartStore';

const cartStore = useCartStore();

const products = computed(() => cartStore.products);
const totalPrice = computed(() => cartStore.totalPrice);
</script>

<style lang="scss" scoped>
.product-table {
  width: 90vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
table {
  border: 1px solid whitesmoke;
  display: flex;
  flex-direction: column;
  width: 50%;
}

thead {
  border-bottom: 1px solid whitesmoke;
  width: 100%;
  display: flex;
  justify-content: center;
}

.cart {
  margin-top: 40px;

  &__subheading {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 15px 0;

    &:nth-child(odd) {
      background-color: #1a1a1a;
    }
  }

  &__main-subheading {
    font-weight: bold;
    background-color: #646cff !important;
  }

  &__sumed-up {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    font-weight: bold;
    background-color: #646cffac !important;
  }
}
</style>
