<template>
  <div class="field">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CaField',
};
</script>

<style lang="scss" scoped>
@import '~@/assets/variables';

.field {
  height: $control-height;

  &.is-grouped {
    > .control {
      &:not(:last-child) {
        margin-right: 1.5rem;
      }
    }
  }

  .input,
  .button {
    height: 100%;
  }
}
</style>
