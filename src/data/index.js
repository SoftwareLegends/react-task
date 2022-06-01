import { configureStore } from "@reduxjs/toolkit";
import theme from "./theme.js";
import data from "./data.js";
import filters from "./filters";

const store = configureStore({
  reducer: {
    theme,
    data,
    filters,
  },
});

export default store;
