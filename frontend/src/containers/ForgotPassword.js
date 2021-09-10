import React, { useState } from "react";
import { Box, Typography,TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";


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

  form : {
    width: "auto",
    margin: "auto",
    width: 300,
  },

  button : {
    marginTop : "5rem",
  }
}));

export default function ForgotPassword() {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    email: "",
  });

  const { email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
  };


  return (
    <div>
      <Box className={classes.mainBackground}>
        <Box className={classes.webTitle}>
          <Typography variant="h3">
            忘记密码
          </Typography>
          <Typography variant="body1" className={classes.instruction}>
            请输入你的注册邮箱，稍后我们将发送链接。
          </Typography>
          <form className={classes.form} noValidate onSubmit={(e) => onSubmit(e)}>
            <TextField
              variant="standard"
              margin="normal"
              required
              id="email"
              label="邮箱"
              name="email"
              fullWidth
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => onChange(e)}
            />
            <Button className={classes.button}
              type="submit"
              variant="outlined"
              color="primary"
              component={Link}
              to="/resetpassword"
            >
            提交
            </Button>
          </form>
        </Box>
      </Box>
    </div>
  );
}
