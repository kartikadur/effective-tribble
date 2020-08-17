import React, { ReactElement, FC, useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { getDataAsync } from "../api/getDataAsync";
import { useDispatch } from "react-redux";
import { apiCalledAction } from "../store/actions/performanceActions";
import classnames from "classnames";

import { Comment } from "../components/CommentCard";
import { Paper, makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles({
  type: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  inner: {
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
  const [isCard, setIsCard] = useState(true);
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
      <Paper className={classes.outer} elevation={2}>
        <Button variant="outlined" onClick={() => setIsCard(true)}>
          Cards
        </Button>
        <Button variant="outlined" onClick={() => setIsCard(false)}>
          List
        </Button>
        <Paper
          className={classnames(classes.inner, {
            [`${classes.type}`]: isCard,
          })}
          elevation={0}
          variant="outlined"
        >
          {comments.map((comment: any) => {
            let newComment = { ...comment, isCard };
            return (
              <Comment
                {...newComment}
                key={`${comment["postId"]}_${comment["id"]}`}
              />
            );
          })}
        </Paper>
      </Paper>
    </>
  );
};
