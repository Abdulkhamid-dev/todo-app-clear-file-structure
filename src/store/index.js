import { createStore, combineReducers } from "redux";
import authentication from "./auth/store";
import gettingData from "./auth/store";

const rootReducer = combineReducers({
  auth: authentication,
  allData: gettingData,
});

const store = createStore(rootReducer);

export default store;
