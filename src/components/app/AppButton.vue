<template>
  <button
    class="app-btn"
    :type="nativeType"
    :class="[
      disabled ? 'app-btn--disabled' : false,
      size === 'large' ? 'app-btn--large' : false,
      size === 'medium' ? 'app-btn--medium' : false,
      size === 'small' ? 'app-btn--small' : false,
      type === 'primary' ? 'app-btn--primary' : false,
      type === 'secondary' ? 'app-btn--secondary' : false,
      type === 'tertiary' ? 'app-btn--tertiary' : false,
    ]"
    :disabled="disabled"
    @click="click"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  nativeType: {
    type: String,
    required: false,
    default: 'button',
  },
  type: {
    type: String,
    required: false,
    default: 'primary',
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  size: {
    type: String,
    required: false,
    default: 'medium',
  },
});
defineEmits(['click']);
</script>

<style lang="scss" scoped>
.app-btn {
  border-color: grey;
  transition: all 0.3s;
  border-radius: 8px;
  padding: 0.6em 1.2em;
  cursor: pointer;
  font-size: 16px;
  border: 1px solid transparent;
  font-family: inherit;
  font-weight: 500;
  color: #ffff;

  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  &:hover {
    border-color: #646cff;
  }

  &--disabled {
    background-color: #5a5757;
    cursor: not-allowed;
  }

  &--small {
    height: 32px;
  }

  &--medium {
    height: 48px;
  }

  &--large {
    height: 64px;
  }

  &--primary {
    background-color: #646cff;
    border-color: #646cff;

    &:hover {
      background-color: #7c82f3;
      border-color: #7c82f3;
    }
  }

  &--secondary {
    background-color: #1a1a1a;
    border-color: #1a1a1a;

    &:hover {
      background-color: #3e3d3d;
      border-color: #3e3d3d;
    }
  }

  &--tertiary {
    background-color: transparent;
    border-color: #646cff;

    &:hover {
      border-color: #ffff;
    }
  }
}
</style>
