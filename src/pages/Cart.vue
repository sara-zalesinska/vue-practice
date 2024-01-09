<script setup></script>

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
        <tr class="cart__subheading">
          <td class="product-name">Socks Green</td>
          <td class="product-quantity">2</td>
          <td class="product-price">$3.98</td>
        </tr>
        <tr class="cart__subheading">
          <td class="product-name">Socks Blue</td>
          <td class="product-quantity">1</td>
          <td class="product-price">$1.99</td>
        </tr>
        <tr class="cart__subheading">
          <td class="product-name">Socks Green</td>
          <td class="product-quantity">2</td>
          <td class="product-price">$3.98</td>
        </tr>
        <tr class="cart__subheading cart__sum-up">
          <td>Total:</td>
          <td></td>
          <td>$10.22</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.product-table {
  width: 100vw;
  display: flex;
  justify-content: center;
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

  &__sum-up {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    font-weight: bold;
    background-color: #646cffac !important;
  }
}
</style>
