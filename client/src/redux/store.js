import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./products/productsSlice";
import { drugstoreReducer } from "./drugstores/drugstoreSlice";

const rootReducer = combineReducers({
  products: productReducer,
  drugstore: drugstoreReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});
