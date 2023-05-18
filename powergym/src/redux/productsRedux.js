import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
    //product: {},
  },
  reducers: {
    //OBTENER PRODUCTOS
    getProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getProductsSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
    getProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // getProductSuccess: (state, action) => {
    //   state.isFetching = false;
    //   state.product = action.payload;
    // },
  },
});

export const {
  getProductStart,
  getProductsSuccess,
  getProductSuccess,
  getProductFailure,
} = productSlice.actions;

export default productSlice.reducer;
