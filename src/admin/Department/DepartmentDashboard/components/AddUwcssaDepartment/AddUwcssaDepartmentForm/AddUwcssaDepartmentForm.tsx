/*
 * @Author: Shen Shu
 * @Date: 2022-05-30 15:13:57
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-11 18:46:30
 * @FilePath: /uwcssa_ca/src/admin/Department/DepartmentDashboard/components/AddUwcssaDepartment/AddUwcssaDepartmentForm/AddUwcssaDepartmentForm.tsx
 * @Description:
 *
 */

import * as yup from "yup";

import {
  Box,
  Button,
  Dialog,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import React from "react";
import { getOwnerUserName } from "redux/auth/authSlice";
import { postUwcssaDepartment } from "redux/uwcssaDepartment/uwcssaDepartmentSlice";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";

const validationSchema = yup.object({
  id: yup.string().required(),
  introduction: yup.string().trim(),
  email: yup.string().email(),
  leader: yup.string().trim(),
});
interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  onClose: () => void;
  open: boolean;
}

function AddUwcssaDepartmentForm({ onClose, open }: Props): JSX.Element {
  const dispatch = useAppDispatch();
  const ownerUsername = useAppSelector(getOwnerUserName);
  const { enqueueSnackbar } = useSnackbar();
  const initialValues = {
    id: "",
    introduction: "",
    email: "",
    leader: "",
  };

  const onSubmit = async (values) => {
    console.log(JSON.stringify(values));
    const createUwcssaDepartmentInput = {
      ...values,
      owner: ownerUsername,
    };
    const response = await dispatch(
      postUwcssaDepartment({ createUwcssaDepartmentInput }),
    );
    if (response.meta.requestStatus === "fulfilled") {
      onClose();
      enqueueSnackbar("添加成功！", { variant: "success" });
      formik.resetForm();
      return true;
    }
    enqueueSnackbar({ variant: "error" }, response.payload[0].errorType);
    return false;
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Dialog
      onClose={onClose}
      open={open}
      maxWidth="sm"
      sx={{
        "& .MuiPaper-root": {
          borderRadius: 2,
        },
      }}
    >
      <Box paddingY={2} paddingX={4}>
        <Box paddingY={2} display="flex" justifyContent="space-between">
          <Typography variant="h5" fontWeight={700}>
            Add a new Department
          </Typography>
          <Box
            component="svg"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width={24}
            height={24}
            onClick={onClose}
            sx={{ cursor: "pointer" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </Box>
        </Box>
        <Box paddingY={2}>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="subtitle2" sx={{ marginBottom: 1 }}>
                  New Department Name
                </Typography>
                <TextField
                  label="部门名称 *"
                  variant="outlined"
                  name="id"
                  fullWidth
                  value={formik.values.id}
                  onChange={formik.handleChange}
                  error={formik.touched.id && Boolean(formik.errors.id)}
                  helperText={formik.touched.id && formik.errors.id}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" sx={{ marginBottom: 1 }}>
                  Department Email
                </Typography>
                <TextField
                  label="部门 Email *"
                  variant="outlined"
                  name="email"
                  fullWidth
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" sx={{ marginBottom: 1 }}>
                  Department introduction
                </Typography>
                <TextField
                  label="部门简介 *"
                  variant="outlined"
                  name="introduction"
                  fullWidth
                  multiline
                  rows={5}
                  value={formik.values.introduction}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.introduction &&
                    Boolean(formik.errors.introduction)
                  }
                  helperText={
                    formik.touched.introduction && formik.errors.introduction
                  }
                />
              </Grid>
              <Grid item container xs={12}>
                <Button size="large" variant="contained" type="submit">
                  Submit
                </Button>
                <Button
                  size="large"
                  variant="text"
                  sx={{ ml: "2rem" }}
                  onClick={() => onClose()}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </Dialog>
  );
}

export default AddUwcssaDepartmentForm;
