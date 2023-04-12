import { Button, Container } from "../utils";
import backgroundImg from "../../public/image/about/b14.png";

const Newsletter = () => {
  return (
    <>
      <Container
        className="bg-[#001f3a] py-12 mt-12 md:flex-col md:gap-8 bg-no-repeat bg-center"
        flex
        justifyAround
        alignCenter
        style={{ backgroundImage: `url(${backgroundImg.src})` }}
      >
        <section className="text-white">
          <h4 className="text-[22px] font-bold md:text-center">Sign Up For Newsletters</h4>
          <p className="mt-4 md:text-center">
            Get E-mails updates about our latest shop and <span className="text-orange-400">special offers</span>
          </p>
        </section>
        <section className="flex justify-center md:w-full">
          <input className="p-2 h-[2.5rem] sm:w-[10rem]" type="text" />
          <Button className="py-2 px-8 !bg-[#edc90f] text-black !rounded-none">Sign Up</Button>
        </section>
      </Container>
    </>
  );
};

export default Newsletter;
