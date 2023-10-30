import { SET_STORE, SET_STORES_DATA } from "../actions";

const initState = {
  stores: [],
  selectedStores: JSON.parse(localStorage.getItem("selected_stores")),
  loading: false,
  error: null,
};

export default function SelectStore(state = initState, { type, ...action }) {
  switch (type) {
    case SET_STORES_DATA: {
      return { ...state, ...action.payload };
    }

    case SET_STORE: {
      const selectedStores = state.stores.filter(store => {
        return (action.selectedStores).filter(sStore => store.stid === sStore.value).length;
      });
      localStorage.setItem("selected_stores", JSON.stringify(selectedStores));

      return {
        ...state,
        selectedStores,
      };
    }

    default:
      return state;
  }
}
