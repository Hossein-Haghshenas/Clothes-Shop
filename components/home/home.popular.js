import Image from "next/image";
import { Container } from "../utils";

const HomePopular = ({ popularData }) => {
  return (
    <>
      <Container flex col alignCenter gap2>
        <section>
          <h3 className="font-bold text-[25px]">Most Popular Products</h3>
        </section>
        <Container flex justifyCenter gap1 wrap>
          {popularData.map((product) => {
            const { id, title, price, images } = product;
            return (
              <Container className="w-[20rem] h-[19rem] rounded-lg shadow-xl" flex col gap1 key={id}>
                <section>
                  <Image className="rounded-xl" width="400" height="300" src={images[1]} alt={title} />
                </section>
                <section className="flex justify-around">
                  <p>{title}</p>
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
