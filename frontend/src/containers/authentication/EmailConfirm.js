import {
  Avatar,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { emailConfirm } from "../../redux/reducers/authSlice";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useParams } from "react-router";
import { useTitle } from "../../Hooks/useTitle";

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
  const [loading, setLoading] = useState(); //logging state
  const [errorMessage, setErrorMessage] = useState(null);
  const timer = useRef();
  useTitle("验证邮箱");
  const { username } = useParams();
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: username,
    authenticationCode: "",
  });
  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const confirmSignUp = async () => {
    const { username, authenticationCode } = formData;
    if (!loading) {
      // console.log("setLoading(loading)", loading);
      setLoading(true); //开始转圈
      const response = await dispatch(
        emailConfirm({ username, authenticationCode })
      );
      if (response.meta.requestStatus === "fulfilled") {
        timer.current = window.setTimeout(() => {
          setLoading(false);
          console.log("response", response);
          history.push(`/signIn`);
        }, 1000);
      } else {
        timer.current = window.setTimeout(() => {
          setLoading(false);
          console.log(response.response.error.message);
          setErrorMessage(response.response.error.message);
        }, 1000);
      }
    }
  };

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
                error={errorMessage ? true : false}
                helperText={errorMessage}
                value={username}
                disabled={loading}
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
                error={errorMessage ? true : false}
                helperText={errorMessage}
                disabled={loading}
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
        </form>
      </div>
    </Container>
  );
}
