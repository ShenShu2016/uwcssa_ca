import { Box, Skeleton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ArticleComponent from "../../components/Article/ArticleComponent";
import ArticleSideBar from "../../components/Article/ArticleSideBar";
import { fetchArticles } from "../../redux/reducers/articleSlice";
import { makeStyles } from "@mui/styles";
import { useTitle } from "../../Hooks/useTitle";

const useStyles = makeStyles((theme) => ({
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
  useTitle("UWCSSA近期新闻");
  const dispatch = useDispatch();
  const classes = useStyles();
  const { articles, fetchArticlesStatus } = useSelector(
    (state) => state.article
  );

  useEffect(() => {
    if (fetchArticlesStatus === "idle" || undefined) {
      dispatch(fetchArticles());
    }
  }, [dispatch, fetchArticlesStatus]);

  const renderList = articles.map((article) => {
    return <ArticleComponent article={article} key={article.id} />;
  });
  // console.log("renderList", renderList);
  const skeletonList = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((num) => {
    return (
      <Box key={num}>
        <Skeleton variant="text" />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" height={100} sx={{ my: 1 }} />
      </Box>
    );
  });
  return (
    <Box>
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
