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
      if (!this.validateRequiredFields()) {
        this.$toasted.error('Favor preencher os campos obrigatórios!', {
          icon: 'close',
        });
      } else {
        this.focusInput();
        this.$emit('submit');
      }
    },
    addControl(vmControl) {
      this.controls.push(vmControl);
    },
    validateRequiredFields() {
      return !this.getRequiredControls().some(control => !control.ready);
    },
    getRequiredControls() {
      return this.controls.filter(control => control.$props.required);
    },
    focusInput() {
      const input = this.controls.find(control => control.$props.focus);

      if (input) {
        input.setFocus();
      }
    },
  },
};
</script>
