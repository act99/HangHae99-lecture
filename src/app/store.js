import { configureStore } from "@reduxjs/toolkit";
import bucketReducer from "./services/bucketSlice";

export const store = configureStore({
  reducer: {
    bucketReducer: bucketReducer,
  },
});
