<template>
  <div class="container">
    <div class="content__top">
      <Categories @activeCat="setActiveCat" :activeCategory="activeCategory" />
      <Sort :sortBy="sortBy" @sort="setSortBy" />
    </div>
    <h2 class="content__title">Все пиццы</h2>
    <transition-group
      name="list-complete"
      class="content__items"
      v-if="!this.$store.getters.loading"
      tag="div"
    >
      <PizzaBlock
        v-for="pizza of sortPizzas"
        :key="pizza.id"
        :pizza="pizza"
      />
    </transition-group>
    <div class="content__items" v-if="this.$store.getters.loading">
      Loading...
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
    PizzaBlock,
  },
  data: () => ({
    activeCategory: 0,
    sortBy: "популярности",
  }),
  methods: {
    setActiveCat(i) {
      this.activeCategory = i;
    },
    setSortBy(sort) {
      this.sortBy = sort;
    },
  },
  mounted() {
    this.$store.dispatch("fetchPizzas");
  },
  computed: {
    filterPizzas() {
      if (this.activeCategory === 0) {
        return this.$store.getters.pizzas;
      } else {
        return this.$store.getters.pizzas.filter(
          (item) => item.category == this.activeCategory - 1
        );
      }
    },
    sortPizzas() {
      if (this.sortBy === "популярности") {
        return [...this.filterPizzas].sort((a, b) => {
            return b.rating - a.rating
        })
      } else if (this.sortBy === "цене") {
        return [...this.filterPizzas].sort((a, b) => {
            return b.price - a.price 
        });
      } else {
        return [...this.filterPizzas].sort((a, b) => {
            return a.title.localeCompare(b.title)
        });
      }
    },
    searchPizzas() {
        if (this.$store.getters.search) {
            return this.sortPizzas.filter(item => item.includes(this.$store.getters.search))
        } else {
            return this.sortPizzas
        }
    }
  },
};
</script>

<style></style>
