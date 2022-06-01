import { createSlice } from "@reduxjs/toolkit";

const data = createSlice({
  name: "total_data",
  initialState: [],
  reducers: {
    setData: (_, { payload }) => payload,
  },
});

export const { setData } = data.actions;

export default data.reducer;
