import React, { ReactElement, FC } from "react";
import { Navbar } from "../components/Navbar";

export const Home: FC = (): ReactElement => {
  return (
    <>
      <Navbar title="Home" />
      <h2>Home Page</h2>
    </>
  );
};
