import toast from "react-hot-toast";
import { addItem } from "./features/cart/cartSlice";

export function addToCart(dispatch, id) {
  dispatch(addItem(id));
  toast.success("Product successfully added to your cart");
}
