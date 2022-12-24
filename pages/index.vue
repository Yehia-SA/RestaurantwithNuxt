<template>
  <div class="main">
    <div class="categories">
      <ul>
        <h3>Categories :</h3>
        <li v-for="item in categories" :key="item.id">
          <input
            type="checkbox"
            :name="item.categories.name"
            :value="item.categories.id"
            :id="item.categories.name"
            v-model="SelectedCategories"
          />
          <label :for="item.categories.name">{{ item.categories.name }}</label>
        </li>
      </ul>
    </div>
    <div class="cuisines">
      <ul>
        <h3>cuisines :</h3>
        <div class="parent">
          <div class="child" v-for="item in cuisines" :key="item.id">
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
        </div>
      </ul>
    </div>
    <ResultList />
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
<style scoped>
.main {
  margin: 0;
  padding: 0;
  display: flex;
}
.categories .cuisines {
  margin: 10px;
}

.parent {
  display: flex;
  flex-wrap: wrap;
}
.child {
  flex-basis: 25%;
}

/* .cuisines {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
} */
</style>
