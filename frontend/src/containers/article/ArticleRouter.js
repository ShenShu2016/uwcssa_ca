import React, { Fragment, useEffect } from "react";
import { Route, Switch } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import ArticleDetail from "./ArticleDetail";
import ArticleList from "../../components/Article/ArticleList";
import { Box } from "@mui/material";
import CustomBreadcrumbs from "../../components/CustomMUI/CustomBreadcrumbs";
import Footer from "../Footer";
import { fetchArticles } from "../../redux/slice/articleSlice";
import { fetchUwcssaJobs } from "../../redux/slice/uwcssaJobSlice";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    marginTop: "1rem",
    maxWidth: "1536px",
    paddingInline: "3rem",
    [theme.breakpoints.down("sm")]: {
      paddingInline: "0.5rem",
      width: "100vw",
    },
  },
}));

export default function ArticleRouter() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { fetchArticlesStatus } = useSelector((state) => state.article);
  const { fetchUwcssaJobsStatus } = useSelector((state) => state.uwcssaJob);

  useEffect(() => {
    if (fetchArticlesStatus === "idle" || undefined) {
      dispatch(fetchArticles());
    }
    if (fetchUwcssaJobsStatus === "idle" || undefined) {
      dispatch(fetchUwcssaJobs());
    }
  }, [dispatch, fetchArticlesStatus, fetchUwcssaJobsStatus]);

  return (
    <Fragment>
      <Box className={classes.root}>
        <CustomBreadcrumbs />
        <Switch>
          <Route exact path="/article" component={ArticleList} />
          <Route path="/article/:id" component={ArticleDetail} />
        </Switch>
      </Box>
      <Footer />
    </Fragment>
  );
}
