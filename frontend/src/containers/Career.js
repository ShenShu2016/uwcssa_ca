import ApplyJob from "../components/Career/ApplyJob";
import Footer from "./Footer";
import JobDetail from "../components/Career/JobDetail";
import Openings from "../components/Career/Openings";
import PrivateRoute from "../components/PrivateRoute";
import React from "react";
import { Route } from "react-router";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#F3F2EF",
    textAlign: "center",
    margin: "4rem auto",
    maxWidth: "960px",
    color: "#0D1F48",
  },
}));

export default function Career() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        开放职位
      </Typography>
      <Route exact path="/career" component={Openings} />
      <Route path="/career/jobDetail/:id" component={JobDetail} />
      <PrivateRoute
        allowRoles="anyone"
        path="/career/applyJob/:id"
        component={ApplyJob}
      />
      <Footer />
    </div>
  );
}
