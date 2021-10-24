import React from "react";
import { Redirect } from "react-router";
import { Route } from "react-router";

export default function PrivateRoute({
  component: Component,
  isAuthenticated,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signIn" />
        )
      }
    />
  );
}
//https://stackoverflow.com/questions/43164554/how-to-implement-authenticated-routes-in-react-router-4
