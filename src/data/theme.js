import { createSlice } from "@reduxjs/toolkit";
import locals from "./locals";

const local = new locals("react-test-theme");

const theming = createSlice({
  name: "theme",
  initialState: local.get("light"),
  reducers: {
    changeTheming: (state) => {
      const newTheme = state === "dark" ? "light" : "dark";
      local.set(newTheme);
      return newTheme;
    },
  },
});

export const { changeTheming } = theming.actions;

export default theming.reducer;
