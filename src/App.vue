<template>
  <div id="app" class="wrapper">
    <Header />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import "@/scss/app.scss";
</style>
