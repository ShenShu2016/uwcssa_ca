import React, { useEffect } from "react";
import {
  fetchUwcssaJobs,
  selectAllUwcssaJobs,
} from "../../../redux/slice/uwcssaJobSlice";
import { useDispatch, useSelector } from "react-redux";

import { DataGrid } from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import { fetchDepartments } from "../../../redux/slice/departmentSlice";
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
  const { fetchUwcssaJobsStatus } = useSelector((state) => state.uwcssaJob);
  const uwcssaJobs = useSelector(selectAllUwcssaJobs);

  const { fetchDepartmentsStatus } = useSelector((state) => state.department);
  useEffect(() => {
    if (fetchDepartmentsStatus === "idle" || undefined) {
      dispatch(fetchDepartments());
    }
    if (fetchUwcssaJobsStatus === "idle" || undefined) {
      dispatch(fetchUwcssaJobs());
    }
  }, [dispatch, fetchUwcssaJobsStatus, fetchDepartmentsStatus]);

  //console.log("departments, uwcssaJobs", departments, uwcssaJobs);

  const rows = uwcssaJobs.map((uwcssaJob) => {
    const { id, title, department, active, uwcssaJobResumes } = uwcssaJob;
    return {
      id: id,
      title: title,
      department: department.name,
      active: active,
      applied: uwcssaJobResumes,
    };
  });

  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h2" sx={{ margin: 3 }}>
        职位数据
      </Typography>
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
