import {
  Avatar,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Redirect } from "react-router";
import { makeStyles } from "@mui/styles";
import { signUp } from "../../redux/actions/authActions";

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
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(8),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  register_button: {
    marginLeft: theme.spacing(3),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state.userAuth.isAuthenticated
  );
  const [accountCreated, setAccountCreated] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };

  const onSignUp = async () => {
    const { username, password, email } = formData;
    const response = await dispatch(signUp(username, password, email));
    if (response.result) {
      setAccountCreated(true);
    } else {
      console.log(response);
      alert(response.error.message);
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  if (accountCreated) {
    return <Redirect to={`/emailConfirm/${formData.username}`} />;
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">注册</Typography>
        <Typography>
          已经有账户了？
          <Link to="/signIn">登入</Link>
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                name="username"
                label="用户名"
                type="username"
                id="username"
                autoComplete="username"
                onChange={(event) => onChange(event)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                name="email"
                label="Email"
                type="email"
                id="email"
                autoComplete="email"
                onChange={(event) => onChange(event)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                name="password"
                label="输入密码"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(event) => onChange(event)}
              />
            </Grid>
          </Grid>
          <Grid className={classes.register_button}>
            <Button
              variant="outlined"
              color="primary"
              className={classes.submit}
              onClick={onSignUp}
            >
              注册
            </Button>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
