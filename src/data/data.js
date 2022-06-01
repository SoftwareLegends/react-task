import { createSlice } from "@reduxjs/toolkit";
import locals from "./locals";

const local = new locals("data");

const data = createSlice({
  name: "total_data",
  initialState: JSON.parse(local.get("[]") || "[]"),
  reducers: {
    setData: (state, { payload }) => {
      if (payload === []) return state;
      local.set(JSON.stringify(payload));
      return payload;
    },
  },
});

export const { setData } = data.actions;

export default data.reducer;
