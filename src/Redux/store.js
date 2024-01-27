import { configureStore } from "@reduxjs/toolkit";
import Products from "./slicers/producstSlice";

const Store = configureStore({
  reducer: {
    Products,
  },
});

export default Store;
