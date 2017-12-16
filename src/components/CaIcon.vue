<template>
  <span class="icon" :class="[`is-${containerSize}`]">
    <i class="fa" :class="[`fa-${icon}`, `fa-${size}`]"></i>
  </span>
</template>

<script>
export default {
  name: 'CaIcon',
  props: {
    icon: String,
    size: {
      type: String,
      validator(size) {
        return ['lg', '2x', '3x'].includes(size);
      },
    },
    containerSize: {
      type: String,
      validator(containerSize) {
        return ['small', 'medium', 'large'].includes(containerSize);
      },
    },
  },
};
</script>
