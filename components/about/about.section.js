import clsx from "clsx";
import Image from "next/image";
import { Container } from "../utils";

const AboutSection = ({ containerClassName, image, imageClassName, video, videoClassName, text }) => {
  return (
    <>
      <Container className={clsx("sm:flex-col", containerClassName && containerClassName)} flex alignCenter justifyAround gap3>
        <section>
          {image && <Image className={imageClassName && imageClassName} src={image.src} alt={image.alt} />}
          {video && <video className={videoClassName && videoClassName} src={video} autoPlay muted loop />}
        </section>
        <section>{text}</section>
      </Container>
    </>
  );
};

export default AboutSection;
