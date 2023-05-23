import { deleteUserStart, deleteUserSuccess, deleteUserFailure, getUsersSuccess, loginFailure, loginStart, loginSuccess } from "./userRedux";
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

// update
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

//Usuarios

//Obtener usuarios
export const getUsers = async (dispatch)=>{
  dispatch(loginStart());
  try {
    const res = await privateRequest.get('/users')
    dispatch(getUsersSuccess(res.data))
  } catch (error) {
    
  }
}

//eliminar
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
//     const res = await userRequest.get(`/find/${id}`)
//     dispatch()
//   } catch (error) {
    
//   }
// }

