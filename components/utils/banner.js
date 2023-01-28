import Image from "next/image";
import clsx from "clsx";

const Banner = ({ className, image, imageClassName, text, textClassName, element, width, height, ...rest }) => {
  return (
    <section className={clsx("relative rounded-xl", className && className)} style={{ width: width && width, height: height && height }} {...rest}>
      <Image
        className={clsx(imageClassName ? imageClassName : "absolute top-0 left-0 w-[100%] h-[100%] rounded-xl")}
        src={image.src}
        alt={image.alt ? image.alt : ""}
      />
      <section>
        {text && <p className={clsx(textClassName && textClassName)}>{text && text}</p>}
        {element && element}
      </section>
    </section>
  );
};

export default Banner;
