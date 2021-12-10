import { Box, Button, ButtonGroup, Typography } from "@mui/material";

import Footer from "./Footer";
import { Link } from "react-router-dom";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#F3F2EF",
    textAlign: "center",
    // margin: "4rem auto",
    maxWidth: "960px",
    paddingInline: "1rem",
    // color: "#0D1F48",
  },
}));

export default function NoPermission() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box sx={{ my: "2rem" }}>
        <img
          src="https://textcaseconvert.com/blog/wp-content/uploads/2020/08/ohno.gif"
          alt="你没有权限哦"
          width="50%"
        />
      </Box>
      <Box sx={{ my: "2rem" }}>
        <Typography variant="h5">
          权限不足 获取权限请加入UWCSSA学生会
        </Typography>
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
      <Footer />
    </Box>
  );
}
