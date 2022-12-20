import EventService from "../services/EventService";

export const state = () => ({
  categories: [],
  cuisines: [],
  SelectedCategories: [1],
  SelectedCuisines: [],
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
  Results({ state }) {
    return EventService.Results().then((response) => {
      let x = response.data.restaurants;
      console.log(x);
    });
  },
};
