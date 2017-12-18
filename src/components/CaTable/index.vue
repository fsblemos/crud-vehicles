<template>
  <div class="ca-table">
    <table class="table is-hoverable is-fullwidth"
           :style="{ borderStyle:  visibleRows.length ? 'solid': 'dashed' }">
      <thead>
        <ca-table-header v-if="visibleRows.length"
                         :columns="columns"
                         :select-all.sync="selectAll">
        </ca-table-header>
      </thead>
      <tbody>
        <template v-if="visibleRows.length">
          <ca-table-row v-for="(row, index) in visibleRows"
                        :key="row.placa"
                        :row="row"
                        :checkbox="checkbox"
                        :selected.sync="row.selected">
            <slot :row="row"></slot>
          </ca-table-row>
        </template>
        <tr class="is-empty" v-else>
          <td :colspan="columns.length + (checkbox ? 1 : 0)">
            <section class="section">
              <div class="content has-text-grey has-text-centered">
                <p>
                  <ca-icon icon="frown-o" container-size="large" size="3x"></ca-icon>
                </p>
                <p>Nenhum registro encontrado</p>
              </div>
            </section>
          </td>
        </tr>
      </tbody>
    </table>
    <slot name="pagination">
      <ca-pagination v-if="visibleRows.length"
                     :current.sync="currentPage"
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
@import '~@/assets/variables';

.empty-message {
  border: 1px dashed $grey;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
table {
  border: 1px solid #c9d3dd;
  color: inherit;
  margin-bottom: 2rem;
}

</style>
