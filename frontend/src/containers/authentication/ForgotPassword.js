import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";

import { forgotPassword } from "../../redux/reducers/authSlice";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useTitle } from "../../Hooks/useTitle";

const useStyles = makeStyles((theme) => ({
  mainBackground: {
    backgroundColor: "#fff",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  webTitle: {
    width: 700,
    minWidth: "40%",
    maxWidth: "100%",
    textAlign: "center",
    marginTop: "4rem",
  },

  instruction: {
    minWidth: "40%",
    maxWidth: "100%",
    textAlign: "center",
    marginTop: "4rem",
    marginBottom: "10rem",
  },

  form: {
    margin: "auto",
    width: 300,
  },

  button: {
    marginTop: "5rem",
  },
}));

export default function ForgotPassword() {
  const classes = useStyles();
  useTitle("忘记密码");
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(); //logging state
  const [errorMessage, setErrorMessage] = useState(null);

  const timer = useRef();
  const [formData, setFormData] = useState({
    username: "",
  });

  const { username } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!loading) {
      // console.log("setLoading(loading)", loading);
      setLoading(true); //开始转圈
      const response = await dispatch(forgotPassword({ username }));
      if (response.meta.requestStatus === "fulfilled") {
        timer.current = window.setTimeout(() => {
          setLoading(false);
          console.log("response", response);
          history.push(`/resetPassword/${username}`);
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
    <div>
      <Box className={classes.mainBackground}>
        <Box className={classes.webTitle}>
          <Typography variant="h3">忘记密码</Typography>
          <Typography variant="body1" className={classes.instruction}>
            请输入你的注册邮箱，稍后我们将发送链接。
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={(e) => onSubmit(e)}
          >
            <TextField
              variant="standard"
              margin="normal"
              required
              id="username"
              label="用户名"
              name="username"
              fullWidth
              autoFocus
              error={errorMessage ? true : false}
              helperText={errorMessage}
              value={username}
              onChange={(e) => onChange(e)}
            />
            <Button
              className={classes.button}
              type="submit"
              variant="outlined"
              color="primary"
              disabled={loading}
            >
              提交
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
          </form>
        </Box>
      </Box>
    </div>
  );
}
