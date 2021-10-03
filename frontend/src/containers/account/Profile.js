import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import {
  removeSelectedUser,
  selectedUser,
} from "../../redux/actions/userActions";

import Education from "../../components/Account/Profile/Education";
import Experience from "../../components/Account/Profile/Experience";
import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { useParams } from "react-router-dom";
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

  return (
    <div className={classes.root}>
      <Typography variant="h5">{username}</Typography>
      <Education />
      <Experience />
    </div>
  );
}

export default connect(null, { selectedUser, removeSelectedUser })(Profile);
