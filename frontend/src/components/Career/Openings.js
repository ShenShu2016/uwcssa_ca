import { React, useEffect } from "react";
import {
  setDepartments,
  setUwcssaJobs,
} from "../../redux/actions/uwcssaJobActions";

import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import store from "../../redux/store";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  root: {
    // backgroundColor: "#F3F2EF",
    textAlign: "left",
    margin: "4rem",
    maxWidth: "960px",
    color: "#0D1F48",
  },
  jobLink: {
    textDecoration: "none",
    color: "#30A2EC",
  },
}));

export default function Openings() {
  const classes = useStyles();
  useEffect(() => {
    setDepartments()(store.dispatch);
    setUwcssaJobs()(store.dispatch);
  }, []);

  const departments = useSelector((state) => state.allUwcssaJobs.departments);
  console.log("Departments:", departments);

  return (
    <div className={classes.root}>
      {departments.length === 0
        ? ""
        : departments.map((department) => {
            return (
              <div key={department.name}>
                <Typography variant="h5">{department.name}</Typography>
                {department.uwcssaJobs.items.length === 0
                  ? ""
                  : department.uwcssaJobs.items.map((job) => {
                      return job.active===1 ? (
                        <div key={job.id}>
                          <br />
                          <div
                            style={{ display: "inline-block", width: "70%" }}
                          >
                            <Link
                              className={classes.jobLink}
                              to={`/career/jobDetail/${job.id}`}
                            >
                              {job.title}
                            </Link>
                          </div>
                          <br />
                        </div>
                      ) : (
                        ""
                      );
                    })}
                <br />
                <br />
              </div>
            );
          })}
    </div>
  );
}
