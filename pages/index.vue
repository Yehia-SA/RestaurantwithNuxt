<template>
  <div class="main">
    <RestaurantFilter class="RestaurantFilter" />
    <result-list></result-list>
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
<style lang="scss" scoped>
.main {
  display: grid;
  grid-template-columns: repeat(10, auto);
  grid-template-rows: repeat(2, auto);
  grid-template-areas: "RestaurantFilter RestaurantFilter RestaurantFilter RestaurantFilter RestaurantFilter RestaurantFilter RestaurantFilter RestaurantFilter RestaurantFilter RestaurantFilter ";
  .RestaurantFilter {
    grid-area: RestaurantFilter;
  }
}
</style>
