import Image from "next/image";
import { Button, Container } from "../utils";
import exploreSectionImage from "../../public/image/b8.jpg";

const HomeExplore = () => {
  return (
    <>
      <Container className="my-16 mx-8 sm:mx-2 gap-40 lg:gap-20 md:gap-10 sm:gap-4" flex justifyCenter>
        <section className="w-[30rem]">
          <Image className="md:h-[23rem] sm:h-[16rem]" src={exploreSectionImage} alt="new collections" />
        </section>
        <section className="flex flex-col gap-4 sm:gap-3 mt-16 sm:mt-1">
          <h1 className="text-[40px] lg:text-[30px] md:text-[25px] sm:text-[14.5px] sm:w-15 font-semibold">
            Explore Our New <br /> Collection
          </h1>
          <p className="w-full sm:text-[13.5px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, quas. <br /> Consequatur totam doloribus veniam illo ratione, ipsam
            harum hic!
          </p>
          <section className="w-32">
            <Button className="sm:text-[13px]">Explore Now</Button>
          </section>
        </section>
      </Container>
    </>
  );
};

export default HomeExplore;
