import Image from "next/image";
import { truncate } from "lodash";
import { Container } from "../utils";

const HomePopular = ({ popularData }) => {
  return (
    <>
      <Container flex col alignCenter gap2>
        <section>
          <h3 className="font-bold text-[25px]">Most Popular Products</h3>
        </section>
        <Container flex justifyCenter gap1 wrap>
          {popularData?.map((product) => {
            const { id, title, price, image } = product;
            return (
              <Container className="w-[20rem] h-[19rem] rounded-lg shadow-xl" flex col gap1 key={id}>
                <section>
                  <Image className="rounded-xl w-full h-[16rem]" width="400" height="300" src={image} alt={title} />
                </section>
                <section className="flex justify-around">
                  <p>{truncate(title, { length: 35 })}</p>
                  <p>${price}</p>
                </section>
              </Container>
            );
          })}
        </Container>
      </Container>
    </>
  );
};

export default HomePopular;
