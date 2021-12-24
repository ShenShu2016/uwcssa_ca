import React, { Fragment } from "react";
import { Route, Switch } from "react-router";

import ArticleDetail from "./ArticleDetail";
import ArticleList from "../../components/Article/ArticleList";
import BottomNav from "../BottomNav";
import { Box } from "@mui/material";
import CustomBreadcrumbs from "../../components/CustomMUI/CustomBreadcrumbs";
import Footer from "../Footer";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    marginTop: "4rem",
    maxWidth: "1536px",
    paddingInline: "3rem",
    [theme.breakpoints.down("sm")]: {
      paddingInline: "0.5rem",
    },
  },
}));
export default function ArticleRouter() {
  const classes = useStyles();
  return (
    <Fragment>
      <Box className={classes.root}>
        <CustomBreadcrumbs />
        <Switch>
          <Route exact path="/article" component={ArticleList} />
          <Route path="/article/:articleID" component={ArticleDetail} />
        </Switch>
      </Box>
      <Footer />
      <BottomNav />
    </Fragment>
  );
}
