import React, { FC, ReactElement } from "react";
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  Paper,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { rootReducerType } from "../store/reducers";
import { performanceState } from "../store/reducers/performanceReducer";

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

export const StatsCard: FC = (): ReactElement => {
  const stats = useSelector<rootReducerType, performanceState["render"]>(
    (state) => state.performance.render
  );
  const classes = useStyles();
  return (
    <Paper className={classes.inner}>
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
    </Paper>
  );
};
