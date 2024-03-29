/*
 * @Author: Shen Shu
 * @Date: 2022-05-17 15:50:53
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-25 17:28:42
 * @FilePath: /uwcssa_ca/src/views/Authorization/SignupCover/components/Form/Form.tsx
 * @Description:
 *
 */
/* eslint-disable react/no-unescaped-entities */

import * as yup from "yup";

import {
  Alert,
  Box,
  Button,
  Grid,
  Link as MUILink,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import { signUp } from "redux/auth/authSlice";
import { useAppDispatch } from "redux/hooks";
import { useFormik } from "formik";

const validationSchema = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, "Please enter a valid name")
    .max(50, "Please enter a valid name")
    .required("Please specify your first name"),
  username: yup
    .string()
    .trim()
    .email("Please enter a valid email address")
    .required("Email is required."),
  password: yup
    .string()
    .required("Please specify your password")
    .min(8, "Password must be at least 8 characters long.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])/,
      "Must Contain One Uppercase, One Lowercase",
    )
    .matches(
      // eslint-disable-next-line no-useless-escape
      /^[0-9A-Za-z]*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?][0-9a-zA-Z]*$/,
      "Need one special character",
    )
    .matches(/^(?=.{8,}$)\D*\d/, "Must Contain One Number"),
});

function Form(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [signInError, setSignInError] = useState("");
  const initialValues = {
    name: "",
    username: "",
    password: "",
  };

  const onSubmit = async (values) => {
    const response: any = await dispatch(signUp(values));

    if (response.meta.requestStatus === "fulfilled") {
      navigate(`/auth/emailConfirmation/${values.username}`);
    } else {
      setSignInError(response.error.message);
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
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontWeight: "medium",
          }}
          gutterBottom
          color="text.secondary"
        >
          注册
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
          }}
        >
          创建账号
        </Typography>
        {/* <Typography color="text.secondary">
          Fill out the form to get started.
        </Typography> */}
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            {/* <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              用户名
            </Typography> */}
            <TextField
              label="请输入用户名 *"
              variant="outlined"
              name="name"
              fullWidth
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>
          <Grid item xs={12}>
            {/* <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              邮箱
            </Typography> */}
            <TextField
              label="请输入邮箱 *"
              variant="outlined"
              name="username"
              fullWidth
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
          </Grid>
          <Grid item xs={12}>
            {/* <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              密码
            </Typography> */}
            <TextField
              label="请输入密码 *"
              variant="outlined"
              name="password"
              type="password"
              fullWidth
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>
          <Grid item xs={12}>
            {signInError && <Alert severity="error">{signInError}</Alert>}
          </Grid>
          <Grid item container xs={12}>
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "stretched", sm: "center" }}
              justifyContent="space-between"
              width={1}
              maxWidth={600}
              margin="0 auto"
            >
              <Box marginBottom={{ xs: 1, sm: 0 }}>
                <Typography variant="subtitle2">
                  已有账号？{" "}
                  <MUILink
                    component={Link}
                    color="primary"
                    to="/auth/signIn"
                    underline="none"
                  >
                    登录
                  </MUILink>
                </Typography>
              </Box>
              <Button size="large" variant="contained" type="submit">
                注册
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            container
            xs={12}
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              variant="subtitle2"
              color="text.secondary"
              align="center"
            >
              By clicking "Sign up" button you agree with our{" "}
              <MUILink
                component={Link}
                color="primary"
                to="/terms"
                underline="none"
              >
                company terms and conditions.
              </MUILink>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default Form;
