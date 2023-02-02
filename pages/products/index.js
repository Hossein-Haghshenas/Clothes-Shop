import React from "react";
import { ProductsBanner, ProductsCategory } from "../../components";
import { Wrapper } from "../../components/utils";
import collection from "../../public/image/categories/collection_category.jpg";

const categories = [
  {
    id: 0,
    name: "Collections",
    image: collection,
    count: 240,
  },
  {
    id: 1,
    name: "Shoes",
    image: collection,
    count: 240,
  },
  {
    id: 2,
    name: "Bag",
    image: collection,
    count: 240,
  },
  {
    id: 3,
    name: "Dress",
    image: collection,
    count: 240,
  },
  {
    id: 4,
    name: "Jacket",
    image: collection,
    count: 240,
  },
  {
    id: 5,
    name: "Coat",
    image: collection,
    count: 240,
  },
  {
    id: 6,
    name: "T-Shirt",
    image: collection,
    count: 240,
  },
];

const Products = () => {
  return (
    <Wrapper>
      <ProductsBanner />
      <ProductsCategory categories={categories} />
    </Wrapper>
  );
};

export default Products;
