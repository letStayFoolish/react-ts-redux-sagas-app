import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./constants";
import { type UserState } from "../../../types";

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUserSlice(
      state: UserState,
      action: PayloadAction<UserState>
    ): UserState {
      state = action.payload;
      return state;
    },
  },
});

export const { setUserSlice } = userSlice.actions;

export default userSlice.reducer;
