<template>
  <button class="button" type="button" name="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'CaButton',
};
</script>

<style lang="scss" scoped>
@import '~@/assets/variables';

.button {
  border-radius: 3px;
  font-weight: 500;
  padding: 6px 12px;
  min-width: 140px;
}
</style>
