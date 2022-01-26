import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ApplyJob from "../components/Career/ApplyJob";
import CustomBreadcrumbs from "../components/CustomMUI/CustomBreadcrumbs";
import Footer from "./Footer";
import JobDetail from "../components/Career/JobDetail";
import Openings from "../components/Career/Openings";
import PrivateRoute from "../components/PrivateRoute";
import { Route } from "react-router";
import { Typography } from "@mui/material";
import { fetchDepartments } from "../redux/slice/departmentSlice";
import { fetchUwcssaJobs } from "../redux/slice/uwcssaJobSlice";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#F3F2EF",
    textAlign: "center",
    margin: "1rem auto",
    maxWidth: "960px",
    // color: "#0D1F48",
  },
}));

export default function CareerRouter() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { fetchUwcssaJobsStatus } = useSelector((state) => state.uwcssaJob);
  const { fetchDepartmentsStatus } = useSelector((state) => state.department);
  //console.log("departments", departments);

  useEffect(() => {
    if (fetchDepartmentsStatus === "idle" || undefined) {
      dispatch(fetchDepartments());
    }
    if (fetchUwcssaJobsStatus === "idle" || undefined) {
      dispatch(fetchUwcssaJobs());
    }
  }, [dispatch, fetchUwcssaJobsStatus, fetchDepartmentsStatus]);

  return (
    <Fragment>
      <div className={classes.root}>
        <CustomBreadcrumbs />
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
      </div>
      <Footer />
    </Fragment>
  );
}
