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
import { CircularProgress } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import amazonLogo from "../../static/svg icons/amazon.svg";
import appleLogo from "../../static/svg icons/apple.svg";
import facebookLogo from "../../static/svg icons/facebook.svg";
import googleLogo from "../../static/svg icons/google.svg";
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
    maxWidth: "100%",
    minWidth: "auto",
    boxShadow: "0 3px 5px 2px rgba(191, 191, 191, 1)",
    justifyContent: "center",
    alignItems: "center",
  },
  facebookLogo: {
    width: 24,
    height: 24,
    marginRight: "1rem",
  },
  googleLogo: {
    width: 24,
    height: 24,
    marginRight: "1rem",
  },
  other_third_party: {
    width: 35,
    height: 35,
    marginRight: "1rem",
  },
  more_third_party: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "3rem",
    marginTop: "2rem",
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [ signInState, setsignInState] = useState(); //logging state

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
    setsignInState("logging in");
    const response = await dispatch(signIn(username, password));
    if (response.result) {
      // setLogged(true);
    } else {
      //alert(response.error.message);
      setsignInState("logging failed");
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
        {/* {signInState === "logging in" ? <CircularProgress /> : " "} */}
        {signInState === "logging failed"}
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
            error={signInState === "logging failed"}
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
            error={signInState === "logging failed"}
            onChange={(event) => onChange(event)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="我不是机器人"
          />
          <Grid container marginTop="1rem">
            <Grid item xs={5} sm={8} md={6}
              marginLeft="2rem"               
            >
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              className={classes.submit}
              disabled={signInState === "logging in"}
            >              
              登陆
              {signInState === "logging in" ? <CircularProgress size="1.5rem"/> : " "}
            </Button>

            </Grid>
            <Grid>
              <Button
                // type="button"
                variant="outlined"
                component={Link}
                to="/forgotPassword"
                color="primary"
                className={classes.submit}
                disabled={signInState === "logging in"}
              >
                忘记密码
              </Button>
            </Grid>
          </Grid>
        </form>        
          {/* Google的登入按钮 */}
          <Grid item xs={10}  lg={10}
              container     
              justifyContent= "center"
              alignItems= "center"                      
            >
            <Button
              type="submit"
              variant="outlined"
              className={classes.third_party_button}
              onClick={(event) => handleGoogleSignIn(event)}              
            >
            <Grid xs={8} lg={6}>
              <img
                src={googleLogo}
                alt="googleLogo"
                className={classes.googleLogo}
              />
            </Grid>
            <Grid item xs={12} lg={12} marginRight= "1rem">Google Sign in</Grid>
            </Button>
          </Grid>                
          {/* Facebook的登入按钮*/}
          <Grid item xs={10}  lg={10}
              container     
              justifyContent= "center"
              alignItems= "center"  
              marginTop="2rem"                   
            >
            <Button
              type="submit"
              variant="outlined"
              disabled
              className={classes.third_party_button}
            >
            <Grid xs={8} lg={6}>
              <img
                src={facebookLogo}
                alt="facebookLogo"
                className={classes.facebookLogo}
              />
            </Grid>
            <Grid item xs={12} lg={12}>Facebook Sign in</Grid>
            </Button>
          </Grid>
        {/* 之后增加点按转入网站的功能 */}
        <Box className={classes.more_third_party}>
          <img
            src={appleLogo}
            alt="appleLogo"
            className={classes.other_third_party}
          />

          <img
            src={amazonLogo}
            alt="amazonLogo"
            className={classes.other_third_party}
          />
        </Box>
      </div>
    </Container>
  );
}
