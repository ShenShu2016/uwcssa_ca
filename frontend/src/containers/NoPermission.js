import { Box, ButtonGroup } from "@mui/material";
import { Button, Typography } from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import React, { Fragment, useEffect } from "react";

import Footer from "./Footer";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#F3F2EF",
    textAlign: "center",
    // margin: "4rem auto",
    maxWidth: "100%",
    height: "75%",
    paddingInline: "2rem",
    // color: "#0D1F48",
  },
}));

export default function NoPermission() {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    let timeout = setTimeout(() => {
      history.replace("/");
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [history]);

  return (
    <Fragment>
      <Box className={classes.root}>
        <Box sx={{ my: "2rem" }}>
          <img
            src="https://textcaseconvert.com/blog/wp-content/uploads/2020/08/ohno.gif"
            alt="你没有权限哦"
            width="50%"
          />
        </Box>
        <Box sx={{ my: "2rem" }}>
          <Typography variant="h5" gutterBottom>
            权限不足 获取权限请加入UWCSSA学生会
          </Typography>
          <Typography variant="h6">10秒后将自动转到主页...</Typography>
        </Box>
        <Box sx={{ my: "2rem" }}>
          <ButtonGroup variant="text">
            <Button component={Link} to="/">
              点击返回主页
            </Button>
            <Button component={Link} to="/career">
              加入我们获取权限
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
      <Footer />
    </Fragment>
  );
}
