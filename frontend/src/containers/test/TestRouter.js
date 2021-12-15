import { Route, Switch } from "react-router-dom";

import { Box } from "@mui/material";
import GoogleMapsPlace from "../../components/GoogleMapsPlace";
import React from "react";
import { makeStyles } from "@mui/styles";
import test1 from "./test1";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    marginTop: "4rem",
    maxWidth: "1536px",
    paddingInline: "3rem",
    [theme.breakpoints.down("sm")]: {
      paddingInline: "0.5rem",
    },
  },
}));

export default function ForumRouter() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Switch>
        <Route exact path="/test" component={test1} />
        <Route path="/test/googleMapsPlace" exact component={GoogleMapsPlace} />
      </Switch>
    </Box>
  );
}
