/*
 * @Author: Shen Shu
 * @Date: 2022-05-19 21:16:43
 * @LastEditors: Shikai Jin
 * @LastEditTime: 2022-06-25 22:23:31
 * @FilePath: /uwcssa_ca/src/views/ContactPage/components/Form/Form.tsx
 * @Description:
 *
 */

import * as yup from "yup";

import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import React from "react";
import { getOwnerUserName } from "redux/auth/authSlice";
import { postContactUs } from "redux/contactUs/ContactUsSlice";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";

/* eslint-disable react/no-unescaped-entities */

const validationSchema = yup.object({
  fullName: yup
    .string()
    .trim()
    .min(2, "Please enter a valid full name")
    .max(50, "Please enter a valid full name")
    .required("Please specify your full name"),
  message: yup.string().trim().required("Please specify your message"),
  email: yup
    .string()
    .trim()
    .email("Please enter a valid email address")
    .required("Email is required"),
  phone: yup
    .string()
    .trim()
    .min(9, "Please enter a valid phone number")
    .max(15, "Please enter a valid phone number"),
  // .required('Please specify your phone number'),
});

function Form(): JSX.Element {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const ownerUserName = useAppSelector(getOwnerUserName);
  const { enqueueSnackbar } = useSnackbar();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const initialValues = {
    fullName: "",
    message: "",
    email: "",
    phone: "",
  };

  const onSubmit = async (values) => {
    const createContactUsInput = {
      id: undefined,
      ...values,
      owner: ownerUserName && ownerUserName,
    };
    const response = await dispatch(postContactUs({ createContactUsInput }));
    if (response.meta.requestStatus === "fulfilled") {
      formik.resetForm();
      enqueueSnackbar("Message sent successfully", { variant: "success" });
    } else {
      enqueueSnackbar("Message failed to send", { variant: "error" });
      return false;
    }
    return values;
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Box>
      <Box marginBottom={2}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700 }}
          gutterBottom
          align="center"
        >
          有任何问题？
        </Typography>
        {/* <Typography color="text.secondary" align={'center'}>
          Keep track of what's happening with your data, change permissions, and
          run reports against your data anywhere in the world. Keep track of
          what's happening with your data, change permissions.
        </Typography> */}
      </Box>
      <Box
        maxWidth={600}
        margin="0 auto"
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          "& .MuiOutlinedInput-root.MuiInputBase-multiline": {
            padding: 0,
          },
          "& .MuiOutlinedInput-input": {
            background: theme.palette.background.paper,
            padding: 2,
          },
        }}
      >
        <Grid container spacing={isMd ? 4 : 2}>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              姓名
            </Typography>
            <TextField
              placeholder="请输入姓名"
              variant="outlined"
              size="medium"
              name="fullName"
              fullWidth
              type="text"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              helperText={formik.touched.fullName && formik.errors.fullName}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              邮箱
            </Typography>
            <TextField
              placeholder="请输入邮箱"
              variant="outlined"
              size="medium"
              name="email"
              fullWidth
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              电话号码
            </Typography>
            <TextField
              placeholder="请输入电话号码"
              variant="outlined"
              size="medium"
              name="phone"
              fullWidth
              // type="email"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              内容
            </Typography>
            <TextField
              placeholder="请输入问题内容"
              variant="outlined"
              name="message"
              fullWidth
              multiline
              rows={4}
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
          </Grid>
          <Grid item container justifyContent="center" xs={12}>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              size="large"
            >
              提交
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Form;
