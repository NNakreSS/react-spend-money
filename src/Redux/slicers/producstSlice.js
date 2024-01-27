import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk("product/getProduct", async () => {
  const { data } = await axios(import.meta.env.VITE_BASE_URL);
  return data.products;
});

const initialState = {
  items: [],
  basket: [],
  money: 100000000000,
  status: "idle",
  error: null,
};

const reducers = {
  addItem: (state, action) => {
    const { id, price } = action.payload;
    const existingItem = state.basket.find((item) => item.id === id);

    if (existingItem) {
      state.basket = state.basket.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      );
    } else {
      state.basket.push({ ...action.payload, count: 1 });
    }
    state.money -= price;
  },

  removeItem: (state, action) => {
    const { id, price } = action.payload;
    state.basket = state.basket.map((item) =>
      item.id === id ? { ...item, count: item.count - 1 } : item
    );
    state.money += price;
    state.basket = state.basket.filter((item) => item.count > 0);
  },
};

const extraReducers = (build) => {
  build
    .addCase(fetchProduct.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "succes";
    })
    .addCase(fetchProduct.pending, (state) => {
      state.status = "pending";
    })
    .addCase(fetchProduct.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = "failed";
    });
};

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers,
  extraReducers,
});

export default ProductSlice.reducer;
export const { addItem, removeItem } = ProductSlice.actions;
