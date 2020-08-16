import React, { ReactElement, FC } from "react";
import { Navbar } from "../components/Navbar";
import { useSelector } from "react-redux";
import { rootReducerType } from "../store/reducers";
import { performanceState } from "../store/reducers/performanceReducer";

export const Stats: FC = (): ReactElement => {
  const apiStats = useSelector<rootReducerType, performanceState["api"]>(
    (state) => state.performance.api
  );

  const renderStats = useSelector<rootReducerType, performanceState["render"]>(
    (state) => state.performance.render
  );

  return (
    <>
      <Navbar title="Stats" />
      <h2>Stats Page</h2>
      {JSON.stringify(apiStats, null, 2)}
      {JSON.stringify(renderStats, null, 2)}
    </>
  );
};
