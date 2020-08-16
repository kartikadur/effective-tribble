import { apiAction } from "../actions/performanceActions"
import { PERFORMANCEACTION } from "../constants/performanceConstants"
import { ProfilerProps } from "react"

export type performanceState = {
  api: Array<PerformanceMeasure>
  render: Array<ProfilerProps>
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