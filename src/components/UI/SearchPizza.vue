<template>
  <div class="searchWrapper">
    <svg
      @click="submitSearch"
      class="icon"
      enableBackground="new 0 0 32 32"
      id="Editable-line"
      version="1.1"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="14"
        cy="14"
        fill="none"
        id="XMLID_42_"
        r="9"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <line
        fill="none"
        id="XMLID_44_"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        x1="27"
        x2="20.366"
        y1="27"
        y2="20.366"
      />
    </svg>

    <form @submit.prevent="submitSearch">
      <input v-model="searchValue" class="root" placeholder="Поиск пиццы..." />
    </form>

    <svg
      @click="setSearchValue"
      class="clearIcon"
      height="48"
      viewBox="0 0 48 48"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"
      />
      <path d="M0 0h48v48H0z" fill="none" />
    </svg>
  </div>
</template>

<script>
export default {
  name: "search-pizza",
  data: () => ({
    searchValue: ''
  }),
  methods: {
    setSearchValue() {
      this.searchValue = ''
      this.submitSearch()
    },
    submitSearch() {
      console.log(this.searchValue)
      this.$store.commit('setSearch', this.searchValue)
    }
  }
};
</script>

<style scoped>
.root {
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 12px 20px;
  width: 300px;
  border-radius: 15px;
  font-size: 16px;
}
.root:focus {
  border: 1px solid rgba(0, 0, 0, 0.3);
}

.searchWrapper {
  display: flex;
  align-items: center;
}

.icon {
  width: 34px;
  height: 34px;
  opacity: 0.4;
  cursor: pointer;
}
.icon:hover {
  opacity: 0.8;
}
.clearIcon {
  width: 34px;
  height: 34px;
  opacity: 0.4;
  cursor: pointer;
}
.clearIcon:hover {
  opacity: 0.8;
}

@media (max-width: 480px) {
  .root {
    width: 100%
  }
}
</style>
