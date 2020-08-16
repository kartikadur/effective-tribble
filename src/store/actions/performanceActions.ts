import { PERFORMANCEACTION } from "../constants/performanceConstants"

export type PropsFromProfiler = {
  id: string,
  phase: "mount" | "updated",
  actualDuration: number,
  baseDuration: number,
  startTime: number,
  commitTime: number,
}

export type apiAction = {
  type: string,
  payload: PerformanceMeasure
}

export type renderAction = {
  type: string,
  payload: PropsFromProfiler
}


export const apiCalledAction = (data: PerformanceMeasure): apiAction => ({
  type: PERFORMANCEACTION.apiCalled,
  payload: data
})

export const renderCalledAction = (data: PropsFromProfiler): renderAction => ({
  type: PERFORMANCEACTION.renderCalled,
  payload: data
})
