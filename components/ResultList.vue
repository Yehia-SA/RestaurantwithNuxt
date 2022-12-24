<template>
  <h2>Result Component</h2>
</template>
<script>
export default {
  watch: {
    "$store.state.Restaurants.SelectedCategories": function () {
      this.$store.dispatch("Restaurants/Results");
    },
    "$store.state.Restaurants.SelectedCuisines": function () {
      // this.$store.dispatch("Restaurants/Results");
      // console.log(state());
    },
  },
};
</script>
