import {
  put,
  takeLatest,
  takeEvery,
  call,
  all,
  fork,
} from "redux-saga/effects";
import { getNameRequest, getNameSuccess, getNameError } from "../actions";
import axios from "axios";

const apiCallFunc = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data[0].name;
};

function* workerChangeName() {
  //   try {
  //     const response = yield call(
  //       axios.get,
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //     console.log(response.data);
  //     yield put(getNameSuccess(response.data[0].name));
  //   } catch (e) {
  //     yield put(getNameError(e.message));
  //   }

  try {
    const apiCall = yield call(apiCallFunc);
    const payload = apiCall;
    yield put(getNameSuccess(payload));
  } catch (error) {
    yield put(getNameError(error.message));
  }
}
function* watcherChangeName() {
  yield takeEvery("REQUEST", workerChangeName);
}

export default function* rootChangeNameSaga() {
  yield all([fork(watcherChangeName)]);
}
