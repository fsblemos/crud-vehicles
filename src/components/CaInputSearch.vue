<template>
  <ca-input placeholder="Pesquisar"
            size="large"
            has-addons
            :value="value"
            @keyup.native.enter="search"
            @input="value => textSearch = value">
    <div class="control">
      <a class="button" @click="search">
        <ca-icon icon="search"></ca-icon>
      </a>
    </div>
  </ca-input>
</template>

<script>
export default {
  name: 'CaInputSearch',
  props: {
    value: String,
  },
  data() {
    return {
      textSearch: null,
    };
  },
  watch: {
    textSearch(value) {
      this.$emit('input', value);
    },
  },
  methods: {
    search() {
      this.$emit('search', this.textSearch);
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  width: 3rem;
}
</style>
