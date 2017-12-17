<template>
  <ca-field class="is-expanded"
            is-horizontal
            :label="label"
            :size="size"
            :required="required"
            :class="{ 'has-addons': hasAddons }">
    <div class="control">
      <input class="input"
             ref="input"
             :class="[`is-${size}`]"
             :placeholder="placeholder"
             :type="type"
             v-bind="$attrs"
             v-focus="focus"
             @blur="onBlur"
             @input="onInput">
    </div>
    <slot></slot>
  </ca-field>
</template>

<script>
import IMask from 'imask';
import Control from '@/mixins/control';

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
  mixins: [Control],
  props: {
    focus: Boolean,
    mask: Object,
    placeholder: String,
    masked: Boolean,
    type: {
      type: String,
      default: 'text',
    },
  },
  watch: {
    value(value) {
      this.$refs.input.value = value;

      if (this.imask) {
        this.imask.value = value;
      }
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

    if (this.mask) {
      this.imask = new IMask(this.$refs.input, this.mask);
    }
  },
  methods: {
    onBlur() {
      if (this.mask) {
        this.$emit('input', this.masked ? this.imask.value : this.imask.unmaskedValue);
      }
    },
    onInput(event) {
      if (!this.mask) {
        this.$emit('input', event.target.value);
      }
    },
    setFocus() {
      this.$el.focus();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/input';
</style>
