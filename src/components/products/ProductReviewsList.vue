<template>
  <div>
    <section class="reviews-section">
      <div class="reviews-list">
        <h3 class="reviews-list__heading">Reviews</h3>
        <ul class="reviews-list__list">
          <li v-for="review in reviews" :key="review.name" class="reviews-list__list-item">
            {{ review.name }} gave this {{ review.rating }} stars
            <br />
            "{{ review.review }}"
          </li>
        </ul>
      </div>
    </section>
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
.reviews-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.reviews-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  padding: 30px;
  margin: 130px 0;
  border-radius: 8px;
  border: 1px solid transparent;
  background-color: #1a1a1a;

  &__heading {
    font-size: 1.8rem;
  }

  &__list {
    list-style: none;
    padding: 0;
  }

  &__list-item {
    margin-bottom: 15px;
    padding: 10px 50px;
    border-radius: 4px;
    background-color: #3b3b3b;
  }
}
</style>
