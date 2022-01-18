import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    ADD: (state) => {
      state.value += 1;
    },
    MINUS: (state) => {
      state.value -= 1;
    },
    addByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { ADD, MINUS, addByAmount } = counterSlice.actions;

export default counterSlice.reducer;
