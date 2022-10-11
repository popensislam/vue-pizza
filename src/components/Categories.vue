<template>
  <div class="categories">
    <ul>
      <li v-for="cat of this.$store.getters.categories" :key="cat">{{ cat }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "pizza-categories",
};
</script>

<style></style>
