import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQty: 0,
    totalAmount: 0,
  },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existItem = state.items.find((item) => item.id === newItem.id);
      if (existItem) {
        existItem.quantity++;
        existItem.total += newItem.price;
      } else {
        state.items.push({ ...newItem, total: newItem.price, quantity: 1 });
      }
      state.totalQty++;
      state.totalAmount += newItem.price;
    },
    removeItem(state, action) {
      const id = action.payload;
      const existItem = state.items.find((item) => item.id === id);

      if (existItem.quantity > 1) {
        existItem.quantity--;
        existItem.total -= existItem.price;
      } else {
        state.items = state.items.filter((item) => item.id !== id);
      }
      state.totalQty--;
      state.totalAmount -= existItem.price;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
