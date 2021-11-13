import { Route, Switch } from "react-router";

import ArticleDetail from "./ArticleDetail";
import ArticleList from "../../components/Article/ArticleList";
import { Box } from "@mui/material";
import Footer from "../Footer";
import React from "react";

export default function Article() {
  return (
    <Box>
      <Switch>
        <Route exact path="/article" component={ArticleList} />
        <Route path="/article/:articleID" component={ArticleDetail} />
      </Switch>
      <Footer />
    </Box>
  );
}
