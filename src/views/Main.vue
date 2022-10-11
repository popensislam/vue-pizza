<template>
  <div class="container">
    <div class="content__top">
      <Categories />
      <Sort />
    </div>
    <h2 class="content__title">Все пиццы</h2>
    <div className="content__items">
        <PizzaBlock v-for="pizza of this.$store.getters.pizzas" :key='pizza.id' :pizza="pizza"/>
    </div>
  </div>
</template>

<script>
import Categories from "@/components/Categories.vue";
import Sort from "@/components/Sort.vue";
import PizzaBlock from "@/components/PizzaBlock.vue";

export default {
  name: "main-page",
  components: {
    Categories,
    Sort,
    PizzaBlock
  },
  mounted() {
    this.$store.dispatch("fetchPizzas");
  },
};
</script>

<style scoped></style>
