/*
 * @Author: Shen Shu
 * @Date: 2022-06-18 17:53:44
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-25 17:28:45
 * @FilePath: /uwcssa_ca/src/views/Event/EventDetail/components/SidebarNewsletter/SidebarNewsletter.tsx
 * @Description:
 *
 */

import * as yup from "yup";

import {
  Box,
  Button,
  Card,
  Grid,
  Link as MUILink,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { googleSignIn, signIn } from "redux/auth/authSlice";

import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";
import { useAppDispatch } from "redux/hooks";
import { useFormik } from "formik";

const validationSchema = yup.object({
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

function SidebarNewsletter(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const initialValues = {
    username: "",
    password: "",
  };

  const onSubmit = async (values) => {
    console.log(JSON.stringify(values));
    const { username, password } = values;
    const response = await dispatch(signIn({ username, password }));
    if (response.meta.requestStatus === "fulfilled") {
      navigate("", { replace: true });
    } else {
      return false;
    }

    return values;
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const handleGoogleSignIn = async () => {
    dispatch(googleSignIn());
  };

  return (
    <Box component={Card} padding={2} bgcolor="transparent">
      <Grid container spacing={4}>
        {isMd ? (
          <Grid item container justifyContent="center" xs={12}>
            <Box height={1} width={1} maxWidth="80%">
              <Box
                component="img"
                src="https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration2.svg"
                width={1}
                height={1}
                sx={{
                  filter:
                    theme.palette.mode === "dark" ? "brightness(0.8)" : "none",
                }}
              />
            </Box>
          </Grid>
        ) : null}
        <Grid item xs={12}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              marginBottom: 2,
            }}
          >
            Please login to comment
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="subtitle2" sx={{ marginBottom: 2 }}>
                  Enter your email
                </Typography>
                <TextField
                  label="Email *"
                  variant="outlined"
                  name="username"
                  fullWidth
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.username && Boolean(formik.errors.username)
                  }
                  helperText={formik.touched.username && formik.errors.username}
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
                      Enter your password
                    </Typography>
                  </Box>
                  <Typography variant="subtitle2">
                    <MUILink
                      component={Link}
                      color="primary"
                      to="/auth/passwordReset"
                      underline="none"
                    >
                      Forgot your password?
                    </MUILink>
                  </Typography>
                </Box>
                <TextField
                  label="Password *"
                  variant="outlined"
                  name="password"
                  type="password"
                  fullWidth
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
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
                    Login
                  </Button>
                </Box>
              </Grid>
              <Grid item container xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={() => handleGoogleSignIn()}
                  sx={{ lineHeight: 1 }}
                >
                  <Box
                    component={LazyLoadImage}
                    effect="blur"
                    src="/assets/images/icons/google-1.svg"
                  />
                  <Box sx={{ fontSize: "12px", marginLeft: "1rem" }}>
                    Google登录
                  </Box>
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SidebarNewsletter;
