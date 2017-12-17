<template>
  <form @submit.prevent="$emit('submit')" @keyup.enter="$emit('submit')">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'CaForm',
};
</script>
