import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useCartStore, useFavoritesStore } from "../../store/store";
import Button from "./button";
import Container from "./container";
import RateStars from "./rateStars";

const Card = ({ data }) => {
  const {
    title,
    id,
    image,
    price,
    category,
    rating: { rate, count },
  } = data;

  const [favorites, setFavorites] = useState();
  const favoriteProducts = useFavoritesStore();
  const cartProducts = useCartStore();

  useEffect(() => {
    setFavorites(favoriteProducts.favorites);
  }, [favoriteProducts]);

  return (
    <>
      <Container className="w-[20rem] border-[1px] border-slate-300 bg-[#f7f7f7] rounded transition-shadow duration-300 hover:shadow-2xl" flex col>
        <section className="relative">
          <Image className="w-full h-[15rem] rounded-t" src={image} width={400} height={400} alt={title} placeholder="blur" blurDataURL={image} />
          <span onClick={() => favoriteProducts.setFavorites(title, id)} className="absolute top-4 right-4 text-[1.5rem] cursor-pointer">
            {favorites?.includes(title) ? (
              <AiFillHeart className="text-red-600" />
            ) : (
              <AiOutlineHeart className="text-white transition-all hover:text-red-600" />
            )}
          </span>
        </section>
        <section className="p-4">
          <Container flex justifyBetween alignCenter>
            <h4 className="sm:text-[14px]">{title}</h4>
            <h5>$ {price}</h5>
          </Container>
          <Container flex col gap2>
            <RateStars rate={rate} count={count} />
            <Container flex justifyAround>
              <Button
                onClick={() => {
                  cartProducts.setCartProducts(data);
                }}
              >
                Buy Now
              </Button>
              <Button>
                <Link href={`${category}/${id}`}>Product Details</Link>
              </Button>
            </Container>
          </Container>
        </section>
      </Container>
    </>
  );
};

export default Card;
