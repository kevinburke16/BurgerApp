import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-burger-app-2020.firebaseio.com/"
});

export default instance;
