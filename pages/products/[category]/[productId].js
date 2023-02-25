import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Container, Loading, Wrapper } from "../../../components/utils";
import { useProductsStore } from "../../../store/store";

const ProductDetails = () => {
  const {
    query: { category, productId },
    back,
  } = useRouter();
  const [finalData, setFinalData] = useState({});
  const productsData = useProductsStore().products;

  useEffect(() => {
    const filteredData = productsData.filter((product) => Number(product.id) === Number(productId));
    setFinalData(filteredData[0]);
  }, [productsData]);

  console.log(typeof finalData);

  if (typeof finalData !== "object") {
    return (
      <Wrapper className="min-h-[34.2vh]">
        <Loading />
      </Wrapper>
    );
  } else {
    const { title, image, price, description } = finalData;
    return (
      <Wrapper className="min-h-[34.2vh] p-10 md:p-6 sm:p-4">
        <Container className="sm:flex-col" flex gap1>
          <section className="w-[35%] lg:w-[50%] sm:w-[100%]">
            {finalData.image && <Image className="w-full h-[100%] rounded-t" src={image} width={400} height={400} alt={title} />}
          </section>
          <Container className="w-[65%] lg:w-[50%] sm:w-[100%] lg:gap-3" flex col gap2>
            <section>
              <Link href="/products">categories</Link> /
              <a className="cursor-pointer" onClick={() => back()}>
                {category}
              </a>
            </section>
            <section>
              <h1 className="font-bold text-[30px] sm:text-[25px]">{title}</h1>
            </section>
            <section>
              <h2 className="font-bold text-[25px] sm:text-[20px]">${price}</h2>
            </section>
            <Container flex col gap1>
              <h3 className="font-bold text-[20px] sm:text-[18px]">Product Details</h3>
              <p>{description}</p>
            </Container>
            <section>
              <Button>Add to cart</Button>
            </section>
          </Container>
        </Container>
      </Wrapper>
    );
  }
};

export default ProductDetails;
