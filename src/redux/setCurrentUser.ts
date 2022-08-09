import { createSlice } from "@reduxjs/toolkit";

export const setCurrentUser = createSlice({
  name: "user",
  initialState: {
    username: '',
    id: '',
    firstName: '',
    petId: 0,
    isLogged: false
  },
  reducers: {
    SET_USER: (state, data) => {
      state.username = data.payload.username;
      state.id = data.payload.id;
      state.firstName = data.payload.firstName;
      state.isLogged = true;
    },
    SET_PET_ID: (state, data) => {
      state.petId = data.payload;
    },
    LOGOUT: (state) => {
      state.username = '';
      state.id = '';
      state.firstName = '';
      state.isLogged = false;
      state.petId = 0;
    }
  }
});

export const { SET_USER, SET_PET_ID, LOGOUT } = setCurrentUser.actions;

export default setCurrentUser.reducer;
