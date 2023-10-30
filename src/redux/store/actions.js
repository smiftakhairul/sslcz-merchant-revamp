import { GET_STORES, SET_STORE, SET_STORES_DATA } from "../actions";

// initData: () => ({ type: actions.GET_STORES }),
export const setStore = (selectedStores) => ({
  type: SET_STORE,
  selectedStores,
});

// Load Data Actions
export const storeWatcher = (payload) => ({
  type: GET_STORES,
  payload,
});

export const setStoresData = (stores) => ({
  type: SET_STORES_DATA,
  payload: stores,
});
