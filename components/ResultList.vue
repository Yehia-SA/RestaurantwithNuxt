<template>
  <div>
    <div v-for="item in Restaurants" :key="item.id">
      <a href="" @click.prevent="index(item.restaurant.id)">{{
        item.restaurant.name
      }}</a>

      <h2>==========</h2>
    </div>
  </div>
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
  methods: {
    index(id) {
      this.$store.commit("Restaurants/RestaurantID", id);
      this.$store.dispatch("Restaurants/GetRestaurantByID");
    },
  },

  computed: {
    Restaurants() {
      return this.$store.state.Restaurants.Restaurants;
    },
  },
};
</script>
