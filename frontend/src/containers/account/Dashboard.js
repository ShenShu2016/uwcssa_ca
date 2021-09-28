import Auth from "@aws-amplify/auth";
import Avatar from "@mui/material/Avatar";
import React from "react";
import TempLinkBar from "../../components/Account/TempLinkBar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    maxWidth: "960px",
    margin: "auto",
    textAlign: "center",
  },
});

function Dashboard() {
  const classes = useStyles();
  const attributes = useSelector((state) => state.userAuth.user.attributes);
  //   const { attribute } = user;
  console.log(attributes);
  return (
    <div className={classes.root}>
      <TempLinkBar />
      <Typography variant="h1">Dashboard</Typography>

      <Avatar alt="Shen Shu" src="" sx={{ width: 150, height: 150 }} />
    </div>
  );
}

export default Dashboard;
