import { Route, Switch } from "react-router-dom";

import { Box } from "@mui/system";
import Event from "./Event";
import EventDetail from "../../components/Event/EventDetail";
import EventSignUp from "../../components/Event/SignUpEvent";
import Group from "../../components/Event/group";
import Individual from "../../components/Event/individual";
import React from "react";

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
        <Route
          exact
          path="/event/:eventID/eventSignUp/individual"
          component={Individual}
        />
        <Route
          exact
          path="/event/:eventID/eventSignUp/group"
          component={Group}
        />
        <Route exact path="/event/:eventID" component={EventDetail} />
      </Switch>
    </Box>
  );
}
