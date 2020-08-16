import React, { ReactElement, FC } from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { Data } from "../pages/Data";
import { Stats } from "../pages/Stats";
import { Error404 } from "../pages/Error404";

export const AppRouter: FC = (): ReactElement => (
  <>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Data" component={Data} />
      <Route path="/Stats" component={Stats} />
      <Route component={Error404} />
    </Switch>
  </>
);
