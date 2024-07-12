import { BsCartX } from "react-icons/bs";
import Button from "../../ui/common/Button";

function EmptyCart() {
  return (
    <section className="h-screen flex flex-col items-center justify-center ">
      <BsCartX className="text-main-2 text-[9rem] mb-5" />
      <p className="mb-5 text-2xl font-bold text-text ">Your Cart is Empty</p>
      <Button type="link" to="/products">
        Start Shopping
      </Button>
    </section>
  );
}

export default EmptyCart;
