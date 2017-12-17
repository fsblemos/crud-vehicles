<template>
  <div class="field" :class="{ 'is-horizontal': isHorizontal }">
    <div class="field-label is-normal" v-if="isHorizontal">
      <label v-if="label" class="label is-medium">{{ label }}</label>
    </div>
    <label v-else-if="label" class="label">{{ label }}</label>
    <div class="field-body" v-if="isHorizontal">
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
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/variables';

.field {
  &.is-large {
    height: $control-height;
  }

  .field-label {
    font-size: initial;

    .label {
      &.is-medium {
        font-size: 14px;
      }
    }
  }

  // &.is-horizontal {
  //   .field-label {
  //     display: flex;
  //     align-items: center;
  //     justify-content: flex-end;
  //   }
  // }


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
