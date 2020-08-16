import { combineReducers } from "redux";
import { performanceReducer, performanceState } from "./performanceReducer";

export type rootReducerType = {
  performance: performanceState
}

export const rootReducer = combineReducers({ performance: performanceReducer })