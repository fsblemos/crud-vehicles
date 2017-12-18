<template>
  <ca-field class="is-expanded"
            is-horizontal
            :label="label"
            :size="size"
            :required="required"
            :class="{ 'has-addons': hasAddons }">
    <div class="control">
      <div class="select is-fullwidth" :class="[`is-${size}`]">
        <select :value="value" @input="$emit('input', $event.target.value)">
          <option disabled>{{ placeholder }}</option>
          <option v-for="option in options">{{ option }}</option>
        </select>
      </div>
    </div>
  </ca-field>
</template>

<script>
import Control from '@/mixins/control';

export default {
  name: 'CaSelect',
  mixins: [Control],
  props: {
    placeholder: String,
    options: Array,
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/control';

select,
.select {
  height: 100%;
  font-size: 1rem;
}
</style>
