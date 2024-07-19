import { MdDeleteOutline } from "react-icons/md";
import CtrlQuantity from "./CtrlQuantity";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

function CartItem({ product }) {
  const dispatch = useDispatch();
  function handleDelete(id) {
    dispatch(deleteItem(id));
  }
  return (
    <li className="flex gap-7 border-b border-text-muted pb-7 pt-7">
      <figure>
        <img
          src={product.images[0]}
          alt={`${product.title}`}
          className="w-28 sm:w-36"
          width="600"
          height="400"
        />
      </figure>
      <div className="flex-grow">
        <h1 className="flex items-center justify-between text-text">
          <span className="font-semibold">{product.title}</span>
          <MdDeleteOutline
            className="cursor-pointer text-xl hover:text-main-2 transition-colors duration-200"
            onClick={() => handleDelete(product.id)}
          />
        </h1>
        <h2 className="font-bold text-text mt-2 mb-4 ">
          ${product.finalPrice} &nbsp;
          <small className="text-text-muted">
            <del>${product.originalPrice}</del>
          </small>
        </h2>
        <CtrlQuantity id={product.id} />
      </div>
    </li>
  );
}

export default CartItem;
