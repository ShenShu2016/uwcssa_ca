import { Link, useHistory, useLocation } from "react-router-dom";
import React, { useState } from "react";

import Auth from "@aws-amplify/auth";
import Avatar from "@material-ui/core/Avatar";
import { Box } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Redirect } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import googleLogo from "../static/google.png";
import { login } from "../redux/actions/authActions";
import { makeStyles } from "@material-ui/core/styles";
import wechatLogo from "../static/wechat.png";

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
    marginBottom: "5rem",
  },

  wechatLogo: {
    width: 24,
    height: 24,
    marginRight: "9rem",
  },

  googleLogo: {
    width: 24,
    height: 24,
    marginRight: "8rem",
  },
}));

const Login = ({ onSignIn, loggedIn }) => {
  const classes = useStyles();
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const location = useLocation();

  const referer = location.state;

  const { username, password } = formData;

  const onChange = (event) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });

  const handleSubmit = async function (event) {
    event.preventDefault();

    try {
      const response = await Auth.signIn(username, password);
      console.log("auth response", response);
      history.push("/");
      onSignIn();
    } catch (error) {
      console.log("there was an error logging in ", error);
      alert(error.message);
    }
  };

  const handleGoogleLoginSignIn = async function (event) {
    event.preventDefault();

    try {
      const response = await Auth.federatedSignIn({ provider: "Google" });
      console.log("google auth response", response);
      onSignIn();
    } catch (error) {
      console.log("there was an error google logging in ", error);
      alert(error.message);
    }
  };

  let from;
  if (referer != null) {
    from = referer.from;
  }
  const urlTo = from || "/";
  if (loggedIn) {
    return <Redirect to={urlTo} />;
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
          <Link to="/register">注册</Link>
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
            label="Email Address"
            name="username"
            fullWidth
            autoComplete="email"
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
            label="Password"
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

            <Button // 这个忘记密码的按钮不知道为什么不能redirect
              // type="button"
              variant="outlined"
              component={Link}
              to="/forgotpassword"
              color="primary"
              className={classes.submit}
            >
              忘记密码
            </Button>
          </Grid>
        </form>
        <Box marginTop="3rem">
          <Button
            type="submit"
            variant="outlined"
            className={classes.third_party_button}
            onClick={(event) => handleGoogleLoginSignIn(event)}
          >
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid>
                <img
                  src={googleLogo}
                  alt="googleLogo"
                  className={classes.googleLogo}
                />
              </Grid>
              <Grid>Google登入</Grid>
            </Grid>
          </Button>
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
              <Grid>
                <img
                  src={wechatLogo}
                  alt="wechatLogo"
                  className={classes.wechatLogo}
                />
              </Grid>
              <Grid>微信登入</Grid>
            </Grid>
          </Button>
        </Box>
      </div>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.userAuth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
