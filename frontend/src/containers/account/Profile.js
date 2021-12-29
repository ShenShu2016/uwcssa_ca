import { Box, CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import {
  getProfile,
  removeSelectedProfile,
} from "../../redux/slice/profileSlice";
import { useDispatch, useSelector } from "react-redux";

import AboutMe from "../../components/Account/Profile/AboutMe";
import BasicInfo from "../../components/Account/Profile/BasicInfo";
import Education from "../../components/Account/Profile/Education";
import Experience from "../../components/Account/Profile/Experience";
import { makeStyles } from "@mui/styles";
import { useParams } from "react-router-dom";
import { useTitle } from "../../Hooks/useTitle";

const useStyles = makeStyles({
  root: {
    marginTop: "1rem",
    maxWidth: "960px",
    margin: "auto",
    // paddingInline: "1rem",
  },
});

export default function Profile() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { username } = useParams();
  useTitle(`${username}的资料`);

  useEffect(() => {
    if (username && username !== "") {
      dispatch(getProfile({ username }));
    }
    return () => dispatch(removeSelectedProfile());
  }, [username, dispatch]);

  const { userAuth } = useSelector((state) => state);
  const { user } = useSelector((state) => state.profile);

  return (
    <div>
      {user.id ? (
        <div>
          <BasicInfo user={user} ownerID={username} />
          <div className={classes.root}>
            <AboutMe user={user} />
            <Education userAuth={userAuth} user={user} ownerID={username} />
            <Experience userAuth={userAuth} user={user} ownerID={username} />
          </div>
        </div>
      ) : (
        <Box sx={{ position: "relative", top: "50%", left: "50%", my: 10 }}>
          <CircularProgress size={80} />
        </Box>
      )}
    </div>
  );
}
