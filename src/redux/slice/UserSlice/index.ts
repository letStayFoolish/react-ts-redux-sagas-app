import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./constants";

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUserSlice(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const { setUserSlice } = userSlice.actions;

export default userSlice.reducer;
