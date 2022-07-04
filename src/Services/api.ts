import axios from "axios";

const api = axios.create({
  baseURL: "https://share-babyshower.herokuapp.com/api",
});

export default api;
