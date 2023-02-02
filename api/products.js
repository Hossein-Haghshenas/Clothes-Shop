import axios from "axios";

export const getAllProducts = async () => {
  const baseURL = "https://fakestoreapi.com/products";
  const { data } = await axios.get(baseURL);
  return data;
};

export const getCategories = async (id) => {
  const baseURL = `https://fakestoreapi.com/products/categories`;
  const { data } = await axios.get(baseURL);
  return data;
};
