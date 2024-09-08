import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    value: {
      firstName: "",
      lastName: "",
      email: "akshayhallagade2612@gmail.com ",
      age: "",
    },
  },
  reducers: {
    profileChange: (state, action) => {
      state.value.firstName = action.payload.firstName;
      state.value.lastName = action.payload.lastName;
      state.value.email = action.payload.email;
      state.value.age = action.payload.age;
    },
  },
});

export const { slideChange } = profileSlice.actions;

export default profileSlice.reducer;
