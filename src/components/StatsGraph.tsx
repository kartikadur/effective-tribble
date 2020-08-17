import React, { ReactElement, FC, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { rootReducerType } from "../store/reducers";
import { performanceState } from "../store/reducers/performanceReducer";
import { HorizontalBar } from "react-chartjs-2";

export const StatsGraph: FC = (): ReactElement => {
  const [statData, setStatData] = useState({});

  const stats = useSelector<rootReducerType, performanceState["render"]>(
    (state) => state.performance.render
  );

  const makeChartData = (data: Array<Array<number>>, labels: Array<string>) => {
    setStatData({
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderWidth: 1,
        },
      ],
    });
  };

  useEffect(() => {
    const labels = Object.keys(stats).map((k: any) => {
      return stats[k]["id"];
    });
    const data = Object.keys(stats).map((k: any) => {
      return [stats[k]["startTime"], stats[k]["commitTime"]];
    });
    makeChartData(data, labels);
  }, [stats]);

  return <HorizontalBar data={statData} legend={false} />;
};
