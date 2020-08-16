import React, { Profiler, ReactElement, FC } from "react";
import { Card, Typography, makeStyles, CardContent } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { renderCalledAction } from "../store/actions/performanceActions";

type CommentType = {
  postId: number;
  id: number;
  name: string;
  body: string;
  email: string;
};

const useStyles = makeStyles({
  root: {
    width: 275,
    margin: "5px",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export const Comment: FC<CommentType> = ({
  postId,
  id,
  name,
  email,
  body,
}): ReactElement => {
  const classes = useStyles();
  const dispatch = useDispatch();
  function onRenderCallback(
    id: any,
    phase: any,
    actualDuration: any,
    baseDuration: any,
    startTime: any,
    commitTime: any,
    interactions: any
  ) {
    //Logic to handle the profiling details
    console.log(
      "The component",
      id,
      ", The phase",
      phase,
      ", Time taken for the update",
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
      interactions
    );

    dispatch(
      renderCalledAction({
        id,
        phase,
        actualDuration,
        baseDuration,
        startTime,
        commitTime,
      })
    );
  }
  return (
    <Profiler id={`${postId}_${id}`} onRender={onRenderCallback}>
      <Card key={`${postId}_${id}`} className={classes.root}>
        <CardContent>
          <Typography className={classes.title}>{name}</Typography>
          <Typography className={classes.pos}>{email}</Typography>
          <Typography variant="body2" component="p">
            {body}
          </Typography>
        </CardContent>
      </Card>
    </Profiler>
  );
};
