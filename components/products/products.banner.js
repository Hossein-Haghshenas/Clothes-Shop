import { Banner, Button, Container } from "../utils";
import productsBanner from "../../public/image/productsBanner.png";

const headphoneBanner = {
  src: productsBanner,
  alt: "headphone",
};

const ProductsBanner = () => {
  return (
    <>
      <Container flex justifyCenter>
        <Banner
          className="relative w-full bg-[#2b2b2b] text-white h-[25rem] lg:h-[18rem] sm:h-[12rem] m-8"
          image={headphoneBanner}
          imageClassName="absolute right-32 lg:right-4 md:right-4 sm:right-0 bottom-0 w-[25rem] lg:w-[20rem] sm:w-[12rem]"
          element={
            <section className="absolute top-32 lg:top-16 sm:top-4 left-52 xl:left-20 lg:left-10 md:left-5 flex flex-col gap-7 md:gap-4">
              <h1 className="text-[50px] xl:text-[40px] lg:text-[30px] md:text-[25px] sm:text-[16px] sm:w-32 font-semibold">
                Grab Upto 50% Off On <br /> Selected Headphone
              </h1>
              <section className="w-28">
                <Button className="!bg-[#edc90f] text-black">Buy Now</Button>
              </section>
            </section>
          }
          textClassName="absolute top-36 sm:top-16 left-8 sm:left-4 w-[20rem] xl:w-[18rem] lg:w-[10rem] md:w-[10rem] sm:w-[20rem] text-[40px] xl:text-[35px] lg:text-[25px] sm:text-[17px]"
          priority
        />
      </Container>
    </>
  );
};

export default ProductsBanner;
