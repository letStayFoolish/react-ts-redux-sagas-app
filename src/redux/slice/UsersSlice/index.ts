import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./constants";
import { type UserState } from "../../../types";

const UsersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    getUsersSlice: (
      state: Array<UserState>,
      action: PayloadAction<Array<UserState>>
    ): Array<UserState> => {
      state = action.payload;
      return state;
    },

    addUserSlice: (
      state: Array<UserState>,
      action: PayloadAction<UserState>
    ): Array<UserState> => {
      state.push(action.payload);

      return state;
    },

    editUserSlice: (
      state,
      action: PayloadAction<UserState>
    ): Array<UserState> => {
      state = state.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );

      return state;
    },

    deleteUserSlice: (
      state: Array<UserState>,
      action: PayloadAction<UserState>
    ): Array<UserState> => {
      state = state.filter((user) => user.id !== action.payload.id);
      return state;
    },
  },
});

export const { getUsersSlice, addUserSlice, deleteUserSlice, editUserSlice } =
  UsersSlice.actions;

export default UsersSlice.reducer;
