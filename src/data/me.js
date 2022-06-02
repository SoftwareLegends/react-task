import { createSlice } from "@reduxjs/toolkit";
import locals from "./locals";

const local = new locals("me");

const me = createSlice({
  name: "me",
  initialState: local.get(),
  reducers: {
    setMe: (_, { payload }) => {
      local.set(payload);
      return payload;
    },
  },
});

export const { setMe } = me.actions;

export default me.reducer;
