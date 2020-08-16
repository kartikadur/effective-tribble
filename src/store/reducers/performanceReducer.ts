import { apiAction, PropsFromProfiler } from "../actions/performanceActions"
import { PERFORMANCEACTION } from "../constants/performanceConstants"


export type performanceState = {
  api: Array<PerformanceMeasure>
  render: Array<PropsFromProfiler>
}

const initialState: performanceState = {
  api: [],
  render: [],
}

export const performanceReducer = (state: performanceState = initialState, { type, payload }: apiAction) => {

  switch (type) {
    case PERFORMANCEACTION.apiCalled:
      return { ...state, api: [...state.api, payload] }
    case PERFORMANCEACTION.renderCalled:
      return { ...state, render: [...state.render, payload] }
    default:
      return state;
  }
}