import React, { ReactElement, FC, useState } from "react";
import { Navbar } from "../components/Navbar";
import { getDataAsync } from "../api/getDataAsync";
import { useDispatch, useSelector } from "react-redux";
import { apiCalledAction, setComments } from "../store/actions";
import classnames from "classnames";

import { Comment } from "../components/CommentCard";
import { Paper, makeStyles, Button } from "@material-ui/core";
import { rootReducerType } from "../store/reducers";
import { dataStateType, CommentType } from "../store/reducers/dataReducer";

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
  // const [comments, setComments] = useState([]);
  const comments = useSelector<rootReducerType, dataStateType["comments"]>(
    (state) => state.data.comments
  );
  const [isCard, setIsCard] = useState(true);
  const dispatch = useDispatch();

  const getCommentData = () => {
    getDataAsync("comments")
      .then((comments) =>
        dispatch(
          setComments(
            comments.reduce(
              (acc: dataStateType, curr: CommentType) => ({
                ...acc,
                [curr.id]: curr,
              }),
              {}
            )
          )
        )
      )
      .then(() => {
        dispatch(
          apiCalledAction(
            window.performance.getEntriesByName("fetch.comments")[0]
          )
        );
      });
  };
  return (
    <>
      <Navbar title="Data" />
      <Paper className={classes.outer} elevation={2}>
        <Button variant="outlined" color="primary" onClick={getCommentData}>
          get data
        </Button>
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
          {Object.keys(comments).map((k: any) => {
            let newComment = { ...comments[k], isCard };
            return (
              <Comment
                {...newComment}
                key={`${comments[k]["postId"]}_${comments[k]["id"]}`}
              />
            );
          })}
        </Paper>
      </Paper>
    </>
  );
};
