import axios from "axios";

const apiNode = axios.create({
  baseURL: "http://localhost:4000",
});

export default apiNode;
