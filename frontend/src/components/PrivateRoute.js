import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CircularProgress } from "@mui/material";
import { Redirect } from "react-router";
import { Route } from "react-router";
import { setURLFrom } from "../redux/slice/generalSlice";
import { useLocation } from "react-router-dom";

export default function PrivateRoute({
  component: Component,
  allowRoles,
  ...rest
}) {
  const dispatch = useDispatch();
  const location = useLocation();
  const { isAuthenticated, cognitoGroup } = useSelector(
    (state) => state.userAuth
  );

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(setURLFrom({ location }));
    }
  }, [dispatch, location, isAuthenticated]);
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
            ) : isAuthenticated ? (
              <Redirect to="/noPermission" />
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
