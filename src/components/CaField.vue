<template>
  <div class="field"
       :class="[`is-${size}`, { 'is-horizontal': isHorizontal, 'is-required': required }]">
    <div class="field-label is-normal" v-if="isHorizontal">
      <label v-if="label" class="label is-medium">{{ label }}</label>
    </div>
    <label v-else-if="label" class="label">{{ label }}</label>
    <div class="field-body" v-if="isHorizontal && label">
      <slot></slot>
    </div>
    <slot v-else></slot>
  </div>
</template>

<script>
export default {
  name: 'CaField',
  props: {
    label: String,
    isHorizontal: Boolean,
    size: String,
    required: Boolean,
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/variables';

.field {
  &.is-required {
    .label {
      &:after {
        content: '*';
        color: red;
        position: absolute;
        margin-left: 2px;
      }
    }
  }

  &.is-large {
    height: $control-height;
  }

  .field-label {
    font-size: initial;

    &.is-normal {
      padding-top: .7rem;
    }

    .label {
      &.is-medium {
        font-size: 14px;
      }
    }
  }

  &.is-grouped {
    > .control {
      &:not(:last-child) {
        margin-right: 1.5rem;
      }
    }
  }

  .input,
  .button {
    height: 100%;
  }
}
</style>
