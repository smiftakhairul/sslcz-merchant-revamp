import { combineReducers } from 'redux';
import settings from './settings/reducer';
import menu from './menu/reducer';
import authUser from './auth/reducer';
import SelectStore from "./store/reducer";

const reducers = combineReducers({
  menu,
  settings,
  authUser,
  SelectStore,
});

export default reducers;
