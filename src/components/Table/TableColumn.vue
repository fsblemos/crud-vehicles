<template>
  <td>
    <slot>
      <template v-if="row">
        {{ row[name] }}
      </template>
    </slot>
  </td>
</template>

<script>
export default {
  name: 'CaTableColumn',
  props: {
    name: {
      type: String,
      required: true,
    },
    label: String,
    row: Object,
  },
  created() {
    if (!this.$parent.$parent.$data._isTable) {
      this.$destroy();
      throw new Error('You should wrap CaTableColumn on a CaTable');
    }

    this.$parent.$parent.addColumn(this);
  },
};
</script>
