import React, { ReactElement, FC } from "react";
import { Navbar } from "../components/Navbar";
import { useSelector } from "react-redux";
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
  const apiStats = useSelector<rootReducerType, performanceState["api"]>(
    (state) => state.performance.api
  );

  const renderStats = useSelector<rootReducerType, performanceState["render"]>(
    (state) => state.performance.render
  );

  const classes = useStyles();

  return (
    <>
      <Navbar title="Stats" />
      <h2>Stats Page</h2>
      <Paper className={classes.inner}>
        {renderStats.map((stat, id) => (
          <Card key={id} className={classes.root}>
            <CardContent>
              <Typography className={classes.title}>{stat.id}</Typography>
              <Typography variant="body2" component="p">
                Render from {stat.startTime} to {stat.commitTime}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Paper>
    </>
  );
};
