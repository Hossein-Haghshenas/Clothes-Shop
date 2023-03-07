import Image from "next/image";
import Link from "next/link";
import { BorderedTitle, Container, Loading } from "../utils";

const ProductsCategory = ({ categories }) => {
  return (
    <>
      <Container className="mx-8 pb-8" flex col gap2>
        <BorderedTitle title="Categories" />
        {categories.length < 1 ? (
          <Loading />
        ) : (
          <Container wFull justifyCenter flex gap2 wrap>
            {categories?.map((category) => {
              const { id, title, image, productsCount } = category;
              return (
                <Link className="w-[45%] md:w-full" href={`products/${title}`} key={id}>
                  <Container className="bg-slate-300 transition ease-in delay-150 hover:bg-sky-200 cursor-pointer" flex gap1>
                    <section>
                      <Image
                        className="w-[10rem] sm:w-[8rem] h-[10rem] object-fill"
                        src={image}
                        width={400}
                        height={400}
                        alt={title}
                        placeholder="blur"
                        blurDataURL={image}
                      />
                    </section>
                    <Container className="sm:gap-4" flex col gap2>
                      <h4 className="font-semibold text-[25px] sm:text-[20px] mt-6">{title}</h4>
                      <p>{productsCount} Items Available</p>
                    </Container>
                  </Container>
                </Link>
              );
            })}
          </Container>
        )}
      </Container>
    </>
  );
};

export default ProductsCategory;
