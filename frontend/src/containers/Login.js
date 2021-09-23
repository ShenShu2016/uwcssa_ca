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
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Redirect } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import googleLogo from "../static/svg icons/google.svg";
import facebookLogo from "../static/svg icons/facebook.svg";
import githubLogo from "../static/svg icons/github.svg";
import linkedinLogo from "../static/svg icons/linkedin.svg";
import { login } from "../redux/actions/authActions";
import { makeStyles } from "@material-ui/core/styles";

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
  }
}));

const Login = ({ login, isAuthenticated }) => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const onChange = (event) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });

  const handleSubmit = async function (event) {
    event.preventDefault();
    login(username, password);
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

  if (isAuthenticated) {
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

            <Button
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
              <Grid item xs={1}>
              </Grid>
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
              <Grid item xs={1}>
              </Grid>
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
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.userAuth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
