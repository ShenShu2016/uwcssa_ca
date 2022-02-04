import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import React, { useRef, useState } from "react";

import { forgotPassword } from "../../redux/slice/authSlice";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useTitle } from "../../Hooks/useTitle";
import uwcssa_logo from "../../static/uwcssa_logo.svg";

const useStyles = makeStyles(() => ({
  alert: {
    marginTop: "1.5rem",
  },
}));

export default function ForgotUsername() {
  const classes = useStyles();
  useTitle("忘记用户名");
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(); //logging state
  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const timer = useRef();
  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = async (data) => {
    if (!loading) {
      // console.log("setLoading(loading)", loading);
      setLoading(true); //开始转圈
      const response = await dispatch(forgotPassword(data));
      if (response.meta.requestStatus === "fulfilled") {
        timer.current = window.setTimeout(() => {
          setLoading(false);
          console.log("response", response);
          history.push(`/auth/resetPassword/${getValues("username")}`);
        }, 1000);
      } else {
        timer.current = window.setTimeout(() => {
          setLoading(false);
          console.log(response.error.message);
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
        <Typography component="h1" variant="h5">
          找回用户名
        </Typography>
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
          onSubmit={handleSubmit(onSubmit)}
          sx={{ my: 4 }}
        >
          <Controller
            name="username"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <TextField
                required
                label="邮箱"
                variant="outlined"
                fullWidth
                autoComplete="email"
                onChange={onChange}
                value={value}
                error={!!errors.email}
                helperText={errors.email ? "不能为空" : null}
              />
            )}
          />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            disabled={loading}
          >
            提交
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
