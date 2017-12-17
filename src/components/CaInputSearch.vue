<template>
  <ca-input placeholder="Pesquisar" size="large" has-addons>
    <div class="control">
      <a class="button">
        <ca-icon icon="search"></ca-icon>
      </a>
    </div>
  </ca-input>
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
