<template>
  <table class="table is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th v-for="column in columns">{{ column.title }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in rows">
        <slot v-for="column in columns" :row="row" :column="column"></slot>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'CaTable',
  props: {
    actions: Array,
    columns: Array,
    rows: Array,
  },
};
</script>

<style lang="scss" scoped>
table {
  border-collapse: separate;
  border-radius: 3px;
  border: 1px solid #C9D3DD;
  color: inherit;

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
