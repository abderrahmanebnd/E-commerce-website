import toast from "react-hot-toast";
import { addItem } from "./pages/cart/cartSlice";

export function addToCart(dispatch, id) {
  dispatch(addItem(id));
  toast.success("Product successfully added to your cart");
}
