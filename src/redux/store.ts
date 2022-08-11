import { configureStore } from "@reduxjs/toolkit";
import setCurrentUser from "./setCurrentUser";
import setOrders from "./setOrders";
import setWishList from "./setWishList";

export default configureStore({
  reducer: {
    username: setCurrentUser,
    firstName: setCurrentUser,
    lastName: setCurrentUser,
    id: setCurrentUser,
    petId: setCurrentUser,
    premiumQuantity: setOrders,
    raffineQuantity: setOrders,
    simpleQuantity: setOrders,
    collarSum: setOrders,
    wishPremium: setWishList,
    wishRaffine: setWishList,
    wishSimple: setWishList,
  }
});

