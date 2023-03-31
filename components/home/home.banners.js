import { Banner, Container, Button } from "../utils/index";
import mainBannerImage from "../../public/image/b1.png";
import homeBannerImage from "../../public/image/b4.jpg";
import homeBannerImage2 from "../../public/image/b7.jpg";
import homeBannerImage3 from "../../public/image/b2.jpg";

const mainImageDetails = {
  src: mainBannerImage,
  alt: "H & N Shop",
};

const bannerImageDetails = {
  src: homeBannerImage,
  alt: "H & N Shop",
};
const bannerImageDetails2 = {
  src: homeBannerImage2,
  alt: "H & N Shop",
};
const bannerImageDetails3 = {
  src: homeBannerImage3,
  alt: "H & N Shop",
};

const HomeBanners = () => {
  return (
    <>
      <Banner
        className="relative w-full bg-[#edc90f] !rounded-none h-[32rem] lg:h-[25rem] sm:h-[15rem]"
        image={mainImageDetails}
        imageClassName="absolute right-32 lg:right-8 md:right-4 sm:right-8 bottom-0 w-[25rem] lg:w-[20rem] sm:w-[12rem]"
        element={
          <section className="absolute top-32 lg:top-16 sm:top-10 left-52 xl:left-32 lg:left-20 md:left-10 sm:left-8 flex flex-col gap-7 md:gap-4">
            <h1 className="text-[50px] lg:text-[45px] md:text-[35px] sm:text-[25px] sm:w-10 font-semibold">
              Super Collections <br /> 2023
            </h1>
            <p className="w-full md:w-56 sm:text-[14px] sm:hidden">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, quas. <br /> Consequatur totam doloribus veniam illo ratione,
              ipsam harum hic!
            </p>
            <section className="w-28">
              <Button>Shop Now</Button>
            </section>
          </section>
        }
        textClassName="absolute top-36 sm:top-16 left-8 sm:left-4 w-[20rem] xl:w-[18rem] lg:w-[10rem] md:w-[10rem] sm:w-[7rem] text-[40px] xl:text-[35px] lg:text-[25px] sm:text-[17px]"
        priority
      />
      <Container className="m-8 md:m-4 md:flex-col" flex gap1>
        <Banner
          image={bannerImageDetails}
          text="Buy Pair Clothes For Yourself & Your Partner"
          textClassName="absolute top-36 sm:top-16 left-8 sm:left-4 w-[20rem] xl:w-[18rem] lg:w-[10rem] md:w-[10rem] sm:w-[7rem] text-[40px] xl:text-[35px] lg:text-[25px] sm:text-[17px] font-bold"
          className="w-full min-w-[18rem] max-w-[60rem] h-[30rem] sm:h-[13rem]"
        />
        <Container className="md:w-full w-[30rem] md:flex-row sm:flex-col" col flex gap1>
          <Banner
            image={bannerImageDetails2}
            className="w-full h-[14.5rem] sm:h-[11rem] transition-all duration-300 ease-in grayscale-0 hover:grayscale"
          />
          <Banner
            image={bannerImageDetails3}
            className="w-full h-[14.5rem] sm:h-[11rem] transition-all duration-300 ease-in grayscale hover:grayscale-0"
          />
        </Container>
      </Container>
    </>
  );
};

export default HomeBanners;
