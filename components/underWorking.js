import Image from "next/image";
import { Wrapper } from "./utils";

import image from "./../public/image/under-construction.jpg";

const UnderWorking = () => {
  return (
    <Wrapper>
      <section className="w-full min-h-[15.3rem] flex justify-center items-center">
        <Image src={image} width="1000" height="1000" alt="under working" className="w-[15rem] h-[12rem] rounded-3xl" />
      </section>
    </Wrapper>
  );
};

export default UnderWorking;
