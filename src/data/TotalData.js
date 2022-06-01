import { createSlice } from "@reduxjs/toolkit";

const totalData = createSlice({
  name: "total_data",
  initialState: 0,
  reducers: {
    changeTotalData: (_, { payload }) => payload,
  },
});

export const { changeTotalData } = totalData.actions;

export default totalData.reducer;
