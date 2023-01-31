import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

const HeaderBanner = ({ image, text, href, height }) => {
  return (
    <>
      <Link className="w-full" href={href && href}>
        <section>
          {image && <Image src={image.src} alt={image.alt} className="w-full object-fill" height={height ? height : "4rem"} />}
          {text && <p className={clsx("w-full flex justify-center", height ? `h-[${height}]` : "h-10")}>{text}</p>}
        </section>
      </Link>
    </>
  );
};

export default HeaderBanner;
