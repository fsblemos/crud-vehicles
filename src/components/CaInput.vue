<template>
  <input class="input"
         :placeholder="placeholder"
         :type="type"
         :value="value"
         @input="$emit('input', $event.target.value)">
</template>

<script>
export default {
  name: 'CaInput',
  props: {
    placeholder: String,
    value: [String, Number],
    type: {
      type: String,
      default: 'text',
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  box-shadow: none;

  &::placeholder {
    padding-left: .5rem;
  }
}
</style>
