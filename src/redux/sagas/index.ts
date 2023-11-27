import { all } from "redux-saga/effects";
import watchUsersSaga from "./users";

function* rootSaga() {
  yield all([watchUsersSaga()]);
}

export default rootSaga;
