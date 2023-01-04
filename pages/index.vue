<template>
  <div class="main">
    <RestaurantFilter />
    <ResultList />
    <SelectedRestaurant />
  </div>
</template>
<script>
import RestaurantFilter from "../components/RestaurantFilter.vue";
import ResultList from "../components/ResultList.vue";
import SelectedRestaurant from "../components/SelectedRestaurant.vue";
export default {
  components: {
    RestaurantFilter,
    ResultList,
    SelectedRestaurant,
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch("Restaurants/fetchcategories");
      await store.dispatch("Restaurants/fetchcuisines");
    } catch (e) {
      error({
        statusCode: 503,
        message: "Unable to fetch Restaurants at this time. Please try again.",
      });
    }
  },
};
</script>
<style lang="scss" scoped></style>
