import ArticleSideBarAD from "../AdSense/ArticleSideBarAD";
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
    textAlign: "center",
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
      <img
        src="https://media-exp1.licdn.com/dms/image/C5603AQHwt3NgA8rYHw/profile-displayphoto-shrink_200_200/0/1616353723146?e=1640822400&v=beta&t=wzrF9eUlq7YnsTg-1cpH4LrYXm2oCCOHHHp0ac1hmgM"
        alt="作者"
      />
      <ArticleSideBarAD />
    </Paper>
  );
}

export default ArticleSideBar;
