import { Route, Switch } from "react-router-dom";

import { Box } from "@mui/system";
import EmailConfirm from "./EmailConfirm";
import Footer from "../Footer";
import ForgotPassword from "./ForgotPassword";
import React from "react";
import ResetPassword from "./ResetPassword";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function AuthRouter() {
  return (
    <Box>
      <Switch>
        <Route exact path="/auth/signIn" component={SignIn} />
        <Route exact path="/auth/signUp" component={SignUp} />
        <Route
          exact
          path="/auth/auth/forgotPassword"
          component={ForgotPassword}
        />
        <Route
          exact
          path="/auth/resetPassword/:username"
          component={ResetPassword}
        />
        <Route
          exact
          path="/auth/emailConfirm/:username"
          component={EmailConfirm}
        />
      </Switch>
      <Footer />
    </Box>
  );
}
