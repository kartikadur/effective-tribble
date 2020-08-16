import { createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { rootReducer } from "./reducers";


export const configureStore = () => {

  let store = null;

  store = createStore(rootReducer, composeWithDevTools());

  return store;
}

export const store = configureStore();