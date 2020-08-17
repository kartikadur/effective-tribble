import { combineReducers } from "redux";
import { performanceReducer, performanceState } from "./performanceReducer";
import { dataReducer, dataStateType } from "./dataReducer";

export type rootReducerType = {
  performance: performanceState
  data: dataStateType
}

export const rootReducer = combineReducers({ performance: performanceReducer, data: dataReducer })