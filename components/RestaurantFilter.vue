<template>
  <div class="Filter">
    <h3>Categories :</h3>
    <div class="categories">
      <div class="child" v-for="item in categories" :key="item.id">
        <input
          type="checkbox"
          :name="item.categories.name"
          :value="item.categories.id"
          :id="item.categories.name"
          v-model="SelectedCategories"
        />
        <label :for="item.categories.name">{{ item.categories.name }}</label>
      </div>
    </div>
    <h3>cuisines :</h3>
    <div class="cuisines">
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
  </div>
</template>
<script>
export default {
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
* {
  font-family: Arial, Helvetica, sans-serif;
}

.categories {
  display: flex;
  flex-wrap: wrap;
}
.cuisines {
  display: flex;
  flex-wrap: wrap;
}
.child {
  flex-basis: 20%;
}
</style>
