import { createSlice } from "@reduxjs/toolkit";

export const setCurrentUser = createSlice({
  name: "orders",
  initialState: {
    premiumQuantity: 0,
    raffineQuantity: 0,
    simpleQuantity: 0,
    collarSum: 0
  },
  reducers: {
    INCREMENT_PREMIUM: (state) => {
        state.collarSum += 1;
        state.premiumQuantity += 1;
    },
    INCREMENT_RAFFINE: (state) => {
        state.collarSum += 1;
        state.raffineQuantity += 1;
    },
    INCREMENT_SIMPLE: (state) => {
        state.collarSum += 1;
        state.simpleQuantity += 1;
    },
    DECREMENT_PREMIUM: (state) => {
        state.collarSum -= 1;
        state.premiumQuantity -= 1;
    },
    DECREMENT_RAFFINE: (state) => {
        state.collarSum -= 1;
        state.raffineQuantity -= 1;
    },
    DECREMENT_SIMPLE: (state) => {
        state.collarSum -= 1;
        state.simpleQuantity -= 1;
    },
    RESET_ORDER: (state) => {
        state.collarSum = 0;
        state.simpleQuantity = 0;
        state.raffineQuantity = 0;
        state.premiumQuantity = 0;
    }
  }
});

export const { INCREMENT_PREMIUM, INCREMENT_RAFFINE, INCREMENT_SIMPLE,
   DECREMENT_PREMIUM, DECREMENT_RAFFINE, DECREMENT_SIMPLE, RESET_ORDER } = setCurrentUser.actions;

export default setCurrentUser.reducer;
