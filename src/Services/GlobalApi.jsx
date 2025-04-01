const key = "";
const axiosCreate = axios.axiosCreate({
  baseURL: "",
});
const GenreList = axiosCreate.get("/genres?key=" + key);
export default {
  GenreList,
};
