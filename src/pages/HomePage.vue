<template>
  <div>
    <div>
      <h2>Product list:</h2>
    </div>
    <ul>
      <li>
        <router-link :to="{ name: 'ProductDetails' }">Vue Socks</router-link>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, assumenda eaque!
          Accusamus.
        </p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
li {
  list-style: none;
}
</style>