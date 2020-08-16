import { createStore, combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { rootReducer } from "./reducers";

const combinedReducers = combineReducers(rootReducer)

export const configureStore = () => {

  let store = null;

  store = createStore(combinedReducers, composeWithDevTools());

  return store;
}

export const store = configureStore();