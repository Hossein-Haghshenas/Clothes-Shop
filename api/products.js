import axios from "axios";

export const getAllProducts = async () => {
  const baseURL = "https://humorous-perpetual-pipe.glitch.me/products";
  const { data } = await axios.get(baseURL);
  return data;
};

export const getCategories = async () => {
  const baseURL = `https://humorous-perpetual-pipe.glitch.me/categories`;
  const { data } = await axios.get(baseURL);
  return data;
};
