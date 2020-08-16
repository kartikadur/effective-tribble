import { reducerAction } from "../actions/performanceActions"
import { PERFORMANCEACTION } from "../constants/performanceConstants"

type reducerState = {
  api: Array<PerformanceMeasure>
}

const initialState: reducerState = {
  api: []
}

export const performanceReducer = (state: reducerState = initialState, { type, payload }: reducerAction) => {

  switch (type) {
    case PERFORMANCEACTION.apiCalled:
      return { ...state, api: [...state.api, payload] }
    default:
      return state;
  }
}