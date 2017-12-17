<template>
  <input class="input"
        :class="[`is-${size}`]"
        :placeholder="placeholder"
        :type="type"
        :value="value"
        v-focus="focus"
        @input="onInput">
</template>

<script>
const getParentForm = (vm) => {
  if (vm.$parent.$options.name === 'CaForm') {
    return vm.$parent;
  }

  return getParentForm(vm.$parent);
};

export default {
  name: 'CaInput',
  props: {
    focus: Boolean,
    placeholder: String,
    value: [String, Number],
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
  data() {
    return {
      _isControl: true,
    };
  },
  mounted() {
    const form = getParentForm(this);

    if (form) {
      form.addControl(this);
    }
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
