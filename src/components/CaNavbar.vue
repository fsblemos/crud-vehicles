<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a class="navbar-item is-unselectable">
        <img src="~@/assets/ca-logo.png" width="112" height="28">
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'CaNavbar',
};
</script>

<style lang="scss" scoped>
.navbar,
.navbar-brand {
  height: 50px;
}

.navbar-brand {
  .navbar-item {
    padding-left: 3rem;
  }
}

.navbar {
  background-color: #2787e9;
}
</style>
