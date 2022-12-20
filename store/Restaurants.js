import EventService from "../services/EventService";
export const strict = false;

export const state = () => ({
  categories: [],
  cuisines: [],
  message: [],
});
export const mutations = {
  categories(state, categories) {
    state.categories = categories;
  },
  cuisines(state, cuisines) {
    state.cuisines = cuisines;
  },
  updateMessage(state, message) {
    state.message = message;
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
};
