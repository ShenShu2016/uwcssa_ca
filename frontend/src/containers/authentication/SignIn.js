import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link, Redirect } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Auth from "@aws-amplify/auth";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import facebookLogo from "../../static/svg icons/facebook.svg";
import githubLogo from "../../static/svg icons/github.svg";
import googleLogo from "../../static/svg icons/google.svg";
import linkedinLogo from "../../static/svg icons/linkedin.svg";
import { makeStyles } from "@mui/styles";
import { signIn } from "../../redux/actions/authActions";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "75%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    margin: "auto",
    marginBottom: theme.spacing(5),
  },
  submit: {
    margin: theme.spacing(5, 4, 0),
  },

  button: {
    marginLeft: "1rem",
    marginRight: "4rem",
  },

  third_party_button: {
    width: 426,
    height: 64,
    marginBottom: "2rem",
    maxWidth: "100%",
    minWidth: "40%",
    boxShadow: "0 3px 5px 2px rgba(191, 191, 191, 1)",
  },
  facebookLogo: {
    width: 24,
    height: 24,
    marginRight: "6rem",
  },
  googleLogo: {
    width: 24,
    height: 24,
    marginRight: "6rem",
  },
  github: {
    width: 24,
    height: 24,
    marginRight: "1rem",
  },
  more_third_party: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "3rem",
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state.userAuth.isAuthenticated
  );
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const onChange = (event) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });

  const handleSubmit = async function (event) {
    event.preventDefault();
    const response = await dispatch(signIn(username, password));
    if (response.result) {
      // setLogged(true);
    } else {
      console.log(response);
      alert(response.error.message);
    }
  };

  const handleGoogleSignIn = async function (event) {
    event.preventDefault();
    try {
      const response = await Auth.federatedSignIn({ provider: "Google" });
      console.log("google auth response", response);
    } catch (error) {
      console.log("there was an error google logging in ", error);
    }
  };

  if (isAuthenticated === true) {
    return <Redirect to="/" />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" align="left">
          登入
        </Typography>
        <Typography>
          还没有账户？
          <Link to="/signUp">注册</Link>
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={(event) => handleSubmit(event)}
        >
          <TextField
            variant="standard"
            margin="normal"
            required
            id="username"
            label="用户名"
            name="username"
            fullWidth
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(event) => onChange(event)}
          />
          <TextField
            variant="standard"
            margin="normal"
            required
            name="password"
            fullWidth
            label="密码"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => onChange(event)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="我不是机器人"
          />
          <Grid container>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              className={classes.submit}
            >
              登陆
            </Button>

            <Button
              // type="button"
              variant="outlined"
              component={Link}
              to="/forgotPassword"
              color="primary"
              className={classes.submit}
            >
              忘记密码
            </Button>
          </Grid>
        </form>
        <Box marginTop="3rem">
          {/* Google的登入按钮 */}
          <Button
            type="submit"
            variant="outlined"
            className={classes.third_party_button}
            onClick={(event) => handleGoogleSignIn(event)}
          >
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid item xs={1}></Grid>
              <Grid item xs={3}>
                <img
                  src={googleLogo}
                  alt="googleLogo"
                  className={classes.googleLogo}
                />
              </Grid>
              <Grid>Google Sign in</Grid>
            </Grid>
          </Button>

          {/* Facebook的登入按钮*/}
          <Button
            type="submit"
            variant="outlined"
            className={classes.third_party_button}
          >
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid item xs={1}></Grid>
              <Grid item xs={3}>
                <img
                  src={facebookLogo}
                  alt="facebookLogo"
                  className={classes.facebookLogo}
                />
              </Grid>
              <Grid>Facebook Sign in</Grid>
            </Grid>
          </Button>
        </Box>
        {/* 之后增加点按转入网站的功能 */}
        <Box className={classes.more_third_party}>
          <img
            src={githubLogo}
            alt="githubLogo"
            className={classes.github}
            onClick={(event) => handleGoogleSignIn(event)}
          />

          <img
            src={linkedinLogo}
            alt="linkedinLogo"
            className={classes.github}
          />
        </Box>
      </div>
    </Container>
  );
}
