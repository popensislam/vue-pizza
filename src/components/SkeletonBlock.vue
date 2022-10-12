<template>
  <div class="pizza-block-wrapper list-complete-item">
    <div class="pizza-block">
      <div
        class="pizza-block__image"
        style="
          width: 260px;
          height: 260px;
          border-radius: 50%;
          background: #eee;
        "
        alt="Pizza"
      ></div>
      <h4
        class="pizza-block__title"
        style="width: 100%; height: 15px; margin-top: 10px; background: #eee"
      ></h4>
      <div
        class="pizza-block__selector"
        style="width: 100%; height: 87px; background: #eee"
      >
        <ul style="width: 100%; background: #eee"></ul>
        <ul style="width: 100%; background: #eee"></ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "skeleton-block",
};
</script>

<style></style>
