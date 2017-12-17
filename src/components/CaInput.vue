<template>
  <input class="input"
        :class="[`is-${size}`]"
        :placeholder="placeholder"
        :type="type"
        :value="value"
        @input="onInput">
</template>

<script>
export default {
  name: 'CaInput',
  props: {
    placeholder: String,
    value: [String, Number],
    // label: String,
    case: {
      type: String,
      validator(value) {
        return ['upper'].includes(value);
      },
    },
    size: {
      type: String,
      validator(size) {
        return ['small', 'medium', 'large'].includes(size);
      },
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  methods: {
    onInput(event) {
      this.$emit('input', this.case === 'upper'
        ? event.target.value.toUpperCase()
        : event.target.value);
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
