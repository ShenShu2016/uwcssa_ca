import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ArticleComponent from "../../components/Article/ArticleComponent";
import ArticleSideBar from "../../components/Article/ArticleSideBar";
import { fetchArticles } from "../../redux/slice/articleSlice";
import { makeStyles } from "@mui/styles";
import { useTitle } from "../../Hooks/useTitle";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    [theme.breakpoints.down("lg")]: {
      display: "block",
    },
  },
  // body: {
  //   width: "1100px",
  //   [theme.breakpoints.down("lg")]: {
  //     maxWidth: "100%",
  //   },
  // },
  title: {
    textAlign: "center",
    // color: "#0D1F48",
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

  return (
    <Box>
      <Typography variant="h3" className={classes.title}>
        近期新闻
      </Typography>
      <Box className={classes.main}>
        <Box className={classes.body}>
          {articles.length > 0 ? (
            renderList
          ) : (
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={true}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          )}
        </Box>
        <Box>
          <ArticleSideBar />
        </Box>
      </Box>
    </Box>
  );
}
