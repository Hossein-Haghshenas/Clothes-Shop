import { AiOutlineArrowLeft } from "react-icons/ai";
import { Button, Container } from "../utils";

const CartHeader = () => {
  return (
    <>
      <Container className="border-b pb-3" flex justifyBetween alignCenter>
        <section>
          <Button>
            <AiOutlineArrowLeft />
          </Button>
        </section>
        <section>
          <h5>Shopping Cart</h5>
        </section>
        <section>
          <Button>RemoveAll</Button>
        </section>
      </Container>
    </>
  );
};

export default CartHeader;
