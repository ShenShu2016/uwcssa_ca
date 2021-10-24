import { Paper } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "1rem",
    padding: "0.5rem",
    // minHeight: "500px",
    position: "sticky",
    width: "310px",
    top: "8rem",
    [theme.breakpoints.down("lg")]: {
      position: "relative",
      top: "0",
      width: "100%",
      margin: "1rem auto",
      padding: "1rem",
      // maxHeight: "255px",
      borderRadius: "8px",
      border: "1px solid #dfe1e5",
    },
  },
}));

function ArticleSideBar() {
  const classes = useStyles();
  return (
    <Paper variant="outlined" className={classes.root}>
      我里面要放点广告拉我里面要放点广告拉我里面要放点广告拉我里面要放点广告拉我里面要放点广告拉我里面要放点广告拉
    </Paper>
  );
}

export default ArticleSideBar;
