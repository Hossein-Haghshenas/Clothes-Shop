import Image from "next/image";
import { useCartStore } from "../../store/store";
import { Container } from "../utils";
import emptyCart from "../../public/image/empty-cart.jpg";
import CartProduct from "./cart.product";

const CartBody = () => {
  const cartProducts = useCartStore();

  return (
    <Container className="h-[25rem] py-4 overflow-y-auto scrollbar-thin scroll-smooth scrollbar-thumb-gray-500 scrollbar-track-gray-100" flex col>
      {cartProducts.cart.length > 0 ? (
        cartProducts?.cart.map((item) => {
          return <CartProduct key={item.id} data={item} />;
        })
      ) : (
        <section className="flex justify-center items-center mt-4">
          <Image src={emptyCart} alt="empty cart" width="270" height="270" />
        </section>
      )}
    </Container>
  );
};

export default CartBody;
