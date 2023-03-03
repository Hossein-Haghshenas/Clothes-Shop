import React from "react";
import { Banner, Button, Container } from "../utils";
import offBannerImage from "../../public/image/b10.jpg";

const offBanner = {
  src: offBannerImage,
  alt: "70% off for all products",
};

const HomeOff = () => {
  return (
    <>
      <Container wFull flex justifyCenter>
        <Banner
          className="relative my-10 mx-4 w-[60rem] h-[30rem] md:w-[30rem] md:h-[15rem]"
          image={offBanner}
          imageClassName="w-full h-[30rem] md:h-[15rem] rounded-none"
          element={
            <section className="flex justify-center items-center absolute bottom-0 left-0 w-full h-[30rem] md:h-[15rem] bg-[#00000050] z-0">
              <section className="flex flex-col justify-center items-center gap-4 my-10 w-[40rem] md:w-[20rem] sm:w-[15rem] h-[20rem] md:h-[10rem] border-4 border-white rounded-lg z-10">
                <h3 className="text-white text-[30px] md:text-[21px]">
                  UP TO 70% OFF <br /> ALL ITEM SALE
                </h3>
                <Button>Shop Now</Button>
              </section>
            </section>
          }
        />
      </Container>
    </>
  );
};

export default HomeOff;
