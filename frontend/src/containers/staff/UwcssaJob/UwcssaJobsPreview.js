import React, { useEffect } from "react";
import {
  setDepartments,
  setUwcssaJobs,
} from "../../../redux/actions/uwcssaJobActions";
import { useDispatch, useSelector } from "react-redux";

import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: "960px",
    margin: "auto",
  },
});
export default function UwcssaJobsPreview() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDepartments());
    dispatch(setUwcssaJobs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { departments, uwcssaJobs } = useSelector(
    (state) => state.allUwcssaJobs
  );
  console.log("departments, uwcssaJobs", departments, uwcssaJobs);

  return (
    <div className={classes.root}>
      <Typography variant="h1">Uwcssa Jobs Preview</Typography>
    </div>
  );
}
