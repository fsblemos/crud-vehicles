<template>
  <tr>
    <td v-for="(column, index) in $parent.columns" :key="index">
      <div class="level" :style="{ marginLeft: index === 0 && `${level}rem` }">
        <slot>
          {{ row[column.index] }}
        </slot>
      </div>
    </td>
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
};
</script>

<style lang="scss" scoped>
tr {
  color: inherit;

  td {
    vertical-align: middle;
  }
}
</style>
