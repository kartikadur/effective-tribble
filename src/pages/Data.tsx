import React, { ReactElement, FC, useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { getDataAsync } from "../api/getDataAsync";
import { useDispatch } from "react-redux";
import { apiCalledAction } from "../store/actions/performanceActions";

export const Data: FC = (): ReactElement => {
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
      {JSON.stringify(comments, null, 2)}
    </>
  );
};
