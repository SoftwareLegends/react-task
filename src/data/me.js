import { createSlice } from "@reduxjs/toolkit";
import locals from "./locals";

const local = new locals("me");

const me = createSlice({
  name: "theme",
  initialState: local.get(""),
  reducers: {
    setMe: (_, { payload }) => payload,
  },
});

export const { setMe } = me.actions;

export default me.reducer;
