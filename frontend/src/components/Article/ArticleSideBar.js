import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";

import ArticleSideBarAD from "../AdSense/ArticleSideBarAD";
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
      {/* <img
        src="https://uwcssabucket53243-master.s3.us-east-2.amazonaws.com/public/no_pic.png"
        alt="作者"
        style={{ width: "100%" }}
      /> */}
      <Typography variant="h4" color="error">
        招收实习生！
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="JavaScript 开发"
            primaryTypographyProps={{
              fontSize: 18,
              fontWeight: "medium",
              color: "primary",
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="测试工程师"
            primaryTypographyProps={{
              fontSize: 18,
              fontWeight: "medium",
              color: "primary",
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="项目经理"
            primaryTypographyProps={{
              fontSize: 18,
              fontWeight: "medium",
              color: "primary",
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Business Analyst"
            primaryTypographyProps={{
              fontSize: 18,
              fontWeight: "medium",
              color: "primary",
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Data Analyst"
            primaryTypographyProps={{
              fontSize: 18,
              fontWeight: "medium",
              color: "primary",
            }}
          />
        </ListItem>
      </List>
      <ArticleSideBarAD />
    </Paper>
  );
}

export default ArticleSideBar;
