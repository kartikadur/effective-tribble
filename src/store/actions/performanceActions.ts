import { PERFORMANCEACTION } from "../constants/performanceConstants"

export type reducerAction = {
  type: string,
  payload: PerformanceMeasure
}


export const apiCalledAction = (data: PerformanceMeasure): reducerAction => ({
  type: PERFORMANCEACTION.apiCalled,
  payload: data
})