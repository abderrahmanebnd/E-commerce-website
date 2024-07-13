import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./pages/cart/cartSlice";
import filterReducer from "./pages/all-products/filterSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    filter: filterReducer,
  },
});
