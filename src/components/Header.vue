<template>
  <div class="header">
    <div class="container">
      <div class="header__logo">
        <img
          @click="this.$router.push('/')"
          style="cursor: pointer"
          width="38"
          src="@/assets/img/pizza-logo.svg"
          alt="logos icon"
        />
        <div class="align-flex">
          <h1>React Pizza</h1>
          <p>самая вкусная пицца во вселенной</p>
        </div>
      </div>
      <search-pizza />
      <header-cart />
    </div>
  </div>
</template>

<script>
export default {
  name: "main-header",
};
</script>
