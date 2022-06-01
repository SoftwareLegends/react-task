import { configureStore } from "@reduxjs/toolkit";
import theme from "./theme.js";
import TotalData from "./TotalData.js";
import filters from "./filters.js";
import data from "./data.js";

const store = configureStore({
  reducer: {
    theme,
    TotalData,
    filters,
    data,
  },
});

export default store;
