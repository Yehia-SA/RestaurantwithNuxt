<template>
  <div></div>
</template>
<script>
export default {
  watch: {
    "$store.state.Restaurants.SelectedCategories": function () {
      this.$store.dispatch("Restaurants/Results");
    },
    "$store.state.Restaurants.SelectedCuisines": function () {
      this.$store.dispatch("Restaurants/Results");
    },
  },
};
</script>
