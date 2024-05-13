import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice.js";
import productsReducer from "./features/product/productSlice.js";
const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
  },
});

export { store };
