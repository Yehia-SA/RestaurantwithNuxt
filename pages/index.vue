<template>
  <div>
    <h3>Categories :</h3>
    <div v-for="item in categories" :key="item.id">
      <input
        type="checkbox"
        :name="item.categories.name"
        :value="item.categories.id"
        :id="item.categories.name"
        v-model="$store.state.Restaurants.message"
      />
      <label :for="item.categories.name">{{ item.categories.name }}</label>
    </div>
    <h3>cuisines :</h3>

    <div v-for="item in cuisines" :key="item.id">
      <input
        type="checkbox"
        :name="item.cuisine.cuisine_name"
        :value="item.cuisine.cuisine_id"
        :id="item.cuisine.cuisine_name"
      />
      <label :for="item.cuisine.cuisine_name">{{
        item.cuisine.cuisine_name
      }}</label>
    </div>
    <!-- <div>{{ $store.state.Restaurants.categories }}</div> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  async fetch({ store, error }) {
    try {
      await store.dispatch("Restaurants/fetchcategories");
      await store.dispatch("Restaurants/fetchcuisines");
    } catch (e) {
      error({
        statusCode: 503,
        message: "Unable to fetch events at this time. Please try again.",
      });
    }
  },

  computed: mapState({
    categories: (state) => state.Restaurants.categories,
    cuisines: (state) => state.Restaurants.cuisines,
  }),
};
</script>
