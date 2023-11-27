import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./constants";
import { type UsersState } from "./types";
import { type UserState } from "../../../types";

const UsersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    getUsersSlice: (
      state: UsersState,
      action: PayloadAction<UsersState>
    ): UsersState => {
      state = action.payload;
      return state;
    },

    addUserSlice: (
      state: UsersState,
      action: PayloadAction<UserState>
    ): UsersState => {
      state.push(action.payload);

      return state;
    },

    editUserSlice: (state, action: PayloadAction<UserState>): UsersState => {
      state = state.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );

      return state;
    },

    deleteUserSlice: (
      state: UsersState,
      action: PayloadAction<UserState>
    ): UsersState => {
      state = state.filter((user) => user.id !== action.payload.id);
      return state;
    },
  },
});

export const { getUsersSlice, addUserSlice, deleteUserSlice, editUserSlice } =
  UsersSlice.actions;

export default UsersSlice.reducer;
