import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import React, { useRef, useState } from "react";
import { checkEmailExist, signUp } from "../../redux/reducers/authSlice";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { useHistory } from "react-router";
import { useTitle } from "../../Hooks/useTitle";
import uwcssa_logo from "../../static/uwcssa_logo.svg";

const useStyles = makeStyles(() => ({
  alert: {
    marginTop: "1.5rem",
  },
}));

export default function SignUp() {
  const classes = useStyles();
  useTitle("UWCSSA注册帐号");
  const dispatch = useDispatch();
  const history = useHistory();
  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const timer = useRef();

  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      email: "",
    },
  });

  const { isAuthenticated } = useSelector((state) => state.userAuth);

  const handleClickShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    const responseCheckEmail = await dispatch(
      checkEmailExist(getValues("email").toLowerCase())
    );
    if (
      responseCheckEmail.meta.requestStatus === "fulfilled" &&
      responseCheckEmail.payload.length > 0
    ) {
      setLoading(false);
      setAlertContent("邮箱已存在!");
      setAlert(true);
      return;
    } else if (
      responseCheckEmail.meta.requestStatus === "fulfilled" &&
      responseCheckEmail.payload.length === 0
    ) {
      if (getValues("email").toLowerCase().includes("@uwindsor.ca")) {
        const response = await dispatch(signUp(data));
        console.log("onSignUp", response);
        if (response.meta.requestStatus === "fulfilled") {
          history.push(`/auth/emailConfirm/${getValues("username")}`);
        } else {
          timer.current = window.setTimeout(() => {
            setLoading(false);
            setAlertContent(response.error.message);
            setAlert(true);
            console.log(response.error.message);
          }, 1000);
          console.log(response.error.message);
        }
      } else {
        setOpen(true);
      }
    }
  };

  const onForceSubmit = async (data) => {
    setLoading(true);
    const responseCheckEmail = await dispatch(
      checkEmailExist(getValues("email").toLowerCase())
    );
    if (
      responseCheckEmail.meta.requestStatus === "fulfilled" &&
      responseCheckEmail.payload.length > 0
    ) {
      setLoading(false);
      setAlertContent("邮箱已存在!");
      setAlert(true);
      return;
    } else if (
      responseCheckEmail.meta.requestStatus === "fulfilled" &&
      responseCheckEmail.payload.length === 0
    ) {
      const response = await dispatch(signUp(data));
      console.log("onSignUp", response);
      if (response.meta.requestStatus === "fulfilled") {
        history.push(`/auth/emailConfirm/${getValues("username")}`);
      } else {
        timer.current = window.setTimeout(() => {
          setLoading(false);
          setOpen(false);
          setAlertContent(response.error.message);
          setAlert(true);
          console.log(response.error.message);
        }, 1000);
        console.log(response.error.message);
      }
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  const handleClose = () => {
    setOpen(false);
    setLoading(false);
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

        <Typography variant="h5">注册</Typography>
        <Typography>
          已经有账户了？
          <Link to="/auth/signIn">登入</Link>
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
                  minLength: 6,
                  maxLength: 20,
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    required
                    label="用户名"
                    variant="outlined"
                    placeholder="注册后不能修改,为主要昵称"
                    fullWidth
                    autoComplete="username"
                    onChange={onChange}
                    value={value}
                    error={!!errors.username}
                    helperText={errors.username ? "最短6符号,最长15符号" : null}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} sx={{ my: 1 }}>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: true,
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    required
                    label="邮箱"
                    variant="outlined"
                    placeholder="请优先使用@uwindsor.ca注册！"
                    fullWidth
                    autoComplete="email"
                    onChange={onChange}
                    value={value}
                    error={!!errors.email}
                    helperText={errors.email ? "邮箱格式不对" : null}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sx={{ my: 1 }}>
              <Controller
                name="password"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      密码
                    </InputLabel>
                    <OutlinedInput
                      id="password"
                      type={isShowPassword ? "text" : "password"}
                      onChange={onChange}
                      error={!!errors.password}
                      value={value}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                          >
                            {isShowPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                )}
              />
            </Grid>
          </Grid>
          <Button
            onClick={handleSubmit(onSubmit)}
            variant="contained"
            fullWidth
            color="primary"
            disabled={loading}
            sx={{ my: 4 }}
          >
            注册
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
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {`确认使用${getValues("email")} 来注册吗？`}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                如果您有温莎大学
                xxx@uwindsor.ca的邮箱，无论您毕业与否，请先使用他，会有额外学生/校友福利哦！
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} autoFocus>
                取消
              </Button>
              <Button onClick={handleSubmit(onForceSubmit)}>注册</Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
    </Container>
  );
}
