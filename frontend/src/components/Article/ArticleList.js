import { Box, Typography } from "@mui/material";

import ArticleComponent from "../../components/Article/ArticleComponent";
import ArticleSideBar from "../../components/Article/ArticleSideBar";
import BackdropLoading from "../BackdropLoading";
import React from "react";
import { makeStyles } from "@mui/styles";
import { selectAllArticles } from "../../redux/slice/articleSlice";
import { useSelector } from "react-redux";
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
