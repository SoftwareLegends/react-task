import { configureStore } from "@reduxjs/toolkit";
import theme from "./theme.js";

const store = configureStore({
  reducer: {
    theme,
  },
});

export default store;
