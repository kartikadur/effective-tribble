import React, { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  AppBar,
  Toolbar,
  Button,
  makeStyles,
} from "@material-ui/core";

type NavbarType = {
  title: string;
};

const useStyles = makeStyles({
  link: {
    color: "white",
    textDecoration: "none",
  },
  button: {
    marginLeft: "10px",
  },
});

export const Navbar: FC<NavbarType> = ({ title = "Home" }): ReactElement => {
  const classes = useStyles();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h4">{title}</Typography>
        {/* <ul>
        <li> */}
        <Button color="inherit" className={classes.button}>
          <Link to="/" className={classes.link}>
            Go Home
          </Link>
        </Button>
        <Button color="inherit" className={classes.button}>
          <Link to="/Data" className={classes.link}>
            Data
          </Link>
        </Button>
        <Button color="inherit" className={classes.button}>
          <Link to="/Stats" className={classes.link}>
            Statistics
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};
