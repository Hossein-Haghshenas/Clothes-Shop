import Image from "next/image";
import clsx from "clsx";

const Banner = ({
  className,
  image,
  imageWidth,
  imageHeight,
  imageClassName,
  imageClassNameWD,
  text,
  textClassName,
  element,
  width,
  height,
  priority,
  ...rest
}) => {
  return (
    <section className={clsx("relative rounded-xl", className && className)} style={{ width: width && width, height: height && height }} {...rest}>
      <Image
        className={clsx(imageClassName ? imageClassName : "absolute top-0 left-0 w-[100%] h-[100%] rounded-xl", imageClassNameWD && imageClassNameWD)}
        src={image.src}
        alt={image.alt ? image.alt : ""}
        priority={priority ? true : false}
        width={imageWidth && imageWidth}
        height={imageHeight && imageHeight}
      />
      <section>
        {text && <p className={clsx(textClassName && textClassName)}>{text && text}</p>}
        {element && element}
      </section>
    </section>
  );
};

export default Banner;
