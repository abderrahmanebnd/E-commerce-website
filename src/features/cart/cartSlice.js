import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItem(state, action) {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        if (item.qnt < 5) item.qnt += 1;
      } else {
        state.cartItems.push({
          id: action.payload,
          qnt: 1,
        });
      }
    },
    deleteItem(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    increaseQuantity(state, action) {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item && item.qnt < 5) item.qnt += 1;
    },
    decreaseQuantity(state, action) {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item && item.qnt > 1) item.qnt -= 1;
    },
  },
});

export const { addItem, deleteItem, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
