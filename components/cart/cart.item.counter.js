import { useEffect, useState } from "react";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { useCartStore } from "../../store/store";
import { Container } from "../utils";

const CartItemCounter = ({ productCount, id }) => {
  const cartProducts = useCartStore();
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(productCount);
  }, [productCount]);

  const handlePlusCount = () => {
    const increaseCount = cartProducts.setCartProductsCount(id, true);
    setCount(increaseCount);
  };

  const handleMinuteCount = () => {
    const decreaseCount = cartProducts.setCartProductsCount(id);
    setCount(decreaseCount);
  };

  return (
    <>
      <Container className="w-[5rem] gap-1" flex justifyAround>
        <button onClick={handleMinuteCount} className="bg-slate-200 px-1 rounded-md">
          <AiOutlineMinusSquare />
        </button>
        <span className=" bg-slate-200 px-1 rounded-md">{count}</span>
        <button onClick={handlePlusCount} className="bg-slate-200 px-1 rounded-md">
          <AiOutlinePlusSquare />
        </button>
      </Container>
    </>
  );
};

export default CartItemCounter;
