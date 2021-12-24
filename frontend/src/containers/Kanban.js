import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  fetchDepartments,
  selectAllDepartments,
} from "../redux/slice/departmentSlice";
import { fetchKanbans, selectAllKanbans } from "../redux/slice/kanbanSlice";
import { useDispatch, useSelector } from "react-redux";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ByDepartment from "../components/Kanban/ByDepartment";
import Create from "../components/Kanban/Create";
import Footer from "./Footer";
import { makeStyles } from "@mui/styles";
import { usePermit } from "../Hooks/usePermit";
import { useTitle } from "../Hooks/useTitle";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",

    [theme.breakpoints.down("sm")]: {
      paddingInline: "0",
    },
  },
  title: { textAlign: "center" },
  tickets: {
    marginBlock: "2rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "auto",
    },
  },
  main: {
    overflow: "scroll",
  },
}));

export default function Kanban() {
  useTitle("Kanban");
  const classes = useStyles();
  const dispatch = useDispatch();
  const [createOpen, setCreateOpen] = useState(false);
  const isPermit = usePermit(null, "admin");
  const kanbans = useSelector(selectAllKanbans);

  const { fetchKanbansStatus } = useSelector((state) => state.kanban);
  const departments = useSelector(selectAllDepartments);
  const { fetchDepartmentsStatus } = useSelector((state) => state.department);

  useEffect(() => {
    if (fetchKanbansStatus === "idle" || undefined) {
      dispatch(fetchKanbans());
    }
    if (fetchDepartmentsStatus === "idle" || undefined) {
      dispatch(fetchDepartments());
    }
  }, [dispatch, fetchKanbansStatus, fetchDepartmentsStatus]);

  const handleCreateClose = () => {
    setCreateOpen(false);
  };

  return (
    <div>
      <Box>
        <div className={classes.root}>
          <Typography variant="h3" className={classes.title}>
            Kanban
            {isPermit && (
              <Button
                variant="contained"
                sx={{ my: "1rem", borderRadius: "10px" }}
                size="large"
                startIcon={<AddCircleOutlineIcon />}
                onClick={() => {
                  setCreateOpen(!createOpen);
                }}
              >
                添加Kanban
              </Button>
            )}
          </Typography>
          <Box className={classes.main}>
            {departments.map((department, departmentIdx) => {
              return (
                <ByDepartment
                  department={department}
                  kanbans={kanbans}
                  key={departmentIdx}
                />
              );
            })}
          </Box>
        </div>
      </Box>
      <Create createOpen={createOpen} handleCreateClose={handleCreateClose} />
      <Footer />
    </div>
  );
}
