import { AiOutlineArrowLeft } from "react-icons/ai";
import { useCartStore } from "../../store/store";
import { Button, Container } from "../utils";

const CartHeader = () => {
  const cartProducts = useCartStore();

  return (
    <>
      <Container className="border-b pb-3" flex justifyBetween alignCenter>
        <section>
          <Button onClick={() => cartProducts.setOpenCart()}>
            <AiOutlineArrowLeft />
          </Button>
        </section>
        <section>
          <h5>Shopping Cart</h5>
        </section>
        <section>
          <Button
            onClick={() => {
              cartProducts.removeAllCartProducts();
              cartProducts.setGetTotals();
            }}
          >
            RemoveAll
          </Button>
        </section>
      </Container>
    </>
  );
};

export default CartHeader;
