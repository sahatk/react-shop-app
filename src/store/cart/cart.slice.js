import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  products: [],
  totalPrice: 0,
  userId: ""
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload;
      const existingProduct = state.products.find((p) => p.id === product.id);

      if (!existingProduct) {
        state.products.push(product);
        state.totalPrice += product.price;
      }
    },
    removeProduct: (state, action) => {
      const productId = action.payload;
      const product = state.products.find((p) => p.id === productId);

      if (product) {
        state.products = state.products.filter((p) => p.id !== productId);
        state.totalPrice -= product.price;
      }
    }
  }
})

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;