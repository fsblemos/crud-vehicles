<template>
  <table class="table is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th v-for="column in columns">{{ column.label }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in rows">
        <slot :row="row"></slot>
      </tr>
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
  border-collapse: separate;
  border-radius: 3px;
  border: 1px solid #C9D3DD;
  color: inherit;
  margin-bottom: 2rem;

  td,
  th {
    vertical-align: middle;
  }

  thead {
    th {
      background-color: #f8fafc;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      border-width: 0 0 1px;
      color: inherit;
      height: 30px;
    }
  }
}

</style>
