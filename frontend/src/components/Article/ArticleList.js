import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import {
  fetchArticles,
  selectAllArticles,
} from "../../redux/slice/articleSlice";
import { useDispatch, useSelector } from "react-redux";

import ArticleComponent from "../../components/Article/ArticleComponent";
import ArticleSideBar from "../../components/Article/ArticleSideBar";
import BackdropLoading from "../BackdropLoading";
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
  const classes = useStyles();
  const articles = useSelector(selectAllArticles);
  const dispatch = useDispatch();
  const { fetchArticlesStatus } = useSelector((state) => state.article);
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
          {articles.length > 0 ? renderList : <BackdropLoading />}
        </Box>
        <Box>
          <ArticleSideBar />
        </Box>
      </Box>
    </Box>
  );
}
