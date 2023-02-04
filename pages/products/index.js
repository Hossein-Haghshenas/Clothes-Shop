import { ProductsBanner, ProductsCategory } from "../../components";
import { Wrapper } from "../../components/utils";
import { useProductsStore } from "../../store/store";

const Products = () => {
  const categoriesData = useProductsStore().categories;
  return (
    <Wrapper>
      <ProductsBanner />
      <ProductsCategory categories={categoriesData} />
    </Wrapper>
  );
};

export default Products;
