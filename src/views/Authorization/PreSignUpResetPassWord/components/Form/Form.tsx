/*
 * @Author: Shen Shu
 * @Date: 2022-06-21 22:26:42
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-25 17:28:35
 * @FilePath: /uwcssa_ca/src/views/Authorization/PreSignUpResetPassWord/components/Form/Form.tsx
 * @Description:
 *
 */

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
import { useAppDispatch, useAppSelector } from "redux/hooks";

import { completeNewPassword } from "redux/auth/authSlice";
import { useFormik } from "formik";

const validationSchema = yup.object({
  new_password: yup
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

  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("new_password"), null], "Passwords must match"),
});

function Form(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [signInError, setSignInError] = useState("");
  const user = useAppSelector((state) => state.auth.NEW_PASSWORD_REQUIRED_user);
  console.log(user);
  const initialValues = {
    new_password: "",
    passwordConfirmation: "",
  };

  const onSubmit = async (values) => {
    console.log(values);
    const { new_password } = values;

    const response: any = await dispatch(
      completeNewPassword({ user, new_password }),
    );
    if (response.meta.requestStatus === "fulfilled") {
      navigate("/auth/signIn");
    } else {
      setSignInError(response.error.message);
      return false;
    }

    return values;
  };

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
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
          Email Confirmation
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
          }}
        >
          请输入新密码
        </Typography>
        <Typography color="text.secondary">May be in the spam box.</Typography>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "stretched", sm: "center" }}
              justifyContent="space-between"
              width={1}
              marginBottom={2}
            >
              <Box marginBottom={{ xs: 1, sm: 0 }}>
                <Typography variant="subtitle2">
                  Enter your new password
                </Typography>
              </Box>
              {/* <Typography variant={'subtitle2'}>
                <MUILink
                  component={Link}
                  color={'primary'}
                  to={'/auth/passwordReset'}
                  underline={'none'}
                >
                  Forgot your password?
                </MUILink>
              </Typography> */}
            </Box>
            <TextField
              label="New Password *"
              variant="outlined"
              name="new_password"
              type="password"
              fullWidth
              value={formik.values.new_password}
              onChange={formik.handleChange}
              error={
                formik.touched.new_password &&
                Boolean(formik.errors.new_password)
              }
              helperText={
                formik.touched.new_password && formik.errors.new_password
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "stretched", sm: "center" }}
              justifyContent="space-between"
              width={1}
              marginBottom={2}
            >
              <Box marginBottom={{ xs: 1, sm: 0 }}>
                <Typography variant="subtitle2">
                  Enter your new password
                </Typography>
              </Box>
              {/* <Typography variant={'subtitle2'}>
                <MUILink
                  component={Link}
                  color={'primary'}
                  to={'/auth/passwordReset'}
                  underline={'none'}
                >
                  Forgot your password?
                </MUILink>
              </Typography> */}
            </Box>
            <TextField
              label="Confirm Password *"
              variant="outlined"
              name="passwordConfirmation"
              type="password"
              fullWidth
              value={formik.values.passwordConfirmation}
              onChange={formik.handleChange}
              error={
                formik.touched.passwordConfirmation &&
                Boolean(formik.errors.passwordConfirmation)
              }
              helperText={
                formik.touched.passwordConfirmation &&
                formik.errors.passwordConfirmation
              }
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
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  Don't have an account yet?{" "}
                  <MUILink
                    component={Link}
                    color="primary"
                    to="/auth/signUp"
                    underline="none"
                  >
                    Sign up here.
                  </MUILink>
                </Typography>
              </Box>
              <Button size="large" variant="contained" type="submit">
                Confirm
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default Form;
