import { publicRequest, privateRequest } from "../requestMethods";
import {
  getProductsFailure,
  getProductsStart,
  getProductsSuccess,
  // getProductStart,
  // getProductSuccess,
  // getProductFailure,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "./productRedux";

import { 
  deleteUserStart, 
  deleteUserSuccess, 
  deleteUserFailure,
  getUsersStart, 
  getUsersSuccess,
  getUsersFailure, 
  loginFailure, 
  loginStart, 
  loginSuccess,
  updateOrderStart,
  updateOrderSuccess,
  updateOrderFailure,
  deleteOrderStart,
  deleteOrderSuccess,
  deleteOrderFailure,
  
} from "./userRedux";
  


//====================================PRODUCTOS==========================================//

//OBTENER PRODUCTOS
export const getProducts = async (dispatch) => {
  dispatch(getProductsStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductsSuccess(res.data))
  } catch (err) {
    dispatch(getProductsFailure())
  }
};

//OBTENER UN PRODUCTO
// export const getProduct = async(id, dispatch)=>{
//   dispatch(getProductStart())
//   try {
//     const res = await publicRequest.get(`/products/${id}`)
//     console.log("🚀 ~ file: apiCalls.js:56 ~ getProduct ~ res:", res)
//     dispatch(getProductSuccess())
//   } catch (error) {
//     console.log("🚀 ~ file: apiCalls.js:62 ~ getProduct ~ error:", error)
//     dispatch(getProductFailure())
//   }
// }

//ELIMINAR PRODUCTO
export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart())
  try {
    const res = await privateRequest.delete(`/products/find/${id}`)
    console.log("🚀 ~ file: apiCalls.js:65 ~ deleteProduct ~ res:", res)
    dispatch(deleteProductSuccess(res.data))
  } catch (err) {
    dispatch(deleteProductFailure())
  }
};

// MODIFICAR PRODUCTO
export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    const res = await privateRequest.put(`/products/${id}`, product)
    console.log("🚀 ~ file: apiCalls.js:85 ~ updateProduct ~ res:", res)
    dispatch(updateProductSuccess())
  } catch (err) {
    dispatch(updateProductFailure())
  }
};

//CREAR PRODUCTO
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await privateRequest.post(`/products`, product)
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};

//=====================================USUARIOS==============================//

//INICIAR SESION
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

//OBTENER TODOS
export const getUsers = async (dispatch)=>{
  dispatch(getUsersStart());
  try {
    const res = await privateRequest.get('/users')
    dispatch(getUsersSuccess(res.data))
  } catch (error) {
    dispatch(getUsersFailure())
  }
}

//MODIFICAR USUARIO
// export const updateUser = async (id, user, dispatch) => {
//   dispatch(updateUsersStart());
//   try {
//     const res = await privateRequest.put(`/users/${id}`, user);
//     dispatch(updateUserSuccess(res.data));
//     //console.log('entré')
//   } catch (err) {
//     dispatch(updateUsersFailure());
//   }
// };
//OBTENER POR ID

//ELIMINAR USUARIO
export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    const res = await privateRequest.delete(`/users/${id}`);
    console.log("🚀 ~ file: apiCalls.js:120 ~ deleteUser ~ res:", res)
    dispatch(deleteUserSuccess(id));
  } catch (err) {
    dispatch(deleteUserFailure());
  }
};
//=================================================================================//

//==========================================ORDENES===================================//
//OBTENER ORDENES POR ID DE USUARIO
// export const getOrders = async (id, dispatch) => {
//       dispatch(getOrderStart());
//       try {
//         const res = await privateRequest.get(`/orders/${id}`);
//         console.log("🚀 ~ file: apiCalls.js:95 ~ getOrders ~ res:", res);
//         // setOrders(res?.data);
//         dispatch(getOrderSuccess(res.data));
//         // setLoading(false);
//       } catch (error) {
//         console.log("🚀 ~ file: apiCalls.js:95 ~ getOrders ~ error:", error);
//         dispatch(getOrderFailure());
//       }
// };

//MODIFICAR ORDEN
export const updateOrder = async(id, order, dispatch)=>{
  dispatch(updateOrderStart())
  try {
    const res = await privateRequest.put(`/orders/${id}`, order)
    console.log("🚀 ~ file: apiCalls.js:157 ~ updateOrder ~ res:", res)
    dispatch(updateOrderSuccess())
  } catch (error) {
    console.log("🚀 ~ file: apiCalls.js:158 ~ updateOrder ~ error:", error)
    dispatch(updateOrderFailure())
  }
}

//ELIMINAR ORDEN
export const deleteOrder = async(id, dispatch)=>{
  dispatch(deleteOrderStart())
  try {
    const res = await privateRequest.delete(`/orders/${id}`)
    console.log("🚀 ~ file: apiCalls.js:172 ~ deleteOrder ~ res:", res)
    dispatch(deleteOrderSuccess())
  } catch (error) {
    console.log("🚀 ~ file: apiCalls.js:174 ~ deleteOrder ~ error:", error)
    dispatch(deleteOrderFailure())
  }
}

//==============================================================================//

