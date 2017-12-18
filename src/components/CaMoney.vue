<template>
  <ca-field class="is-expanded"
            is-horizontal
            :label="label"
            :size="size"
            :required="required"
            :class="{ 'has-addons': hasAddons }">
    <div class="control">
      <money class="input"
             :value="value"
             v-bind="money"
             @input="value => $emit('input', value)">
      </money>
    </div>
  </ca-field>
</template>

<script>
import { Money } from 'v-money';
import Control from '@/mixins/control';

export default {
  name: 'CaMoney',
  mixins: [Control],
  components: {
    Money,
  },
  props: {
    masked: Boolean,
    prefix: String,
    suffix: String,
    value: {
      type: Number,
      default: 0,
    },
    decimal: {
      type: String,
      default: ',',
    },
    thousands: {
      type: String,
      default: '.',
    },
    precision: {
      type: Number,
      default: 2,
    },
  },
  computed: {
    money() {
      return {
        decimal: this.decimal,
        masked: this.masked,
        precision: this.precision,
        prefix: this.prefix,
        suffix: this.suffix,
        thousands: this.thousands,
      };
    },
  },

};
</script>

<style lang="scss" scoped>
@import '~@/assets/control';
</style>
