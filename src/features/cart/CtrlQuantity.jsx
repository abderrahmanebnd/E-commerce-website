import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "./cartSlice";
import { FaMinus, FaPlus } from "react-icons/fa6";

function CtrlQuantity({ id }) {
  const cartItem = useSelector((store) =>
    store.cart.cartItems.find((item) => {
      return item.id === id;
    })
  );
  const qnt = cartItem.qnt;
  const dispatch = useDispatch();

  function increase() {
    dispatch(increaseQuantity(id));
  }
  function decrease() {
    dispatch(decreaseQuantity(id));
  }
  return (
    <div className="bg-bgColor-3 w-24 px-2 flex justify-between items-center border border-thumb rounded-sm gap-2 ">
      <span
        onClick={() => decrease()}
        className={`${
          qnt > 1 ? "cursor-pointer" : "cursor-not-allowed"
        } text-text  text-sm`}
      >
        <FaMinus />
      </span>
      <span className="bg-bgColor-2 flex-grow text-center text-main font-semibold">
        {qnt}
      </span>
      <span
        onClick={() => increase()}
        className={`${
          qnt < 5 ? "cursor-pointer" : "cursor-not-allowed"
        } text-text  text-sm`}
      >
        <FaPlus />
      </span>
    </div>
  );
}

export default CtrlQuantity;
