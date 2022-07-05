import axios from "axios";

const apiNode = axios.create({
  baseURL: "https://share-babyshower-node.herokuapp.com",
});

export default apiNode;
