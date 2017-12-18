<template>
  <div class="ca-table">
    <table class="table is-hoverable is-fullwidth">
      <thead>
        <ca-table-header :columns="columns" :select-all.sync="selectAll"></ca-table-header>
      </thead>
      <tbody>
        <ca-table-row v-for="(row, index) in visibleRows"
                      :key="row.placa"
                      :row="row"
                      :checkbox="checkbox"
                      :selected.sync="row.selected">
          <slot :row="row"></slot>
        </ca-table-row>
      </tbody>
    </table>
    <slot name="pagination">
      <ca-pagination :current.sync="currentPage"
                     :total="rows.length"
                     :per-page="perPage">
      </ca-pagination>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'CaTable',
  props: {
    actions: Array,
    rows: Array,
    checkbox: Boolean,
    perPage: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      _isTable: true,
      columns: [],
      selectAll: false,
      currentPage: 1,
    };
  },
  watch: {
    selectAll(selectAll) {
      this.rows.forEach((row) => {
        this.$set(row, 'selected', selectAll);
      });
    },
    visibleRows(visibleRows) {
      if (!visibleRows.length && this.currentPage > 1) {
        this.currentPage = this.currentPage - 1;
      }
    },
    hasSelectedRow(hasSelectedRow) {
      if (!hasSelectedRow) {
        this.selectAll = false;
      }
    },
  },
  computed: {
    visibleRows() {
      const startPage = (this.currentPage - 1) * this.perPage;
      const endPage = startPage + this.perPage;

      return this.rows.filter((row, index) => index >= startPage && index < endPage);
    },
    hasSelectedRow() {
      return this.rows.some(row => row.selected);
    },
  },
  methods: {
    hasColumn(vmColumn) {
      return this.columns
        .map(column => column.name)
        .includes(vmColumn.name);
    },
    addColumn(vmColumn) {
      if (!this.hasColumn(vmColumn) && !vmColumn.checkbox) {
        this.columns.push(vmColumn);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
table {
  border: 1px solid #c9d3dd;
  color: inherit;
  margin-bottom: 2rem;

  // thead {
  //   th {
  //     background-color: #f8fafc;
  //     border: 0;
  //     color: inherit;
  //     height: 30px;
  //
  //     // &.checkbox {
  //     //   vertical-align: middle;
  //     //   align-items: center;
  //     // }
  //   }
  // }
}

</style>
