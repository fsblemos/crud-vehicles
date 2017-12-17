<template>
  <section class="section">
    <div class="container">
      <slot name="header"></slot>
      <slot></slot>
      <div class="section-footer">
        <slot name="footer"></slot>
      </div>
    </div>
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

  .section-footer {
    margin-top: 1.5rem;
  }
}
</style>
