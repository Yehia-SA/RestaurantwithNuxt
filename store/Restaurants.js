import EventService from "../services/EventService";
export const state = () => ({
  categories: [],
  cuisines: [],
  SelectedCategories: [],
  SelectedCuisines: [],
  Restaurants: {},
});
export const mutations = {
  categories(state, categories) {
    state.categories = categories;
  },
  cuisines(state, cuisines) {
    state.cuisines = cuisines;
  },
  updateCategories(state, SelectedCategories) {
    state.SelectedCategories = SelectedCategories;
  },
  updateCuisines(state, SelectedCuisines) {
    state.SelectedCuisines = SelectedCuisines;
  },
  RestaurantsResults(state, Restaurants) {
    state.Restaurants = Restaurants;
  },
};
export const actions = {
  fetchcategories({ commit }) {
    return EventService.GetCategory().then((response) => {
      commit("categories", response.data.categories);
    });
  },
  fetchcuisines({ commit }) {
    return EventService.GetCusinis().then((response) => {
      commit("cuisines", response.data.cuisines);
    });
  },
  Results({ commit, state }) {
    return EventService.Results(
      state.SelectedCuisines,
      state.SelectedCategories
    ).then((response) => {
      commit("RestaurantsResults", response.data.restaurants);
      let x = response.data.restaurants;
      console.log(x);
    });
  },
};
