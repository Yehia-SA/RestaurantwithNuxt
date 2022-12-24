import axios from "axios";
import { state } from "../store/Restaurants.js";
const apiClient = axios.create({
  baseURL: "https://developers.zomato.com/api/v2.1",
  headers: {
    "user-key": "193d0d573f12dff31081e2530e7d4df8",
  },
});

export default {
  GetCategory() {
    return apiClient.get("/categories");
  },
  GetCusinis() {
    return apiClient.get(
      "/cuisines?lat=-77596659.4184915&lon=-77596659.4184915&city_id=ipsum sunt labore ex"
    );
  },
  Results(Cuisines, Categories) {
    return apiClient.get(
      "/search?cuisines=" + Cuisines + "&category= " + Categories
    );
  },
  GetRestaurant() {
    return apiClient.get(
      "/search?start=0&count=100&category=&priceRange[]=1&priceRange[]=4&ratingRange[]=0&ratingRange[]=5"
    );
  },
};
// Cannot access 'state' before initialization
// create component then fetch data
// console.log(state.SelectedCategories);
