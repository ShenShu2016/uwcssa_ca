import { Route, Switch } from "react-router-dom";

import { Box } from "@mui/system";
import Dashboard from "./Dashboard";
import Footer from "../Footer";
import MyAccount from "./MyAccount";
import Profile from "./Profile";
import React from "react";

export default function Account() {
  return (
    <Box>
      <Switch>
        <Route path="/account/dashboard" component={Dashboard} />
        <Route path="/account/profile/:username" component={Profile} />
        <Route path="/account/myAccount" component={MyAccount} />
      </Switch>
      <Footer />
    </Box>
  );
}
