import { Box, Container } from "@mui/material";
import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import CustomBreadcrumbs from "../../components/CustomMUI/CustomBreadcrumbs";
import EmailConfirm from "./EmailConfirm";
import Footer from "../Footer";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: "1rem",
  },
}));

export default function AuthenticationRouter() {
  const classes = useStyles();
  return (
    <Fragment>
      <Container maxWidth="md">
        <CustomBreadcrumbs />
      </Container>
      <Box className={classes.root}>
        <Switch>
          <Route exact path="/auth/signIn" component={SignIn} />
          <Route exact path="/auth/signUp" component={SignUp} />
          <Route exact path="/auth/forgotPassword" component={ForgotPassword} />
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
      </Box>
      <Footer />
    </Fragment>
  );
}
