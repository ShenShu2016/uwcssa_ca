import React, { useState } from "react";
import { Box, Typography,TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";


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

  form : {
    margin: "auto",
    width: 300,
  },

  button : {
    marginTop : "5rem",
  }
}));

export default function ResetPassword() {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    password: "",
  });

  const {password } = formData;

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
            重置密码
          </Typography>
          <Typography variant="body1" className={classes.instruction}>
            请输入你的新密码两次，以便我们验证你输入的密码是否正确。
          </Typography>
          <form className={classes.form} noValidate onSubmit={(e) => onSubmit(e)}>
            <TextField
              variant="standard"
              margin="normal"
              required
              name="password"
              fullWidth
              label="密码"
              type="password"
              id="password"
              value={password}
              onChange={(e) => onChange(e)}
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
              value={password}
              onChange={(e) => onChange(e)}
            />
            <Button className={classes.button}
              type="submit"
              variant="outlined"
              color="primary"
              component={Link}
              to="/login"
            >
            提交
            </Button>
          </form>
        </Box>
      </Box>
    </div>
  );
}
