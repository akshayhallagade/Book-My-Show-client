import { createSlice } from "@reduxjs/toolkit";

export const sliderSlice = createSlice({
  name: "slider",
  initialState: {
    value: false,
  },
  reducers: {
    slideChange: (state) => {
      state.value = !state.value;
    },
  },
});

export const { slideChange } = sliderSlice.actions;

export default sliderSlice.reducer;
