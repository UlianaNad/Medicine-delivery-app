import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./products/productsSlice";

const rootReducer = combineReducers({
  products: productReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});
