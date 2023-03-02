import { useCartStore } from "../../store/store";
import { Button, Container } from "../utils";

const CartFooter = () => {
  const cartProducts = useCartStore();

  return (
    <>
      <Container className="border-t pt-3" flex justifyBetween alignCenter>
        <section>
          <section>Total : ${cartProducts?.cartTotalAmount}</section>
          <section>{cartProducts?.cartTotalCount} items</section>
        </section>
        <section>
          <Button>Check Out</Button>
        </section>
      </Container>
    </>
  );
};

export default CartFooter;
