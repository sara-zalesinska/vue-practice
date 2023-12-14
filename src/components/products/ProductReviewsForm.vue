<template>
  <section>
    <form class="review-form" @submit.prevent="onSubmit">
      <h3>Leave a review</h3>
      <div class="form-group">
        <label for="name">Name:</label>
        <input
          id="name"
          v-model="review.name"
          :class="{ 'form-input-error': errors.name }"
          @blur="validateField('name')"
        />
        <p v-if="errors.name" class="form-error">{{ errors.name }}</p>
      </div>

      <div class="form-group">
        <label for="review">Review:</label>
        <textarea
          id="review"
          v-model="review.review"
          :class="{ 'form-input-error': errors.review }"
          @blur="validateField('review')"
        ></textarea>
        <p v-if="errors.review" class="form-error">{{ errors.review }}</p>
      </div>

      <div class="form-group">
        <label for="rating">Rating:</label>
        <select
          id="rating"
          v-model.number="review.rating"
          :class="{ 'form-input-error': errors.rating }"
          @blur="validateField('rating')"
        >
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
        <p v-if="errors.rating" class="form-error">{{ errors.rating }}</p>
      </div>
      <button class="submit-btn" type="submit">Submit</button>
    </form>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

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
.submit-btn {
  margin-top: 40px;
  border-color: grey;
  transition: all 0.3s;

  &:hover {
    border-color: #646cff;
  }
}

form,
.reviews-box {
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 30px;
  margin-bottom: 100px;
  border-radius: 8px;
  border: 1px solid transparent;
  background-color: #1a1a1a;
}

label {
  padding: 10px 0;
  text-align: left;
  display: block;
}
input,
textarea,
select {
  border: transparent;
  border-radius: 2px;
  height: 30px;
  width: 100%;
}

textarea {
  max-height: 80px;
  max-width: 99%;
  min-width: 99%;
}
h3 {
  font-size: 1.8em;
}

.form-input-error {
  border: 1px solid red;
}

.form-error {
  color: red;
}
</style>
