<template>
  <div class="pizza-block-wrapper list-complete-item">
    <div class="pizza-block">
      <img class="pizza-block__image" :src="pizza.imageUrl" alt="Pizza" />
      <h4 class="pizza-block__title">{{ pizza.title }}</h4>
      <div class="pizza-block__selector">
        <ul>
          <li
            @click="setActiveType(type)"
            v-for="type in pizza.types"
            :key="type"
            :class="{ active: this.activeType == type }"
          >
            {{ this.$store.getters.types[type] }}
          </li>
        </ul>
        <ul>
          <li
            @click="setActiveSize(size)"
            v-for="size in pizza.sizes"
            :key="size"
            :class="{ active: this.activeSize === size }"
          >
            {{ size }} см.
          </li>
        </ul>
      </div>
      <div class="pizza-block__bottom">
        <div class="pizza-block__price">от {{ pizza.price }} ₽</div>
        <div class="button button--outline button--add" @click="addCart(pizza)">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>2</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pizza-block",
  props: {
    pizza: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    activeSize: 0,
    activeType: 0,
  }),
  methods: {
    setActiveType(type) {
      this.activeType = type;
    },
    setActiveSize(size) {
      this.activeSize = size;
    },
    addCart(pizza) {
      this.$store.commit('setCart', {
        id: pizza.id,
        title: pizza.title,
        size: this.activeSize,
        type: this.$store.getters.types[this.activeType],
        price: pizza.price,
        rating: pizza.rating,
        imageUrl: pizza.imageUrl,
        category: pizza.category 
      })
    }
  },
  mounted() {
    this.setActiveType(this.pizza.types[0]);
    this.setActiveSize(this.pizza.sizes[0]);
  },
};
</script>

<style>
.list-complete-item {
  transition: all 0.8s ease;
  display: inline-block;
  margin-right: 10px;
}

.list-complete-enter-from,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-complete-leave-active {
  position: absolute;
}
</style>
