/*
 * @Author: Shen Shu
 * @Date: 2022-05-30 15:13:57
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-24 17:12:24
 * @FilePath: /uwcssa_ca/src/admin/Department/DepartmentDashboard/components/SimpleStriped/components/EditUwcssaDepartment/EditUwcssaDepartmentForm/EditUwcssaDepartmentForm.tsx
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
import { updateUwcssaDepartmentDetail } from "redux/uwcssaDepartment/uwcssaDepartmentSlice";
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
  item: {
    id: string;
    introduction?: string | null;
    email?: string | null;
    leader?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    owner: string | null;
  };
}

function EditUwcssaDepartmentForm({ onClose, open, item }: Props): JSX.Element {
  const dispatch = useAppDispatch();
  const ownerUsername = useAppSelector(getOwnerUserName);
  const { enqueueSnackbar } = useSnackbar();
  const initialValues = {
    id: item?.id || "",
    introduction: item?.introduction || "",
    email: item?.email || "",
    leader: item?.leader || "",
  };

  const onSubmit = async (values) => {
    console.log(JSON.stringify(values));
    const updateUwcssaDepartmentInput = {
      ...values,
      owner: ownerUsername,
    };
    console.log(updateUwcssaDepartmentInput);
    const response = await dispatch(
      updateUwcssaDepartmentDetail({ updateUwcssaDepartmentInput }),
    );
    if (response.meta.requestStatus === "fulfilled") {
      onClose();
      enqueueSnackbar("修改成功！", { variant: "success" });
      formik.resetForm();
      return true;
    }
    enqueueSnackbar("修改失败！", { variant: "error" });
    return false;
  };

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
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
            Edit Department Information
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
                <Typography variant="subtitle2" sx={{ marginBottom: 2 }}>
                  Department Name
                </Typography>
                <TextField
                  label="部门名称 *"
                  variant="outlined"
                  name="id"
                  disabled
                  fullWidth
                  value={formik.values.id}
                  onChange={formik.handleChange}
                  error={formik.touched.id && Boolean(formik.errors.id)}
                  helperText="部门名称 不能改，请联系管理员"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" sx={{ marginBottom: 2 }}>
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
                <Typography variant="subtitle2" sx={{ marginBottom: 2 }}>
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

export default EditUwcssaDepartmentForm;
