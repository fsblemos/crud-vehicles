<template>
  <router-link v-if="to" class="button" :to="to" @click="$emit('click', $event)">
    <slot></slot>
  </router-link>
  <button v-else class="button" :type="type" @click="$emit('click', $event)">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'CaButton',
  props: {
    to: Object,
    type: {
      type: String,
      default: 'button',
    },
  },
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
