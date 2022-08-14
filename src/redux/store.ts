import { configureStore, combineReducers } from "@reduxjs/toolkit";
import setCurrentUser from "./setCurrentUser";
import setOrders from "./setOrders";
import setWishList from "./setWishList";
import { 
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
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
});

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
