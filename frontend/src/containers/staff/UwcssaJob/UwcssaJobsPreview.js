import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import {
  setDepartments,
  setUwcssaJobs,
} from "../../../redux/actions/uwcssaJobActions";

import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: "960px",
    margin: "auto",
  },
});
function UwcssaJobsPreview({ setDepartments, setUwcssaJobs }) {
  useEffect(() => {
    setDepartments();
    setUwcssaJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { departments, uwcssaJobs } = useSelector(
    (state) => state.allUwcssaJobs
  );
  console.log("departments, uwcssaJobs", departments, uwcssaJobs);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h1">Uwcssa Jobs Preview</Typography>
    </div>
  );
}

export default connect(null, { setDepartments, setUwcssaJobs })(
  UwcssaJobsPreview
);
