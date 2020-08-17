import { combineReducers } from "redux";
import { performanceReducer, performanceState } from "./performanceReducer";
import { dataReducer } from "./dataReducer";

export type rootReducerType = {
  performance: performanceState
}

export const rootReducer = combineReducers({ performance: performanceReducer, data: dataReducer })