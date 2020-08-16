import { reducerAction } from "../actions/performanceActions"
import { PERFORMANCEACTION } from "../constants/performanceConstants"

export type performanceState = {
  api: Array<PerformanceMeasure>
}

const initialState: performanceState = {
  api: []
}

export const performanceReducer = (state: performanceState = initialState, { type, payload }: reducerAction) => {

  switch (type) {
    case PERFORMANCEACTION.apiCalled:
      return { ...state, api: [...state.api, payload] }
    default:
      return state;
  }
}