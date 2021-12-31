import { React, useEffect } from "react";
import {
  fetchDepartments,
  selectAllDepartments,
} from "../../redux/slice/departmentSlice";
import {
  fetchUwcssaJobs,
  selectAllUwcssaJobs,
} from "../../redux/slice/uwcssaJobSlice";
import { useDispatch, useSelector } from "react-redux";

import ByDepartment from "../../components/Career/ByDepartment";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   // backgroundColor: "#F3F2EF",
  //   textAlign: "left",
  //   margin: "4rem",
  //   maxWidth: "960px",
  //   // color: "#0D1F48",
  //   [theme.breakpoints.down("sm")]: {
  //     margin: "0rem",
  //   },
  // },
  jobLink: {
    textDecoration: "none",
    // color: "#30A2EC",
  },
}));

export default function Openings() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const departments = useSelector(selectAllDepartments);
  const uwcssaJobs = useSelector(selectAllUwcssaJobs);
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
    <div className={classes.root}>
      {departments &&
        uwcssaJobs &&
        departments.map((department, departmentIdx) => {
          return (
            <ByDepartment
              department={department}
              uwcssaJobs={uwcssaJobs}
              key={departmentIdx}
            />
          );
        })}
    </div>
  );
}
