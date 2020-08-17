import React, { ReactElement, FC, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Button, Paper, makeStyles } from "@material-ui/core";
import { StatsCard } from "../components/StatsCard";
import { StatsGraph } from "../components/StatsGraph";

const useStyles = makeStyles({
  outer: {
    padding: "10px",
    margin: "20px",
  },
});

export const Stats: FC = (): ReactElement => {
  const classes = useStyles();
  const [isCard, setIsCard] = useState(true);
  return (
    <>
      <Navbar title="Stats" />
      <Paper className={classes.outer} elevation={2}>
        <Button variant="outlined" onClick={() => setIsCard(true)}>
          Cards
        </Button>
        <Button variant="outlined" onClick={() => setIsCard(false)}>
          Graph
        </Button>
        {!isCard && <StatsGraph />}
        {isCard && <StatsCard />}
      </Paper>
    </>
  );
};
