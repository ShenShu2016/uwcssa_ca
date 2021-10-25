import React, { useEffect } from "react";
import {
  removeSelectedUser,
  selectedUser,
} from "../../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";

import AboutMe from "../../components/Account/Profile/AboutMe";
import BasicInfo from "../../components/Account/BasicInfo";
import Education from "../../components/Account/Profile/Education";
import Experience from "../../components/Account/Profile/Experience";
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
  }, [username, dispatch]);

  const userAuth = useSelector((state) => state.userAuth);
  const user = useSelector((state) => state.user);

  return (
    <div>
      <BasicInfo userAuth={userAuth} user={user} />

      <div className={classes.root}>
        <AboutMe user={user} />
        <Education userAuth={userAuth} user={user} />
        <Experience userAuth={userAuth} user={user} />
      </div>
    </div>
  );
}
