import { create } from "zustand";
import { getAllProducts, getCategories } from "../api/products";
export const useProductsStore = create((set) => ({
  products: [],
  categories: [],
  getProducts: async () => {
    const res = getAllProducts();
    res.then((res) => set({ products: res }));
  },
  getCategories: async () => {
    const res = getCategories().then();

    set({ categories: await res.data });
  },
}));

useProductsStore.getState().getProducts();
useProductsStore.getState().getCategories();
