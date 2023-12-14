<template>
  <div class="app">
    <header>
      <div class="wrapper">
        <nav>
          <router-link :to="{ name: 'Home' }">Home</router-link> |
          <router-link :to="{ name: 'ProductDetails' }">Products</router-link> |
          <router-link :to="{ name: 'Cart' }">Cart</router-link>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>
