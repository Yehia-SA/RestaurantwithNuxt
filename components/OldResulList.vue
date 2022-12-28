<template>
  <div class="Section row">
    <div class="restaurants col-3">
      <h3>Results</h3>
      <div v-for="(item, index) in restaurants" :key="item.id">
        <a href="#" @click.prevent="Test(index)">
          {{ index + 1 }} {{ item.name }}
        </a>
      </div>
    </div>
    <div class="detalis col-9">
      <div class="row">
        <div class="RestImg col-6">
          <img :src="Data.img" alt="" />
        </div>
        <div class="Restinfo col-6">
          <h2 class="name">{{ Data.name }}</h2>
          <p class="address">{{ Data.add.address }}</p>
          <p class="Number">{{ Data.Number }}</p>
          <p class="OpenHours">{{ Data.OpenHours }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ResultList",
  data() {
    return {
      id: 0,
    };
  },
  methods: {
    Test(index) {
      return (this.id = index);
    },
  },
  watch: {
    "$store.state.selectedCategories": function () {
      this.$store.dispatch("DataNeeded");
    },
    "$store.state.selectedLocations": function () {
      this.$store.dispatch("DataNeeded");
    },
  },
  computed: {
    GetData() {
      return this.$store.dispatch("DataNeeded");
    },
    Data() {
      return this.$store.state.RestaurantList[this.id];
    },
    restaurants() {
      return this.$store.state.RestaurantList;
    },
  },
  // watch to run  Getters + Actions
};
</script>
<style scoped>
.Section {
  color: white;
}
.restaurants div {
  border-bottom: 2px solid white;
  width: 20vw;
}
.restaurants a {
  display: block;
  padding: 8px 4px 8px 50px;
  margin-top: 20px;
  text-decoration: none;
  color: white;
}
.restaurants a:hover {
  color: #0055e7b1;
}
.Section {
  background-color: #2b2d42;
}
.RestImg {
  position: relative;
}
.RestImg img {
  position: absolute;
  top: 100px;
  height: 300px;
  width: 500px;
}
</style>
