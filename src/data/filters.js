import { createSlice } from "@reduxjs/toolkit";
const urlParams = new URLSearchParams(window.location.search);

const defaults = { page: 1 };

try {
  defaults.page = parseInt(urlParams.get("page"));
} catch (error) {}

const filter = createSlice({
  name: "total_data",
  initialState: defaults,
  reducers: {
    setFilter: (state, { payload }) => ({ ...state, ...payload }),
  },
});

export const { setFilter } = filter.actions;

export default filter.reducer;
