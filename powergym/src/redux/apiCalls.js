import { privateRequest, publicRequest } from "../requestMethods";
import {
  getProductStart,
  getProductsSuccess,
  getProductFailure,
  //getProductSuccess
} from "../redux/productsRedux"
import { 
  loginFailure, 
  loginStart, 
  loginSuccess, 
  registerStart,
  registerSuccess,
  registerFailure,
  createOrdersStart,
  createOrdersSuccess,
  createOrdersFailure,
  // getOrderStart,
  // getOrderSuccess,
  // getOrderFailure,
  deleteOrderStart,
  deleteOrderSuccess,
  deleteOrderFailure,  
//   deleteUserStart,
//   deleteUserSuccess,
// deleteUserFailure
} from "./userRedux";

//REGISTRARSE
export const register = async(dispatch, user)=>{
  dispatch(registerStart())
  try {
    const res = await publicRequest.post("/auth/register", user)
    console.log("🚀 ~ file: apiCalls.js:17 ~ register ~ res:", res)
    dispatch(registerSuccess())
  } catch (error) {
    console.log("🚀 ~ file: apiCalls.js:20 ~ register ~ error:", error)
    dispatch(registerFailure())
  }
}


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

//CREAR ORDEN
export const order = async(order, dispatch)=>{
  dispatch(createOrdersStart())
  try {
    const res = await privateRequest.post("/orders", order)
    console.log("🚀 ~ file: apiCalls.js:79 ~ order ~ res:", res)
    dispatch(createOrdersSuccess(res.data))
  } catch (error) {
    dispatch(createOrdersFailure())
  }
}

//ELIMINAR ORDEN POR ID
export const deleteOrder = async(id, dispatch)=>{
   dispatch(deleteOrderStart())
  try {
    const res = await privateRequest.delete(`/orders/${id}`)
    console.log("🚀 ~ file: apiCalls.js:98 ~ deleteOrder ~ res:", res)
    // console.log("🚀 ~ file: apiCalls.js:104 ~ deleteOrder ~ id:", id)
    dispatch(deleteOrderSuccess(id))

  } catch (error) {
    console.log("🚀 ~ file: apiCalls.js:99 ~ deleteOrder ~ error:", error)
    dispatch(deleteOrderFailure())
  }
    
}

//OBTENER ORDENES POR ID
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

//ELIMINAR USUARIO
// export const deleteUser = async(id, dispatch)=>{
//   dispatch(deleteUserStart())
//   try {
//       const res = await privateRequest(`/orders/${id}`)
//       console.log("🚀 ~ file: apiCalls.js:132 ~ deleteUser ~ res:", res)
//       dispatch(deleteUserSuccess(id))
//   } catch (error) {
//     console.log("🚀 ~ file: apiCalls.js:132 ~ deleteUser ~ error:", error)
//     dispatch(deleteUserFailure())
    
//   }
// }


