import {
  Alert,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import React, { useRef, useState } from "react";

import { Box } from "@mui/system";
import { emailConfirm } from "../../redux/reducers/authSlice";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useParams } from "react-router";
import { useTitle } from "../../Hooks/useTitle";
import uwcssa_logo from "../../static/uwcssa_logo.svg";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));
export default function EmailConfirm() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const [loading, setLoading] = useState(); //logging state

  const timer = useRef();
  useTitle("验证邮箱");
  const { username } = useParams();
  const history = useHistory();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: username,
      authenticationCode: "",
    },
  });
  const onSubmit = async (data) => {
    if (!loading) {
      // console.log("setLoading(loading)", loading);
      setLoading(true); //开始转圈
      const response = await dispatch(emailConfirm(data));
      if (response.meta.requestStatus === "fulfilled") {
        timer.current = window.setTimeout(() => {
          setLoading(false);
          console.log("response", response);
          history.push(`/auth/signIn`);
        }, 1000);
      } else {
        timer.current = window.setTimeout(() => {
          setLoading(false);
          setAlertContent(response.error.message);
          setAlert(true);
        }, 1000);
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ mb: "2rem" }}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={uwcssa_logo}
          alt="uwcssaLogo"
          style={{ margin: "1rem", height: "50px" }}
        />
        <Typography variant="h5">验证</Typography>
        {alert ? (
          <Alert className={classes.alert} severity="error">
            {alertContent}
          </Alert>
        ) : (
          <></>
        )}
        <Box
          component="form"
          noValidate
          sx={{ my: 4 }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{ my: 1 }}>
              <Controller
                name="username"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    required
                    label="用户名"
                    variant="outlined"
                    fullWidth
                    autoComplete="username"
                    onChange={onChange}
                    value={value}
                    error={!!errors.username}
                    helperText={errors.username ? "不能为空" : null}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sx={{ my: 1 }}>
              <Controller
                name="authenticationCode"
                control={control}
                rules={{
                  required: true,
                  maxLength: 6,
                  minLength: 6,
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    required
                    label="验证码"
                    variant="outlined"
                    fullWidth
                    onChange={onChange}
                    value={value}
                    error={!!errors.authenticationCode}
                    helperText={errors.authenticationCode ? "验证码不对" : null}
                  />
                )}
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            color="primary"
            disabled={loading}
            sx={{ my: 4 }}
          >
            Confirm Sign Up
            {loading && (
              <CircularProgress
                size={24}
                sx={{
                  color: green[500],
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  marginTop: "-0.75rem",
                  marginLeft: "-0.75rem",
                }}
              />
            )}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
