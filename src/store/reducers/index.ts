import { combineReducers } from "redux";
import { performanceReducer } from "./performanceReducer";

export const rootReducer = combineReducers({ performance: performanceReducer })