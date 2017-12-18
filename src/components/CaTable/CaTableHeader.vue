<template>
  <tr>
    <th width="1px" class="th-checkbox">
      <ca-checkbox :value="selectAll"
                   @input="value => $emit('update:selectAll', value)"
                   class="is-marginless">
      </ca-checkbox>
    </th>
    <th v-for="column in columns" :class="[column.hidden]" :style="getStyle(column)">
      {{ column.label }}
    </th>
  </tr>
</template>

<script>
export default {
  name: 'CaTableHeader',
  props: {
    columns: Array,
    selectAll: Boolean,
  },
  computed: {
    style() {
      return {
        textAlign: this.align,
        paddingRight: this.align === 'right' ? '20px' : '',
      };
    },
  },
  methods: {
    getStyle(column) {
      return {
        textAlign: column.align,
        paddingRight: column.align === 'right' ? '20px' : '',
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/variables';

thead {
  th {
    background-color: #f8fafc;
    border: 0;
    color: inherit;
    height: 30px;
  }
}
</style>
