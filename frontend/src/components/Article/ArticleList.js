import { Box, Skeleton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ArticleComponent from "../../components/Article/ArticleComponent";
import ArticleSideBar from "../../components/Article/ArticleSideBar";
import { fetchArticles } from "../../redux/reducers/articleSlice";
import { makeStyles } from "@mui/styles";
import { useTitle } from "../../Hooks/useTitle";

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
  main: {
    display: "flex",
    [theme.breakpoints.down("lg")]: {
      display: "block",
    },
  },
  body: {
    width: "1100px",
    [theme.breakpoints.down("lg")]: {
      maxWidth: "100%",
    },
  },
  title: {
    textAlign: "center",
    color: "#0D1F48",
    paddingBottom: "3rem",
  },
}));

export default function ArticleList() {
  useTitle("近期新闻");

  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  const { articles } = useSelector((state) => state.article);

  const renderList = articles.map((article) => {
    return <ArticleComponent article={article} key={article.id} />;
  });
  // console.log("renderList", renderList);
  const skeletonList = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((num) => {
    return (
      <Box key={num}>
        <Skeleton variant="rectangular" height={200} sx={{ my: 1 }} />
      </Box>
    );
  });
  return (
    <Box className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        近期新闻
      </Typography>
      <Box className={classes.main}>
        <Box className={classes.body}>
          {articles.length > 0 ? renderList : skeletonList}
        </Box>
        <Box>
          <ArticleSideBar />
        </Box>
      </Box>
    </Box>
  );
}
