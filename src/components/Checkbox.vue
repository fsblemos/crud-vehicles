<template lang="html">
  <div class="pretty p-icon p-bigger" @click="$emit('input', !value)">
    <input type="checkbox" :checked="value">
    <div class="state">
      <i class="icon fa fa-check"></i>
      <label>{{ label }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CaCheckbox',
  props: {
    label: String,
    value: Boolean,
  },
};
</script>

<style lang="scss" scoped>
@import '~pretty-checkbox/src/pretty-checkbox';
@import '~@/assets/variables';

.p-icon {
  cursor: pointer;

  input:checked ~ .state {
    label {
      &:before {
        border-color: $table-row-active-border-color !important;
      }
    }
  }

  .state {
    label {
      &:before {
        background-color: $white;
        border-color: $table-row-border-color;
      }

      &:after {
        color: red;
      }

      &:before,
      &:after {
        border-radius: 3px;
      }
    }
  }
}
</style>
