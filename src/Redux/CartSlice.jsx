import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    productDelete: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addToCart, productDelete } = CartSlice.actions;
export default CartSlice.reducer;
