import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai";
import { Container } from "../utils";
import CartItemCounter from "./cart.item.counter";
import { useCartStore } from "../../store/store";

const CartProduct = ({ data }) => {
  const { title, id, image, price, category, productCount } = data;
  const cartProducts = useCartStore();

  return (
    <>
      <Container className="m-2 mr-4 border" flex justifyBetween alignCenter>
        <Image className="w-[8rem] h-[7rem]" src={image} alt={title} width="700" height="700" />
        <Container className="w-[15rem] sm:w-[8.5rem] h-full p-2" flex col justifyAround>
          <section>
            <h5 className="text-[16px] md:text-[13px]">{title}</h5>
            <h6 className="text-[16px] md:text-[13px]">${price}</h6>
          </section>
          <section>
            <CartItemCounter productCount={productCount} id={id} />
          </section>
        </Container>
        <Container
          onClick={() => {
            cartProducts.removeCartProducts(id);
          }}
          className="h-full px-2 transition ease-in delay-100 bg-slate-100 hover:bg-slate-200 cursor-pointer"
          flex
          alignCenter
        >
          <AiOutlineDelete />
        </Container>
      </Container>
    </>
  );
};

export default CartProduct;
