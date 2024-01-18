<template>
  <div class="app-textarea">
    <label class="app-textarea__label" :for="name">{{ label }}</label>
    <textarea
      :id="name"
      :rows="rows"
      class="app-textarea__input"
      :class="{ 'app-textarea__input--error': error }"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('blur')"
    />
    <p v-if="error" class="app-textarea__error">{{ error }}</p>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    required: false,
    default: '',
  },
  label: {
    type: String,
    required: false,
    default: '',
  },
  placeholder: {
    type: String,
    required: false,
    default: '',
  },
  name: {
    type: String,
    required: false,
    default: '',
  },
  error: {
    type: String,
    required: false,
    default: '',
  },
  rows: {
    type: Number,
    required: false,
    default: 3,
  },
});
defineEmits(['update:modelValue', 'blur']);
</script>

<style lang="scss" scoped>
.app-textarea {
  &__label {
    padding: 10px 0;
    text-align: left;
    display: block;
  }

  &__input {
    border: transparent;
    border-radius: 2px;
    min-height: 30px;
    width: 100%;

    &--error {
      border: 1px solid red;
    }
  }

  &__error {
    margin: 8px 0 0 0;
    font-size: 12px;
    text-align: left;
    color: red;
  }
}
</style>
