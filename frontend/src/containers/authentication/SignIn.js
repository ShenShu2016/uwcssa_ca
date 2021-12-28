import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
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
import { fetchUserProfile, signIn } from "../../redux/slice/authSlice";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { removeURLFrom } from "../../redux/slice/generalSlice";
import { useHistory } from "react-router";
import { useTitle } from "../../Hooks/useTitle";
import uwcssa_logo from "../../static/uwcssa_logo.svg";

const useStyles = makeStyles(() => ({
  alert: {
    marginTop: "1.5rem",
  },
}));

export default function SignIn() {
  useTitle("UWCSSA登录");
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(); //logging state
  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const timer = useRef();
  const { urlFrom } = useSelector((state) => state.general);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async function (data) {
    if (!loading) {
      // console.log("setLoading(loading)", loading);
      setLoading(true); //开始转圈
      const response = await dispatch(signIn(data));
      if (response.meta.requestStatus === "fulfilled") {
        const { username } = response.payload;
        const response2 = await dispatch(fetchUserProfile({ username }));
        if (response2.meta.requestStatus === "fulfilled") {
          timer.current = window.setTimeout(() => {
            if (urlFrom) {
              reset();
              dispatch(removeURLFrom());
              history.push(urlFrom);
            } else {
              history.push("/account/dashboard");
            }
          }, 1000);
        }
      } else {
        console.log("我是出错的地方");
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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
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
          登入
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

          <Controller
            name="password"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <FormControl fullWidth variant="outlined" sx={{ my: 4 }}>
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
                        {isShowPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            )}
          />
          {/* <Tooltip title={`这个东西装饰用的，按不按都一样`} arrow>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="记住密码"
            />
          </Tooltip> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={loading}
          >
            {loading ? <LockOpenIcon /> : <LockIcon />}
            登陆
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
          <Grid container>
            <Grid item xs>
              <Link to="/auth/forgotPassword" variant="body2">
                忘记密码?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/auth/signUp" variant="body2">
                {"还没有账户？ 注册"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
