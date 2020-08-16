import React, { ReactElement, FC } from "react";
import { Navbar } from "../components/Navbar";

export const Error404: FC = (): ReactElement => {
  return (
    <>
      <Navbar title="404" />
      <h2>Error Page</h2>
    </>
  );
};
