import { all } from "redux-saga/effects";
import rootChangeNameSaga from "../sagas/ChangeName";

export default function* rootSaga() {
  yield all([rootChangeNameSaga()]);
}
