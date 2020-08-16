import React, { ReactElement, FC, useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { getDataAsync } from "../api/getDataAsync";

export const Data: FC = (): ReactElement => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getDataAsync("comments").then((comments) => setComments(comments));
  }, []);
  return (
    <>
      <Navbar title="Data" />
      <h2>Data Page</h2>
      {JSON.stringify(comments, null, 2)}
    </>
  );
};
