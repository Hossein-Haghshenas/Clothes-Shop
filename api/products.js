import axios from "axios";

export const getData = async (query) => {
  const baseURL = `https://humorous-perpetual-pipe.glitch.me/${query}`;
  const { data } = await axios.get(baseURL);
  return data;
};
