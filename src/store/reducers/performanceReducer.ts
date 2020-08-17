import { apiAction, PropsFromProfiler, renderAction } from "../actions"
import { PERFORMANCEACTION } from "../constants"


export type performanceState = {
  api: Array<PerformanceMeasure>
  render: Array<PropsFromProfiler>
}

const initialState: performanceState = {
  api: [],
  render: [],
}

export const performanceReducer = (state: performanceState = initialState, { type, payload }: apiAction | renderAction) => {

  switch (type) {
    case PERFORMANCEACTION.apiCalled:
      return { ...state, api: [...state.api, payload] }
    case PERFORMANCEACTION.renderCalled:
      return {
        ...state, render: {
          ...state.render,
          [(payload as PropsFromProfiler).id]: payload
        }
      }
    default:
      return state;
  }
}