<template>
  <div>
    <h3>{{ SelectedRestaurant.name }}</h3>
    <img :src="SelectedRestaurant.featured_image" alt="" />
    <h3>{{ SelectedRestaurant.phone_numbers }}</h3>
    <h3>{{ SelectedRestaurant.timings }}</h3>
    <h3>{{ SelectedRestaurant.location }}</h3>
  </div>
</template>
<script>
export default {
  computed: {
    SelectedRestaurant() {
      return this.$store.state.Restaurants.RestaurantDetalis;
    },
  },
};
</script>
<style lang="scss" scoped>
* {
  background-color: #f1f1f1;
}
</style>
