<template>
  <tr :class="{ 'is-selected': row.selected }">
    <slot :row="row"></slot>
  </tr>
</template>

<script>
export default {
  name: 'CaTableRow',
  props: {
    actions: Array,
    row: Object,
    level: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      isSelected: false,
    };
  },
  created() {
    this.$set(this.row, 'selected', false);
  },
  methods: {
    selectRow() {
      this.row.selected = !this.row.selected;
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
