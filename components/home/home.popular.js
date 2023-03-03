import Image from "next/image";
import Link from "next/link";
import { Button, Container, RateStars } from "../utils";

const HomePopular = ({ popularData }) => {
  return (
    <>
      <Container flex col alignCenter gap2>
        <section>
          <h3 className="font-bold text-[25px]">Most Popular Products</h3>
        </section>
        <Container flex justifyCenter gap2 wrap>
          {popularData?.map((product) => {
            const {
              id,
              title,
              rating: { rate, count },
              image,
              category,
            } = product;
            return (
              <Container className="w-[20rem] sm:w-[15rem] rounded-lg shadow-xl" flex col gap1 key={id}>
                <section>
                  <Image className="rounded-t-xl shadow-md w-full h-[16rem] sm:h-[14rem]" width="400" height="300" src={image} alt={title} />
                </section>
                <section className="flex justify-around items-center pb-2">
                  <RateStars rate={rate} count={count} />
                  <Button className="text-[15px] w-[5rem] h-[2.2rem] !rounded-md">
                    <Link href={`products/${category}/${id}`}>Details</Link>
                  </Button>
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
