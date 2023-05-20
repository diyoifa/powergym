import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    deleteProductSuccess: (state, action) => {
      //elimina un solo elemento en el indice escojido
      // state.products.splice(
      //   state.products.findIndex((item) => item._id === action.payload),
      //   1
      // );
      //obtenemos el id
      
      const productId = action.payload;
      //encontramos el producto a eliminar
      const deletedProduct = state.products.find(product => product._id === productId);
      //si lo encontramos
      if (deletedProduct) {
        // let times = 0;
        // state.products.forEach(product => {
        //   if(product._id === productId){
        //     times++
        //   } 
        // });
        //calculamos el total de ese producto
        const deletedProductTotal = deletedProduct.price * deletedProduct.quantity;
        //lo restamos del total
        state.total -= deletedProductTotal;
        //calculamos la cantidad de productos del carrito
        state.products = state.products.filter(product => product._id !== productId);
        state.quantity -= 1;
      }
      
    },
    resetCart: (state) => {
      state.products = []
      state.quantity = 0
      state.total = 0
    }
  },
});

export const { addProduct, deleteProductSuccess, resetCart} = cartSlice.actions;
export default cartSlice.reducer;