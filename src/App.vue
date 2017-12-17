<template>
  <div id="app">
    <ca-navbar></ca-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
@import '~@/assets/variables';
@import '~@/assets/style';

html,
body {
  color: $font-color;
  font-size: 13px;
  line-height: 20px;
  margin: 0;
}
</style>
