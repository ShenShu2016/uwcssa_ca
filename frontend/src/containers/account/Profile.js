import React, { useEffect } from "react";
import {
  removeSelectedUser,
  selectedUser,
} from "../../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";

import BasicInfo from "../../components/Account/BasicInfo";
import Education from "../../components/Account/Profile/Education";
import Experience from "../../components/Account/Profile/Experience";
import { Redirect } from "react-router";
import { makeStyles } from "@mui/styles";
import { useParams } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    marginTop: "1rem",
    maxWidth: "960px",
    margin: "auto",
    paddingInline: "1rem",
  },
});
export default function Profile() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { username } = useParams();

  useEffect(() => {
    if (username && username !== "") {
      dispatch(selectedUser(username));
    }
    return () => dispatch(removeSelectedUser());
  }, [username]); // eslint-disable-line react-hooks/exhaustive-deps

  const userAuth = useSelector((state) => state.userAuth);
  const user = useSelector((state) => state.user);

  if (userAuth.isAuthenticated === false) {
    return <Redirect to="/signIn" />;
  }

  return (
    <div>
      <BasicInfo userAuth={userAuth} user={user} />
      <div className={classes.root}>
        <Education userAuth={userAuth} user={user} />
        <Experience userAuth={userAuth} user={user} />
      </div>
    </div>
  );
}
