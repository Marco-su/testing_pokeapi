import axios from "axios";

export const getPokes = () => {
  return axios({
    method: "GET",
    url: "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200",
  });
};
