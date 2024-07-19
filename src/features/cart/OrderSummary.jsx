import { useSelector } from "react-redux";
import Button from "../../ui/common/Button";

function OrderSummary({ originalPr, discount }) {
  const Itemsnumber = useSelector((store) => store.cart.cartItems.length);

  return (
    <div>
      <h2 className="text-text text-xl mb-10 font-semibold md:w-80">
        Order Summary ( {Itemsnumber} items )
      </h2>
      <p className="mb-6 flex justify-between items-center">
        <span className="text-text">Original Price</span>
        <span className="text-text text-lg font-semibold">${originalPr}</span>
      </p>
      <p className="mb-6 flex justify-between items-center">
        <span className="text-text">Discount</span>
        <span className="text-green-700 text-lg font-semibold">
          - ${discount}
        </span>
      </p>
      <p className="pb-6  flex justify-between items-center border-b border-text-muted">
        <span className="text-text">Delivery</span>
        <span className="text-green-700 text-lg font-semibold">Free</span>
      </p>
      <h2 className="text-text font-bold flex items-center justify-between my-8 ">
        <span className="text-xl">Total Price</span>
        <span className="text-2xl">${(originalPr - discount).toFixed(2)}</span>
      </h2>
      <Button customClass={"w-full"}>Checkout</Button>
    </div>
  );
}

export default OrderSummary;
