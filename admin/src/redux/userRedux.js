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
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      )
    },
    deleteUserFailure: (state) => {
      state.isFetching = false
      state.error = true
    },

    updateUsersStart: (state) => {
      state.isFetching = true
    },

    updateUserSuccess: (state, action)=>{
      state.isFetching = false
      state.users[
        // encontrar el índice del elemento que cumple con la condición 
        state.users.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.user; //actualizar ese elemento
    },

    updateUsersFailure: (state) => {
      state.isFetching = false
      state.error = true
    },
    


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
  updateUsersStart,
  updateUserSuccess,
  updateUsersFailure
} = userSlice.actions;
export default userSlice.reducer;
