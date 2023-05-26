import { publicRequest, privateRequest } from "../requestMethods";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
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
  


//Entrar
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

//PRODUCTOS
export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    const res = await privateRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(res.data));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

// MODIFICAR PRODUCTO
export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    const res = await privateRequest.put(`/products/${id}`, product);
    dispatch(updateProductSuccess(res.data));
    //console.log('entré')
  } catch (err) {
    dispatch(updateProductFailure());
  }
};
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await privateRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};

//USUARIOS

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

//ELIMINAR
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

//obtener transacciones de los usuarios
// export const getUserTransaccion = async(id, dispatch)=>{
//   dispatch(loginStart())
//   try {
//     const res = await privateRequest.get(`users/find/${id}`)
//     dispatch()
//   } catch (error) {
    
//   }
// }

//ORDENES

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

