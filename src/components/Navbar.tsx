import React, { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

type NavbarType = {
  title: string;
};
export const Navbar: FC<NavbarType> = ({ title = "Home" }): ReactElement => (
  <nav>
    <h1>{title}</h1>
    <ul>
      <li>
        <Link to="/">Go Home</Link>
      </li>
      <li>
        <Link to="/Data">Data</Link>
      </li>
      <li>
        <Link to="/Stats">Statistics</Link>
      </li>
    </ul>
  </nav>
);
