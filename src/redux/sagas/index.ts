import { all, fork } from "redux-saga/effects";
import watchGetUsers from "./users";

function* rootSaga() {
  // yield all([fork(watchGetUsers)]);
  yield all([watchGetUsers()]);
}

export default rootSaga;
