import { all } from 'redux-saga/effects';
import authSagas from "./auth/saga";
import storeSagas from "./store/saga";

export default function* rootSaga() {
  yield all([
    authSagas(),
    storeSagas(),
  ]);
}
