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
import { CircularProgress } from "@mui/material";

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
    marginTop: theme.spacing(8),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  register_button: {
    marginLeft: theme.spacing(3),
    marginTop: "2rem",
    marginBottom: "2rem",
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(
    (state) => state.userAuth.isAuthenticated
  );
  const [accountCreated, setAccountCreated] = useState(false);
  const [loadingState, setLoadingState] = useState();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSignUp = async () => {
    const { username, password, email } = formData;
    setLoadingState("loading");
    const response = await dispatch(signUp(username, password, email)); 
    if (response.result) {      
      setAccountCreated(true);    
    } else {
      alert(response.error.message);     
      setLoadingState("stop_loading")
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
        {loadingState === "stop_loading"}
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
                error={formData.username=== ""} // if input is empty
                helperText={formData.username === "" ? 'Empty field!' : ' '}
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
                error={formData.email=== ""}
                helperText={formData.email === "" ? 'Empty field!' : ' '}
                // error={formData.email.indexOf("@")}
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
                error={formData.password === "" } // if input is empty. || formData.password.length < 6
                helperText={formData.password === "" ? 'Empty field!' : ' ' } // || formData.password < 6 ? 'Length less than 6!' : '' 
                onChange={(event) => onChange(event)}
              />
            </Grid>
          </Grid>
          <Grid className={classes.register_button}>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              className={classes.submit}
              onClick={onSignUp}    
              disabled={loadingState ===  "loading"}        
            >
              注册   
              {/* 但是如果都是空的话，loading动画不会出现，不知道为啥 */}
              {loadingState === "loading" ? <CircularProgress size="1.5rem"/> : " "}
            </Button>            
          </Grid>
        </form>
      </div>
    </Container>
  );
}
