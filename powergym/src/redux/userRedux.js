import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
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

    logoutSuccess:(state) => {
      state.isFetching = false;
      state.currentUser = null;
      state.error = false
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

    orderStart: (state) => {
      state.isFetching = true;
    },
    orderSuccess: (state, action) => {
      state.isFetching = false;
      // state.currentUser = action.payload;
      state.error = false
    },
    orderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    getOrderStart: (state) => {
      state.isFetching = true;
    },
    
    getOrderSuccess: (state, action) => {
      state.isFetching = false;
      // state.currentUser = action.payload;
      state.error = false
    },
    getOrderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // resetUserIfNeeded: (state) => {
    //   if (state.isFetching === false) {
    //     state.currentUser = null
    //     state.error = false
    //   }
    // },
    resetError: (state)=>{
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
  orderStart,
  orderSuccess,
  orderFailure,
  getOrderStart,
  getOrderSuccess,
  getOrderFailure

} = userSlice.actions;
export default userSlice.reducer;