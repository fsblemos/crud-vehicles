<template>
  <div class="level">
    <div class="level-left">
      <slot name="left"></slot>
    </div>
    <div class="level-right" v-if="$slots.right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CaLevel',
};
</script>
