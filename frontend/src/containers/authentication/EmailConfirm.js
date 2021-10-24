import {
  Avatar,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Redirect } from "react-router";
import { emailConfirm } from "../../redux/actions/authActions";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));
export default function EmailConfirm() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [emailConfirmed, setEmailConfirmed] = useState(false);
  const { username } = useParams();

  const [formData, setFormData] = useState({
    username: username,
    authenticationCode: "",
  });
  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const confirmSignUp = async () => {
    const { username, authenticationCode } = formData;
    const response = await dispatch(emailConfirm(username, authenticationCode));

    if (response.result) {
      setEmailConfirmed(true);
    } else {
      alert(response.error.message);
    }
  };

  if (emailConfirmed) {
    return <Redirect to="/signIn" />;
  }

  return (
    <Container>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">验证</Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="username "
                label="用户名"
                name="username"
                autoComplete="username"
                value={username}
                onChange={(event) => onChange(event)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                name="authenticationCode"
                label="验证码"
                id="authenticationCode"
                onChange={(event) => onChange(event)}
              />
            </Grid>
          </Grid>
          <Grid marginTop="2rem">
            <Button
              variant="outlined"
              color="primary"
              className={classes.submit}
              onClick={confirmSignUp}
            >
              Confirm Sign Up
            </Button>
          </Grid>
        </form>
      </div>
    </Container>
  );
}