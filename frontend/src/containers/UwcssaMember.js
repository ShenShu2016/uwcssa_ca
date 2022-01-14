import { Box, Fab, Typography } from "@mui/material";
import React, { useEffect } from "react";
import {
  fetchDepartments,
  selectAllDepartments,
} from "../redux/slice/departmentSlice";
import { useDispatch, useSelector } from "react-redux";

import AddIcon from "@mui/icons-material/Add";
import ByDepartment from "../components/UwcssaMember/ByDepartment";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { fetchUwcssaMembers } from "../redux/slice/uwcssaMemberSlice";
import { makeStyles } from "@mui/styles";
import { usePermit } from "../Hooks/usePermit";
import { useTitle } from "../Hooks/useTitle";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#F3F2EF",
    margin: "4rem auto",
    maxWidth: "1536px",
    color: "#0D1F48",
    [theme.breakpoints.up("sm")]: {
      paddingInline: "1rem",
    },
  },
  title: {
    textAlign: "center",
  },
  fabBox: {
    display: "block",
    position: "fixed",
    right: "4rem",
    bottom: "5rem",
    [theme.breakpoints.down("sm")]: {
      right: 10,
      bottom: 70,
    },
  },
}));

export default function UwcssaMember() {
  useTitle("UWCSSA学生会成员");
  const classes = useStyles();
  const dispatch = useDispatch();
  const isPermit = usePermit(null, "admin");

  const departments = useSelector(selectAllDepartments);
  const { fetchDepartmentsStatus } = useSelector((state) => state.department);
  const { fetchUwcssaMembersStatus } = useSelector(
    (state) => state.uwcssaMember
  );

  useEffect(() => {
    if (fetchUwcssaMembersStatus === "idle" || undefined) {
      dispatch(fetchUwcssaMembers());
    }
    if (fetchDepartmentsStatus === "idle" || undefined) {
      dispatch(fetchDepartments());
    }
  }, [dispatch, fetchUwcssaMembersStatus, fetchDepartmentsStatus]);

  return (
    <Box>
      <div className={classes.root}>
        <Box className={classes.title}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, color: "info.light" }}
          >
            学生会成员
          </Typography>
        </Box>
        {departments.map((department) => {
          return <ByDepartment department={department} key={department.id} />;
        })}
        {isPermit && (
          <Box className={classes.fabBox}>
            <Fab
              color="primary"
              component={Link}
              to="/admin/uwcssaMember/create"
            >
              <AddIcon />
            </Fab>
          </Box>
        )}
      </div>
      <Footer />
    </Box>
  );
}
