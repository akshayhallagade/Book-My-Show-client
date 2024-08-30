import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
  name: "alert",
  initialState: {
    value: "",
  },
  reducers: {
    changeAlertText: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeAlertText } = alertSlice.actions;

export default alertSlice.reducer;
