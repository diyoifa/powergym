import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    users: []
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // logoutStart: (state) => {
    //   state.isFetching = true;
    // },
    logoutSuccess: (state) => {
      state.isFetching = false
      state.currentUser = null;
      state.users = []
      state.error = false
    },
    // logoutFailure: (state) => {
    //   state.isFetching = false;
    //   state.error = true;
    // },
    getUsersStart: (state) => {
      state.isFetching = true;
    },
    getUsersSuccess: (state, action) => {
      state.isFetching = false;
      state.users = action.payload;
      state.error = false;
    },
    getUsersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DEL
    deleteUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteUserSuccess: (state, action) => {
      state.isFetching = false;
      //elimina un elemento en el indice escojido
      state.users.splice(
        state.users.findIndex((item) => item._id === action.payload),
        1
      )
      state.error = false
    },
    deleteUserFailure: (state) => {
      state.isFetching = false
      state.error = true
    },

    updateOrderStart: (state) => {
      state.isFetching = true
    },

    updateOrderSuccess: (state, action) => {
      state.isFetching = false
      state.users[
        // encontrar el índice del elemento que cumple con la condición 
        state.users.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.user; //actualizar ese elemento
    },

    updateOrderFailure: (state) => {
      state.isFetching = false
      state.error = true
    },

    getOrderStart: (state) => {
      state.isFetching = true
    },

    getOrderSuccess: (state) => {
      state.isFetching = false
      state.error = false
    },

    getOrderFailure: (state) => {
      state.isFetching = false
      state.error = true
    },

    getOrdersStart: (state) => {
      state.isFetching = true;
    },

    getOrdersSuccess: (state, action) => {
      state.isFetching = false;
      // state.orders = action.payload
      state.error = false
    },
    getOrdersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    deleteOrderStart: (state) => {
      state.isFetching = true
    },
    deleteOrderSuccess: (state) => {
      state.isFetching = false
      state.error = false
    },
    deleteOrderFailure: (state) => {
      state.error = true
    }

  },
});

export const {
  deleteUserSuccess,
  deleteUserFailure,
  deleteUserStart,
  loginStart,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  getUsersStart,
  getUsersSuccess,
  getUsersFailure,
  updateOrderStart,
  updateOrderSuccess,
  updateOrderFailure,
  getOrdersStart,
  getOrdersSuccess,
  getOrdersFailure,
  getOrderStart,
  getOrderSuccess,
  getOrderFailure,
  deleteOrderStart,
  deleteOrderSuccess,
  deleteOrderFailure
} = userSlice.actions;
export default userSlice.reducer;
