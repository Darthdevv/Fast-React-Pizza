import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  cart: [],
}


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    resetCart(state) {
      state.cart = null;
    },
  },
});


export const { resetCart } = cartSlice.actions;
export default cartSlice.reducer;

