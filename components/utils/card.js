import { useState } from "react";
import Image from "next/image";
import { AiFillStar, AiOutlineStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Button from "./button";
import Container from "./container";

const Card = ({
  data: {
    title,
    image,
    price,
    rating: { rate, count },
  },
}) => {
  const [like, setLike] = useState(false);
  return (
    <>
      <Container className="w-[20rem] border-[1px] border-slate-300 rounded transition-shadow duration-300 hover:shadow-2xl" flex col>
        <section className="relative">
          <Image className="w-full h-[15rem] rounded-t" src={image} width={400} height={400} alt={title} placeholder="blur" blurDataURL={image} />
          <span onClick={() => setLike(!like)} className="absolute top-4 right-4 text-[1.5rem] cursor-pointer">
            {like ? <AiFillHeart className="text-red-600" /> : <AiOutlineHeart className="text-white transition-all hover:text-red-600" />}
          </span>
        </section>
        <section className="p-4">
          <Container flex justifyBetween alignCenter>
            <h4 className="sm:text-[14px]">{title}</h4>
            <h5>$ {price}</h5>
          </Container>
          <Container flex col gap2>
            <span className="flex items-center p-1">
              {[...Array(rate)].map(() => (
                <AiFillStar className="text-yellow-400" />
              ))}
              {[...Array(5 - rate)].map(() => (
                <AiOutlineStar className="text-yellow-400" />
              ))}
              <span className="p-2 text-gray-600 text-sm">({count})</span>
            </span>
            <Button>Add to Cart</Button>
          </Container>
        </section>
      </Container>
    </>
  );
};

export default Card;
