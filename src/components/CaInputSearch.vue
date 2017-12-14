<template>
  <ca-field class="has-addons">
    <div class="control">
      <ca-input placeholder="Pesquisar"></ca-input>
    </div>
    <div class="control">
      <a class="button">
        <ca-icon icon="fa-search"></ca-icon>
      </a>
    </div>
  </ca-field>
</template>

<script>
export default {
  name: 'CaInputSearch',
};
</script>

<style lang="scss" scoped>
.button {
  width: 3rem;
}
</style>
