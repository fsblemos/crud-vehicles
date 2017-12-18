<template>
  <tr :class="{ 'is-selected': selected }">
    <td class="td-checkbox" v-if="checkbox">
      <ca-checkbox v-model="isChecked" class="is-marginless"></ca-checkbox>
    </td>
    <slot :row="row"></slot>
  </tr>
</template>

<script>
export default {
  name: 'CaTableRow',
  props: {
    checkbox: Boolean,
    actions: Array,
    row: Object,
    selected: Boolean,
    level: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      isChecked: false,
    };
  },
  watch: {
    isChecked(isChecked) {
      this.$emit('update:selected', isChecked);
    },
    selected(selected) {
      this.select(selected);
    },
  },
  created() {
    this.isChecked = this.row.selected || false;

    if (!this.$parent.$data._isTable) {
      this.$destroy();
      throw new Error('You should wrap CaTableRow on a CaTable');
    }
  },
  methods: {
    select(value) {
      this.isChecked = value;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/variables";

tr {
  border: 1px solid $table-row-border-color;

  td {
    border: 0;
    height: $control-height;
    vertical-align: middle;
  }

  &.is-selected {
    $border-row-active: 1px solid $table-row-active-border-color;

    td {
      border-top: $border-row-active;
      border-bottom: $border-row-active !important;

      &:first-child {
        border-left: $border-row-active;
      }

      &:last-child {
        border-right: $border-row-active;
      }
    }
  }
}
</style>
