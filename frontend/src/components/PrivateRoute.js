import { useDispatch, useSelector } from "react-redux";

import { CircularProgress } from "@mui/material";
import React from "react";
import { Redirect } from "react-router";
import { Route } from "react-router";
import { setURLFrom } from "../redux/reducers/generalSlice";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";

export default function PrivateRoute({
  component: Component,
  allowRoles,
  ...rest
}) {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { isAuthenticated, cognitoGroup } = useSelector(
    (state) => state.userAuth
  );
  const handleNotSignInRedirect = () => {
    dispatch(setURLFrom({ location }));
    history.push("/auth/signIn");
  };
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
              handleNotSignInRedirect()
            )
          }
        />
      )}
    </div>
  );
}
//https://stackoverflow.com/questions/43164554/how-to-implement-authenticated-routes-in-react-router-4
