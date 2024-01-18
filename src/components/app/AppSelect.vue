<template>
  <div class="app-select">
    <label class="app-select__label" :for="name">{{ label }}</label>
    <select
      :id="name"
      :value="modelValue"
      class="app-select__select"
      :class="{ 'app-select__select--error': error }"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('blur')"
    >
      <option v-for="option in options" :key="option">{{ option }}</option>
    </select>
    <p v-if="error" class="app-select__error">{{ error }}</p>
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
  options: {
    type: Array,
    required: false,
    default: () => [],
  },
});
defineEmits(['update:modelValue', 'blur']);
</script>

<style lang="scss" scoped>
.app-select {
  &__label {
    padding: 10px 0;
    text-align: left;
    display: block;
  }

  &__select {
    border: transparent;
    border-radius: 2px;
    height: 30px;
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
