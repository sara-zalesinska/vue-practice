<template>
  <section class="review-form-section">
    <form class="review-form" @submit.prevent="onSubmit">
      <h3 class="review-form__heading">Leave a review</h3>
      <div class="review-form__form-group">
        <app-input
          v-model="review.name"
          label="Name:"
          placeholder="John"
          name="full name"
          :error="errors.name"
          @blur="validateField('name')"
        />
      </div>
      <div class="review-form__form-group">
        <app-textarea
          v-model="review.review"
          :rows="6"
          label="Review:"
          placeholder="This product is great!"
          name="review"
          :error="errors.review"
          @blur="validateField('review')"
        />
      </div>
      <div class="review-form__form-group">
        <app-select
          v-model.number="review.rating"
          name="rating"
          label="Rating:"
          :options="[1, 2, 3, 4, 5]"
          :error="errors.rating"
          @blur="validateField('rating')"
        />
      </div>
      <button class="review-form__submit-btn" type="submit">Submit</button>
    </form>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import AppInput from '../app/AppInput.vue';
import AppTextarea from '../app/AppTextarea.vue';
import AppSelect from '../app/AppSelect.vue';

const emit = defineEmits(['add-review']);

const errors = ref({});

const review = ref({
  name: '',
  review: '',
  rating: null,
});

const isFormValid = computed(() =>
  // return !!!Object.keys(errors.value).length
  Boolean(!Object.keys(errors.value).length)
);

const validateForm = () => {
  if (review.value.name === '') {
    errors.value = {
      ...errors.value,
      name: 'This field is required',
    };
  } else {
    delete errors.value.name;
  }

  if (review.value.review === '') {
    errors.value = {
      ...errors.value,
      review: 'This field is required',
    };
  } else {
    delete errors.value.review;
  }

  if (!review.value.rating) {
    console.log('lol');
    errors.value = {
      ...errors.value,
      rating: 'This field is required',
    };
  } else {
    delete errors.value.rating;
  }
};

const onSubmit = () => {
  validateForm();
  if (!isFormValid.value) {
    return;
  }
  const productReview = {
    name: review.value.name,
    review: review.value.review,
    rating: review.value.rating,
  };

  emit('add-review', productReview);

  review.value.name = '';
  review.value.review = '';
  review.value.rating = null;
};

const validateField = (inputName) => {
  console.log(inputName);
  if (!review.value[inputName]) {
    errors.value = {
      ...errors.value,
      [inputName]: 'This field is required',
    };
  } else {
    delete errors.value[inputName];
  }
};
</script>

<style lang="scss" scoped>
.review-form-section {
  display: flex;
  justify-content: center;
}
.review-form {
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 30px;
  margin-bottom: 100px;
  border-radius: 8px;
  border: 1px solid transparent;
  background-color: #1a1a1a;

  &__heading {
    font-size: 1.8em;
  }

  &__submit-btn {
    margin-top: 40px;
    border-color: grey;
    transition: all 0.3s;
    &:hover {
      border-color: #646cff;
    }
  }
}

</style>
