import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ArticleComponent from "../components/Article/ArticleComponent";
import { makeStyles } from "@mui/styles";
import { setArticles } from "../redux/actions/articleActions";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    marginTop: "4rem",
    maxWidth: "960px",
    paddingInline: "0.5rem",
  },
  title: {
    textAlign: "center",
    color: "#0D1F48",
    paddingBottom: "3rem",
  },
}));

export default function ArticleListing() {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    document.title = "近期新闻";
    dispatch(setArticles());
  }, [dispatch]);

  const articles = useSelector((state) => state.allArticles.articles);

  const renderList = articles.map((article) => {
    return <ArticleComponent article={article} key={article.id} />;
  });
  console.log("articles", articles);
  return (
    <Box className={classes.root}>
      <Box>
        <Typography variant="h3" className={classes.title}>
          近期新闻
        </Typography>
        {renderList}
      </Box>
    </Box>
  );
}
