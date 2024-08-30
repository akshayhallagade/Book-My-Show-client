import { configureStore } from "@reduxjs/toolkit";
import sliderSlice from "../reducer/sliderSlice";
import alertSlice from "../reducer/alertSlice";

export default configureStore({
  reducer: {
    slider: sliderSlice,
    alert: alertSlice,
  },
});
