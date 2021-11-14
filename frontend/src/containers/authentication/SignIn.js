import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { fetchUserProfile, signIn } from "../../redux/reducers/authSlice";
import { useDispatch, useSelector } from "react-redux";

// import Auth from "@aws-amplify/auth";
import { Link } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { green } from "@mui/material/colors";
import { removeURLFrom } from "../../redux/reducers/generalSlice";
import { useHistory } from "react-router";
import { useTitle } from "../../Hooks/useTitle";
import uwcssa_logo from "../../static/uwcssa_logo.svg";

export default function SignIn() {
  useTitle("UWCSSA登录");
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(); //logging state
  const [errorMessage, setErrorMessage] = useState(null);
  const timer = useRef();

  const { urlFrom } = useSelector((state) => state.general);

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleSubmit = async function (event) {
    event.preventDefault();
    if (!loading) {
      // console.log("setLoading(loading)", loading);
      setLoading(true); //开始转圈
      const response = await dispatch(signIn({ username, password }));
      if (response.meta.requestStatus === "fulfilled") {
        const { username } = response.payload;
        const response2 = await dispatch(fetchUserProfile({ username }));
        if (response2.meta.requestStatus === "fulfilled") {
          timer.current = window.setTimeout(() => {
            if (urlFrom) {
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
          setErrorMessage(response.error.message);
        }, 1000);
      }
    }
  };

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const onChange = (event) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });

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
          登入
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={(event) => handleSubmit(event)}
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="用户名"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            error={errorMessage ? true : false}
            helperText={errorMessage}
            onChange={(event) => onChange(event)}
          />
          <TextField
            margin="normal"
            required
            name="password"
            fullWidth
            label="密码"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            error={errorMessage ? true : false}
            helperText={errorMessage}
            onChange={(event) => onChange(event)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="记住密码"
          />
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
                Forgot password?
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
