<template>
  <div id="app">
    <ca-navbar></ca-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import numeral from '@/utils/numeral';

export default {
  name: 'app',
};
</script>

<style lang="scss">
@import './assets/style.scss';

html,
body {
  color: #395A7A;
  font-size: 13px;
  line-height: 20px;
  margin: 0;
  background-color: #F1F4F9;
}
</style>
