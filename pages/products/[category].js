import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BorderedTitle, Card, Container, Wrapper } from "../../components/utils";
import { useProductsStore } from "../../store/store";

const Category = () => {
  const {
    query: { category },
  } = useRouter();
  const [finalData, setFinalData] = useState();
  const productsData = useProductsStore().products;

  useEffect(() => {
    const filteredData = productsData.filter((product) => product.category === category);
    setFinalData(filteredData);
  }, [productsData]);
  console.log(productsData);

  return (
    <>
      <Wrapper>
        <Container className="m-8" flex col gap2>
          <BorderedTitle title={`${category} Products For You`} />
          <Container flex justifyCenter gap2 wrap>
            {finalData?.map((product) => (
              <Card key={product.id} data={product} />
            ))}
          </Container>
        </Container>
      </Wrapper>
    </>
  );
};

export default Category;
