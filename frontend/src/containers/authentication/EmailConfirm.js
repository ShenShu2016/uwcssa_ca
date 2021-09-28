import { Avatar, Grid, TextField, Typography } from "@material-ui/core";
import { Button, Container } from "@material-ui/core";
import React, { useState } from "react";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { emailConfirm } from "../../redux/actions/authActions";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const EmailConfirm = ({ emailConfirm }) => {
  const [emailConfirmed, setEmailConfirmed] = useState(false);
  const { username } = useParams();
  const classes = useStyles();
  const [formData, setFormData] = useState({
    username: username,
    authenticationCode: "",
  });
  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };
  const confirmSignUp = async () => {
    const { username, authenticationCode } = formData;
    const response = await emailConfirm(username, authenticationCode);

    if (response.result) {
      setEmailConfirmed(true);
    } else {
      console.log(response);
      alert(response.error.message);
    }
  };

  if (emailConfirmed) {
    return <Redirect to="/signIn" />;
  }
  // 这里还需要fetch邮箱地址
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
          <Grid className={classes.register_button}>
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
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.userAuth.isAuthenticated,
});

export default connect(mapStateToProps, { emailConfirm })(EmailConfirm);
