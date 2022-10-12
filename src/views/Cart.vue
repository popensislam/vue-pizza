<template>
  <div className="container container--cart">
    <CartFull v-if="this.$store.getters.cart.length"/>
    <CartEmpty v-else/>
  </div>
</template>

<script>
import CartFull from "@/components/cart/CartFull.vue";
import CartEmpty from '@/components/cart/CartEmpty.vue'

export default {
  name: "cart-page",
  components: {
    CartFull, CartEmpty
  },
};
</script>
