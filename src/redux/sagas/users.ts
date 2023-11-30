import { call, put, takeEvery } from "redux-saga/effects";
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
import { TYPE_ACTIONS } from "../types";
import { type UserState } from "../../types";
import { setUserSlice } from "../slice/UserSlice";

export function* getUsersSaga(): any {
  try {
    // const response = yield getUsersAPI();
    const response = yield call(getUsersAPI);

    // store the data in reducer:
    // ...which means it will get response.data and set our state
    yield put(getUsersSlice(response.data));
  } catch (error) {
    console.error(error);
  }
}

export function* getUserByIdSaga(action: any) {
  try {
    yield call(getUserByIdAPI, action.payload.id);

    yield put(setUserSlice(action.payload));
  } catch (error) {
    console.error(error);
  }
}

export function* addNewUserSaga(action: { type: string; user: UserState }) {
  try {
    // yield createUserAPI(action.user);
    yield call(createUserAPI, action.user);

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
    // yield updateUserAPI(user);
    yield call(updateUserAPI, user);

    yield put(updateUserProfileInformationSlice(user));
  } catch (error) {
    console.error(error);
  }
}

export function* removeUserByIdSaga(action: any) {
  try {
    // yield removeUserByIdAPI(action.id);
    yield call(removeUserByIdAPI, action.id);

    yield put(removeUserByIdSlice(action));
  } catch (error) {
    console.error(error);
  }
}

// watcher:
function* watchUsersSaga() {
  // connecting our actions with sagas handler
  yield takeEvery(TYPE_ACTIONS.GET_USERS, getUsersSaga);
  yield takeEvery(TYPE_ACTIONS.GET_USER_BY_ID, getUserByIdSaga);
  yield takeEvery(TYPE_ACTIONS.CREATE_USER, addNewUserSaga);
  yield takeEvery(
    TYPE_ACTIONS.UPDATE_USER_BY_ID,
    updateUserProfileInformationSaga
  );
  yield takeEvery(TYPE_ACTIONS.DELETE_USER_BY_ID, removeUserByIdSaga);
}

export default watchUsersSaga;
