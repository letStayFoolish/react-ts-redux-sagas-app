import { put, takeEvery } from "redux-saga/effects";
import {
  addUserSlice as addNewUserSlice,
  deleteUserSlice as removeUserByIdSlice,
  editUserSlice as updateUserProfileInformationSlice,
  getUsersSlice,
} from "../slice/UsersSlice";
import {
  createUserAPI,
  deleteUserByIdAPI as removeUserByIdAPI,
  getUserByIdAPI,
  getUsersAPI,
  updateUserAPI,
} from "../../api";
import { TypeActions } from "../types";
import { type UserState } from "../../types";
import { setUserSlice } from "../slice/UserSlice";

export function* getUsersSaga(): any {
  try {
    const response = yield getUsersAPI();

    yield put(getUsersSlice(response.data));
  } catch (error) {
    console.error(error);
  }
}

export function* getUserByIdSaga(action: any) {
  try {
    yield getUserByIdAPI(action.id);

    yield put(setUserSlice(action.id));
  } catch (error) {
    console.error(error);
  }
}

export function* addNewUserSaga(action: { type: string; user: UserState }) {
  try {
    yield createUserAPI(action.user);

    yield addNewUserSlice(action.user);
  } catch (error) {
    console.error(error);
  }
}

export function* updateUserProfileInformationSaga(action: {
  type: string;
  user: UserState;
}) {
  const { user } = action;

  try {
    yield updateUserAPI(user);

    yield put(updateUserProfileInformationSlice(user));
  } catch (error) {
    console.error(error);
  }
}

export function* removeUserByIdSaga(action: any) {
  try {
    yield removeUserByIdAPI(action.id);

    yield put(removeUserByIdSlice(action));
  } catch (error) {
    console.error(error);
  }
}

// watcher:
function* watchUsersSaga() {
  yield takeEvery(TypeActions.GET_USERS, getUsersSaga);
  yield takeEvery(TypeActions.GET_USER_BY_ID, getUserByIdSaga);
  yield takeEvery(TypeActions.CREATE_USER, addNewUserSaga);
  yield takeEvery(
    TypeActions.UPDATE_USER_BY_ID,
    updateUserProfileInformationSaga
  );
  yield takeEvery(TypeActions.DELETE_USER_BY_ID, removeUserByIdSaga);
}

export default watchUsersSaga;
