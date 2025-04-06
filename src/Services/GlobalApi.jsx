import axios from "axios";

const key = "d8a1aee37c8d4067ad0ebc8aa104fef0";

const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});
const getGenreList = axiosCreate.get("/genres?key=" + key);
export default {
  getGenreList,
};
