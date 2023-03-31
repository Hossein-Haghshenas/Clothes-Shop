import { Banner, Wrapper } from "../components/utils";
import AboutSection from "../components/about/about.section";
import bannerImg from "../public/image/about/banner.png";
import firstSectionImg from "../public/image/about/a6.png";
import secondSectionVideo from "../public/image/about/1.mp4";
import Newsletter from "../components/about/newsletter";

const firstSection = {
  image: {
    src: firstSectionImg,
    alt: "",
  },
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, saepe sunt. Sint repellat ab iste accusamus nihil reprehenderit, architecto dicta facilis similique quidem voluptates laborum possimus commodi eaque adipisci ea ad aliquam sed? Eos molestias at quae sequi reprehenderit est similique beatae quo neque? Natus architecto delectus ducimus at vero?",
};

const About = () => {
  return (
    <>
      <Wrapper>
        <Banner
          imageClassNameWD="!rounded-none"
          width="100%"
          imageWidth="1000"
          height="17rem"
          imageHeight="1000"
          image={bannerImg}
          element={
            <section className="w-full flex flex-col justify-center items-center text-white pt-20">
              <h1 className="text-[35px] md:text-[25px]">About Us</h1>
              <p>We are the best</p>
            </section>
          }
        />
        <AboutSection
          containerClassName="px-8 pt-4"
          text={
            <>
              <h1 className="text-[35px] md:text-[25px]">Who We Are ?</h1>
              <p className="text-[18px] md:text-[15px] mt-4">{firstSection.text}</p>
            </>
          }
          image={firstSection.image}
          imageClassName="w-full min-w-[28rem] md:min-w-[15rem] sm:min-w-none"
        />
        <AboutSection
          containerClassName="flex !flex-col-reverse mt-[5rem] mx-4"
          text={<h2 className="text-[35px] sm:text-[25px]">Download Our App</h2>}
          video={secondSectionVideo}
          videoClassName="w-[40rem]"
        />
        <Newsletter />
      </Wrapper>
    </>
  );
};

export default About;
