<template>
  <div class="categories">
    <ul>
      <li
        @click="setActiveCat(index)"
        v-for="(cat, index) in this.$store.getters.categories"
        :key="index"
        :class="{active: activeCategory === index}"
      >
        {{ cat }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "pizza-categories",
  props: {
    activeCategory: [Number]
  },
  methods: {
    setActiveCat(i) {
      this.activeCat = i;
      this.$emit('activeCat', i)
    },
  },
};
</script>

<style></style>
