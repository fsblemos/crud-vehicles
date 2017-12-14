<template>
  <section class="section">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'CaSection',
};
</script>

<style lang="scss" scoped>
.section {
  padding: 1.5rem 3rem;
}
</style>
