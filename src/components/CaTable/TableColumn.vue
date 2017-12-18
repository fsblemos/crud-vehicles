<template>
  <td :style="style">
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
    align: {
      type: String,
      validator(align) {
        return ['left', 'center', 'right'].includes(align);
      },
    },
  },
  watch: {
    selectAll(selectAll) {
      this.$emit('select-all', selectAll);
    },
  },
  computed: {
    style() {
      return {
        textAlign: this.align,
        paddingRight: this.align === 'right' ? '20px' : '',
      };
    },
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
