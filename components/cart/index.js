import { Container } from "../utils";
import CartHeader from "./cart.header";
import CartBody from "./cart.body";
import CartFooter from "./cart.footer";

const Cart = () => {
  return (
    <>
      <Container className="fixed top-0 left-0 right-0 bottom-0 backdrop-blur w-full h-screen opacity-100 z-[350]" flex justifyCenter alignCenter>
        <section className="flex flex-col p-4 md:p-2 m-4 w-[30rem] h-[30rem] bg-white rounded-xl">
          <CartHeader />
          <CartBody />
          <CartFooter />
        </section>
      </Container>
    </>
  );
};

export default Cart;
