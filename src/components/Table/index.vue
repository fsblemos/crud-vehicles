<template>
  <table class="table is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th v-for="column in columns">{{ column.label }}</th>
      </tr>
    </thead>
    <tbody>
      <ca-table-row :row="row" v-for="(row, index) in rows" :key="index">
        <slot :row="row"></slot>
      </ca-table-row>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'CaTable',
  props: {
    actions: Array,
    rows: Array,
  },
  data() {
    return {
      columns: [],
      _isTable: true,
    };
  },
  methods: {
    hasColumn(vmColumn) {
      return this.columns
        .map(column => column.name)
        .includes(vmColumn.name);
    },
    addColumn(vmColumn) {
      if (!this.hasColumn(vmColumn)) {
        this.columns.push(vmColumn);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
table {
  // border-radius: 3px;
  border: 1px solid #c9d3dd;
  color: inherit;
  margin-bottom: 2rem;

  thead {
    th {
      background-color: #f8fafc;
      border: 0;
      color: inherit;
      height: 30px;
    }
  }
}

</style>
