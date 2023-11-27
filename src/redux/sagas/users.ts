import { put, takeEvery } from "redux-saga/effects";
import {
  addUserSlice,
  deleteUserSlice,
  editUserSlice,
  getUsersSlice,
} from "../slice/UsersSlice";
import {
  createUserAPI,
  deleteUserByIdAPI,
  getUserByIdAPI,
  getUsersAPI,
  updateUserAPI,
} from "../../api";
import {
  CREATE_USER,
  GET_USERS,
  DELETE_USER_BY_ID,
  GET_USER_BY_ID,
  UPDATE_USER_BY_ID,
} from "../types";
import { type UserState } from "../../types";
import { setUserSlice } from "../slice/UserSlice";

export function* workGetUsersSaga(): any {
  try {
    const response = yield getUsersAPI();

    yield put(getUsersSlice(response.data));
  } catch (error) {
    console.error(error);
  }
}

export function* workGetUserById(action: any) {
  try {
    yield getUserByIdAPI(action.id);

    yield put(setUserSlice(action.id));
  } catch (error) {
    console.error(error);
  }
}

export function* workCreateUser(action: { type: string; user: UserState }) {
  try {
    yield createUserAPI(action.user);

    yield addUserSlice(action.user);
  } catch (error) {
    console.error(error);
  }
}

export function* workUpdateUserById(action: { type: string; user: UserState }) {
  const { user } = action;

  try {
    yield updateUserAPI(user);

    yield put(editUserSlice(user));
  } catch (error) {
    console.error(error);
  }
}

export function* workDeleteUserById(action: any) {
  try {
    yield deleteUserByIdAPI(action.id);

    yield put(deleteUserSlice(action));
  } catch (error) {
    console.error(error);
  }
}

// watcher:
function* watchGetUsers() {
  yield takeEvery(GET_USERS, workGetUsersSaga);
  yield takeEvery(GET_USER_BY_ID, workGetUserById);
  yield takeEvery(CREATE_USER, workCreateUser);
  yield takeEvery(UPDATE_USER_BY_ID, workUpdateUserById);
  yield takeEvery(DELETE_USER_BY_ID, workDeleteUserById);
}

export default watchGetUsers;
