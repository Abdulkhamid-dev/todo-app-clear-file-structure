import { createStore, combineReducers,  } from "redux";
import authentication from "./auth/reducer";
import gettingDatas from "./data/reducerData";



const rootReducer = combineReducers({
  auth: authentication,
  datas: gettingDatas,
});


const store = createStore(rootReducer);

export {store};
