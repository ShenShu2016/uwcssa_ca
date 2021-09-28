import React from "react";
import TempLinkBar from "../../components/Account/TempLinkBar";
import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({
  root: {
    width: "100%",
    margin: "auto",
    textAlign: "center",
  },
});
function Profile() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TempLinkBar />
      <Typography variant="h1">Profile</Typography>
    </div>
  );
}

export default Profile;
