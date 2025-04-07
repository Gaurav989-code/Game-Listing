import axios from "axios";

const key = "d8a1aee37c8d4067ad0ebc8aa104fef0";

const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});
const getGenreList = axiosCreate.get("/genres?key=" + key);
const getAllGames = axiosCreate.get("/games?key=" + key);
const getGamesByGenreListId = (id) =>
  axiosCreate.get("/games?key=" + key + "genres=" + id);
export default {
  getGenreList,
  getAllGames,
  getGamesByGenreListId
};
