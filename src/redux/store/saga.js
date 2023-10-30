import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import apiClient from "services/axios";
import { setStoresData, GET_STORES } from "../actions";
import { clearState, loadState, saveState } from "helpers/local-storage";
import { deepEqual } from "helpers/common";

export function* watchGetStores() {
  let apiData = yield getStoresAsync();
  let stores = apiData?.data || [];
  let menus = apiData?.menus || {};

  if (!deepEqual(menus, loadState('gogo_menu_permissions'))) {
    clearState();
    window.location.reload();
  }
  saveState("stores", stores);
  // saveState("gogo_menu_permissions", menus);
  yield put(setStoresData({ stores }));
}

const getStoresAsync = async () => {
  try {
    let response = await apiClient("getStores", {});
    // console.log("getStores", response.data.data.data);
    return response.data.data;
  } catch (error) {
    return error;
  }
};

export default function* rootSaga() {
  yield all([takeEvery(GET_STORES, watchGetStores)]);
}
