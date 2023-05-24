import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    //orders: [],
    order: null //ultima orden creada
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    logoutStart: (state) => {
      state.isFetching = true;
    },

    logoutSuccess: (state) => {
      state.isFetching = false
      state.currentUser = null
      state.error = false
      state.orders = []
    },

    logoutFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      // state.currentUser = action.payload;
      state.error = false
    },
    registerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    createOrdersStart: (state) => {
      state.isFetching = true;
    },
    createOrdersSuccess: (state, action) => {
      state.isFetching = false
       state.order = action.payload
      state.error = false
    },
    createOrdersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    getOrdersStart: (state) => {
      state.isFetching = true;
    },

    getOrdersSuccess: (state, action) => {
      state.isFetching = false;
      state.orders = action.payload
      state.error = false
    },
    getOrdersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    deleteOrderStart: (state) => {
      state.isFetching = true
    },

    deleteOrderSuccess: (state, action) => {
      state.isFetching = false;
      // const orderId = action.payload;
      // console.log("🚀 ~ file: userRedux.js:90 ~ orderId:", orderId);
      // if (state.orders.length === 0) {
      //   state.order = null;
      // } else {
      //   state.orders = state.orders?.filter((order) => order._id !== orderId);
      // }
      
      state.error = false;
    },
    
    deleteOrderFailure: (state) => {
      state.isFetching = false
      state.error = true
    },


    // resetUserIfNeeded: (state) => {
    //   if (state.isFetching === false) {
    //     state.currentUser = null
    //     state.error = false
    //   }
    // },
    resetError: (state) => {
      state.error = false;
    }
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  // resetUserIfNeeded, 
  logoutSuccess,
  resetError,
  registerStart,
  registerSuccess,
  registerFailure,
  createOrdersStart,
  createOrdersSuccess,
  createOrdersFailure,
  getOrdersStart,
  getOrdersSuccess,
  getOrdersFailure,
  deleteOrderStart,
  deleteOrderSuccess,
  deleteOrderFailure,

} = userSlice.actions;
export default userSlice.reducer;