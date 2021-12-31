import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import {
  fetchDepartments,
  selectAllDepartments,
} from "../redux/slice/departmentSlice";
import {
  fetchUwcssaMembers,
  selectAllUwcssaMembers,
} from "../redux/slice/uwcssaMemberSlice";
import { useDispatch, useSelector } from "react-redux";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import BackdropLoading from "../components/BackdropLoading";
import ByDepartment from "../components/UwcssaMember/ByDepartment";
import Footer from "./Footer";
import { Link } from "react-router-dom";
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
}));

export default function UwcssaMember() {
  useTitle("UWCSSA学生会成员");
  const classes = useStyles();
  const dispatch = useDispatch();
  const isPermit = usePermit(null, "admin");
  const uwcssaMembers = useSelector(selectAllUwcssaMembers);
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
          {isPermit && (
            <Button
              variant="contained"
              component={Link}
              to="/admin/uwcssaMember/create"
              sx={{ my: "1rem", borderRadius: "10px" }}
              size="large"
              startIcon={<AddCircleOutlineIcon />}
            >
              添加新成员
            </Button>
          )}
        </Box>
        {departments && uwcssaMembers ? (
          departments.map((department, departmentIdx) => {
            return (
              <ByDepartment
                department={department}
                uwcssaMembers={uwcssaMembers}
                key={departmentIdx}
              />
            );
          })
        ) : (
          <BackdropLoading />
        )}
      </div>
      <Footer />
    </Box>
  );
}
