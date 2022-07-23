/*
 * @Author: Shen Shu
 * @Date: 2022-05-30 14:17:41
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-30 22:25:26
 * @FilePath: /uwcssa_ca/src/admin/Department/DepartmentDashboard/DepartmentDashboard.tsx
 * @Description:
 *
 */

import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  fetchUwcssaDepartmentList,
  selectAllUwcssaDepartments,
} from "redux/uwcssaDepartment/uwcssaDepartmentSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import Container from "components/Container";
import { getAuthState } from "redux/auth/authSlice";
import { AddUwcssaDepartmentForm } from "./components/AddUwcssaDepartment";
import SimpleStriped from "./components/SimpleStriped";

function DepartmentDashboard() {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuthState);
  const [open, setOpen] = useState(false);
  const { fetchUwcssaDepartmentListStatus } = useAppSelector(
    (state) => state.uwcssaDepartment,
  );
  const uwcssaDepartmentList = useAppSelector(selectAllUwcssaDepartments);
  useEffect(() => {
    const getUwcssaDepartments = async () => {
      if (isAuth !== null && fetchUwcssaDepartmentListStatus === "idle") {
        await dispatch(
          fetchUwcssaDepartmentList({
            isAuth,
          }),
        );
      }
    };
    getUwcssaDepartments();
  }, [isAuth, fetchUwcssaDepartmentListStatus]);

  return (
    <Container>
      <Typography variant="h4">DepartmentDashboard</Typography>
      <Button variant="contained" size="small" onClick={() => setOpen(true)}>
        Add Department
      </Button>
      <SimpleStriped uwcssaDepartmentList={uwcssaDepartmentList} />
      <AddUwcssaDepartmentForm open={open} onClose={() => setOpen(false)} />
    </Container>
  );
}

export default DepartmentDashboard;
