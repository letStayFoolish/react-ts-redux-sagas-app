import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slice/UserSlice";
import usersReducer from "./slice/UsersSlice";

const rootReducer = combineReducers({
  user: userReducer,
  users: usersReducer,
});

export default rootReducer;
