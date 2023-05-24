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
  getUsersSuccess, 
  loginFailure, 
  loginStart, 
  loginSuccess,
  updateUsersStart,
  updateUserSuccess,
  updateUsersFailure
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
  dispatch(loginStart());
  try {
    const res = await privateRequest.get('/users')
    dispatch(getUsersSuccess(res.data))
  } catch (error) {
    
  }
}

//MODIFICAR USUARIO
export const updateUser = async (id, user, dispatch) => {
  dispatch(updateUsersStart());
  try {
    const res = await privateRequest.put(`/users/${id}`, user);
    dispatch(updateUserSuccess(res.data));
    //console.log('entré')
  } catch (err) {
    dispatch(updateUsersFailure());
  }
};
//OBTENER POR ID

//ELIMINAR
export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    const res = await privateRequest.delete(`/users/${id}`);
    dispatch(deleteUserSuccess(res.data));
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

