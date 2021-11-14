import { CircularProgress } from "@mui/material";
import React from "react";
import { Redirect } from "react-router";
import { Route } from "react-router";

export default function PrivateRoute({
  component: Component,
  cognitoGroup,
  allowRoles,
  ...rest
}) {
  return (
    <div>
      {cognitoGroup.includes(null) ? (
        <CircularProgress />
      ) : (
        <Route
          {...rest}
          render={(props) =>
            cognitoGroup.includes(allowRoles) ? (
              <Component {...props} />
            ) : (
              <Redirect to="/auth/signIn" />
            )
          }
        />
      )}
    </div>
  );
}
//https://stackoverflow.com/questions/43164554/how-to-implement-authenticated-routes-in-react-router-4
