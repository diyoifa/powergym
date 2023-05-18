import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";
import {getProductStart,
  getProductsSuccess,
  getProductFailure,
  //getProductSuccess
  } from "../redux/productsRedux"

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

//OBTENER PRODUCTOS
export const getProducts = async(dispatch)=>{
  dispatch(getProductStart())
  try {
    const res = await publicRequest.get("/products")
    //console.log("🚀 ~ file: apiCalls.js:23 ~ getProducts ~ res:", res)
    dispatch(getProductsSuccess(res.data))
  } catch (error) {
    console.log("🚀 ~ file: apiCalls.js:24 ~ getProducts ~ error:", error)
    dispatch(getProductFailure())
  }
}

//OBTENER UN PRODUCTO POR ID
// export const getProduct = async(dispath, id)=>{
//   dispath(getProductsSuccess()) //indicamos que la funcion se llamó
//   //validamos ya sea si sale bien o mal
//   try {
//     const res = await publicRequest.get(`/products/${id}`)
//     //me modifica el valor en el reducer
//     console.log("🚀 ~ file: apiCalls.js:39 ~ getProduct ~ res:", res)
//     dispath(getProductSuccess(res.data))
//   } catch (error) {
//     console.log("🚀 ~ file: apiCalls.js:40 ~ getProduct ~ error:", error)
//     //me modifica el estado de error a true
//     dispath(getProductFailure())
//   }
// }


