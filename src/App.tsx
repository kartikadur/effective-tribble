import React from "react";
import "./App.css";
import { AppRouter } from "./routers/Approuter";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => (
  <Router basename="/">
    <AppRouter />
  </Router>
);

export default App;
