<template>
  <div>
    <div class="reviews">
      <div class="reviews-box">
        <h3>Reviews</h3>
        <ul>
          <li v-for="review in reviews" :key="review.name">
            {{ review.name }} gave this {{ review.rating }} stars
            <br />
            "{{ review.review }}"
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  reviews: {
    type: Array,
    required: false,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped>
.reviews {
  margin-top: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h3 {
  font-size: 1.8em;
}
</style>
