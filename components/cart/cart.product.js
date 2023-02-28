import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai";
import { Container } from "../utils";
import { useCartStore } from "../../store/store";

const CartProduct = ({ data }) => {
  const { title, id, image, price, category } = data;
  const cartProducts = useCartStore();

  return (
    <>
      <Container className="my-2" flex justifyBetween alignCenter>
        <Image className="w-[8rem] h-[7rem]" src={image} alt={title} width="700" height="700" />
        <h5>{title}</h5>
        <AiOutlineDelete
          onClick={() => {
            cartProducts.removeCartProducts(data);
            cartProducts.setGetTotals();
          }}
        />
      </Container>
    </>
  );
};

export default CartProduct;
