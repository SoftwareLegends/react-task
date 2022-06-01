import { configureStore } from "@reduxjs/toolkit";
import theme from "./theme.js";
import TotalData from "./TotalData.js";

const store = configureStore({
  reducer: {
    theme,
    TotalData,
  },
});

export default store;
