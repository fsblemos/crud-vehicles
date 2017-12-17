<template>
  <ca-field class="is-expanded" :label="label" :size="size" :required="required" is-horizontal :class="{ 'has-addons': hasAddons }">
    <div class="control">
      <input class="input"
            :class="[`is-${size}`]"
            :placeholder="placeholder"
            :type="type"
            :value="value"
            v-bind="$attrs"
            v-focus="focus"
            @input="onInput">
    </div>
    <slot></slot>
  </ca-field>
</template>

<script>
const getParentForm = (vm) => {
  if (vm) {
    if (vm.$parent && vm.$parent.$options.name === 'CaForm') {
      return vm.$parent;
    }

    return getParentForm(vm.$parent);
  }

  return null;
};

export default {
  name: 'CaInput',
  props: {
    focus: Boolean,
    hasAddons: Boolean,
    label: String,
    placeholder: String,
    required: Boolean,
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
      default: 'large',
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  computed: {
    ready() {
      return !this.required || !!this.value;
    },
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
    setFocus() {
      this.$el.focus();
    },
  },
};
</script>

<style lang="scss" scoped>
.control {
  flex-grow: 1;

  .input {
    box-shadow: none;
    padding-left: 1rem;


    &.is-large {
      font-size: 1rem;
    }
  }
}
</style>
