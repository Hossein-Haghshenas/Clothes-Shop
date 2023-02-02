import Image from "next/image";
import Link from "next/link";
import { BorderedTitle, Container } from "../utils";

const ProductsCategory = ({ categories }) => {
  return (
    <>
      <Container className="mx-8" flex col gap2>
        <BorderedTitle title="Categories" />
        <Container wFull justifyCenter flex gap2 wrap>
          {categories?.map((category) => {
            const { id, name, image, count } = category;
            return (
              <Link className="w-[45%] md:w-full" href={`products/${name}`}>
                <Container className="bg-slate-300 transition ease-in delay-150 hover:bg-sky-200 cursor-pointer" flex gap1 key={id}>
                  <section>
                    <Image className="w-[10rem] sm:w-[8rem]" src={image} width={340} height={280} alt={name} />
                  </section>
                  <Container className="sm:gap-4" flex col gap2>
                    <h4 className="font-semibold text-[25px] sm:text-[20px] mt-6">{name}</h4>
                    <p>{count} Items Available</p>
                  </Container>
                </Container>
              </Link>
            );
          })}
        </Container>
      </Container>
    </>
  );
};

export default ProductsCategory;
