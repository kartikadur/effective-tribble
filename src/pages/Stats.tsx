import React, { ReactElement, FC, useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { useSelector } from "react-redux";
import { HorizontalBar } from "react-chartjs-2";

import { rootReducerType } from "../store/reducers";
import { performanceState } from "../store/reducers/performanceReducer";
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles({
  inner: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    padding: "10px",
    margin: "20px",
  },
  root: {
    minWidth: 275,
    margin: "5px",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export const Stats: FC = (): ReactElement => {
  // const apiStats = useSelector<rootReducerType, performanceState["api"]>(
  //   (state) => state.performance.api
  // );

  const [statData, setStatData] = useState({});

  const stats = useSelector<rootReducerType, performanceState["render"]>(
    (state) => state.performance.render
  );

  const classes = useStyles();

  const makeChartData = (data: Array<Array<number>>, labels: Array<string>) => {
    setStatData({
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: ["rgba(75, 192, 192, 0.6)"],
          borderWidth: 4,
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

  return (
    <>
      <Navbar title="Stats" />
      <h2>Stats Page</h2>
      <div>
        <HorizontalBar data={statData} legend={false} />
      </div>
      {/* <Paper className={classes.inner}>
        {Object.keys(stats).map((k: any, id) => (
          <Card key={id} className={classes.root}>
            <CardContent>
              <Typography className={classes.title}>{stats[k].id}</Typography>
              <Typography variant="body2" component="p">
                Render from {stats[k].startTime} to {stats[k].commitTime}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Paper> */}
    </>
  );
};
