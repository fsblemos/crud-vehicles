<template>
  <nav class="pagination is-centered">
    <a class="pagination-previous">Previous</a>
    <a class="pagination-next">Next page</a>
    <ul class="pagination-list">
      <li>
        <a class="pagination-link" aria-label="Goto page 45">45</a>
      </li>
      <li>
        <a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a>
      </li>
      <li>
        <a class="pagination-link" aria-label="Goto page 47">47</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'CaPagination',
};
</script>

<style lang="scss" scoped>
.pagination {
  a {
    background-color: #fff;
  }
}
</style>
