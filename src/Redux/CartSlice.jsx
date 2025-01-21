import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productexist = state.find((item) => item.id == action.payload.id);

      if (!productexist) {
        state.push(action.payload);
      }
    },
    productDelete: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
    Updatequantity:(state,action)=>{
      const {id,quantity}=action.payload
      const item=state.find((product)=> product.id==id);
      if (item) {
        item.quantity=quantity
      }
    },
  
  },
});

export const { addToCart, productDelete,Updatequantity } = CartSlice.actions;
export default CartSlice.reducer;
