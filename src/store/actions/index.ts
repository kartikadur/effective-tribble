import { PERFORMANCEACTION, COMMENTS } from "../constants"
import { dataStateType } from "../reducers/dataReducer"

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

export type dataAction = {
  type: string,
  payload: dataStateType
}


export const apiCalledAction = (data: PerformanceMeasure): apiAction => ({
  type: PERFORMANCEACTION.apiCalled,
  payload: data
})

export const renderCalledAction = (data: PropsFromProfiler): renderAction => ({
  type: PERFORMANCEACTION.renderCalled,
  payload: data
})

export const setComments = (data: dataStateType): dataAction => ({
  type: COMMENTS.set,
  payload: data
})
