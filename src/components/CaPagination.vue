<template>
  <nav class="pagination is-centered">
    <ul class="pagination-list">
      <li>
        <a class="pagination-previous" @click="first()">
          <ca-icon icon="angle-double-left" container-size="small" size="lg"></ca-icon>
        </a>
      </li>
      <li v-for="page in pagesList">
        <a class="pagination-link"
           :class="{ 'is-current': page === current }"
           @click="$emit('update:current', page)">
          {{ page }}
        </a>
      </li>
      <li>
        <a class="pagination-next" @click="last()">
          <ca-icon icon="angle-double-right" container-size="small" size="lg"></ca-icon>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'CaPagination',
  props: {
    total: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      default: 5,
    },
    current: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.total / this.perPage);
    },
    pagesList() {
      return Array.from(new Array(this.numberOfPages), (val, index) => index + 1);
    },
  },
  methods: {
    first() {
      this.$emit('update:current', 1);
    },
    last() {
      this.$emit('update:current', this.numberOfPages);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/variables';

.pagination {
  margin: 0;

  li {
    &:not(:last-child) {
      margin-right: -1px;
    }
  }

  a {
    background-color: $pagination-background-color;
    color: inherit;;
    border-radius: 0;
    cursor: default;
    height: 35px;
    margin: 0;
    width: 35px;

    &:hover {
      background-color: #fffaeb;
    }

    &.is-current {
      z-index: 1;
      background-color: $pagination-current-background-color;
    }
  }
}
</style>
