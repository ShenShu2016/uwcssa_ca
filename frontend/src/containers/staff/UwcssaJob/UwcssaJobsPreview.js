import React, { useEffect } from "react";
import {
  setDepartments,
  setUwcssaJobs,
} from "../../../redux/actions/uwcssaJobActions";
import { useDispatch, useSelector } from "react-redux";

import { DataGrid } from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: "960px",
    margin: "auto",
  },
});

const columns = [
  { field: "id", headerName: "ID", width: 150 },
  {
    field: "title",
    headerName: "Title",
    width: 200,
    editable: false,
  },
  {
    field: "department",
    headerName: "Department",
    width: 110,
    editable: false,
  },
  {
    field: "like",
    headerName: "Like",
    width: 100,
    type: "number",
    editable: false,
  },
  {
    field: "unlike",
    headerName: "Unlike",
    width: 100,
    type: "number",
    editable: false,
  },
  {
    field: "active",
    headerName: "Active",
    width: 100,
    editable: false,
  },
  {
    field: "applied",
    headerName: "Applied",
    width: 100,
    editable: false,
  },
];

export default function UwcssaJobsPreview() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDepartments());
    dispatch(setUwcssaJobs());
  }, [dispatch]);

  const { departments, uwcssaJobs } = useSelector(
    (state) => state.allUwcssaJobs
  );
  console.log("departments, uwcssaJobs", departments, uwcssaJobs);

  const rows = uwcssaJobs.map((uwcssaJob) => {
    const { id, title, department, like, unlike, active, uwcssaJobResumes } =
      uwcssaJob;
    return {
      id: id,
      title: title,
      department: department.name,
      like: like.filter((e) => e !== "").length,
      unlike: unlike.filter((e) => e !== "").length,
      active: active,
      applied: uwcssaJobResumes.items.length,
    };
  });

  return (
    <div className={classes.root}>
      <Typography variant="h4" sx={{margin: 3}}>Uwcssa Jobs Preview</Typography>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}
