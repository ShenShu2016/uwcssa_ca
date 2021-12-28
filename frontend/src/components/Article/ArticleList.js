import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ArticleComponent from "../../components/Article/ArticleComponent";
import ArticleSideBar from "../../components/Article/ArticleSideBar";
import { fetchArticles } from "../../redux/slice/articleSlice";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@emotion/react";
import { useTitle } from "../../Hooks/useTitle";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    [theme.breakpoints.down("lg")]: {
      display: "block",
    },
  },
  title: {
    textAlign: "center",
    paddingBottom: "1rem",
  },
}));

export default function ArticleList() {
  useTitle("UWCSSA近期新闻");
  const theme = useTheme();
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
      <Typography
        variant="h3"
        className={classes.title}
        sx={{
          [theme.breakpoints.down("sm")]: {
            fontSize: "30px",
          },
        }}
      >
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
