import React, { ReactElement, FC, useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { getDataAsync } from "../api/getDataAsync";
import { useDispatch } from "react-redux";
import { apiCalledAction } from "../store/actions/performanceActions";

import { Comment } from "../components/CommentCard";
import { Paper, makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles({
  inner: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    padding: "10px",
    margin: "20px",
  },
  outer: {
    padding: "10px",
    margin: "20px",
  },
});

export const Data: FC = (): ReactElement => {
  const classes = useStyles();
  const [comments, setComments] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getDataAsync("comments")
      .then((comments) => setComments(comments))
      .then(() => {
        dispatch(
          apiCalledAction(
            window.performance.getEntriesByName("fetch.comments")[0]
          )
        );
      });
  }, []);
  return (
    <>
      <Navbar title="Data" />
      <h2>Data Page</h2>
      <Paper className={classes.outer} elevation={2}>
        <Button variant="outlined">Cards</Button>
        <Button variant="outlined">List</Button>
        <Paper className={classes.inner} elevation={0} variant="outlined">
          {comments.map((comment) => (
            <Comment {...comment} />
          ))}
        </Paper>
      </Paper>
      {JSON.stringify(comments, null, 2)}
    </>
  );
};
