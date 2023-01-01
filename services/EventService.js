import axios from "axios";
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
  Results(Cuisines, Categories, start) {
    return apiClient.get(
      "/search?cuisines=" +
        Cuisines +
        "&category= " +
        Categories +
        "&start= " +
        start +
        "count = 100"
    );
  },
  // GetRestaurantByID
  GetRestaurant(id) {
    return apiClient.get("/restaurant?res_id=" + id);
  },
};
