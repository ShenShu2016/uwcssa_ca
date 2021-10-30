import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";

import { forgotPassWordSubmit } from "../../redux/actions/authActions";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
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
    marginBottom: "8rem",
  },

  form: {
    margin: "auto",
    width: 300,
  },

  button: {
    marginTop: "5rem",
  },
}));

export default function ResetPassword() {
  const classes = useStyles();
  useTitle("重置密码");
  const dispatch = useDispatch();
  const timer = useRef();
  const { username } = useParams();
  const history = useHistory();
  const [loading, setLoading] = useState(); //logging state
  const [errorMessage, setErrorMessage] = useState(null);
  const [formData, setFormData] = useState({
    code: "",
    username: username,
    new_password: "",
  });

  const { code, new_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!loading) {
      // console.log("setLoading(loading)", loading);
      setLoading(true); //开始转圈
      const response = await dispatch(
        forgotPassWordSubmit(code, username, new_password)
      );
      if (response.result) {
        timer.current = window.setTimeout(() => {
          console.log(response);
          setLoading(false);
          console.log("response", response);
          history.push(`/signIn`);
        }, 1000);
      } else {
        timer.current = window.setTimeout(() => {
          setLoading(false);
          console.log(response);
          console.log(response.error.message);
          setErrorMessage(response.error.message);
        }, 1000);
      }
    }
  };

  return (
    <div>
      <Box className={classes.mainBackground}>
        <Box className={classes.webTitle}>
          <Typography variant="h4">重置密码</Typography>
          <Typography variant="h5">您的账号是：{username}</Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={(e) => onSubmit(e)}
          >
            <TextField
              variant="standard"
              margin="normal"
              required
              name="code"
              fullWidth
              label="验证码"
              id="code"
              error={errorMessage ? true : false}
              helperText={errorMessage}
              value={code}
              onChange={(e) => onChange(e)}
            />
            <TextField
              variant="standard"
              margin="normal"
              required
              name="new_password"
              fullWidth
              label="新的密码"
              type="password"
              id="new_password"
              error={errorMessage ? true : false}
              helperText={errorMessage}
              value={new_password}
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
