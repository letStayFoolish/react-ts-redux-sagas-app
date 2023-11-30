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
      console.log("action.payload: ", action.payload);
      state = action.payload;
      console.log("state: ", state);
      return state;
    },
  },
});

export const { setUserSlice } = userSlice.actions;

export default userSlice.reducer;
