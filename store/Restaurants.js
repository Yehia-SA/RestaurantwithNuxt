import EventService from "../services/EventService";
export const state = () => ({
  categories: [],
  cuisines: [],
  SelectedCategories: [],
  SelectedCuisines: [],
  Restaurants: {},
  Res_id: [],
  RestaurantDetalis: {},
  start: 0,
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
    // state.Restaurants = { ...state.Restaurants, Restaurants };
  },
  RestaurantID(state, Res_id) {
    state.Res_id = Res_id;
  },
  RestaurantDetalis(state, ResturantData) {
    state.RestaurantDetalis = ResturantData;
  },
  increase(state) {
    state.start = state.start + 20;
  },
  Decrease(state) {
    state.start = state.start - 20;
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
      state.SelectedCategories,
      state.start
    ).then((response) => {
      commit("RestaurantsResults", response.data.restaurants);
      // let x = response.data.restaurants;
      // console.log(x);
    });
  },
  GetRestaurantByID({ commit, state }) {
    return EventService.GetRestaurant(state.Res_id).then((response) => {
      // console.log(response.data);
      commit("RestaurantDetalis", response.data);
    });
  },
};
