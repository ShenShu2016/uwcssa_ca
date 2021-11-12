import { Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { setURLFrom } from "../../redux/reducers/generalSlice";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles({
  content: {
    paddingBlock: "3rem",
    textAlign: "center",
    backgroundColor: "#f4f4f4",
  },
  button: {
    marginTop: "3rem",
  },
});

const SignInRequest = () => {
  const classes = useStyles();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setURLFrom({ location }));
    // console.log("location,", location);
  }, [dispatch, location]);

  return (
    <Container className={classes.content}>
      <Typography variant="subtitle1" align="center">
        *任何人都可以阅读
        评论区内容，但如果要添加或者回复评论，你必须是uwcssa的注册用户。如果你还没有账户，你可以现在就创建一个（免费）。
      </Typography>
      <Grid container className={classes.button}>
        <Grid item xs={6} sm={6}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/signIn"
          >
            登入
          </Button>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/signUp"
          >
            注册
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignInRequest;
