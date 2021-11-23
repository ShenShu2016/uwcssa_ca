import { Route, Switch } from "react-router-dom";

import { Box } from "@mui/system";
import Event from "./Event";
import EventDetail from "../../components/Event/EventDetail";
import EventSignUp from "../../components/Event/SignUpEvent";
import Footer from "../Footer.js";
import Group from "../../components/Event/group";
import Individual from "../../components/Event/individual";
import React from "react";
import Success from "../../components/Event/Success";
import PrivateRoute from "../../components/PrivateRoute";
export default function EventRouter() {
  return (
    <Box>
      <Switch>
        <Route exact path="/event" component={Event} />
        <Route
          exact
          path="/event/:eventID/eventSignUp"
          component={EventSignUp}
        />
        {/* <Route
          exact
          path="/event/:eventID/eventSignUp/individual"
          component={Individual}
        /> */}
        <PrivateRoute
          allowRoles="anyone"
          path="/event/:eventID/eventSignUp/individual"
          component={Individual}
        />
        {/* <Route
          exact
          path="/event/:eventID/eventSignUp/group"
          component={Group}
        /> */}
        <PrivateRoute
          allowRoles="anyone"
          path="/event/:eventID/eventSignUp/group"
          component={Group}
        />
        <Route exact path="/event/:eventID" component={EventDetail} />
        <Route
          exact
          path="/event/:eventID/eventSignUp/success"
          component={Success}
        />
      </Switch>
      <Footer />
    </Box>
  );
}
