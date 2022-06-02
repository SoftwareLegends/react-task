import { createSlice } from "@reduxjs/toolkit";

const guest = createSlice({
  name: "guest",
  initialState: false,
  reducers: {
    setGuest: (_, { payload }) => payload,
  },
});

export const { setGuest } = guest.actions;

export default guest.reducer;
