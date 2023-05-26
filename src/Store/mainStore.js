import { configureStore } from "@reduxjs/toolkit";
import { AllProducts } from "../Features/apiSlice";

export const mainStore = configureStore({
  reducer: {
    [AllProducts.reducerPath]: AllProducts.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AllProducts.middleware),
});
