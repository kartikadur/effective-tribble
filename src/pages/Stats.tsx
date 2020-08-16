import React, { ReactElement, FC } from "react";
import { Navbar } from "../components/Navbar";

export const Stats: FC = (): ReactElement => {
  return (
    <>
      <Navbar title="Stats" />
      <h2>Stats Page</h2>
    </>
  );
};
