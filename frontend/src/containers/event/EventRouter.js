import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import BottomNav from "../BottomNav";
import { Box } from "@mui/system";
import CustomBreadcrumbs from "../../components/CustomMUI/CustomBreadcrumbs";
import Event from "./Event";
import EventDetail from "../../components/Event/EventDetail";
import EventSignUp from "../../components/Event/SignUpEvent";
import Footer from "../Footer.js";
import Group from "../../components/Event/group";
import Individual from "../../components/Event/individual";
import PrivateRoute from "../../components/PrivateRoute";
import Success from "../../components/Event/Success";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    marginTop: "2rem",
    maxWidth: "1536px",
    paddingInline: "3rem",
    [theme.breakpoints.down("sm")]: {
      paddingInline: "0.5rem",
    },
  },
}));

export default function EventRouter() {
  const classes = useStyles();

  return (
    <Fragment>
      <Box className={classes.root}>
        <CustomBreadcrumbs />
        <Switch>
          <Route exact path="/event" component={Event} />
          <Route exact path="/event/:eventID" component={EventDetail} />
          <Route
            exact
            path="/event/:eventID/eventSignUp"
            component={EventSignUp}
          />
          <PrivateRoute
            allowRoles="anyone"
            path="/event/:eventID/eventSignUp/individual"
            component={Individual}
          />
          <PrivateRoute
            allowRoles="anyone"
            path="/event/:eventID/eventSignUp/group"
            component={Group}
          />
          <Route
            exact
            path="/event/:eventID/eventSignUp/success"
            component={Success}
          />
        </Switch>
      </Box>
      <Footer />
      <BottomNav />
    </Fragment>
  );
}
