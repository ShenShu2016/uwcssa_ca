import React, { useState } from "react";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Redirect } from "react-router";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { signUp } from "../redux/actions/authActions";

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

const Register = ({ signUp, isAuthenticated }) => {
  const classes = useStyles();
  const [accountCreated, setAccountCreated] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };

  const onSignUp = async () => {
    const { username, password } = formData;
    signUp(username, password);
    setAccountCreated(true);
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  if (accountCreated) {
    return <Redirect to="/EmailConfirm" />;
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
          <Link href="/login">登入</Link>
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                name="username"
                label="Email"
                type="email"
                id="username"
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
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.userAuth.isAuthenticated,
});

export default connect(mapStateToProps, { signUp })(Register);
