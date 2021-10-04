import React, { useEffect } from "react";
import {
  removeSelectedUser,
  selectedUser,
} from "../../redux/actions/userActions";

import BasicInfo from "../../components/Account/BasicInfo";
import Education from "../../components/Account/Profile/Education";
import Experience from "../../components/Account/Profile/Experience";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    marginTop: "1rem",
    maxWidth: "960px",
    margin: "auto",
    paddingInline: "1rem",
  },
});
function Profile({ selectedUser, removeSelectedUser }) {
  const classes = useStyles();
  const { username } = useParams();

  useEffect(() => {
    if (username && username !== "") {
      selectedUser(username);
    }
    return () => removeSelectedUser();
  }, [username]); // eslint-disable-line react-hooks/exhaustive-deps
  const userAuth = useSelector((state) => state.userAuth);
  const user = useSelector((state) => state.user);

  if (userAuth.isAuthenticated === false) {
    return <Redirect to="/signIn" />;
  }

  return (
    <div className={classes.root}>
      <div>
        <BasicInfo userAuth={userAuth} user={user} />
        <Education userAuth={userAuth} user={user} />
        <Experience userAuth={userAuth} user={user} />
      </div>
    </div>
  );
}

export default connect(null, { selectedUser, removeSelectedUser })(Profile);
