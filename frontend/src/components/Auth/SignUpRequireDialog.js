import {
  AppBar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link, Redirect } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import Auth from "@aws-amplify/auth";
import { CircularProgress } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import amazonLogo from "../../static/svg icons/amazon.svg";
import appleLogo from "../../static/svg icons/apple.svg";
// import facebookLogo from "../../static/svg icons/facebook.svg";
// import googleLogo from "../../static/svg icons/google.svg";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { signIn } from "../../redux/reducers/authSlice";

const useStyles = makeStyles((theme) => ({
  text: {
    textAlign: "start",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "1rem",
    [theme.breakpoints.down("sm")]: {
      maxHeight: 300,
    },
  },
  form: {
    width: "75%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    margin: "auto",
    marginBottom: theme.spacing(5),
  },

  submit: { padding: "1rem" },

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
    marginLeft: "1rem",
  },
  googleLogo: {
    width: 24,
    height: 24,
    marginLeft: "1rem",
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

    marginTop: "2rem",
  },
}));

export default function AlertDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(); //logging state
  const [errorMessage, setErrorMessage] = useState(null);
  const timer = useRef();

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
        timer.current = window.setTimeout(() => {}, 1000);
      } else {
        timer.current = window.setTimeout(() => {
          setLoading(false);
          console.log(response.error.message);
          setErrorMessage(response.error.message);
        }, 1000);
      }
    }
  };

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

  // const handleGoogleSignIn = async function (event) {
  //   event.preventDefault();
  //   try {
  //     const response = await Auth.federatedSignIn({ provider: "Google" });
  //     console.log("google auth response", response);
  //   } catch (error) {
  //     console.log("there was an error google logging in ", error);
  //   }
  // };

  if (isAuthenticated === true) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Button size="small" onClick={handleClickOpen}>
        报名
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <AppBar sx={{ position: "relative" }}>
          <DialogTitle>{"需要登入/注册才能使用该功能哦~"}</DialogTitle>
        </AppBar>
        <DialogContent>
          <Box className={classes.paper}>
            <Typography component="h1" variant="h5" align="left">
              登入
            </Typography>
            <form
              className={classes.form}
              noValidate
              onSubmit={(event) => handleSubmit(event)}
            >
              <Box marginBottom="1rem">
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
                  error={errorMessage ? true : false}
                  helperText={errorMessage}
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
                  error={errorMessage ? true : false}
                  helperText={errorMessage}
                  onChange={(event) => onChange(event)}
                />
              </Box>

              {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="我不是机器人"
          /> */}

              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={2} sm={4} md={4}>
                  <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    className={classes.submit}
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
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                  <Button
                    variant="outlined"
                    component={Link}
                    to="/forgotPassword"
                    color="primary"
                    className={classes.submit}
                    disabled={loading}
                  >
                    忘记密码
                  </Button>
                </Grid>
              </Grid>
            </form>
            {/* <Grid
              item
              xs={10}
              lg={10}
              container
              justifyContent="center"
              alignItems="center"
            >
              <Button
                type="submit"
                variant="outlined"
                className={classes.third_party_button}
                onClick={(event) => handleGoogleSignIn(event)}
                // disabled
              >
                <Grid item xs={8} lg={6}>
                  <img
                    src={googleLogo}
                    alt="googleLogo"
                    className={classes.googleLogo}
                  />
                </Grid>

                <Grid item xs={12} marginRight="3rem">
                  Google Sign in
                </Grid>
              </Button>
            </Grid>
            <Grid
              item
              xs={10}
              lg={10}
              container
              justifyContent="center"
              alignItems="center"
              marginTop="2rem"
            >
              <Button
                type="submit"
                variant="outlined"
                disabled
                className={classes.third_party_button}
              >
                <Grid item xs={8} lg={6}>
                  <img
                    src={facebookLogo}
                    alt="facebookLogo"
                    className={classes.facebookLogo}
                  />
                </Grid>

                <Grid item xs={12} marginRight="3rem">
                  Facebook Sign in
                </Grid>
              </Button>
            </Grid> */}

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
          </Box>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Typography variant="title1">
            <b> 还没有账户？</b>
          </Typography>
          <Button
            size="large"
            onClick={handleClose}
            autoFocus
            component={Link}
            to="/signUp"
          >
            去注册
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
