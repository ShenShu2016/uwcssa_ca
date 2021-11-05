import ArticleDetail from "./ArticleDetail";
import ArticleList from "../../components/Article/ArticleList";
import { Box } from "@mui/material";
import React from "react";
import { Route } from "react-router";

export default function Article() {
  return (
    <Box>
      <Route exact path="/article" component={ArticleList} />
      <Route path="/article/:articleID" component={ArticleDetail} />
    </Box>
  );
}
