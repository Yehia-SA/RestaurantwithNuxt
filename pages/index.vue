<template>
  <div>
    <h3>Categories :</h3>
    <div v-for="item in categories" :key="item.id">
      <input
        type="checkbox"
        :name="item.categories.name"
        :value="item.categories.id"
        :id="item.categories.name"
        v-model="SelectedCategories"
      />
      <label :for="item.categories.name">{{ item.categories.name }}</label>
    </div>
    <h3>cuisines :</h3>

    <div>{{ SelectedCategories }}</div>
    <div v-for="item in cuisines" :key="item.id">
      <input
        type="checkbox"
        :name="item.cuisine.cuisine_name"
        :value="item.cuisine.cuisine_id"
        :id="item.cuisine.cuisine_name"
        v-model="SelectedCuisines"
      />
      <label :for="item.cuisine.cuisine_name">{{
        item.cuisine.cuisine_name
      }}</label>
    </div>

    <div class="test">
      <result-list />
      <!-- {{ $store.state.Restaurants.categories }} -->
    </div>
  </div>
</template>

<script>
import ResultList from "../components/ResultList.vue";
export default {
  components: {
    ResultList,
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch("Restaurants/fetchcategories");
      await store.dispatch("Restaurants/fetchcuisines");
      // await store.dispatch("Restaurants/Results");
    } catch (e) {
      error({
        statusCode: 503,
        message: "Unable to fetch Data at this time. Please try again.",
      });
    }
  },

  computed: {
    categories() {
      return this.$store.state.Restaurants.categories;
    },
    cuisines() {
      return this.$store.state.Restaurants.cuisines;
    },
    SelectedCategories: {
      get() {
        return this.$store.state.Restaurants.SelectedCategories;
      },
      set(value) {
        this.$store.commit("Restaurants/updateCategories", value);
      },
    },
    SelectedCuisines: {
      get() {
        return this.$store.state.Restaurants.SelectedCuisines;
      },
      set(value) {
        this.$store.commit("Restaurants/updateCuisines", value);
      },
    },
  },
};
</script>
