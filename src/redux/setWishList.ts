import { createSlice } from "@reduxjs/toolkit";

export const setWishList = createSlice({
  name: "wishlist",
  initialState: {
    wishPremium: false,
    wishRaffine: false,
    wishSimple: false,
  },
  reducers: {
    PREMIUM_WISH: (state, data) => {
        state.wishPremium = data.payload;
    },
    RAFFINE_WISH: (state, data) => {
        state.wishRaffine = data.payload;
    },
    SIMPLE_WISH: (state, data) => {
        state.wishSimple = data.payload;
    },
  }
});

export const {  PREMIUM_WISH, RAFFINE_WISH, SIMPLE_WISH } = setWishList.actions;

export default setWishList.reducer;
