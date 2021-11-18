import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import React, { useRef, useState } from "react";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { forgotPassWordSubmit } from "../../redux/reducers/authSlice";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { useTitle } from "../../Hooks/useTitle";
import uwcssa_logo from "../../static/uwcssa_logo.svg";

const useStyles = makeStyles((theme) => ({}));

export default function ResetPassword() {
  const classes = useStyles();
  useTitle("重置密码");
  const dispatch = useDispatch();
  const timer = useRef();
  const { username } = useParams();
  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const history = useHistory();
  const [loading, setLoading] = useState(); //logging state
  const [isShowPassword, setIsShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: username,
      code: "",
      new_password: "",
    },
  });

  const onSubmit = async (data) => {
    if (!loading) {
      // console.log("setLoading(loading)", loading);
      setLoading(true); //开始转圈
      const response = await dispatch(forgotPassWordSubmit(data));
      if (response.meta.requestStatus === "fulfilled") {
        timer.current = window.setTimeout(() => {
          setLoading(false);
          console.log("response", response);
          history.push(`/auth/signIn`);
        }, 1000);
      } else {
        timer.current = window.setTimeout(() => {
          setLoading(false);
          console.log(response);
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
          重置密码
        </Typography>
        <Box my={1}>
          <Typography variant="h5">您的账号是：{username}</Typography>
        </Box>
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
            name="code"
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
                type="number"
                fullWidth
                onChange={onChange}
                value={value}
                error={!!errors.code}
                helperText={errors.code ? "验证码不对" : null}
              />
            )}
          />
          <Controller
            name="new_password"
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
                  id="new_password"
                  type={isShowPassword ? "text" : "password"}
                  onChange={onChange}
                  autoFocus
                  error={!!errors.new_password}
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
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
