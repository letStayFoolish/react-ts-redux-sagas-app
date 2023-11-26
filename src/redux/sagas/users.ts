import { put, takeLatest } from "redux-saga/effects";
import { getUsersSlice } from "../slice/UsersSlice";
import { getUsersAPI } from "../../api";
import { GET_USERS } from "../types";

export function* workGetUsers(action: any): any {
  console.log("before try inside workGetUsers");
  try {
    console.log("begining of the try inside workGetUsers");
    const response = yield getUsersAPI();

    yield put(getUsersSlice(response.data));

    console.log("RESPONSE: ", response);
  } catch (error) {
    console.error(error);
  }
}

// watcher:
function* watchGetUsers() {
  yield takeLatest(GET_USERS, workGetUsers);
}

export default watchGetUsers;
