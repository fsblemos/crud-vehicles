<template>
  <form @submit.prevent="submit" @keyup.enter="submit">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'CaForm',
  data() {
    return {
      controls: [],
    };
  },
  methods: {
    submit() {
      const input = this.controls.find(control => control.$props.focus);

      if (input) {
        input.$el.focus();
      }

      this.$emit('submit');
    },
    addControl(vmControl) {
      this.controls.push(vmControl);
    },
  },
};
</script>
