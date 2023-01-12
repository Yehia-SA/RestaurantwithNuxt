<template>
  <div class="Filter">
    <div class="categories">
      <h3>Categories :</h3>
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
    <div class="cuisines">
      <h3>Cuisines :</h3>
      <div class="options-container">
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
    <div class="rate">
      <h4>Select rate of the restaurant</h4>
      <p>0 is low and 5 is high</p>
      <input type="range" step="1" max="5" />
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
  padding: 3px;
}
.rate {
  align-self: center;
}
.rate input {
  width: 300px;
}
.Filter {
  display: inline-flex;
}
.categories {
  grid-area: categories;
}

.cuisines {
  display: flex;
  flex-direction: column;
  width: 1000px;
}

.options-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.options-container div {
  flex-basis: 22%;
}
</style>
