<template>
  <div>
    <h2>Results :</h2>
    <div class="Results" v-for="item in Restaurants" :key="item.id">
      <a href="" @click.prevent="index(item.restaurant.id)">{{
        item.restaurant.name
      }}</a>
    </div>
    <div class="buttons">
      <button @click="Decrease">Back</button>
      <button @click="increase">Get More Results</button>
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
    increase() {
      this.$store.commit("Restaurants/increase");
      this.$store.dispatch("Restaurants/Results");
    },
    Decrease() {
      this.$store.commit("Restaurants/Decrease");
      this.$store.dispatch("Restaurants/Results");
    },
  },
  computed: {
    Restaurants() {
      return this.$store.state.Restaurants.Restaurants;
    },
  },
};
</script>
<style lang="scss" scoped>
* {
  background-color: aliceblue;

  a {
    text-decoration: none;
  }
  .Results a:hover {
    color: rgb(27, 175, 47);
  }
}

.Results {
  border-top: 1px solid rgb(77, 119, 119);
  padding: 8px;
}
</style>
