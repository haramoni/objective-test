import axios from "axios";

const api = axios.create({
  //baseURL: "http://localhost:8081",
  baseURL: "https://gateway.marvel.com:443",
});

export default api;
