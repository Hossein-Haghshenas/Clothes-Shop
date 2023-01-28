import axios from "axios";
import { create } from "zustand";

export const useProductsStore = create((set) => ({
  products: {},
  categories: [],
  getProducts: async () => {
    const res = await axios.get("https://api.escuelajs.co/api/v1/products/?categoryId=1");
    set({ products: await res.data });
  },
  getCategories: async () => {
    const res = await axios.get("https://api.escuelajs.co/api/v1/categories");
    set({ categories: await res.data });
  },
}));

useProductsStore.getState().getProducts();
