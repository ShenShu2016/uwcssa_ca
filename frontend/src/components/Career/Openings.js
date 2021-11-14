import { Divider, Typography } from "@mui/material";
import { React, useEffect } from "react";
import {
  fetchDepartments,
  fetchUwcssaJobs,
} from "../../redux/reducers/careerSlice";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

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
  const dispatch = useDispatch();
  const { departments, fetchUwcssaJobsStatus, fetchDepartmentsStatus } =
    useSelector((state) => state.career);

  useEffect(() => {
    if (fetchDepartmentsStatus === "idle" || undefined) {
      dispatch(fetchDepartments());
    }
    if (fetchUwcssaJobsStatus === "idle" || undefined) {
      dispatch(fetchUwcssaJobs());
    }
  }, [dispatch, fetchUwcssaJobsStatus, fetchDepartmentsStatus]);

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
                      return job.active ? (
                        <div key={job.id}>
                          <br />
                          <div
                            style={{ display: "inline-block", width: "80%" }}
                          >
                            <Link
                              className={classes.jobLink}
                              to={`/career/jobDetail/${job.id}`}
                            >
                              {job.title}
                            </Link>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              width: "20%",
                              textAlign: "right",
                            }}
                          >
                            {job.createdAt.slice(0, 10)}
                          </div>
                          <br />
                        </div>
                      ) : (
                        ""
                      );
                    })}
                <br />
                <Divider />
                <br />
              </div>
            );
          })}
    </div>
  );
}
