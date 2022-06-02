import { configureStore } from "@reduxjs/toolkit";
import theme from "./theme.js";
import data from "./data.js";
import filters from "./filters";
import me from "./me.js";
import guest from "./guest";

const store = configureStore({
  reducer: {
    theme,
    data,
    me,
    filters,
    guest,
  },
});

export default store;
