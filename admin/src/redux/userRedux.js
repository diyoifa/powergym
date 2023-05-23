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
    getUsersSuccess: (state, action) => {
      state.isFetching = false;
      state.users = action.payload;
    },
    //DEL
    deleteUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteUserSuccess: (state, action) => {
      state.isFetching = false;
      //elimina un elemento en el indice escojido
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    
  },
});

export const { deleteUserSuccess, deleteUserFailure, deleteUserStart, getUsersSuccess, loginStart, loginSuccess, loginFailure, logoutSuccess } = userSlice.actions;
export default userSlice.reducer;
